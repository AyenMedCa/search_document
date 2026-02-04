import styles from "./Search.module.css"
import SearchForm from "../../features/search";

export default function SearchContainer() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Buscador de documentos jurídicos
            </h1>

            <p className={styles.description}>
                Realiza búsquedas utilizando palabras clave o filtros
                para documentos jurídicos de manera rápida.
            </p>

            <SearchForm />
        </section>
    )
}