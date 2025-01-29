import * as React from 'react'
import * as motion from 'motion/react-client'

interface TimelineProps {
    title: string
    experiences: {
        title: string
        company: string
        date: string
        description: string
    }[]
}

const Timeline: React.FC<TimelineProps> = (props) => (
    <React.Fragment>
        <section>
            <h2 className="font-semibold text-3xl" >
                {props.title}
            </h2>
            <div className="grid grid-cols-2 gap-2 mt-4 mb-6">
                <div className="relative col-span-12 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 p-2 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3">
                        {props.experiences && props.experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col sm:relative bg-color-secondary rounded-md p-4 shadow-xl"
                                whileHover={{ scale: 1.1 }}
                            >
                                <h3 className="text-xl font-semibold">{experience.title}</h3>
                                <time className="text-xs uppercase text-color-secondary">{experience.company} - {experience.date}</time>
                                <p className="mt-3">{experience.description}</p>
                            </motion.div>
                        ))}


                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
)

export default Timeline