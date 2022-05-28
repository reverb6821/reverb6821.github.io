import { SiAngularjs, SiExpress, SiSpringboot,SiTailwindcss, SiReact,SiVisualstudiocode,SiWebpack,SiTypescript,SiMysql,SiNodedotjs, SiGithub, SiSass } from "react-icons/si";

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#1e1e1e] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='m-5 p-2'>
                        <SiTypescript className='w-20 mx-auto' size={50} color={'#2F74C0'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiReact className='w-20 mx-auto' size={50} color={'#61DAFB'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiAngularjs className='w-20 mx-auto' size={50} color={'#D6002F'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiWebpack className='w-20 mx-auto' size={50} color={'#6FA6C2'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiSass className='w-20 mx-auto' size={50} color={'#C26191'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiTailwindcss className='w-20 mx-auto' size={50} color={'#6fc2b0'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiNodedotjs className='w-20 mx-auto' size={50} color={'#74A370'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiExpress className='w-20 mx-auto' size={50} color={'#FFF'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiSpringboot className='w-20 mx-auto' size={50} color={'#63B341'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiMysql className='w-20 mx-auto' size={50} color={'#D68500'} />
                        
                    </div>


                    <div className='m-5 p-2' >
                        <SiGithub className='w-20 mx-auto' size={50} color={'#6A2D94'} />
                        
                    </div>
                    <div className='m-5 p-2' >
                        <SiVisualstudiocode className='w-20 mx-auto' size={50} color={'#007ACC'} />
                        
                    </div>

            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;