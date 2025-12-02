import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center text-gray-500 bg-teal-100">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Farmácia | Copyright: {data}
                    </p>

                    <p className="text-lg">Acesse nossas redes sociais</p>

                    <div className="flex gap-4 mt-2">
                        <a href="" target="_blank">
                            <LinkedinLogoIcon size={48} weight="bold" className="hover:opacity-60" />
                        </a>

                        <a href="" target="_blank">
                            <InstagramLogoIcon size={48} weight="bold" className="hover:opacity-60" />
                        </a>

                        <a href="" target="_blank">
                            <FacebookLogoIcon size={48} weight="bold" className="hover:opacity-60" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
