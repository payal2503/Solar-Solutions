import './App.css';
import Main from './Component/MainComponent'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
