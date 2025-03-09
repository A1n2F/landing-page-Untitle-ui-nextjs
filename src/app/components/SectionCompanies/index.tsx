import Image from "next/image";
import { GridContainer } from "../GridContainer";

import layersImg from "../../../../public/layers.svg"
import sisyphusImg from "../../../../public/sisyphus.svg"
import circoolesImg from "../../../../public/circooles.svg"
import catalogImg from "../../../../public/catalog.svg"
import quotientImg from "../../../../public/quotient.svg"

export function SectionCompanies() {
    return (
        <section className="pt-0 xl:pt-24">
            <GridContainer>
                <p className="text-center text-gray-600 font-medium mb-8">Join 4,000+ companies already growing</p>

                <div className="grid grid-cols-2 gap-y-4 xl:gap-y-0 gap-x-10 xl:gap-x-0 xl:flex items-center justify-between">
                    <Image
                        src={layersImg}
                        alt=""
                        width={146}
                        height={48}
                    />

                    <Image
                        src={sisyphusImg}
                        alt=""
                        width={169}
                        height={48}
                    />

                    <Image
                        src={circoolesImg}
                        alt=""
                        width={183}
                        height={44}
                    />

                    <Image
                        src={catalogImg}
                        alt=""
                        width={160}
                        height={48}
                    />

                    <Image
                        src={quotientImg}
                        alt=""
                        width={187}
                        height={44}
                    />
                </div>

                <hr className="mt-16 xl:mt-24 border-gray-200" />
            </GridContainer>
        </section>
    )
}