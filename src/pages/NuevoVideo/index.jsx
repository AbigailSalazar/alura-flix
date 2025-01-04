import styles from "./NuevoVideo.module.css";
import FormGourp from "../../components/FormGourp";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";

function NuevoVideo() {
  const { categories } = useContext(MainContext);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>NUEVO VIDEO</h1>
        <p className={styles.description}>
          COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
        </p>
        <h2 className={styles.subtitle}>Crear tarjeta</h2>
        <form className={styles.form}>
          <FormGourp
            type="text"
            label="Titulo"
            placeholder="Título del video"
            color={"#262626"}
          ></FormGourp>
          <FormGourp
            label="Categoria"
            type="select"
            options={categories}
            color={"#262626"}
          />
          <FormGourp
            label="Thumbnail"
            type="url"
            placeholder="htttps://www.ejemplo.com/imagen.png"
            color={"#262626"}
          />
          <FormGourp
            label="Video"
            type="url"
            placeholder="htttps://www.youtube.com/watch=?fjkdkf"
            color={"#262626"}
          />
          <div className={styles.fullwidth}>
            <FormGourp
              label="Descripción"
              type="textarea"
              placeholder="Escribe de que se trata el video"
              color={"#262626"}
            />
          </div>

          <div className={styles.button_container}>
            <button>GUARDAR</button>
            <button>LIMPIAR</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NuevoVideo;
