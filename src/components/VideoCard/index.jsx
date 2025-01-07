import { useContext } from "react";
import styles from "./VideoCard.module.css";
import MainContext from "../../contexts/MainContext";
import { showErrorToast, showSuccessToast } from "../../utils/Toast";
import { confirmDialog } from "../ConfirmDialog";

function VideoCard({ video, category, deleteVideo }) {
  const { setVideoToEdit } = useContext(MainContext);

  const confirmation = () => {
    confirmDialog(
      "¿Estas seguro de eliminar este card de video?",
      deleteVideoCard
    );
  };

  const deleteVideoCard = () => {
    fetch(`https://aluraflix-api-dun.vercel.app/videos/${video.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          showErrorToast("Error al eliminar este video");
        } else {
          deleteVideo(video.id);
          showSuccessToast("Eliminado correctamente!");
        }
      })
      .catch((error) => {
        showErrorToast("Error del servidor, intente más tarde");
      });
  };

  return (
    <div
      className={styles.videocard}
      style={{ border: `4px solid var(--category-${category}-color)` }}
    >
      <a href={video.url} target="_blank">
        <img className={styles.image} src={video.thumbnail} alt={video.title} />
      </a>
      <div className={styles.button_container}>
        <button onClick={confirmation}>🗑️ BORRAR</button>
        <button onClick={() => setVideoToEdit(video)}>✏️ EDITAR</button>
      </div>
    </div>
  );
}
export default VideoCard;
