import { Routes, Route } from 'react-router-dom';
import { ROUTE_POSTER } from 'src/constants/Routes';
import HomePage from 'src/pages/HomePage';
import PosterPage from 'src/pages/PosterPage';
import './normalize.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path={ROUTE_POSTER} element={<PosterPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
