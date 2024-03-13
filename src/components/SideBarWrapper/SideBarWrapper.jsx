import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppActions } from "../../redux/actions/app-actions";

function SideBarWrapper({
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
            const currentTop = contentContainer?.scrollTop + contentContainer?.offsetTop ;
            if(currentTop && titleBlocks){
                for(let i = 0 ; i < titleBlocks?.length ; i++){
                    const startingPoint = titleBlocks[i]?.offsetTop;
                    const endingPoint = startingPoint + titleBlocks[i]?.offsetHeight ;
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
        <div className="hidden md:flex w-screen h-screen overflow-x-hidden overflow-y-auto md:items-stretch md:justify-center bg-[var(--primary)]">
            <div className="fade-up px-6 pr-3 py-6 flex items-stretch justify-center">
                <div className="theme rounded-md px-4">
                    <SideBar/>
                </div>
            </div>
            <div className="fade-up flex-1 px-6 py-6 pl-3 flex items-stretch justify-center">
                <div className="theme w-full rounded-md flex items-stretch justify-center overflow-y-scroll content-container" style={contentContainerStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SideBarWrapper;