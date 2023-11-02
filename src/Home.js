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
  console.log(marginADJ)

  return (
    <div className='home2' style={{}}>
    <div style={{backgroundColor:'rgb(2, 2, 31)'}}>
    <h1 className='exsect3 bigGuy font-size-55px ' >Kevin Duggan</h1></div>
   
    <h1 className='juan font-size-25px' style={{ textAlign:'center', marginTop:'5%' }}>
    <span style={{ background: 'black', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black',textDecoration: 'underline' }}>
        Full Stack Engineer
    </span>
</h1>
    <h1 className='juan font-size-25px' style={{ textAlign:'center' }}>
    <span style={{ background: 'black', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 15px black',borderBottom:'black 25px solid' }}>
        Kevin Thomas Duggan
    </span>
</h1>

 
<div style={{ display: 'flex', justifyContent: 'center',  }}>
<div
  style={{
    height: '235px',
    display: 'flex',
    justifyContent: 'center',
    borderLeft: 'black 10px solid',
    borderRight: 'black 1px solid',
    zIndex: marginADJ ? '1' : 'initial', // Set zIndex conditionally
  }}
  className="kevo homeBorder"
></div>

      <div style={{ height: '235px',display: 'flex', justifyContent: 'center',borderRight:'black 10px solid',borderLeft:'black 1px solid', zIndex: marginADJ ? '1' : 'initial', }} className="kevio homeBorder"></div></div>
      <div style={{ textAlign: 'center' }}>

      
    <h1 className='juan font-size-25px' style={{ textAlign:'center' }}>
          <span style={{ background: 'black', color: 'white', padding: '5px', fontWeight: 'bold', textShadow: '0 0 13px black',borderTop: marginADJ ? '1' : 'initial',  zIndex:'-1' }}>
          Introduce Myself ?
          </span>
      </h1>
        
        {marginADJ ?
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
        </div> 
         : null}
        <br></br>
        {showVideo && (<center>
          <iframe 
            src="https://www.loom.com/embed/a5e33ab39fb040bea9ed716f4ac4fc9f?sid=c706cf97-5b76-43cc-a3f2-e264e8b4530f"
            frameBorder="0"
            allowFullScreen
            title="kevin"
            
            className={`amtri ${marginADJ}`}
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
         className={`juan ${marginADJ}`}
         onClick={togglelatestProject}>
  {latestProject ? 'Hide Most Recent Work' : 'View Most Recent Work'}
</button>


      </div>
      
     

      { latestProject && marginADJ ?
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
