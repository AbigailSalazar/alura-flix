import VideoCard from "../VideoCard";
import styles from "./Category.module.css";

function Category({ title, videos, category }) {
  return (
    <section className={styles.category}>
      <h1
        className={styles.title}
        style={{ backgroundColor: `var(--category-${category}-color)` }}
      >
        {title}
      </h1>
      <div className={styles.videos}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} category={category} />
        ))}
      </div>
    </section>
  );
}
export default Category;
