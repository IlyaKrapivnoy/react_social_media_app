import React from 'react';
import './closeFriend.css';

const CloseFriend = ({ user }) => {
    return (
        <li className='sidebarFriend'>
            <img
                className='sidebarFriendImg'
                alt='friend'
                src={user.profilePicture}
            />
            <span className='sidebarFriendName'>{user.userName}</span>
        </li>
    );
};

export default CloseFriend;
