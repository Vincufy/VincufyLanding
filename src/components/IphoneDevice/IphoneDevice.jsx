import styles from "./IphoneDevice.module.css";
import iphone from "../../assets/Banner/iphone.png";

const IphoneDevice = () => {
  return (
    <img src={iphone} alt="iPhone device" className={styles.iphoneImage} />
  );
};

export default IphoneDevice;
