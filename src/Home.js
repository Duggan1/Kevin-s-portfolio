import React, { useState } from 'react';

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideoVisibility = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
    <h1 className='exsect3' style={{ fontWeight: 'bolder',fontSize:'90px',textAlign:'center',backgroundColor:'black',paddingTop:'10%',marginTop:'-7%',paddingBottom:'2%' }}>Kevin Duggan</h1>
    <h1 style={{textAlign:'center'}}>Kevin Thomas Duggan</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ height: '200px',display: 'flex', justifyContent: 'center'}}className="kevo"></div>
      <div style={{ height: '200px',display: 'flex', justifyContent: 'center'}} className="kevio"></div></div>
      <div style={{ textAlign: 'center' }}>
        
        <h2>Computer Software Engineer</h2>
        
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
            style={{ borderRadius: '25%', width: '710px', height: '400px', border: 'orange 5px solid', marginTop:'5%' }}
          ></iframe>
        )}

        <h4 style={{fontWeight:'bolder'}}>Introduce Myself ?</h4>
      </div>

      
    </>
  );
}

export default Home;
