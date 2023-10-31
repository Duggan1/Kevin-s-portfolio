import React, { useState } from 'react';
import walkthruOTRP from './walkthruOTRP.mp4'

function Home({marginADJ}) {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideoVisibility = () => {
    setShowVideo(!showVideo);
  };
  const [latestProject, setlatestProject] = useState(false);

  const togglelatestProject = () => {
    setlatestProject(!latestProject);
  };
  const handleNewProClick = () => {
    window.open("https://offtherecordpicks.onrender.com", "_blank");
  }
  

  return (
    <div className='home2' style={{marginLeft: marginADJ}}>
    <div style={{backgroundColor:'black'}}>
    <h1 className='exsect3 bigGuy font-size-55px juan' >Kevin Duggan</h1></div>
    <h1 className='juan font-size-20px' style={{textAlign:'center',textShadow: '0 0 15px black',}}>Full Stack Engineer</h1>
    <h1 className='juan font-size-25px' style={{textAlign:'center',textShadow: '0 0 15px black',}}>Kevin Thomas Duggan</h1>
    
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ height: '200px',display: 'flex', justifyContent: 'center'}}className="kevo"></div>
      <div style={{ height: '200px',display: 'flex', justifyContent: 'center'}} className="kevio"></div></div>
      <div style={{ textAlign: 'center' }}>
        
        <h4 className='juan' style={{fontWeight:'bolder'}}>Introduce Myself ?</h4>
        <div style={{ display: 'inline-block'}}className="custom-checkbox adjborder">
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
        {showVideo && (<center>
          <iframe 
            src="https://www.loom.com/embed/a5e33ab39fb040bea9ed716f4ac4fc9f?sid=c706cf97-5b76-43cc-a3f2-e264e8b4530f"
            frameBorder="0"
            allowFullScreen
            title="kevin"
            
            className='amtri relative'
          ></iframe></center>
        )}
        <h2 style={{ marginBottom: '-1%' }}className='juan font-size-25px'>Computer</h2>
        <h2 className='juan font-size-20px'> Software Engineer</h2>
        
        <button  style={{backgroundColor:"navy",
        color:'white',
        textShadow:'white',
        border:'white 3px solid', 
        padding :'1%',
        fontWeight:'bold'
      }}
         className='juan relative'
         onClick={togglelatestProject}>
  {latestProject ? 'Hide Most Recent Work' : 'View Most Recent Work'}
</button>


      </div>
      
     

      { latestProject ?
      <div className="textC juan">
        <label style={{padding:'0px 2%'}}
        className='newProHome relative'
      onClick={handleNewProClick}
      >Off the Record Picks</label>
        <center><video
        controls // Add controls for play, pause, and volume
        style={{ justifyContent:"center", borderRadius: '5%', width: '250px', height: '200px', border: 'white 5px solid',marginBottom:'0px' }}
      >
        <source src={walkthruOTRP} type="video/mp4" />
        Your browser does not support the video tag.
      </video></center><br></br>
</div> : null}

      
    </div>
  );
}

export default Home;
