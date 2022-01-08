import { toast } from "react-toastify";
import Notification from "../shared/Notification";

const toastConfig = {
  position: "bottom-right",
  className: "toast-container",
};

const success = (message) =>
  toast.success(
    ({ closeToast }) => (
      <Notification
        type="toast"
        kind="success"
        title={message}
        onCloseButtonClick={(e) => {
          closeToast();
        }}
      />
    ),
    toastConfig
  );

const error = (message) =>
  toast.error(
    ({ closeToast }) => (
      <Notification
        type="toast"
        kind="error"
        title={message}
        onCloseButtonClick={(e) => {
          closeToast();
        }}
      />
    ),
    toastConfig
  );
const notification = { success, error };

export default notification;
