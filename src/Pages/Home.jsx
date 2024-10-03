import  { useState } from "react";
import RateTheRestroom from "../components/RateTheRestroom"; 
import Map from '../components/Map';
import Popup from '../components/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

function Home() {
  const [popupContent, setPopupContent] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState([0, 0]);

 




  return (
    <div className="Home-background">
      <div className="home">
        <Header />


<div className="map">
<div id="map-container" className="card mx-auto" style={{ maxWidth: '800px', borderRadius: '10px', overflow: 'hidden', margin: '30px auto' }}>
                <Map
                    setPopupContent={setPopupContent}
                    setShowPopup={setShowPopup}
                    setPopupPosition={setPopupPosition}
                />
            </div>
            <Popup
                content={popupContent}
                position={popupPosition}
                show={showPopup}
                onClose={() => setShowPopup(false)}
            />
</div>
        
        <RateTheRestroom />

        <section className="features">
          <h3>Core Features</h3>
          <div className="feature-cards">
            <div className="feature-card-1">
              <img src="/network.png" alt="Crowdsourced Data" className="feature-icon" />
              <h4>Crowdsourced Data</h4>
              <p>Locate the nearest restroom based on real-time user data.</p>
            </div>
            <div className="feature-card-2">
              <img src="/star_rating.png" alt="Cleanliness Ratings" className="feature-icon" />
              <h4>Cleanliness Ratings</h4>
              <p>Access reviews and cleanliness ratings for public restrooms.</p>
            </div>
            <div className="feature-card-3">
              <img src="/google_map.png" alt="Google Maps Integration" className="feature-icon" />
              <h4>Google Maps Integration</h4>
              <p>Get directions to the nearest public restroom facility quickly.</p>
            </div>
            <div className="feature-card-4">
              <img src="/ambulance.png" alt="Emergency Mode" className="feature-icon" />
              <h4>Emergency Mode</h4>
              <p>Quick access to the nearest restroom regardless of ratings.</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-left">
            Built with ❤️ by our community of restroom finders.
          </div>
          <div className="footer-right">
            © 2024 Public Restroom Finder. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
