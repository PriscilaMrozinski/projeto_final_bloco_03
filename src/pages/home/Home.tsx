import { Link } from "react-router-dom"
import ModalProdutos from "../../components/produtos/modalprodutos/ModalProdutos"

function Home() {
    return (
        <div className="
            bg-teal-50 
            flex 
            justify-center
        ">
            <div className='
                container 
                grid 
                grid-cols-1 md:grid-cols-2 
                text-gray-600
                gap-8 md:gap-0
                px-4
            '>
                <div className="
                    flex 
                    flex-col 
                    gap-4 
                    items-center 
                    justify-center 
                    py-4
                    text-center
                ">
                    <h2 className='
                        text-3xl md:text-5xl 
                        font-bold
                    '>
                        Seja bem-vindo!
                    </h2>

                    <p className='text-base md:text-xl'>
                        Aqui você encontra Medicamentos e Cosméticos!
                    </p>

                    <div className="flex justify-around gap-4">
                        {/* <div className='
                            rounded text-teal-600 
                            border-solid border-2 
                            py-2 px-4
                            hover:bg-white hover:text-teal-600 
                            transition-all duration-300
                        '>
                            Cadastrar Produto
                        </div> */}
                        <Link
                            to="/cadastrarproduto"
                            className='rounded text-teal-600 border-solid border-2 py-2 px-4 hover:bg-white hover:text-teal-600 transition-all duration-300'
                        >
                            <ModalProdutos />
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src="https://ik.imagekit.io/p9rdkccyy/LojaGames/farmacia?updatedAt=1764685447753"
                        alt="Imagem Página Home"
                        className='w-2/3 max-w-xs md:max-w-md lg:max-w-lg drop-shadow-xl'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
