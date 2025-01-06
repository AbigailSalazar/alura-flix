import { useContext, useState } from "react";
import styles from "./ModalEdit.module.css";
import FormGroup from "../FormGourp";
import MainContext from "../../contexts/MainContext";
import Form from "../Form/Index";

function ModalEdit({ video }) {
  const { ModalEditOpen, categories, toggleModalEdit } =
    useContext(MainContext);
  const [formValues, setFormValues] = useState({
    titulo: "",
    categoria: "",
    video: "",
    thumbnail: "",
    descripcion: "",
  });
  return (
    <>
      {ModalEditOpen && (
        <dialog open={ModalEditOpen} className={styles.container}>
          <div className={styles.modal}>
            <button className={styles.close_button} onClick={toggleModalEdit}>
              <img src="src/assets/cross.svg" alt="Cerrar" />
            </button>
            <h2 className={styles.title}>EDITAR CARD</h2>
            <Form
              styles={styles}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </div>
        </dialog>
      )}
    </>
  );
}

export default ModalEdit;
