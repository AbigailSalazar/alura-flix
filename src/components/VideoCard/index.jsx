import { useContext } from "react";
import styles from "./VideoCard.module.css";
import MainContext from "../../contexts/MainContext";

function VideoCard({ video, category }) {
  const { setVideoToEdit } = useContext(MainContext);

  return (
    <div
      className={styles.videocard}
      style={{ border: `4px solid var(--category-${category}-color)` }}
    >
      <img className={styles.image} src={video.thumbnail} alt={video.title} />
      <div className={styles.button_container}>
        <button>🗑️ BORRAR</button>
        <button onClick={() => setVideoToEdit(video)}>✏️ EDITAR</button>
      </div>
    </div>
  );
}
export default VideoCard;
