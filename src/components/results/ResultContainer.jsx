import ResultCard from "./ResultCard";
import styles from "./ResultContainer.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { documents } from "../../data/Documents";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Swal from "sweetalert2";


export default function ResultContainer() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const title = params.get("title") || "";
    const type = params.get("type") || "";
    const entity = params.get("entity") || "";
    const date = params.get("date") || "";

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);

    const hasFilters = title || type || entity || date;

    useEffect(() => {
        if (!hasFilters) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(false);
        
        setTimeout(() => {
            if (false) { //Cambiar a true para ver el estado de error
                setLoading(false);

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Ocurrió un problema al cargar los documentos.",
                    confirmButtonText: "Volver al inicio",
                }).then(() => {
                    navigate("/");
                });

                return;
            }
            
            const filtered = documents.filter((doc) => {
                return (
                    (!title || doc.title.toLowerCase().includes(title.toLowerCase())) &&
                    (!type || doc.type === type) &&
                    (!entity || doc.entity === entity) &&
                    (!date || doc.year.startsWith(date.slice(0, 4)))
                );
            });

            setResults(filtered);
            setLoading(false);
        }, 800);
    }, [title, type, entity, date, hasFilters, navigate]);

    return (
        <section className={styles.container}>
            <button className={styles.back} onClick={() => navigate("/")}>
                <ArrowLeft size={18} />
                Volver
            </button>

            {!hasFilters && (
                <p className={styles.info}>Realiza una búsqueda para ver resultados.</p>
            )}

            {loading && (
                <div className={styles.loaderBox}>
                    <div className={styles.spinner}></div>
                    <p>Buscando documentos…</p>
                </div>
            )}

            {!loading && !error && hasFilters && results.length === 0 && (
                <div className={styles.emptyBox}>
                    <h4>Sin resultados</h4>
                    <p>No se encontraron documentos con los filtros ingresados.</p>
                </div>
            )}

            {!loading && !error && results.length > 0 && (
                <div className={styles.list}>
                    {results.map((doc) => (
                        <ResultCard key={doc.id} data={doc} />
                    ))}
                </div>
            )}
        </section>
    );
}
