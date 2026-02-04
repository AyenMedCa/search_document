import styles from "./ResultContainer.module.css";
import { Download } from "lucide-react";


export default function ResultCard({data}) {
    return (
        <article className={styles.card}>
            <h3>{data.title}</h3>

            <p className={styles.summary}>{data.summary}</p>

            <div className={styles.footer}>
                <div>
                    <div className={styles.meta}>
                        <span>{data.year}</span>
                        <span>{data.type}</span>
                        <span>{data.radicado}</span>
                    </div>

                    <div className={styles.extra}>
                        Estado: Vigente
                    </div>
                </div>

                <button className={styles.download}>
                    <Download size={20}/>
                </button>
            </div>
        </article>
    )
}