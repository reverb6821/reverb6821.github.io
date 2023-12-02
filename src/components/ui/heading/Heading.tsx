import * as React from 'react';
import { HeadingProps } from '@/interfaces/components.properties';

const Heading: React.FC<HeadingProps> = ({ title }) =>{
    return(
        <React.Fragment>
            <div className="max-w-6xl mx-auto h-48 bg-color-primary">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left text-color-primary">
                    {title}
                </h1>
            </div>
        </React.Fragment>
    )
}

export default Heading