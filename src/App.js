import React from 'react';
import './App.css';
import JitsiMeetComponent  from "./components/JitsiMeetComponent";


function App() {
  return (
    <div className="App">
      <div className="Home">
        <iframe width="100%" height="800" scrolling="no" src=" https://momento360.com/e/u/5d047cf1066a4b08ab73980fa9f96dad?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75"></iframe>
        <JitsiMeetComponent/>
      </div>

    </div>
  );
}

export default App;
