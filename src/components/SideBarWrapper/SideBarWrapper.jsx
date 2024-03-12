import SideBar from "../SideBar/SideBar";

function SideBarWrapper({
    children
}){

    const contentContainerStyle = {
        scrollBehavior : 'smooth',
        // border : '1px solid blue'
    }

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