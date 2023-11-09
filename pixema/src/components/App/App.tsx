import { Routes, Route } from 'react-router-dom';
import { ROUTE_FAVORITES, ROUTE_POSTER, ROUTE_SETTINGS, ROUTE_TRENDS } from 'src/constants/Routes';
import HomePage from 'src/pages/HomePage';
import PosterPage from 'src/pages/PosterPage';
import SettingsPage from 'src/pages/SettingsPage';
import TrendsPage from 'src/pages/TrendsPage';
import FavoritesPage from 'src/pages/FavoritesPage';
import './normalize.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path={ROUTE_POSTER} element={<PosterPage/>}/>
        <Route path={ROUTE_SETTINGS} element={<SettingsPage/>}/>
        <Route path={ROUTE_TRENDS} element={<TrendsPage/>}/>
        <Route path={ROUTE_FAVORITES} element={<FavoritesPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
