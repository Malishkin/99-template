import "./Info.css";
import styles from "./Info.module.css";
function Info() {
  // {info: 'Info_info__IC9gB', myOtherButton: 'Info_myOtherButton__GOOR6'}
  console.log(styles);
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      <button className="my-button">Click me in the Info component</button>
      <button className={styles.myOtherButton}>
        Bytton with local CSS module
      </button>
    </div>
  );
}
export default Info;
