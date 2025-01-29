import * as React from 'react'
import * as motion from 'motion/react-client'

interface ContactProps {
    heading: string
    contact: {
        name: string
        href: string
    }[]

}

const Contact: React.FC<ContactProps> = (props) => (
    <React.Fragment>
        <div className="inline-flex flex-col">
            <h1 className="text-xl font-semibold mt-5">
                Social Links
            </h1>
            <div className="mt-2 ml-4">
                {props.contact && props.contact.map((contact, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-start items-center"
                    >
                        <motion.a
                            href={contact.href}
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            className="flex flex-row items-center text-lg space-x-4 group text-color-secondary hover:text-color-primary hover:font-semibold"
                        >
                                {contact.name}
                        </motion.a>
                    </div>
                ))}
            </div>
        </div>
    </React.Fragment>
)

export default Contact