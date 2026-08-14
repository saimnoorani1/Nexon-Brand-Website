import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/components";
import { Hero } from "./components/components";
import { Products } from "./components/components";
import { Features } from "./components/components";
import { Reviews } from "./components/components";
import { Footer } from "./components/components";

function App() {
  const [cartcounter , setcartcounter] = useState(0)
  return (
    <>
      < Navbar cartcounter={cartcounter}/>
      < Hero />
      < Products cartcounter={cartcounter} setcartcounter={setcartcounter}/>
      < Features />
      < Reviews />
      < Footer />

      <a href="https://wa.me/923089862109" target="_blank" className="whatsappbtn" rel="noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

    </>
  )

}



export default App
