import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

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
                    {Users.map((u) => (
                        <Online user={u} key={u.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Rightbar;
