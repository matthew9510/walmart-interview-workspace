import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import InterviewWorkspace from './Components/InterviewWorkspace';

function App() {
  const interviewData = [
    {
      "Name": "A",
      "Type": "String",
      "Required": "Y"
    },
    {
      "Name": "B",
      "Type": "Integer",
      "Required": "N"
    },
    {
      "Name": "C",
      "Type": "Booleen",
      "Required": "Y"
    }
  ]

  return (
    <div className='flex flex-col justify-between h-screen'>
    <Navbar/>
    <InterviewWorkspace interviewData={interviewData}/>
    <Footer/>
    </div>
  );
}

export default App;
