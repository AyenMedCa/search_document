import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import Header from "./components/layout/header";
function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path={"/resultados"} element={<SearchResult />}/>
          </Routes>
      </>
  );
}

export default App;
