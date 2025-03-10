import { ReactNode } from "react"
import { FiArrowRight, FiMail} from "react-icons/fi"

interface ItemFeatureProps {
    icon: ReactNode
    title: string
    text: string
    isBtn?: boolean
}

export function ItemFeature({ icon, title, text, isBtn = false }: ItemFeatureProps) {
    return (
        <div className="text-center w-full max-w-96">
            <div className="w-12 h-12 bg-[#F4EBFF] rounded-full mx-auto border-8 border-[#F9F5FF] mb-5
            flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{title}</h3>
            <p className="text-gray-600 leading-6">{text}</p>


            {isBtn && (
                <a href="#" className="flex items-center justify-center mt-5 font-semibold text-[#6941C6] gap-2
                hover:opacity-50 transition-opacity">
                    Learn more
                    <FiArrowRight size={20} className="text-[#6941C6]" />
                </a>
            )}

        </div>
    )
}