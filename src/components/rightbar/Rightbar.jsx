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
            </div>
        </div>
    );
};

export default Rightbar;
