import * as React from 'react'

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
                    <div key={index} className="flex flex-row justify-start items-center ">
                        <a
                            href={contact.href}
                            target="_blank"
                            className="flex flex-row items-center space-x-4 group"
                        >
                            <div className="text-lg text-color-secondary font-mono relative overflow-hidden">
                                {contact.name}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </React.Fragment>
)

export default Contact