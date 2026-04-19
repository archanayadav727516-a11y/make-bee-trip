import logo from "./assets/logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hotels")
      .then(res => setHotels(res.data));
  }, []);

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
      

   <img 
        src={logo} 
        alt="Make Bee Trip"
        style={{ maxHeight: "50px", objectFit: "contain" ,borderRadius:"50%",marginLeft:"10px"}}
        
      />
        <h1 style={{
          display:"inline-block",
        top: "50%",
        // left: "50%",
        objectFit:"contain",
        transform: "translate(-210%, -30%)",
       color:"red",
      }}>
        Make Bee Trip
      </h1>
     
        <div className="nav-links">
          <span>Flights</span>
          <span>Bus</span>
          <span>Train</span>
          <span>Hotels</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div>
  
  <h1 >Explore the World</h1>
        <p>Book Flights, Bus, Train & Hotels easily</p>
</div>
      </div>

      {/* Services */}
      <div className="card-container">
        {["✈️ Flights", "🚌 Bus", "🚆 Train", "🏨 Hotels"].map((item, i) => (
          <div key={i} className="card">
            <h3>{item}</h3>
            <p>Best deals available</p>
            <button>Explore</button>
          </div>
        ))}
      </div>

      {/* Hotels */}
      <div>
        <h2 style={{ textAlign: "center" }}>Popular Hotels</h2>
        <div className="card-container">
          {hotels.map((h, i) => (
            <div key={i} className="card">
              <h3>{h.name}</h3>
              <p>₹{h.price}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>

    </div>
        
//     
  );
}

export default App;


