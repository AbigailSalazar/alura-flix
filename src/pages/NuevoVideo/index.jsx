import { useContext, useState } from "react";
import Form from "../../components/Form/Index";
import styles from "./NuevoVideo.module.css";
import MainContext from "../../contexts/MainContext";

function NuevoVideo() {
  const { videos, setVideos } = useContext(MainContext);
  const [formValues, setFormValues] = useState({
    id: 0,
    titulo: "",
    categoria: 0,
    video: "",
    thumbnail: "",
    descripcion: "",
  });

  const sendData = () => {
    const data = {
      id: videos.length + 1,
      title: formValues.titulo,
      categoryId: formValues.categoria,
      url: formValues.video,
      thumbnail: formValues.thumbnail,
      description: formValues.descripcion,
    };

    console.log(videos);

    fetch("https://aluraflix-api-dun.vercel.app/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setVideos([...videos, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
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
      </div>
    </section>
  );
}

export default NuevoVideo;
