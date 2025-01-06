import { useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";

function MainContextProvider({ children }) {
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  //Obtiene las catagorias
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        "https://aluraflix-api-dun.vercel.app/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    const getVideos = async () => {
      const response = await fetch(
        "https://aluraflix-api-dun.vercel.app/videos"
      );
      const data = await response.json();
      setVideos(data);
    };

    getCategories();
    getVideos();
  }, []);

  //Abrir y cerrar modal de edición
  const toggleModalEdit = () => {
    setModalEditOpen((prevState) => !prevState);
  };

  return (
    <MainContext.Provider
      value={{
        categories,
        videos,
        setVideos,
        setCategories,
        ModalEditOpen,
        toggleModalEdit,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
