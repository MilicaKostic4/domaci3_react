import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Restorani from './components/Restorani';
import Omiljeni from './components/Omiljeni';
import { useState } from 'react';

function App() {
  const [favouriteRest, setFavouriteRes] = useState([]);
  const [restorani, setRes] = useState([
    {
      id:1,
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/160/IMG_4682.jpg",
      naziv: "Sweet & Salty",
      lokacija: "Antifašističke borbe 23d",
      ocena: "4.5",
      kontakt: "066 00 44 88",
      rezervacija:"",
      omiljeni: 0
    },
    {
      id:2,
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/170/restoran_dolly_bell_36.jpg",
      naziv: "Dolly Bell",
      lokacija: "Bulevar Mihajla Pupina 165b",
      ocena: "4.3",
      kontakt: "066 222 151",
      rezervacija: "",
      omiljeni: 0
    },
    {
      id:3,
      slika: "https://www.restoranibeograd.com/storage/news/interior/770/restoran_langouste_3.jpg",
      naziv: "Langouste",
      lokacija: "Kosančićev venac 29",
      ocena: "4.7",
      kontakt: "066 222 151",
      rezervacija: "",
      omiljeni: 0
    },
    {
      id:4,
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/137/restoran_legat_1903_21.jpg",
      naziv: "Legat 1903",
      lokacija: "Jasenička 7",
      ocena: "4.8",
      kontakt: "066 222 151",
      rezervacija: "",
      omiljeni: 0
    },
    {
      id:5,
      slika: "https://www.primaverabelgrade.com/wp-content/uploads/2020/11/primavera-ambijent-15.jpg",
      naziv: "Primavera",
      lokacija: "Bulevar Vudroa Vilsona 12",
      ocena: "4.3",
      kontakt: "069 55 44 00",
      rezervacija: "",
      omiljeni: 0
    }
  ]);

  function omiljeniRefresh(){
    let omiljeniRestorani = restorani.filter((rest)=> rest.omiljeni===1);
    setFavouriteRes(omiljeniRestorani);
  }

  function dodajUOmiljene(id, naziv){
    console.log("Restoran " + naziv + " je dodat u omiljene." );
    restorani.forEach((restoran) =>{
      if(restoran.id===id){
        restoran.omiljeni=1;
      }
    });
    omiljeniRefresh();

  }

  function ukloniIzOmiljenih(id, naziv){
    console.log("Restoran " + naziv + " je uklonjen iz omiljenih." );
    restorani.forEach((restoran) =>{
      if(restoran.id===id){
        restoran.omiljeni=0;
        restoran.rezervacija="";
      }
    });
    omiljeniRefresh();
  }

  function rezervisi(id){
    restorani.forEach((r) =>{
      if(r.id===id){
        r.rezervacija= prompt('Unesite zeljeni termin');
      }
    });
    omiljeniRefresh();
  }


  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Restorani restorani={restorani} dodavanje={dodajUOmiljene} ukloni={ukloniIzOmiljenih}/>}></Route>
          <Route path="/omiljeni" element={<Omiljeni restorani={favouriteRest} ukloni={ukloniIzOmiljenih} rezervisi={rezervisi}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
