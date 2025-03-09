import Image from "next/image";
import { GridContainer } from "../GridContainer";

import logoImg from "../../../../public/logo.svg"
import avatarImg from "../../../../public/avatar.png"
import { ItemMenu } from "./item-menu";

import menuIconImg from "../../../../public/menu.svg"

const menuItems = [
    {
        url: "/home",
        title: "Home",
        dropdown: false
    },

    {
        url: "/products",
        title: "Products",
        dropdown: true
    },

    {
        url: "/resources",
        title: "Resources",
        dropdown: true
    },

    {
        url: "/pricing",
        title: "Pricing",
        dropdown: false
    },
]

export function Header() {
    return (
        <header className="sticky w-full h-[80px] top-0 z-50 bg-white border-b border-b-gray-100 flex items-center">
            <GridContainer className="flex items-center justify-between">
                <div className="flex items-center gap-10 w-full xl:w-auto justify-between">
                    <Image src={logoImg} alt="logo untitle" width={142} height={32} />

                    <nav className="hidden xl:flex items-center gap-8">
                        {menuItems.map(({url, title, dropdown}, index) => (
                            <ItemMenu key={index}
                                url={url}
                                title={title}
                                hasDropDown={dropdown}
                            />
                        ))}
                    </nav>

                    <button>
                        <Image
                            src={menuIconImg}
                            alt="Menu"
                            width={20}
                            height={20}
                            className="block xl:hidden"
                        />
                    </button>
                </div>

                <div>
                    <Image 
                        src={avatarImg}
                        alt="Image avatar"
                        width={40}
                        height={40}
                        className="hidden xl:block"
                    />
                </div>
            </GridContainer>
        </header>
    )
}