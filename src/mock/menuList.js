import { AiFillHome } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

export const menuList = [
    {
        id : 1,
        title : 'About',
        icon : <AiFillHome />,
        link : '#home'
    },
    {
        id : 2,
        title : 'Work',
        icon : <MdOutlineWork />,
        link : '#work'
    },
    {
        id : 3,
        title : 'Education',
        icon : <FaUserGraduate />,
        link : '#education'
    },
    {
        id : 4,
        title : 'Projects',
        icon : <FaProjectDiagram />,
        link : '#projects'
    },
    {
        id : 5,
        title : 'Contact',
        icon : <RiContactsBook2Fill />,
        link : '#contact'
    }
];