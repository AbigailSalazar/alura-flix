import { useEffect, useState } from "react";
import MainContext from "../../contexts/MainContext";

function MainContextProvider({ children }) {
  const [videoToEdit, setVideoToEdit] = useState(null);
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

  return (
    <MainContext.Provider
      value={{
        categories,
        videos,
        setVideos,
        setCategories,
        videoToEdit,
        setVideoToEdit,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
