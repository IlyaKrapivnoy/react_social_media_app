import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';

const Home = () => {
    return (
        <div>
            <Topbar />
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    );
};

export default Home;
