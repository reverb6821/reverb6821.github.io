import * as React from 'react';
import Heading from '@/components/ui/heading/Heading';
import SubHeading from '@/components/ui/heading/SubHeading';
import ExperienceCard from '@/components/Experience/ExperienceCard';
import experienceData from './data'

const Experience = () => {
return(
    <React.Fragment>
        <section className="bg-color-primary">
            <Heading title='Experience' />
            <SubHeading description='' />
            <div className="bg-color-primary -mt-4 pb-20">
                <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
                    {experienceData.map((exp, id) => (
                        <>
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            title={exp.title}
                            desc={exp.desc}
                            year={exp.year}
                            company={exp.company}
                        />
                        {id === experienceData.length - 1 ? null : (
                            <div className="divider-container flex flex-col items-center -mt-2">
                            <div className="w-1 h-24 -mt-2"></div>
                            </div>
                        )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    </React.Fragment>
)
}

export default Experience