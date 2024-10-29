import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './Components/Header';
import Body from './Components/Body/Body';
import Modal from './Components/Modal';
import LoginModal from './Components/LoginModal';
import { isTokenActive } from './Utils/utils';

function App() {

  const [authorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Verifica si el token está activo al montar el componente
    const tokenActive = isTokenActive();
    setIsAuthorized(tokenActive);
}, []); // Solo ejecuta este efecto al montar el componente

  const handleTokenChange = () => {
    setIsAuthorized(isTokenActive());
  }

  console.log('token is active?', isTokenActive());

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Body>
          {authorized ? <Modal /> : <LoginModal setIsAuthorized={setIsAuthorized} />}
        </Body>
      </body>
    </div>
  );
}

export default App;
