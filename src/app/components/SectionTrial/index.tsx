import { GridContainer } from "../GridContainer";

export function SectionTrial() {
    return (
        <section className="py-16 xl:py-24 bg-gray-50">
            <GridContainer className="text-center">
                <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-5">Start your free trial</h2>
                <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 mb-10">Join over 4,000+ startups already growing with Untitled.</p>

                <div className="flex flex-col xl:flex-row w-full xl:w-auto justify-center gap-3">
                    <button className="py-3 px-5 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold leading-normal 
                    hover:bg-gray-100 transition-colors cursor-pointer">
                        Learn more
                    </button>

                    <button className="py-3 px-5 bg-[#7F56D9] rounded-lg text-white font-semibold leading-normal 
                    hover:bg-[#6941C6] transition-colors cursor-pointer">
                        Get started
                    </button>
                </div>
            </GridContainer>
        </section>
    )
}