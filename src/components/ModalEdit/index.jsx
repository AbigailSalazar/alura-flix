import { useContext, useEffect, useState } from "react";
import styles from "./ModalEdit.module.css";
import MainContext from "../../contexts/MainContext";
import Form from "../Form/";
import { toast, ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../../utils/Toast";

function ModalEdit() {
  const { setVideoToEdit, videos, setVideos, videoToEdit } =
    useContext(MainContext);

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
        showSuccessToast("Editado correctamente!");
        return true;
      })
      .catch((error) => {
        showErrorToast(
          "Ha ocurrido un error en el servidor, intenta más tarde"
        );
      });
  };

  const handleClose = () => {
    setVideoToEdit(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      {videoToEdit != null && (
        <dialog open={true} className={styles.container} onClick={handleClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close_button} onClick={handleClose}>
              <img src="assets/cross.svg" alt="Cerrar" />
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
