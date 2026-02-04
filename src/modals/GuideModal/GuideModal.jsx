import styles from "./GuideModal.module.css";

export default function GuideModal({ onClose }) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <h3>Guía de uso</h3>

                <p>
                    Utiliza los filtros para encontrar documentos jurídicos.
                </p>

                <ul>
                    <li>Escribe palabras clave en el título.</li>
                    <li>Selecciona fecha, tipo y entidad.</li>
                    <li>Puedes combinar todos los filtros.</li>
                </ul>

                <button className={styles.close} onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}
