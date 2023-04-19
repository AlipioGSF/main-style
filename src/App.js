import { useContext, useState , useEffect} from "react";
import Header from "./layout/header/Header";
import Search from "./layout/search/Search";
import Catalogo from "./layout/catalogo/Catalogo";

function App() {

  return (
  <>
    <Header />
    <Search />
    <Catalogo />
  </>
  );
}

export default App;
