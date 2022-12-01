import React from 'react';
import './App.css';
import { AppView } from "./components/app/appView";
import {Route, Routes} from "react-router-dom";
import { AppStart } from './components/startScreen/appStart';

function App() {
  return (
      <Routes>
        <Route path="/" element={<AppStart />} />
        <Route path="/app/:type" element={<AppView />} />
        <Route path="/*" element={<AppView />} />
      </Routes>
  );
}

export default App;
