import { useContext, useState, useEffect } from "react";

import Header from "./layout/header/Header";
import Search from "./layout/search/Search";
import Catalogo from "./layout/catalogo/Catalogo";
import Sidebar from "./layout/sidebar/Sidebar";
import { CartContext } from "./Contexts/Cart";

function App() {
  const { view } = useContext(CartContext);

  return (
    <>
      <Header />
      {view &&
        <Sidebar />
      }
      <Search />
      <Catalogo />
    </>
  );
}

export default App;
