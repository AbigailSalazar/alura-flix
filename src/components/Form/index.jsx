import { useContext, useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";
import FormGroup from "../FormGourp";
import { toast } from "react-toastify";

function Form({ styles, formValues, setFormValues, onSubmit }) {
  const { categories } = useContext(MainContext);
  let invalidVideoUrl = false;

  const resetForm = () => {
    setFormValues({
      titulo: "",
      categoria: "",
      video: "",
      thumbnail: "",
      descripcion: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const notifyError = () =>
    toast.error("La url del video es invalida", {
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: false,
    });

  useEffect(() => {
    //Autogenera el link the la thumbnail del video
    const url = formValues.video;
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/shorts\/|embed\/))([\w-]{11})/;
    const match = url.match(regex);
    if (match) {
      const urlThumbnail = `https://img.youtube.com/vi/${match[1]}/sddefault.jpg`;
      setFormValues({
        ...formValues,
        ["thumbnail"]: urlThumbnail,
      });
      invalidVideoUrl = false;
    } else {
      invalidVideoUrl = true;
    }
  }, [formValues.video]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (invalidVideoUrl) {
      notifyError();
    } else {
      const success = await onSubmit();
      if (success) {
        resetForm();
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormGroup
        name="titulo"
        type="text"
        label="Titulo"
        placeholder="Título del video"
        color={"#262626"}
        handleChange={handleChange}
        required
        value={formValues.titulo}
      ></FormGroup>
      <FormGroup
        name="categoria"
        label="Categoria"
        type="select"
        options={categories}
        color={"#262626"}
        handleChange={handleChange}
        required
      />
      <FormGroup
        name="video"
        label="Video"
        type="url"
        placeholder="htttps://www.youtube.com/watch=?fjkdkf"
        color={"#262626"}
        handleChange={handleChange}
        required
        value={formValues.video}
      />
      <FormGroup
        name="thumbnail"
        label="Thumbnail"
        type="url"
        placeholder="htttps://www.ejemplo.com/imagen.png"
        handleChange={handleChange}
        color={"#262626"}
        value={formValues.thumbnail}
      />
      <div className={styles.fullwidth}>
        <FormGroup
          name="descripcion"
          label="Descripción"
          type="textarea"
          placeholder="Escribe de que se trata el video"
          handleChange={handleChange}
          color={"#262626"}
          value={formValues.descripcion}
        />
      </div>

      <div className={styles.button_container}>
        <button type="submit">GUARDAR</button>
        <button type="reset" onClick={resetForm}>
          LIMPIAR
        </button>
      </div>
    </form>
  );
}

export default Form;
