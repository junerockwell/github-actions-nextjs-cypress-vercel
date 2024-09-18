"use client";
import { useState } from "react";
import Alert from "./components/Alert";
import ModalForm from "./components/ModalForm";

export default function Home() {
  const [openAlert, setOpenAlert] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);

  function formSubmit(submitted: boolean) {
    setOpenModalForm(false);

    if (submitted) {
      setOpenAlert(true);
    }
  }

  return (
    <div className="flex flex-col w-11/12 max-w-7xl mx-auto m-6">
      <button
        className="btn btn-primary w-6/12 self-center mb-10"
        onClick={() => setOpenModalForm(true)}
      >
        Launch Modal
      </button>

      <Alert show={openAlert} onClose={() => setOpenAlert(false)} />
      <ModalForm open={openModalForm} onClose={formSubmit} />
    </div>
  );
}
