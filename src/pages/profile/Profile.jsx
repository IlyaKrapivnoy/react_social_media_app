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
                    <div className='profileTop'>
                        <div className='profileCover'>
                            <img
                                alt='cover'
                                src='assets/post/3.jpeg'
                                className='profileCoverImg'
                            />
                            <img
                                alt='user'
                                src='assets/person/7.jpeg'
                                className='profileUserImg'
                            />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Bart Simpson</h4>
                            <span className='profileInfoDescr'>
                                Hello my friends!
                            </span>
                        </div>
                    </div>
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
