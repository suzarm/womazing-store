
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Collection from '../components/Collection';
import Important from '../components/Important';
import Team from '../components/Team';
import Footer from '../components/Footer';


function Home() {
    return (
        <div className="Home-page">
            <div className='navbar-wrapper'>
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div className='wrapper'>
                <Collection></Collection>
                <Important></Important>
                <Team></Team>
            </div>
            <Footer></Footer>
        </div>
    );
  }
  
  export default Home;