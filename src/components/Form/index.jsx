import { useContext, useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";
import FormGroup from "../FormGourp";

function Form({ styles, formValues, setFormValues, onSubmit }) {
  const { categories } = useContext(MainContext);

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
    } else {
      //TODO: mostrar error, link no valido
    }
  }, [formValues.video]);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
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
