import { useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";

function MainContextProvider({ children }) {
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  //Obtiene las catagorias
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/AbigailSalazar/AluraFlixAPI/categories"
      );
      const data = await response.json();
      setCategories(data);
    };

    getCategories();
  }, []);

  //Abrir y cerrar modal de edición
  const toggleModalEdit = () => {
    setModalEditOpen((prevState) => !prevState);
  };

  return (
    <MainContext.Provider
      value={{ categories, setCategories, ModalEditOpen, toggleModalEdit }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
