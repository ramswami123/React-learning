import React, { useState } from 'react';

function Dashboard({ setBannerVisible, setBannerContent }) {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState('');

  const updateBanner = () => {
    setBannerContent({ description, timer, link });
  };

  return (
    <div className="dashboard">
      <button onClick={() => setBannerVisible(prev => !prev)}>
        Toggle Banner
      </button>
      <input 
        type="text" 
        placeholder="Banner Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Banner Timer" 
        value={timer} 
        onChange={(e) => setTimer(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Banner Link" 
        value={link} 
        onChange={(e) => setLink(e.target.value)} 
      />
      <button onClick={updateBanner}>Update Banner</button>
    </div>
  );
}

export default Dashboard;
