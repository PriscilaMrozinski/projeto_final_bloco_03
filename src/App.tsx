import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import Footer from "./components/footer/Footer";
import ListarProdutos from "./components/produtos/listarprodutos/ListarProdutos";
import FormProdutos from "./components/produtos/formprodutos/FormProdutos";
import DeletarProdutos from "./components/produtos/deletarprodutos/DeletarProdutos";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="">
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategoria />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProdutos />} />
              <Route path="/editarproduto/:id" element={<FormProdutos />} />
              <Route path="/deletarproduto/:id" element={<DeletarProdutos />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App