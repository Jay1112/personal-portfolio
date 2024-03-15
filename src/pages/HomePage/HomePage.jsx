import SideBarWrapper from '../../components/SideBarWrapper/SideBarWrapper';
import NavBarWrapper from '../../components/NavBarWrapper/NavBarWrapper';
import Content from '../../components/Content/Content';
import useWindowSize from '../../hooks/useWindowSize';

function HomePage(){
    const { size } = useWindowSize();

    console.log(size);

    return (
        <>
            {
                size.width >= 768 && 
                <SideBarWrapper>
                    <Content key={'desktop-content'} />
                </SideBarWrapper>
            }
            {
                size.width < 768 &&
                <NavBarWrapper>
                    <Content key={'mobile-content'} />
                </NavBarWrapper>
            }
        </>
    );
}

export default HomePage;