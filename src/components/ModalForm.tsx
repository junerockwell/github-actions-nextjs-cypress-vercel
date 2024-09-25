"use client";

import { useState, useRef, useEffect, SyntheticEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormErrorText from "./FormErrorText/FormErrorText";

type ModalFormType = {
  open: boolean;
  onClose: (submitted: boolean) => void;
};

enum CharacterSelectEnum {
  Snoopy = "Snoopy",
  HelloKitty = "Hello Kitty",
  BugsBunny = "Bugs Bunny",
}

interface IFormInput {
  name: string;
  email: string;
  description: string;
  checkMe: boolean;
  selectOne: CharacterSelectEnum;
  switch: boolean;
  topoChicoFlavor: string;
}

export default function ModalForm(props: ModalFormType) {
  const { open, onClose } = props;
  const modalRef = useRef<HTMLDialogElement>(null);
  const {
    register,
    formState: { errors, isDirty, isValid },
    reset,
    handleSubmit,
  } = useForm<IFormInput>({ mode: "all" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(data: IFormInput): void | SubmitHandler<IFormInput> {
    // e.target.reset();
    setIsSubmitting(true);
    setTimeout(() => {
      reset();
      console.log("onSubmit() ", data);
      handleClose(true);
      setIsSubmitting(false);
    }, 1000);
  }

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    open ? modalRef.current.showModal() : modalRef.current.close();
  }, [open]);

  const handleClose = (submitted: boolean) => {
    if (onClose) {
      onClose(submitted);
    }
  };

  const handleESC = (event: SyntheticEvent) => {
    event.preventDefault();
    handleClose(false);
  };

  return (
    <dialog
      ref={modalRef}
      id="modal-with-form"
      className="modal"
      onCancel={handleESC}
      data-test="modal-with-form"
    >
      <div className="modal-box">
        <header className="flex justify-between mb-5">
          <h3 className="text-lg font-bold">Hello!</h3>
          <button
            className="btn btn-sm btn-circle btn-outline"
            onClick={() => handleClose(false)}
            data-test="close-modal-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <p className="mb-4">Press ESC key or click the button below to close</p>
        <div className="">
          <form
            method="dialog"
            className="w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control mb-4">
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-full mb-2"
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
                data-test="name-field"
              />
              {errors.name && errors.name.type === "required" && (
                <FormErrorText
                  text="Name is required"
                  cypressId="name-field-required-error"
                />
              )}
              {errors.name && errors.name.type === "minLength" && (
                <FormErrorText
                  text="Min length is 2"
                  cypressId="name-field-minlen-error"
                />
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <FormErrorText
                  text="Max length 20 exceeded"
                  cypressId="name-field-maxlen-error"
                />
              )}
            </div>
            <div className="form-control mb-4">
              <input
                type="email"
                placeholder="username@domain.com"
                className="input input-bordered w-full mb-2"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
                data-test="email-field"
              />
              {errors.email && (
                <FormErrorText
                  text="Email is required"
                  cypressId="email-field-error"
                />
              )}
            </div>

            <div className="form-control mb-3">
              <textarea
                className="textarea textarea-bordered w-full mb-2"
                placeholder="Message"
                {...register("description", {
                  required: true,
                  minLength: 3,
                })}
              ></textarea>
              {errors.description && (
                <FormErrorText
                  text="Description is required"
                  cypressId="description-field-require-error"
                />
              )}
              {errors.description &&
                errors.description.type === "minLength" && (
                  <FormErrorText
                    text="Min 3 chars long"
                    cypressId="description-field-minlen-error"
                  />
                )}
            </div>

            <div className="form-control mb-4">
              <label
                className="cursor-pointer label justify-start px-0"
                data-test="checkMe-field"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-info mr-2"
                  {...register("checkMe")}
                />
                <span className="label-text">Check me!</span>
              </label>
            </div>

            <div className="form-control mb-4">
              <p className="mb-1">Who shot first?:</p>

              <select
                className="select select-bordered w-full mb-2"
                defaultValue=""
                {...register("selectOne", {
                  required: true,
                })}
              >
                <option value="" disabled>
                  No character selected
                </option>
                <option value={`${CharacterSelectEnum.Snoopy}`}>
                  {CharacterSelectEnum.Snoopy}
                </option>
                <option value={`${CharacterSelectEnum.HelloKitty}`}>
                  {CharacterSelectEnum.HelloKitty}
                </option>
                <option value={`${CharacterSelectEnum.BugsBunny}`}>
                  {CharacterSelectEnum.BugsBunny}
                </option>
              </select>
              {errors.description &&
                errors.description.type === "minLength" && (
                  <FormErrorText text="Min 3 chars long" />
                )}
            </div>

            <div className="form-control mb-4">
              <label className="label cursor-pointer justify-start px-0">
                <input
                  type="checkbox"
                  className="toggle toggle-warning mr-2"
                  defaultChecked
                  {...register("switch", {
                    required: true,
                  })}
                />
                <span className="label-text">Turn Off / On</span>
              </label>
              {errors.switch && <FormErrorText text="Required" />}
            </div>

            <div className="form-control mb-4">
              <p>
                Which Topo Chico:<span className="required-mark">*</span>
              </p>
              <label className="label cursor-pointer justify-start px-0">
                <input
                  type="radio"
                  className="radio checked:bg-red-500 mr-2"
                  // defaultChecked
                  value="regular"
                  {...register("topoChicoFlavor", {
                    required: true,
                  })}
                />
                <span className="label-text">Regular</span>
              </label>

              <label className="label cursor-pointer justify-start px-0">
                <input
                  type="radio"
                  className="radio checked:bg-green-500 mr-2"
                  value="lime"
                  {...register("topoChicoFlavor", {
                    required: true,
                  })}
                />
                <span className="label-text">Lime</span>
              </label>

              <label className="label cursor-pointer justify-start px-0">
                <input
                  type="radio"
                  className="radio checked:bg-blue-500 mr-2"
                  value="blueberry"
                  {...register("topoChicoFlavor", {
                    required: true,
                  })}
                />
                <span className="label-text">Blueberry</span>
              </label>

              {errors.topoChicoFlavor && <FormErrorText text="Required" />}
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full ${
                isSubmitting ? "btn-submitting" : ""
              }`}
              disabled={!isDirty || !isValid || isSubmitting}
            >
              {isSubmitting ? (
                <span>
                  Submitting
                  <span className="ml-1 loading loading-dots loading-xs"></span>
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
