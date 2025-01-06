import { useContext, useState } from "react";
import Form from "../../components/Form/Index";
import styles from "./NuevoVideo.module.css";
import MainContext from "../../contexts/MainContext";
import { ToastContainer, toast } from "react-toastify";

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
        notifySuccess();
        return true;
      })
      .catch((error) => {
        notifyError();
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
