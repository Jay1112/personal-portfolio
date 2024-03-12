import TitleStripe from '../../components/TitleStripe/TitleStripe';

function Content(){
    return (
        <div className="w-full">
            <div className='w-full'>
                <div id="home" className="w-full min-h-[calc(100vh-48px)] h-auto">
                </div>
                <div id="work" className="w-full min-h-[calc(100vh-48px)] h-auto">
                    <TitleStripe title={'Work Experience'}></TitleStripe>
                </div>
                <div id="education" className="w-full min-h-[calc(100vh-48px)] h-auto">
                    <TitleStripe title={'Education'}></TitleStripe>
                </div>
                <div id="projects" className="w-full min-h-[calc(100vh-48px)] h-auto">
                    <TitleStripe title={'Projects'}></TitleStripe>
                </div>
                <div id="contact" className="w-full min-h-[calc(100vh-48px)] h-auto">
                    <TitleStripe title={'Contact'}></TitleStripe>
                </div>
            </div>
        </div>
    );
}

export default Content;