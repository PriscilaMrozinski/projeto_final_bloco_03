import { ClipLoader } from "react-spinners";
import { deletar, listar } from "../../../services/Service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Tema não encontrado!')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a categoria')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='container w-full max-w-md mx-auto px-4 pt-4 md:pt-6'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-teal-700'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-teal-700'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-4 md:px-6 bg-gray-100 text-teal-600 font-bold text-lg md:text-2xl'>
                    Categoria
                </header>
                <p className='p-4 md:p-8 text-xl md:text-3xl text-gray-500 bg-white h-full'>{categoria.nome}</p>
                <div className="flex flex-row">
                    <button
                        className="w-full rounded text-white bg-teal-200 py-2 px-15 hover:bg-white hover:text-teal-600 transition-all duration-300"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="rounded text-white bg-teal-500 py-2 px-30 hover:bg-white hover:text-teal-600 transition-all duration-300"
                        onClick={deletarCategoria}
                    >
                        {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size={24}
                          />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria