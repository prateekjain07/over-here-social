import './sidebar.css'
import { RssFeed, School, Event, WorkOutline, HelpOutline, Bookmark, Group, PlayCircleFilledOutlined, Chat } from '@material-ui/icons';
import {Users} from '../../DummyData';
import CloseFriend from '../closeFriends/CloseFriend';
export default function Sidebar() {
    const iconArray = [
        { icon: <RssFeed className='sidebarIcon' />, label: "Feed" },
        { icon: <Chat className='sidebarIcon' />, label: "Chats" },
        { icon: <PlayCircleFilledOutlined className='sidebarIcon' />, label: "Videos" },
        { icon: <Group className='sidebarIcon' />, label: "Groups" },
        { icon: <Bookmark className='sidebarIcon' />, label: "Bookmarks" },
        { icon: <HelpOutline className='sidebarIcon' />, label: "Questions" },
        { icon: <WorkOutline className='sidebarIcon' />, label: "Jobs" },
        { icon: <Event className='sidebarIcon' />, label: "Events" },
        { icon: <School className='sidebarIcon' />, label: "Courses" },
    ]
    // Important piece of code for learning React
    // A good rule of thumb is that elements inside the map() call need keys.
    // Second map function I used is just to create something like <li></li> * 10
    // PS. map functions NEVER End with ;
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {
                        iconArray.map((element, i) => {
                            return (
                                <li className="sidebarListItem" key={element.label}>
                                    { /* Always important to set a unique key in scenario such as this*/}
                                    {element.icon}
                                    <span className="sidebarListItemText">{element.label}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {
                        Users.map((u) =>(
                            <CloseFriend key={u.id} user={u} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
