import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './containers/Main';

import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;