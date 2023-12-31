import computer from '../assets/laptop-gfbf2d6cf6_1280.jpg'

const About = () => {
    return (
        <div id="about" className="lg:ml-32 lg:p-28 lg:flex lg:justify-center relative lg:gap-14" >
            <img className='w-[450px] p-10 rounded-xl lg:p-0 relative' src={computer} alt="" />
            <img className='w-[150px] hidden lg:block p-10 lg:p-0 animate-spin-slow bg-white rounded-full absolute bottom-20 left-[480px] ' src='../../src/assets/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg' alt="" />
            <div className="mt-7 text-center lg:mt-0 lg:text-left space-y-3">
                <h1 className='text-blue-500 font-semibold text-2xl'>ABOUT ME</h1>
                <p className='font-bold lg:text-2xl'> A dedicated Front-end Developer<br />based in Dhaka, Bangladesh <span className='hidden lg:block'>📍</span></p>
                <p className='lg:w-[70%] p-4'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
            
        </div>
    );
};

export default About;