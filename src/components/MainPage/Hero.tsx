import * as React from 'react';
import Image from 'next/image';
import { HeroProps } from '@/interfaces/components.properties';

const Hero:React.FC<HeroProps> = ({avatar}) => {
return(
    <React.Fragment>
        <section className="flex flex-row justify-center items-start overflow-hidden bg-color-primary h-full">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 ">
          <h1 className="text-4xl md:text-8xl font-bold text-color-primary my-2">
            Giuseppe Gigliotti
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-color-primary my-2">
            Frontend Developer.
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold text-color-primary my-2">
            Javascript Enthusiast.
          </h1>
          <div className='h-[200px]'>
          </div>
        </div>
        <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
          <div className="w-3/4 ">
            {/* <Image src={avatar} width={0} height={0} alt="avatar" className="shadow-xl" /> */}
          </div>
        </div>
      </section>
    </React.Fragment>
)
}

export default Hero