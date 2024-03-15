import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppActions } from '../../redux/actions/app-actions';

function NavBarWrapper({
    children
}){
    const dispatch = useDispatch();
    const { hash } = useLocation();

    const contentContainerStyle = {
        scrollBehavior : 'smooth',
    }

    useEffect(()=>{
        const contentContainer = document.querySelector('.content-container');
        const titleBlocks = document.getElementsByClassName('content-block');

        if(titleBlocks){
            for(let i = 0 ; i < titleBlocks?.length; i++){
                const block = titleBlocks[i];
                const blockId = `#${block?.getAttribute('id')}`;
                if(hash === blockId){
                    block.scrollIntoView({ behavior: "smooth" });
                }
            }
        }

        const checkViewPort = (event) => {
            let currentTop = contentContainer?.scrollTop + contentContainer?.offsetTop ;
            let delta = 1 ;
            if(currentTop && titleBlocks){
                for(let i = 0 ; i < titleBlocks?.length ; i++){
                    const startingPoint = titleBlocks[i]?.offsetTop;
                    const endingPoint = startingPoint + titleBlocks[i]?.offsetHeight ;
                    if(i === titleBlocks?.length - 1){
                        currentTop = currentTop + delta;
                    }
                    if(startingPoint <= currentTop && currentTop <= endingPoint){
                        dispatch({ type : AppActions.SET_SELECTED_MENU_KEY, payload : i + 1 });
                    }
                }
            }
        }

        if(contentContainer){
            contentContainer?.addEventListener('scroll',checkViewPort);
        }
 
        return () => {
            contentContainer?.removeEventListener('scroll',checkViewPort);
        }
     },[]);

    return (
        <div className="flex flex-col md:hidden w-screen h-screen overflow-x-hidden overflow-y-auto items-start justify-start bg-[var(--primary)]">
            <div className='fade-up py-4 px-4 flex items-center justify-center flex-col w-full overflow-y-auto'>
                <div className="w-full theme rounded-md">
                    <NavBar />
                </div>
                <div className="theme w-full rounded-md flex items-stretch justify-center overflow-y-auto content-container mt-4" style={contentContainerStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default NavBarWrapper;