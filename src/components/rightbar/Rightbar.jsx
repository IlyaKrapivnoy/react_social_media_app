import './rightbar.css';

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img
                        className='birthdayImg'
                        src='/assets/gift.png'
                        alt='b-day'
                    />
                    <span className='birthdayText'>
                        <b>Bart Simpson</b> and <b>5 other friends</b> have a
                        birthday today.
                    </span>
                </div>
                <img className='rightbarAd' src='/assets/ad.png' alt='ad' />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/3.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/4.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/5.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/6.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/7.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/8.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/9.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/10.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img
                                className='rightbarProfileImg'
                                src='assets/person/1.jpeg'
                                alt='ad'
                            />
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>
                            Milhouse Van Houten
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Rightbar;
