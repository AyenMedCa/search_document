import styles from "./Header.module.css";
import logo from "../../../assets/logo.png"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt={"Logo empresa"}/>
                <span className={styles.title}>Empresa jurídica</span>
            </div>
        </header>
    )
}