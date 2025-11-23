import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FanPage from './component/FanPage/FanPage';
import ConditionerPage from './component/conditionerPage/ConditionerPage';
import MainHome from './component/MainHome/MainHome';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <MainHome/>
    <Routes>
        <Route path='/fanState' element={<FanPage/>}/>
       <Route path='/Conditioner' element={<ConditionerPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
