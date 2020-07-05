import { store } from 'react-notifications-component';

const Notificator = {
    error: (message) => store.addNotification({
        title: message,
        type: "error",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    })
};

export default Notificator
