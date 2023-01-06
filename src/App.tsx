import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import InterviewWorkspace from './Components/InterviewWorkspace';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen'>
    <Navbar/>
    <InterviewWorkspace/>
    <Footer/>
    </div>
  );
}

export default App;
