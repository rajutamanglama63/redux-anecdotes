import { useSelector } from "react-redux";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const notification = useSelector((state) => state.notification);
  // console.log(notification);

  if (notification === null) {
    return null;
  }

  return <div style={style}>{notification}</div>;
};

export default Notification;
