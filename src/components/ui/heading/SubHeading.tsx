import * as React from 'react';
import { SubHeadingProps } from '@/interfaces/components.properties';

const SubHeading:React.FC<SubHeadingProps> = ({ description}) => {
    return(
        <React.Fragment>
            <div className="bg-color-secondary -mt-4">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p className="leading-loose text-lg md:text-2xl font-semibold text-color-secondary mx-4 pb-10" style={{ lineHeight: "2rem" }} >
                        { description}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SubHeading