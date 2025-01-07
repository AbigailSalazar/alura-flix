import { useContext, useState } from "react";
import styles from "./NuevoVideo.module.css";
import MainContext from "../../contexts/MainContext";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../../utils/Toast";
import Form from "../../components/Form";

function NuevoVideo() {
  const { videos, setVideos } = useContext(MainContext);
  const [formValues, setFormValues] = useState({
    id: 0,
    categoryId: 0,
    title: "",
    url: "",
    thumbnail: "",
    description: "",
  });

  const sendData = () => {
    let dataToSend = formValues;
    dataToSend.categoryId = Number(dataToSend.categoryId);
    fetch("https://aluraflix-api-dun.vercel.app/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setVideos([...videos, data]);
        showSuccessToast("Guardado correctamente!");
        return true;
      })
      .catch((error) => {
        showErrorToast(
          "Ha ocurrido un error en el servidor, intenta más tarde"
        );
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>NUEVO VIDEO</h1>
        <p className={styles.description}>
          COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
        </p>
        <h2 className={styles.subtitle}>Crear tarjeta</h2>
        <Form
          styles={styles}
          formValues={formValues}
          setFormValues={setFormValues}
          onSubmit={sendData}
        />
        <ToastContainer />
      </div>
    </section>
  );
}

export default NuevoVideo;
