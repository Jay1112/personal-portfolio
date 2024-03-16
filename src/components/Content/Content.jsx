import TitleStripe from '../../components/TitleStripe/TitleStripe';
import Intro from '../Intro/Intro';

function Content(){

    return (
        <div className="w-full">
            <div className='w-full'>
                <div id="home" className="w-full min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block flex items-stretch justify-center">
                    <Intro />
                </div>
                <div id="work" className="w-full min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Work Experience'}></TitleStripe>
                </div>
                <div id="education" className="w-full min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Education'}></TitleStripe>
                </div>
                <div id="projects" className="w-full min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Projects'}></TitleStripe>
                </div>
                <div id="contact" className="w-full min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Contact'}></TitleStripe>
                </div>
            </div>
        </div>
    );
}

export default Content;