import SideBarWrapper from '../../components/SideBarWrapper/SideBarWrapper';
import NavBarWrapper from '../../components/NavBarWrapper/NavBarWrapper';
import Content from '../../components/Content/Content';

function HomePage(){
    return (
        <>
            <SideBarWrapper>
                <Content key={'desktop-content'} />
            </SideBarWrapper>
            <NavBarWrapper>
                <Content key={'mobile-content'} />
            </NavBarWrapper>
        </>
    );
}

export default HomePage;