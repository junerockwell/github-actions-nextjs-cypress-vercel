"use client";

import { useState, useRef, useEffect, SyntheticEvent } from "react";

type ModalFormType = {
  open: boolean;
  onClose: (submitted: boolean) => void;
};
export default function ModalForm(props: ModalFormType) {
  const { open, onClose } = props;
  const modalRef = useRef<HTMLDialogElement>(null);

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
    >
      <div className="modal-box">
        <header className="flex justify-between mb-5">
          <h3 className="text-lg font-bold">Hello!</h3>
          <button
            className="btn btn-sm btn-circle btn-outline"
            onClick={() => handleClose(false)}
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
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog" className="w-full">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full mb-4"
            />

            <textarea
              className="textarea textarea-bordered mb-4"
              placeholder="Message"
            ></textarea>

            <div className="form-control mb-4">
              <label className="cursor-pointer label justify-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info mr-2"
                />
                <span className="label-text">Check me!</span>
              </label>
            </div>

            <select className="select select-bordered w-full mb-4">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>

            <div className="form-control mb-4">
              <label className="label cursor-pointer justify-start">
                <input type="checkbox" className="toggle mr-2" defaultChecked />
                <span className="label-text">Turn Off / On</span>
              </label>
            </div>

            <div className="form-control">
              <p>Which Topo Chico:</p>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500 mr-2"
                  defaultChecked
                />
                <span className="label-text">Regular</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 mr-2"
                  defaultChecked
                />
                <span className="label-text">Lime</span>
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="label cursor-pointer justify-start">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500 mr-2"
                  defaultChecked
                />
                <span className="label-text">Blueberry</span>
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleClose(true)}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
