import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './Components/Header';
import Body from './Components/Body/Body';
import Modal from './Components/Modal';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Body>
          <Modal />
        </Body>
      </body>
    </div>
  );
}

export default App;
