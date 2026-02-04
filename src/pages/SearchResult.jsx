import Breadcrumbs from "../components/common/breadcrumbs";
import ResultContainer from "../components/results/ResultContainer";

export default function SearchResult() {
    return (
        <div style={{ padding: "24px" }}>
            <Breadcrumbs items={["Inicio", "Buscador de documentos jurídicos", "Resultados"]}/>
            <ResultContainer />
        </div>
    )
}