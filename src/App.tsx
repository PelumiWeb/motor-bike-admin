import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideModal from './components/Sidemodal';
import Header from './components/Header';
import RenderContents from './components/RenderContents';
import { useAppSelector } from './app/hook';

function App() {
  const tab = useAppSelector((state) => state.tabs.name);
  return (
    <section className="w-full h-screen flex">
      {/* left */}
      <div className="w-[20%]">
        <SideModal />
      </div>
      {/* Right */}

      <div className="w-[80%] h-screen">
        <Header />
        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <RenderContents />
        </div>
      </div>
    </section>
  );
}

export default App;
