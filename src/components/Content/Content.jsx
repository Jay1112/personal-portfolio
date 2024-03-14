import TitleStripe from '../../components/TitleStripe/TitleStripe';

function Content(){

    return (
        <div className="w-full">
            <div className='w-full'>
                <div id="home" className="w-full min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                </div>
                <div id="work" className="w-full min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Work Experience'}></TitleStripe>
                </div>
                <div id="education" className="w-full min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Education'}></TitleStripe>
                </div>
                <div id="projects" className="w-full min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Projects'}></TitleStripe>
                </div>
                <div id="contact" className="w-full min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-48px)] h-auto relative content-block">
                    <TitleStripe title={'Contact'}></TitleStripe>
                </div>
            </div>
        </div>
    );
}

export default Content;