import * as React from 'react'
import * as motion from 'motion/react-client'

interface TechProps {
    title: string
    techs: {
        name: string
        icon: React.ReactNode
    }[]
}

const Tech: React.FC<TechProps> = (props) => (
    <React.Fragment>
        <div className="mt-40">
            <div>
                <h1 className="font-semibold text-3xl">
                    {props.title}
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-4 sm:gird-cols-3 md:grid-cols-4">
                {props.techs && props.techs.map((tech, index) => (
                    <div
                        key={index}
                        className="flex space-x-2 text-color-secondary items-center"
                    >
                        <motion.span
                            whileHover={{ scaleX: [1, 1.2, 0.85, 1], scaleY: [1, 0.8, 1.15, 1] }}
                        >
                            {tech.icon}

                        </motion.span>
                        <span className="lang font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </React.Fragment>
)

export default Tech