import Image from "next/image";
import { GridContainer } from "../GridContainer";

import sisyphusImg from "../../../../public/sisyphus.svg"
import avatar1Img from "../../../../public/avatar1.png"

export function SectionTestimonials() {
    return (
        <section className="py-16 xl:py-24 bg-gray-50">
            <GridContainer className="text-center">
                <Image
                    src={sisyphusImg}
                    alt="Sisyphys"
                    width={140}
                    height={40}
                    className="mx-auto"
                />

                <h2 className="my-8 text-3xl/tight xl:text-5xl/tight font-medium text-gray-900 -tracking-[-0.96px]">
                    We’ve been using Untitled to kick start every new project and can’t imagine working without it.
                </h2>

                <div>
                    <Image
                        src={avatar1Img}
                        alt="Avatar"
                        width={64}
                        height={64}
                        className="mx-auto mb-4"
                    />

                    <span className="block text-lg font-medium text-gray-900">Candice Wu</span>
                    <small className="block text-base text-gray-600">Product Manager, Sisyphus</small>
                </div>
            </GridContainer>
        </section>
    )
}