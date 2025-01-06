import { useContext, useEffect } from "react";
import Baneer from "../../components/Banner";
import Category from "../../components/Category";
import ModalEdit from "../../components/ModalEdit";
import styles from "./Home.module.css";
import MainContext from "../../contexts/MainContext";

function Home() {
  const { categories } = useContext(MainContext);

  useEffect(() => {
    var r = document.querySelector(":root");
    categories.forEach((category) => {
      r.style.setProperty(`--category-${category.id}-color`, category.color);
    });
  }, [categories]);

  return (
    <>
      <Baneer></Baneer>
      <section className={styles.categories}>
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.name}
            category={category.id}
          />
        ))}
        <ModalEdit />
      </section>
    </>
  );
}

export default Home;
