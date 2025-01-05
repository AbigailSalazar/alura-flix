import { useContext } from "react";
import styles from "./ModalEdit.module.css";
import FormGourp from "../FormGourp";
import MainContext from "../../contexts/MainContext";

function ModalEdit({ video }) {
  const { ModalEditOpen, categories, toggleModalEdit } =
    useContext(MainContext);
  return (
    <>
      {ModalEditOpen && (
        <dialog open={ModalEditOpen} className={styles.container}>
          <div className={styles.modal}>
            <button className={styles.close_button} onClick={toggleModalEdit}>
              <img src="src/assets/cross.svg" alt="Cerrar" />
            </button>
            <h2 className={styles.title}>EDITAR CARD</h2>
            <form className={styles.form}>
              <FormGourp
                label="Título"
                type="text"
                placeholder="Título del video"
                color={"var(--accent-color)"}
              />
              <FormGourp
                label="Categoria"
                type="select"
                options={categories}
                color={"var(--accent-color)"}
              />
              <FormGourp
                label="Thumbnail"
                type="url"
                placeholder="htttps://www.ejemplo.com/imagen.png"
                color={"var(--accent-color)"}
              />
              <FormGourp
                label="Video"
                type="url"
                placeholder="htttps://www.youtube.com/watch=?fjkdkf"
                color={"var(--accent-color)"}
              />
              <FormGourp
                label="Descripción"
                type="textarea"
                placeholder="Escribe de que se trata el video"
                color={"var(--accent-color)"}
              />

              <div className={styles.button_container}>
                <button>GUARDAR</button>
                <button>LIMPIAR</button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}

export default ModalEdit;
