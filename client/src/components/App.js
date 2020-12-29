import React from "react";
import Header from "./Header";
import Image from "./Image";
import Info from "./Info";
import Footer from "./Footer";
import img from "../assets/images/home.png";
import "../styles.css";

function App() {
  return (
   <div>
     <Header />
     <div className = "landing">
        <Image url={img} alt="students" />
        <Info />
     </div>
     <Footer />
   </div>
  );
}

export default App;
