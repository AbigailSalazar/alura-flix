import { useContext, useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";
import FormGroup from "../FormGourp";
import { showErrorToast } from "../../utils/Toast";

function Form({ styles, formValues, setFormValues, onSubmit }) {
  const { categories } = useContext(MainContext);
  let invalidVideoUrl = false;

  const resetForm = () => {
    setFormValues({
      id: 0,
      categoryId: 0,
      title: "",
      url: "",
      thumbnail: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    //Autogenera el link the la thumbnail del video
    const url = formValues.url;
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
  }, [formValues.url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (invalidVideoUrl) {
      showErrorToast("La url del video es invalida");
    } else {
      onSubmit();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormGroup
        name="title"
        type="text"
        label="Titulo"
        placeholder="Título del video"
        color={"#262626"}
        handleChange={handleChange}
        required
        value={formValues.title}
      ></FormGroup>
      <FormGroup
        name="categoryId"
        label="Categoria"
        type="select"
        options={categories}
        color={"#262626"}
        handleChange={handleChange}
        value={formValues.categoryId}
        required
      />
      <FormGroup
        name="url"
        label="Video"
        type="url"
        placeholder="htttps://www.youtube.com/watch=?fjkdkf"
        color={"#262626"}
        handleChange={handleChange}
        required
        value={formValues.url}
      />
      <FormGroup
        name="thumbnail"
        label="Thumbnail"
        type="url"
        placeholder="htttps://www.ejemplo.com/imagen.png"
        handleChange={handleChange}
        color={"#262626"}
        value={formValues.thumbnail}
        required
      />
      <div className={styles.fullwidth}>
        <FormGroup
          name="description"
          label="Descripción"
          type="textarea"
          placeholder="Escribe de que se trata el video"
          handleChange={handleChange}
          color={"#262626"}
          value={formValues.description}
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
