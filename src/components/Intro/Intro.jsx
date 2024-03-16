import ProfileImage from '../../assets/profile.jpeg';

function Intro(){

    function onProjectClicked(){
        const projectSection = document.querySelector('#projects');
        if(projectSection){
            projectSection.scrollIntoView({ behavior : 'smooth' });
        }
    }

    function onContactClicked(){
        const contactSection = document.querySelector('#contact');
        if(contactSection){
            contactSection.scrollIntoView({ behavior : 'smooth' });
        }
    }


    return (
        <div className="w-full flex items-center justify-between flex-col">
            <div className="w-full h-[250px] commmon-gradient relative common-box-shadow">
                <img 
                    className=' p-2 theme rounded-full absolute top-[150px] left-1/2 -translate-x-1/2  md:left-[50px] md:translate-x-0 hover:p-0 cursor-pointer duration-300 '
                    src={ProfileImage}
                    width={200}
                    height={200}
                    alt="Profile"
                />
                <h1 className='text-4xl font-semibold text-indigo-500 poppins absolute top-[360px] left-1/2 md:left-[150px] -translate-x-1/2'>
                    Jay Patel
                </h1>
            </div>
            <div className='h-[150px] w-full'></div>
            <div className='w-full p-2 flex-1 flex items-stretch justify-center'>
                <div className='w-full md:w-1/2'>
                    <p className='w-full text-justify p-2 poppins text-lg md:pl-[54px]'>
                        &nbsp; &nbsp; I'm Jay Patel, a software engineer with 3+ years of experience. I love solving problems and creating cool stuff with programming. I've learned different programming languages and tools to make programs. Outside of work, I like to keep learning about new technology trends and ways to improve. I'm excited to keep growing in my career and making a positive impact with my skills.
                    </p>
                    <div className='p-2 md:pl-[54px] flex items-center justify-center md:justify-start'>
                        <button onClick={onContactClicked} className='p-2 px-4 rounded-sm border-2 border-transparent bg-indigo-600 hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 text-xl poppins text-white mr-2'>
                            Contact
                        </button>
                        <button onClick={onProjectClicked} className='p-2 px-4 rounded-sm border-2 text-indigo-600 border-indigo-600 text-xl poppins hover:bg-indigo-600 hover:text-white hover:border-indigo-600'>
                            Projects
                        </button>
                    </div>
                </div>
                <div className='flex-1 p-2 hidden md:block'>
                    -
                </div>
            </div>
        </div>
    );
}

export default Intro;