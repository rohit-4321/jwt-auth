import { BrowserRouter } from 'react-router-dom';
import Router from './containers/routes';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
