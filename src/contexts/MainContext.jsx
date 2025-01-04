import { useState, createContext, useEffect } from "react";

export const MainContext = createContext();

function MainContextProvider({ children }) {
  MainContext.displayName = "MainContext";
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([
    { id: 1, name: "Frontend", color: "#6BD1FF" },
    { id: 2, name: "Backend", color: "#00C86F" },
    { id: 3, name: "Innovación y gestión", color: "#FFBA05" },
  ]);

  // useEffect(() => {
  //     const getVideos = async () => {
  //         const response = await fetch("http://localhost:8080/videos");
  //         const data = await response.json();
  //         setVideos(data);
  //     };
  //     getVideos();
  // }, []);

  //Asignar colores a las categorías
  useEffect(() => {
    var r = document.querySelector(":root");
    categories.forEach((category) => {
      r.style.setProperty(`--category-${category.id}-color`, category.color);
    });
  }, [categories]);

  //Abrir y cerrar modal de edición
  const toggleModalEdit = () => {
    setModalEditOpen((prevState) => !prevState);
  };

  return (
    <MainContext.Provider
      value={{ videos, setVideos, categories, ModalEditOpen, toggleModalEdit }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
