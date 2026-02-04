import SearchContainer from "../components/search";
import Breadcrumbs from "../components/common/breadcrumbs";

export default function Home() {
    return (
        <div style={{ padding: "19px" }}>

            <Breadcrumbs items={["Inicio", "Buscador de documentos jurídicos"]}/>

            <SearchContainer />
        </div>
    )
}