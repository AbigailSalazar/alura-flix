import { useContext, useEffect, useState } from "react";
import styles from "./ModalEdit.module.css";
import MainContext from "../../contexts/MainContext";
import Form from "../Form/Index";
import { toast, ToastContainer } from "react-toastify";

function ModalEdit() {
  const { setVideoToEdit, videos, setVideos, videoToEdit } =
    useContext(MainContext);

  const notifySuccess = () =>
    toast.success("Guardado correctamente!", {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
    });

  const notifyError = () =>
    toast.error("Ha ocurrido un error!", {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
    });

  const sendData = () => {
    let dataToSend = videoToEdit;
    dataToSend.categoryId = Number(dataToSend.categoryId);

    fetch(`https://aluraflix-api-dun.vercel.app/videos/${videoToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        const nuevosVideos = videos.map((oldVideo) => {
          if (data.id == oldVideo.id) {
            return data;
          }
          return oldVideo;
        });
        console.log("Video editado", data);
        setVideos(nuevosVideos);
        notifySuccess();
        return true;
      })
      .catch((error) => {
        notifyError();
      });
  };

  return (
    <>
      {videoToEdit != null && (
        <dialog open={true} className={styles.container}>
          <div className={styles.modal}>
            <button
              className={styles.close_button}
              onClick={() => {
                setVideoToEdit(null);
              }}
            >
              <img src="src/assets/cross.svg" alt="Cerrar" />
            </button>
            <h2 className={styles.title}>EDITAR CARD</h2>
            <Form
              styles={styles}
              formValues={videoToEdit}
              setFormValues={setVideoToEdit}
              onSubmit={sendData}
            />
          </div>
          <ToastContainer></ToastContainer>
        </dialog>
      )}
    </>
  );
}

export default ModalEdit;
