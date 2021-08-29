import './sidebar.css';
import {
    RssFeed,
    Forum,
    VideoLibrary,
    PeopleAlt,
    Bookmark,
    LiveHelp,
    WorkOutline,
    Event,
    School,
} from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Forum className='sidebarIcon' />
                        <span className='sidebarListItemText'>Chat</span>
                    </li>
                    <li className='sidebarListItem'>
                        <VideoLibrary className='sidebarIcon' />
                        <span className='sidebarListItemText'>Videos</span>
                    </li>
                    <li className='sidebarListItem'>
                        <PeopleAlt className='sidebarIcon' />
                        <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarListItemText'>Bookmark</span>
                    </li>
                    <li className='sidebarListItem'>
                        <LiveHelp className='sidebarIcon' />
                        <span className='sidebarListItemText'>Question</span>
                    </li>
                    <li className='sidebarListItem'>
                        <WorkOutline className='sidebarIcon' />
                        <span className='sidebarListItemText'>Job</span>
                    </li>
                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon' />
                        <span className='sidebarListItemText'>Event</span>
                    </li>
                    <li className='sidebarListItem'>
                        <School className='sidebarIcon' />
                        <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='sidebarBtn'>Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img
                            className='sidebarFriendImg'
                            alt='friend'
                            src='/assets/person/2.jpeg'
                        />
                        <span className='sidebarFriendName'>Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
