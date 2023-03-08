import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import styles from '../../fa_frontend/src/Assests/css/home/general.module.scss'

function App() {
  return(
      <div className={styles.container_personalizado}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
