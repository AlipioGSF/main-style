import { useContext, useState , useEffect} from "react";
import { AllProducts } from './Contexts/Products';
import Header from "./layout/header/Header";
import Search from "./layout/search/Search";
import Catalogo from "./layout/catalogo/Catalogo";

function App() {

  return (
  <>
    <Header />
    <Catalogo />
  </>
  );
}

export default App;
