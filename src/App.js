import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Restorani from './components/Restorani';

function App() {
  const restorani = [
    {
      id:1,
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/160/IMG_4682.jpg",
      naziv: "Sweet & Salty",
      lokacija: "Antifašističke borbe 23d",
      ocena: "4.5",
      kontakt: "066 00 44 88",
      rezervacija:""
    },
    {
      id:2,
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/170/restoran_dolly_bell_36.jpg",
      naziv: "Dolly Bell",
      lokacija: "Bulevar Mihajla Pupina 165b",
      ocena: "4.3",
      kontakt: "066 222 151",
      rezervacija: ""
    },
    {
      id:3,
      slika: "https://www.restoranibeograd.com/storage/news/interior/770/restoran_langouste_3.jpg",
      naziv: "Langouste",
      lokacija: "Kosančićev venac 29",
      ocena: "4.7",
      kontakt: "066 222 151",
      rezervacija: ""
    },
    {
      id:4,
      slika: "https://www.restoranibeograd.com/storage/restaurant/interior/137/restoran_legat_1903_21.jpg",
      naziv: "Legat 1903",
      lokacija: "Jasenička 7",
      ocena: "4.8",
      kontakt: "066 222 151",
      rezervacija: ""
    },
    {
      id:5,
      slika: "https://www.primaverabelgrade.com/wp-content/uploads/2020/11/primavera-ambijent-15.jpg",
      naziv: "Primavera",
      lokacija: "Bulevar Vudroa Vilsona 12",
      ocena: "4.3",
      kontakt: "069 55 44 00",
      rezervacija: ""
    }
  ]

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Restorani restorani={restorani}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
