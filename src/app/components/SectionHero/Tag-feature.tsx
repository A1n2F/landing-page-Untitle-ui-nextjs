import { FiArrowRight } from "react-icons/fi"

export function TagFeature() {
    return (
        <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-[#F9F5FF] rounded-2xl">
            <span className="inline-block h-6 bg-white px-[10px] rounded-2xl text-xs/6 xl:text-sm/6 font-medium text-[#6941C6]">
                New feature
            </span>
            <a href="#" className="flex items-center gap-4 text-xs/6 xl:text-sm/6 font-medium text-[#6941C6] hover:opacity-50 transition-opacity">
                Check out the team dashboard
                <FiArrowRight />
            </a>
        </div>
    )
}