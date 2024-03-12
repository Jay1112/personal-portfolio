import { useDispatch, useSelector } from "react-redux";
import { menuList } from "../../mock/menuList";
import clsx from "clsx";
import {AppActions} from '../../redux/actions/app-actions';

function SideBarItem(props){
    const { tabData } = props;
    const app = useSelector((state)=>state.app);

    function onTabClicked(e){
        props.onMenuTabClicked(tabData.id);
    }

    return (
        <div onClick={onTabClicked} key={tabData.id} className={clsx("aspect-square cursor-pointer flex items-center justify-center flex-col p-3 my-4 rounded-md", tabData.id === app.setSelectedTab ? 'bg-indigo-600 text-white' : 'itheme hover:bg-[var(--primary)] hover:text-slate-900')} title={tabData.title}>
            <p className="text-2xl">{tabData.icon}</p>
        </div>
    );
}

function SideBar(){
    const dispatch = useDispatch();

    function onMenuTabClicked(tabId){
        dispatch({ type : AppActions.SET_SELECTED_MENU_KEY, payload : tabId });
    }

    return (
        <div>
            {
                menuList.map((item)=>{
                    return <SideBarItem key={item.id} tabData={item} onMenuTabClicked={onMenuTabClicked} />
                })
            }
        </div>
    );
}

export default SideBar;