'use client';

import { useState } from "react";

import SSGTab from './components/SSGTab';
import ISRTab from './components/ISRTab';
import SSRTab from './components/SSRTab';

export default function Home() {
  const [activeTab, setActiveTab] = useState('SSG');

  return (
    <div className="container">
      <h1>Interactive Data Fetching Visualizer</h1>
      <div className="tabs">
        <button
          onClick={() => setActiveTab('SSG')}
          className={activeTab === 'SSG' ? 'active' : ''}
        >
          SSG
        </button>
        <button
          onClick={() => setActiveTab('ISR')}
          className={activeTab === 'ISR' ? 'active' : ''}
        >
          ISR
        </button>
        <button
          onClick={() => setActiveTab('SSR')}
          className={activeTab === 'SSR' ? 'active' : ''}
        >
          SSR
        </button>
      </div>

      <div className="tab-content-wrapper">
        <div className={`tab-content ${activeTab === 'SSG' ? 'active' : ''}`}>
          <SSGTab />
        </div>
        <div className={`tab-content ${activeTab === 'ISR' ? 'active' : ''}`}>
          <ISRTab />
        </div>
        <div className={`tab-content ${activeTab === 'SSR' ? 'active' : ''}`}>
          <SSRTab />
        </div>
      </div>
    </div>
  );
}
