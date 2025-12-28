import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Acerca from "./Components/Acerca";
import "./assets/CSS/App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Navigation/>
      </header>

      <main className="app-content">
        <Hero/>
        <Acerca/>
      </main>
    </div>
  );
};

export default App;
