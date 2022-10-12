import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Staking from './pages/staking';
import Stakinginfo from './pages/stakinginfo';
import { Market } from './pages/market'
import Marketinfo from './pages/marketinfo';
import Userinfo from './pages/userinfo';
import Ico from './pages/ico';

import { Provider, useSelector } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<Staking />} path='' />
          <Route element={<Stakinginfo />} path='' />
          <Route element={<Market />} path='' />
          <Route element={<Marketinfo />} path='' />
          <Route element={<Userinfo />} path='' />
          <Route element={<Ico />} path='' />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
