import { useContext, useEffect, useState } from "react";
import VideoCard from "../VideoCard";
import styles from "./Category.module.css";
import MainContext from "../../contexts/MainContext";

function Category({ title, category }) {
  const [categoryVideos, setCategoryVideos] = useState([]);
  const { videos } = useContext(MainContext);

  const deletevideo = (id) => {
    const newVideos = categoryVideos.filter((video) => video.id !== id);
    setCategoryVideos(newVideos);
  };

  useEffect(() => {
    const getVideos = async () => {
      const response = await fetch(
        `https://aluraflix-api-dun.vercel.app/videos?categoryId=${category}`
      );
      const data = await response.json();
      setCategoryVideos(data);
    };

    getVideos();
  }, [videos]);

  return (
    <section className={styles.category}>
      <h1
        className={styles.title}
        style={{ backgroundColor: `var(--category-${category}-color)` }}
      >
        {title}
      </h1>
      <div className={styles.videos}>
        {categoryVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            category={category}
            deleteVideo={deletevideo}
          />
        ))}
      </div>
    </section>
  );
}
export default Category;
