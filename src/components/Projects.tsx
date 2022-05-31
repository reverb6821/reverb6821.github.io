import Andromeda from '../assets/projects/andromeda.png'
const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#1e1e1e]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>
            Projects
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid xl:grid-cols-2 md:grid-cols-3 gap-4  '>

          {/* Andromeda */}
          <div
            style={{backgroundImage: `url(${Andromeda})`, backgroundSize: 'cover'}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
               Andromeda
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1e1e1e] text-[#fff] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target="_blank" href='https://github.com/reverb6821/andromeda'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#1e1e1e] text-[#fff] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*END Andromeda */}
          
        </div>


        
      </div>
    </div>
  );
};

export default Projects;
