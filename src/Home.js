import React, { useState } from 'react';

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideoVisibility = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
    <div style={{backgroundColor:'black'}}>
    <h1 className='exsect3 bigGuy font-size-55px juan'>Kevin Duggan</h1></div>
    <h1 className='juan font-size-20px' style={{textAlign:'center'}}>Kevin Thomas Duggan</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ height: '200px',display: 'flex', justifyContent: 'center'}}className="kevo"></div>
      <div style={{ height: '200px',display: 'flex', justifyContent: 'center'}} className="kevio"></div></div>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '-1%' }}className='juan font-size-25px'>Computer</h2>
        <h2 className='juan font-size-20px'> Software Engineer</h2>
        
        <div style={{ display: 'inline-block'}}className="custom-checkbox">
          <input
            id="status"
            type="checkbox"
            name="status"
            checked={showVideo}
            onChange={toggleVideoVisibility}
          />
          <label htmlFor="status">
            <div
              className={`status-switch ${showVideo ? 'checked' : ''}`}
              data-unchecked="Yes"
              data-checked="No"
            ></div>
          </label>
        </div><br></br>
        {showVideo && (
          <iframe
            src="https://www.loom.com/embed/a5e33ab39fb040bea9ed716f4ac4fc9f?sid=c706cf97-5b76-43cc-a3f2-e264e8b4530f"
            frameBorder="0"
            allowFullScreen
            title="kevin"
            
            className='amtri'
          ></iframe>
        )}

        <h4 className='juan' style={{fontWeight:'bolder'}}>Introduce Myself ?</h4>
      </div>

      
    </>
  );
}

export default Home;
