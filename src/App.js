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
    const tokenActive = isTokenActive();
    setIsAuthorized(tokenActive);
}, []);

const handleLogout = () => {
  localStorage.removeItem('token');
  setIsAuthorized(false);
};

  return (
    <div className="App">
      <header>
        <Header
          handleLogout={handleLogout}
          authorized={authorized}
        />
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
