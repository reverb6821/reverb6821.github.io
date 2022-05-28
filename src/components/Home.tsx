import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1e1e1e]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>hello_world, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#e9eaf0]'>
           Giuseppe Gigliotti
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#a8a9ad]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#a8a9ad] py-4 max-w-[700px]'>
          I’m a full-stack developer based in Italy, open source project and JavaScript enthusiast.
        </p>

      </div>
    </div>
  );
};

export default Home;