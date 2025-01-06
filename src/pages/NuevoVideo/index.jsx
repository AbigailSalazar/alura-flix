import { useContext, useState } from "react";
import Form from "../../components/Form/Index";
import styles from "./NuevoVideo.module.css";
import MainContext from "../../contexts/MainContext";

function NuevoVideo() {
  const { categories, setCategories } = useContext(MainContext);
  const [formValues, setFormValues] = useState({
    id: 0,
    titulo: "",
    categoria: 0,
    video: "",
    thumbnail: "",
    descripcion: "",
  });

  const sendData = () => {
    const newData = categories.map((category) => {
      if (category.id === Number(formValues.categoria)) {
        return {
          ...category,
          videos: [
            ...category.videos,
            { ...formValues, id: category.videos.length }, // Agrega el nuevo video
          ],
        };
      }
      return category;
    });
    setCategories(newData);
    console.log(newData);
    fetch(
      "https://my-json-server.typicode.com/AbigailSalazar/AluraFlixAPI/categories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
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
