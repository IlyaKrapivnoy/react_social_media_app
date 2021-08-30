import React from 'react';
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className='profileRight'>
                    <div className='profileTop'>TESTTEST</div>
                    <div className='profileBottom'>
                        <Feed />
                        <Rightbar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
