import { useState } from "react";
import styles from "./SearchForm.module.css";
import { useNavigate, createSearchParams } from "react-router-dom";
import GuideModal from "../../modals/GuideModal/GuideModal"
import Swal from "sweetalert2";



export default function SearchForm() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [entity, setEntity] = useState("");
    const [showGuide, setShowGuide] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!title && !date && !type && !entity) {
            Swal.fire({
                icon: "warning",
                title: "Filtros vacíos",
                text: "Debes ingresar al menos un filtro para realizar la búsqueda.",
                confirmButtonText: "Entendido",
            });

            return;
        }

        navigate({
            pathname: "/resultados",
            search: createSearchParams({
                title,
                date,
                type,
                entity,
            }).toString(),
        });
    }

    return (
      <div className={styles.form}>
          <div className={styles.grid}>
              <div className={styles.field}>
                  <label>Título del documento:</label>
                  <input
                      className={styles.input}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                  />
              </div>
              <div className={styles.field}>
                  <label>Fecha:</label>
                  <input
                      className={styles.input}
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                  />
              </div>
              <div className={styles.field}>
                  <label>Tipo de documento:</label>
                  <select
                      className={styles.input}
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                  >
                      <option value="">Seleccione</option>
                      <option>Ley</option>
                      <option>Sentencia</option>
                      <option>Decreto</option>
                  </select>
              </div>

              <div className={styles.field}>
                  <label>Sala / Entidad:</label>
                  <select
                      className={styles.input}
                      value={entity}
                      onChange={(e) => setEntity(e.target.value)}
                  >
                      <option value="">Seleccione</option>
                      <option>Corte Suprema</option>
                      <option>Consejo de Estado</option>
                      <option>Congreso de la República</option>
                      <option>Corte Constitucional</option>
                      <option>Presidencia de la República</option>
                  </select>
              </div>
          </div>

          <div className={styles.actions}>
              <div className={styles.leftActions}>
                  <button className={styles.search} onClick={handleSearch}>
                      Buscar
                  </button>
                  <button
                      className={styles.clear}
                      onClick={() => {
                          setTitle("");
                          setDate("");
                          setType("");
                          setEntity("");
                          navigate("/");
                      }}
                  >
                      Limpiar
                  </button>
              </div>
              <button
                  className={styles.guide}
                  onClick={() => setShowGuide(true)}>
                  Guía de uso
              </button>
          </div>
          {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}
      </div>
    );

}