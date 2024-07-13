import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideModal from './components/Sidemodal';

function App() {
  return (
    <section className="w-full h-screen">
      {/* left */}
      <div className="w-[30%]">
        <SideModal />
      </div>
      <div className="w-[70%]"></div>
      {/* Right */}
    </section>
  );
}

export default App;
