import './App.css';
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"


function App() {
  return (
    <>
     <Nav />
      <Home
        titolo="Model 3"
        para="Prenota un test drive senza contatto"
        button=""
        btnleft="Ordine Personalizzato"
        paradown="Scopri di più su Tesla per le aziende"
        arrow=" "
      />
    </>
  );
}

export default App;

