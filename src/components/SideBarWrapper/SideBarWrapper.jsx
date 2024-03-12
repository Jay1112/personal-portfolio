import SideBar from "../SideBar/SideBar";

function SideBarWrapper({
    children
}){
    return (
        <div className="hidden md:flex w-screen h-screen overflow-x-hidden overflow-y-auto md:items-stretch md:justify-center bg-[var(--primary)]">
            <div className="fade-up px-6 pr-3 py-6 flex items-stretch justify-center">
                <div className="theme rounded-md px-4">
                    <SideBar/>
                </div>
            </div>
            <div className="fade-up flex-1 px-6 py-6 pl-3 flex items-stretch justify-center">
                <div className="theme w-full rounded-md">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SideBarWrapper;