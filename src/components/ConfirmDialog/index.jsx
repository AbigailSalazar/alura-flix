import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import "./ConfirmDialog.css";

export const confirmDialog = (message, onAccept) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="dialog">
          <p>{message} </p>
          <div className="button_container">
            <button onClick={onClose} className="button_cancel">
              NO
            </button>
            <button
              className="button_accept"
              onClick={() => {
                onAccept();
                onClose();
              }}
            >
              SI
            </button>
          </div>
        </div>
      );
    },
    overlayClassName: "dialog-overlay",
  });
};
