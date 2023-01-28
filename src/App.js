import "./App.css";
import Navbar from "./component/Navbar";
import MobilCard from "./component/MobilCard";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";


function App() {
  const [mobile, setMobile] = useState( [
    {
      image:
      "https://electrotounes.tn/12691-large_default/smartphone-xiaomi-redmi-10-4go128go.jpg",      
      description:"smartphone-xiaomi-redmi-10-4go128go 12691-large_default " ,     
      prix: 600.00,
      type: "xiaomi-redmi-10",
    },
    {
      image:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-14-Plus/Blue/Apple-iPhone-14-Plus-Blue-thumbnail.png",      
      description:
        "Apple-iPhone-14-Plus Blue",
      prix: 400.0,
      type: "Apple-iPhone-14-Plus Blue",
    },
    {
      image:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/Google/Google-Pixel-7/Obsidian/Google-Pixel-7-Obsidian-thumbnail.png",      
      description:
        "Les iPhone 14 Pro sont officiels. Avec ses smartphones haut de gamme, Apple inaugure un nouveau design sans encoche, un appareil photo amélioré et un écran équipé d’une fonction always-on. On fait le point sur les nouveautés",
      prix: 900.0,
      type: "iphone 14 pro Max",
    },
    {
      image:
        "https://selectshop.tn/17583-medium_default/smartphone-tecno-spark-7p-64go-4go-noir.jpg",

      description:
        "Écran : 6.8 HD IPS LCD 90Hz Résolution : 720 x 1640 pixels (~263 ppi density) Processeur : Mediatek Helio G70 Octa-core (2x2.0 GHz Cortex-A75 & 6x1.7 ",
      prix: 459.0,
      type: "smartphone tecno spark 7p 64GO 4Go bleu",
    },
    {
      image:
        "https://lofficielshop.tn/868-large_default/telephone-portable-nokia-c1-ds-16go-nena2.jpghttps://lofficielshop.tn/868-large_default/telephone-portable-nokia-c1-ds-16go-nena2.jpg",
      description:
        "Double SIM - Ecran: 5.45 FWVGA+ IPS - Résolution: 960 x 480 pixels - Systéme dexploitation: Android 9.0 Pie - Processeur: Mediatek MT6739WW Quad-Core 1.3 GHz - RAM: 1 Go - Stockage: 16 Go Extensible Jusqu à 64 Go - Appareil Photo Arriére: 5.0 MégaPixels autofocus, flash LED, Appareil Photo Frontale: 5.0 Mégapixels - Connctivité: 3G, Wifi et Bluetooth - Autonomie de Batterie: 2500 mAh - Couleur: Rouge",
      prix: 1379.0,
      type: "telephone-portable-nokia-c1-ds-16go-nena2",
    },
  ])
  return (
    <div className="App">
      <Navbar />
     <Routes>
        <Route path="/" element={       <Header/>        
}/>
        <Route path="/déposer une annence" element={<h1>DEPOSER MON ANNOCE</h1>}/>
        <Route path="/mon compte" element={
          <form className="form">
            <input type="text" placeholder="nom"/>
            <input type="text" placeholder="prenon"/>
            <input type="text" placeholder="adresse"/>
            <input type="text" placeholder=" confirm adresse"/>
            <input tupe="password" placeholder="password"/>
            <input tupe="password" placeholder=" confirm password"/>
            <button>validez</button>
           </form>
        }/>
       </Routes>
{mobile.map(el=><MobilCard mobil={el}/>)}

    </div>
  );
}
export default App;