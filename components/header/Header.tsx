import * as React from 'react'
// import image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

interface HeaderProps {
    items: {
        label: string
        href: string
    }[]
}

const Header: React.FC<HeaderProps> = (props) => (
    <React.Fragment>
        <header className="full-container py-10">
            <nav className="space-x-5 flex md:flex-row justify-between items-center">
                {props.items && props.items.map((item, index) => (
                    <Link key={index} href={item.href} className="hover:bg-gray-400 rounded py-1 px-2">
                        {item.label}
                    </Link>
                ))}
                <div className="space-x-4 flex flex-row items-center">
                <ThemeSwitcher />
                </div>
            </nav>
            <hr className="mt-4 opacity-20" />

        </header>
    </React.Fragment>
)

export default Header