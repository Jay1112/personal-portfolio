import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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
            let delta = 1 ;
            let currentTop = contentContainer?.scrollTop + contentContainer?.offsetTop + delta ;
            if(currentTop && titleBlocks){
                for(let i = 0 ; i < titleBlocks?.length ; i++){
                    const startingPoint = titleBlocks[i]?.offsetTop;
                    const id = titleBlocks[i]?.getAttribute('id');
                    const endingPoint = startingPoint + titleBlocks[i]?.offsetHeight ;
                    if(startingPoint <= currentTop && currentTop <= endingPoint){
                        if(id !== 'home'){
                            window.history.pushState(null, null, `#${id}`);
                        }
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