import { useEffect, useState } from "react"
import type Produto from "../../../models/Produto"
import { listar } from "../../../services/Service"
import { SyncLoader } from "react-spinners"
import CardProdutos from "../cardprodutos/CardProdutos"

function ListarProdutos() {
	const [produtos, setProdutos] = useState<Produto[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarProdutos() {
		setIsLoading(true)

		try {
			await listar('/produtos', setProdutos)
		} catch {
			console.log('Erro ao listar todos os Produtos!')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		buscarProdutos()
	}, [produtos.length])

	return (
		<>
			{isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}
			<div className="flex justify-center w-full">
				<div className="container flex flex-col mx-4">
					{!isLoading && produtos.length === 0 && (
						<span className="my-8 text-3xl text-center">
							Nenhum produto foi encontrado
						</span>
					)}

					<div className="grid grid-cols-2 gap-x-2 gap-y-2 my-2 md:my-0 sm:gap-x-6 sm:gap-y-2 lg:gap-x-4 lg:gap-y-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 pb-4">
						{produtos.map((produto) => (
							<CardProdutos key={produto.id} produto={produto} /> 
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarProdutos