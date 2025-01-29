import * as React from 'react'
import * as motion from 'motion/react-client'
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
                    <motion.span
                        key={index}
                        whileHover={{
                            scaleX: [1, 1.1, 0.95, 1],
                            scaleY: [1, 0.9, 1.05, 1]
                        }}
                        whileTap={{ scale: 0.8 }}
                    >
                    <Link  href={item.href} className="text-color-primary hover:text-color-secondary hover:font-semibold py-1 px-2">
                        {item.label}
                    </Link>
                    </motion.span>

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