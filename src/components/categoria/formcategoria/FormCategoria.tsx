import { useEffect, useState, type ChangeEvent } from "react";
import { ClipLoader } from "react-spinners";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      alert('Categoria não encontrada!')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        alert('Categoria atualizado com sucesso')

      } catch (error: any) {
        alert('Erro ao atualizar o Categoria')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)

        alert('Categoria cadastrada com sucesso')

      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-8 pt-4 font-semibold text-teal-600 min-h-[calc(100vh-16rem)]">
      <h1 className="text-3xl md:text-4xl text-center my-8 ">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-full max-w-md md:max-w-1/2 flex flex-col gap-4 px-2"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2 text-gray-500 text-2xl">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name='nome'
            className="bg-white border-2 border-gray-400 rounded p-2 utral-800 text-base md:text-lg"
            required
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-white bg-teal-500 py-2 px-4 hover:bg-white hover:text-teal-600 transition-all duration-300"
          type="submit"
        >
          {isLoading ?
            <ClipLoader
            color="#ffffff"
            size={24}
          />
            :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;