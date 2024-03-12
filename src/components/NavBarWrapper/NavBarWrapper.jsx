function NavBarWrapper({
    children
}){
    return (
        <div className="flex md:hidden">
            { children }
        </div>
    );
}

export default NavBarWrapper;