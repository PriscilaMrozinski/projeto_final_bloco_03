import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";


interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategoria({categoria}: Readonly<CardCategoriaProps>) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-gray-100  text-teal-600 font-bold text-2xl'>Categoria</header>
            <p className='p-8 text-3xl text-gray-400 bg-white h-full'>{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className="rounded text-white bg-teal-500 py-2 px-35 hover:bg-white hover:text-teal-600 transition-all duration-300">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className="w-full rounded text-white bg-teal-200 py-2 px-15 hover:bg-white hover:text-teal-600 transition-all duration-300">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategoria;