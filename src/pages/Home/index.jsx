import { useContext } from "react";
import Baneer from "../../components/Banner";
import Category from "../../components/Category";
import ModalEdit from "../../components/ModalEdit";
import { MainContext } from "../../contexts/MainContext";
import styles from "./Home.module.css";

function Home() {
  const testVideos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.example.com/video1",
      thumbnail: "https://placehold.co/400",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.example.com/video2",
      thumbnail: "https://placehold.co/400",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.example.com/video3",
      thumbnail: "https://placehold.co/400",
    },
  ];
  const { categories } = useContext(MainContext);

  return (
    <>
      <Baneer></Baneer>
      <section className={styles.categories}>
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.name}
            videos={testVideos}
            category={category.id}
          />
        ))}
        <ModalEdit />
      </section>
    </>
  );
}

export default Home;
