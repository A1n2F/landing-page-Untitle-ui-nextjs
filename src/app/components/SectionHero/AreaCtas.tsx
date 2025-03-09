import { FiPlayCircle } from "react-icons/fi"

export function AreaCtas() {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-center gap-3 mb-16">
            <button className="w-full xl:w-auto flex items-center gap-3 py-4 px-7 border border-gray-300 rounded-lg text-lg font-semibold text-gray-700
            cursor-pointer hover:bg-gray-100 transition-colors">
                <FiPlayCircle size={24} className="text-gray-700" />
                Demo
            </button>

            <button className="w-full xl:w-auto py-4 px-7 rounded-lg text-lg text-white font-semibold bg-[#7F56D9] 
            hover:bg-[#6941C6] transition-colors cursor-pointer">
                Sign Up
            </button>
        </div>
    )
}