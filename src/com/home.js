import './home.css';
import Smart from './smart';
import Footer from './footer';
import Flast from './flast';

function Home() {
    return (
        <>
        
        <div className="parallax">
            <div className="home-content">
                <h1 className='hn'>NEXT EARTH WEB3 BUSINESS SOLUTIONS</h1>
                <p className='hp'>Smart contract based ecosystem with Initial Map Offering</p>
                <div className='grid sm:grid-cols-2'>
                    <div className='homebox'>
                        <div className='him'>
                            <img src="https://nextearth.io/modules/main/images/new/arrow.png" alt="arrow" />
                        </div>
                        <div className='homedec'>
                            <h1>Universal Grid Technology</h1>
                            <h1>with NFT based ownership</h1>
                        </div>
                    </div>
                    <div className='homebox'>
                        <div className='him'>
                            <img src="https://nextearth.io/modules/main/images/new/arrow.png" alt="arrow" />
                        </div>
                        <div className='homedec'>
                            <h1>Universal Grid Technology</h1>
                            <h1>with NFT based ownership</h1>
                        </div>
                    </div>
                </div>
                <h1 className='he'>"Out of the box Web3 business solutions, in a box."</h1>
            </div>
        </div>

        <Smart/>
        <Footer/>
        <Flast/>
        </>
    );
}

export default Home;
