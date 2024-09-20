"use client";
import { useState } from "react";
import Alert from "./components/Alert";
import ModalForm from "./components/ModalForm";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

type SubmitLogsType = {
  id: string;
  dateTime: string;
  show: boolean;
};
export default function Home() {
  // const [, setOpenAlert] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);
  const [submitLogs, setSubmitLogs] = useState<SubmitLogsType[]>([]);
  console.log(submitLogs);
  function formSubmit(submitted: boolean) {
    setOpenModalForm(false);

    if (submitted) {
      // setOpenAlert(true);
      const id = uuidv4();
      const dateTime = dayjs().format("MM/DD/YYYY h:mm:ss a");
      setSubmitLogs([...submitLogs, { id, dateTime, show: true }]);
    }
  }

  function closeOneAlert(id: string) {
    const newLogs = submitLogs.filter((x) => x.id !== id);
    setSubmitLogs(newLogs);
  }

  return (
    <div className="flex flex-col w-11/12 max-w-7xl mx-auto m-6">
      <button
        className="btn btn-primary w-6/12 self-center mb-10"
        onClick={() => setOpenModalForm(true)}
      >
        Launch Modal
      </button>

      {/* <Alert show={openAlert} onClose={() => setOpenAlert(false)} /> */}
      <div className="flex flex-col">
        {submitLogs.length > 0 &&
          submitLogs.map((log, key) => (
            <Alert
              key={key}
              text={`You submitted the form on ${log.dateTime}!`}
              className="mb-2"
              show={true}
              onClose={() => closeOneAlert(log.id)}
            />
          ))}
      </div>
      <ModalForm open={openModalForm} onClose={formSubmit} />
    </div>
  );
}
