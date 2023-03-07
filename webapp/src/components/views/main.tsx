import React from "react";
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";
import LoginForm from "./logIn";
import ProfileViewer from "./profile";
import { useState} from "react";


import { useNavigate } from 'react-router-dom';


function App(): JSX.Element {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //With this we can control the login status for solid
  const { session } = useSession();

  //We have logged in
  session.onLogin(()=>{
    setIsLoggedIn(true)
  })

  //We have logged out
  session.onLogout(()=>{
    setIsLoggedIn(false)
  })

  const callLogin = () => {
  
    // This will navigate to first component
    navigate('/login'); 
  };

  return (
    /*
    <SessionProvider sessionId="log-in-example">
      {(!isLoggedIn) ? <LoginForm/> : <ProfileViewer/>}
    </SessionProvider>
    */
    
    <>
      <div className="App">
        <header>
          <p>LoMap</p>
          <nav>
          
            <button className="separador" onClick={callLogin}>log in</button>

            <button>sign up</button>
          </nav>
        </header>
        <div className="portada">
          <img src="./images/portada.png" alt="portada" />
          <h1>LoMap</h1>
        </div>
      </div>
      <div className="description">
        <h2> Red social de mapas</h2>
        <p>
          {" "}
          seleccione el mapa que desee abrir y realice lo que usted quiera!
          desde añadir puntos de interés como restaurantes hasta crear su propia
          ruta y compartirla con sus amigos
        </p>
      </div>
      <footer>
        <p>Escuela Ingeniería informática 2022-2023/ASW grupo lomap_es4c</p>
        <img src="./images/uniovi.png" alt="portada" />
      </footer>
    </>
    
  );
  
}

export default App;