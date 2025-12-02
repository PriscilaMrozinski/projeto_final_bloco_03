import { HeartbeatIcon, ShoppingCartIcon, UserCircleIcon } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <header className="w-full bg-white shadow-md">
                <div className="w-full flex justify-between items-center py-3 px-12">

                    {/* Logo */}
                    <div className="flex items-center gap-3 w-1/2 py-6">
                        <a href="#">
                            <HeartbeatIcon size={90} className="text-teal-200" />
                        </a>
                    </div>

                    {/* Menu */}
                    <nav className="md:flex items-center gap-6 text-[15px] font-semibold">

                        <span className="text-xl px-4 text-teal-600 hover:opacity-50 cursor-pointer">
                            Categoria
                        </span>

                        <span className="text-xl px-4 text-teal-600 hover:opacity-50 cursor-pointer">
                            Cadastrar Categoria
                        </span>

                        <a href="#" className="hover:opacity-50">
                            <UserCircleIcon size={50} weight='fill' className="text-teal-600" />
                        </a>

                        <a href="#" className="hover:opacity-50">
                            <ShoppingCartIcon size={45} weight='bold' className="text-teal-600" />
                        </a>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
