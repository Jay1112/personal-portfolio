import { AiFillHome } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

export const menuList = [
    {
        id : 1,
        title : 'Home',
        icon : <AiFillHome />
    },
    {
        id : 2,
        title : 'Work',
        icon : <MdOutlineWork />
    },
    {
        id : 3,
        title : 'Education',
        icon : <FaUserGraduate />
    },
    {
        id : 4,
        title : 'Projects',
        icon : <FaProjectDiagram />
    },
    {
        id : 5,
        title : 'Contact',
        icon : <RiContactsBook2Fill />
    }
];