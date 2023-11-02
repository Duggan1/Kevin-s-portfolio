import walkthruOTRP from './walkthruOTRP.mp4'
import React, { useState, useEffect } from 'react';



function Projects({projectON, marginADJ }) {
  const [showORP, setShowORP] = useState(false);
  const [showCFT, setShowCFT] = useState(false);
  const [showTTT, setShowTTT] = useState(false);
  const [showKRT, setShowKRT] = useState(false);
  const [showRBG, setShowRBG] = useState(false);
  const [projectONE, setprojectONE] = useState(0);
  const [dataLoaded, setdataLoaded] = useState(false);
  console.log(marginADJ)
  useEffect(() => {
    if (projectON) {
      setShowORP(false)
      setShowCFT(false)
      setShowTTT(false)
      setShowKRT(false)
      setShowRBG(false)
      setprojectONE(projectON);
      
    }
  }, [projectON]); 
  


  function toggleORP() {
    setShowORP(!showORP);
  }
  function toggleCFT() {
    setShowCFT(!showCFT);
  }
  function toggleTTT() {
    setShowTTT(!showTTT);
  }
  function toggleKRT() {
    setShowKRT(!showKRT);
  };
  function toggleRBG() {
    setShowRBG(!showRBG);
  }
  if (projectONE === 1 ) {
    setShowORP(true)
    setShowCFT(false)
    setShowTTT(false)
    setShowKRT(false)
    setShowRBG(false)
    setprojectONE(0)
  }
  if (projectONE === 2 ) {
    setShowORP(false)
    setShowCFT(true)
    setShowTTT(false)
    setShowKRT(false)
    setShowRBG(false)
    setprojectONE(0)
  }
  if (projectONE === 3 ) {
    setShowORP(false)
    setShowCFT(false)
    setShowTTT(true)
    setShowKRT(false)
    setShowRBG(false)
    setprojectONE(0)
  }
  if (projectONE === 4 ) {
    setShowORP(false)
    setShowCFT(false)
    setShowTTT(false)
    setShowKRT(true)
    setShowRBG(false)
    setprojectONE(0)
  }
  if (projectONE === 5 ) {
    setShowORP(false)
    setShowCFT(false)
    setShowTTT(false)
    setShowKRT(false)
    setShowRBG(true)
    setprojectONE(0)
  }

  const [showAll, setShowAll] = useState(false);
  const toggleAll = () => {
    setShowAll(!showAll);
    setShowORP(!showAll);
    setShowCFT(!showAll);
    setShowTTT(!showAll);
    setShowKRT(!showAll);
    setShowRBG(!showAll);
  };
  







  return (
    <div style={{ backgroundColor: "rgb(2, 2, 31)"}}>
      <div style={{backgroundColor:'gb(2, 2, 31)'}}>
      <h1 className='exsect3 bigGuy font-size-55px '>My Projects</h1></div>
      
        
         <button onClick={toggleAll} className={` ${marginADJ}`}  style={{ backgroundColor: "navy", display: 'flex',color: 'white', border: 'white 2px solid', borderRadius: '25%', padding: '1%', marginLeft: 'auto' }}>
    {showAll ? (
      <span style={{ color: 'red', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', backgroundColor: 'red' }}></span>
    ) : (
      <span style={{ color: 'green', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', backgroundColor: 'green' }}></span>
    )}
    &nbsp;{showAll ? 'Hide all' : 'Show all'}
  </button>
       <div style={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: 'white', borderTop: 'white 3px solid', display: 'flex', justifyContent: 'center',
       flexStart:'center',
       }}>
 <p style={{ color: 'grey',flexStart:'center' }}>Individually Click the Headers to see the projects details or Use the Button to toggle</p></div>
 







      <div id='midcft' className={`orp ${marginADJ}`} onClick={toggleORP} style={{cursor:'pointer',marginTop:'0px', zIndex:'0', }} >
        <h3 className="proT" >
          - Off the Record Picks -
        </h3>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://github.com/Duggan1/offRecord">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://offtherecordpicks.onrender.com/">Off the Record Picks</a>
        </div>
        { showORP  && ( <>
           <div className="textC juan">
        <div className="textC juan">
       <center><video
       controls={marginADJ}
          style={{
            borderRadius: '5%',
            width: '250px',
            height: '200px',
            border: 'purple 5px solid',
            
          }}
          src={walkthruOTRP} // Make sure this contains the correct video URL
          class={`${marginADJ}`}
        >
  <source src={walkthruOTRP} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</center>
</div>

            </div>
      <div className="exsectP" style={{  paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>This innovative application offers UFC enthusiasts the opportunity to showcase their predictive prowess by making fight picks for UFC events and engaging in a friendly competition with fellow fans, all without the involvement of real currency.</p>
        <ul>
          <li>The application boasts an aesthetically pleasing and highly responsive frontend, meticulously crafted with React. It seamlessly facilitates user interactions, allowing for user registration, login, and the effortless submission of fight predictions.</li>
          <li>Behind the scenes, a robust backend powered by Flask, a Python web framework, and PostgreSQL, a secure relational database, ensures the safe and structured storage of user data and their astute predictions.</li>
          <li>Notably, the application incorporates an Admin account with the authority to post-event results. This administrative capability is pivotal, as it triggers an automated evaluation process that meticulously assesses each user's predictions, duly awarding points for each impeccably foreseen match outcome.</li>
        </ul>
      </div></>
      )}




      <div id='midcft' className={`exsect3  cft ${marginADJ}`} onClick={toggleCFT} style={{cursor:'pointer', }} >
        <h3 className="proT" >
         - Chicago Fight Team -
        </h3>
        <div   >
        <a className="proA" style={{color:'black',cursor: 'pointer',textShadow: '0 0 15px white' }} href="https://github.com/Duggan1/Project5-Project-cft">Github</a>
        <p style={{ display: 'inline-block', marginBottom: '20px', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'black',cursor: 'pointer',textShadow: '0 0 15px white' }} href="https://www.loom.com/embed/b47df9c98bb14da38dcdccf5f6a833ac">Demo</a>
        <p style={{ display: 'inline-block', marginBottom: '20px', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'black',textShadow: '0 0 15px white',cursor: 'pointer' }} href="https://chicago-fight-team.onrender.com/">Chicago Fight Team</a>
        </div>
        </div>
        {showCFT &&  (<>
        <div className="textC juan"><center><iframe
          src="https://www.loom.com/embed/b47df9c98bb14da38dcdccf5f6a833ac"
          frameBorder="0"
          allowFullScreen
          title="Chicago Fight Team Demo"
          style={{ borderRadius: '5%', width: '250px', height: '150px', border: 'darkred 5px solid',  }}
        ></iframe></center></div>
      <div className="exsectP" style={{  paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>Developed a functional website allowing users to sign-up and pay for memberships for CFT’s two different gym locations.</p>
        <ul >
          <li>
            Implemented bcrypt to ensure secure handling of user information during the sign-up process, enabling users to purchase one of the membership options using Stripe checkout.
          </li>
          <li>
            Utilized React.js for the front-end, implementing a ternary operator controlled by a location button to display each gym's schedule, phone #, address, and integrated social media feeds for content updates and to increase exposure.
          </li>
          <li>
            Configured Flask to collect detailed information about users, gyms, and memberships, facilitating effective management of each gym's business operations.
          </li>
        </ul>
      </div></>)}


      <div id='midcft' className={`ttt ${marginADJ}`} onClick={toggleTTT} style={{cursor:'pointer',marginLeft: marginADJ }}>
        <h3 className="proT">
          - Trish the Teacher -
        </h3>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://github.com/Duggan1/Trish-the-Teacher">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://trishtheteacher.com/">TrishTheTeacher.com</a>
        </div>
        {showTTT &&  (<>
        <div className="textC juan">
        </div>
         <div className="exsectP" style={{  paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>This dynamic website serves as a comprehensive platform designed to empower both parents and students by offering a seamless blend of tutoring services and enriching educational content. Its primary mission is to enhance classroom performance through tailored guidance and accessible learning resources</p>
        <ul>
        <li>Prior to committing to tutoring lessons, users are provided with the invaluable opportunity to explore the website's extensive content and program details. This feature allows for an informed decision-making process, ensuring users are well-equipped to make the best choice for their educational journey.</li>
          <li>Once registered or logged in, users gain access to a user-friendly scheduling system. This system empowers them to book convenient time slots for tutoring sessions based on tutor availability. During the sign-up process, the teacher can collect vital information about the student's academic performance. This data-driven approach provides valuable insights, enabling the tutor to tailor their guidance effectively and focus on areas that require improvement.</li>
          <li>To streamline the process further, the website incorporates a secure payment section using Stripe. This enables students to conveniently finance their tutoring lessons online, ensuring a hassle-free experience</li>
        </ul>
      </div>
      </>)}

      <div  className={`krt ${marginADJ}`} onClick={toggleKRT} style={{cursor:'pointer' }} >
        <h3 className="proT" >
          - KRT -
        </h3>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }} href="https://github.com/Duggan1/p4-project-krt">Github</a>
        <p style={{ display: 'inline-block', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }} href="https://www.loom.com/embed/cfeec326bc324e7bbbbd172634ed53b0">Demo</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }}  href="https://krt-kitchen.onrender.com/">KRT-Kitchen</a>
        </div>
        {showKRT &&   (<>
        <div className="textC juan"><center><iframe
          src="https://www.loom.com/embed/cfeec326bc324e7bbbbd172634ed53b0"
          frameBorder="0"
          allowFullScreen
          title="KRT-Kitchen Demo"
          style={{ borderRadius: '5%', width: '250px', height: '150px', border: 'yellow 5px solid', }}
        ></iframe></center></div>
          <div className="exsectP" style={{ paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>A dynamic, Full Stack restaurant website enabling users to browse menus, explore locations, and leave reviews.</p>
        <ul>
          <li>Applied React for the frontend implementation, incorporating efficient routing for seamless navigation and providing users with the ability to use full CRUD on reviews.</li>
          <li>Connected a robust Flask backend for secure data storage and management of user-posted data, ensuring reliable data persistence and retrieval.</li>
          <li>Integrated the Google Maps API to enhance the user experience, enabling an easy exploration of designated locations.</li>
        </ul>
      </div>
      </>)}



      <div className={`rbg ${marginADJ}`}   onClick={toggleRBG}style={{cursor:'pointer', }} >
        <h3 className="proT">
          - Recipe Box -
        </h3>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }}  href="https://github.com/Duggan1/phase-2-project-Recipe-Box">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }}  href="https://www.loom.com/embed/0a472f2e032544c9949de200888d9f69">Demo</a>
        </div>
        {showRBG &&    (<>
        <div className="textC juan"><center><iframe
          src="https://www.loom.com/embed/0a472f2e032544c9949de200888d9f69"
          frameBorder="0"
          
          allowFullScreen
          title="Recipe Box Demo"
          style={{ borderRadius: '5%', width: '250px', height: '150px', border: 'lightblue 5px solid'}}
        ></iframe></center></div>
      <div className="exsectP" style={{  paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>An app that allows users to virtually store and access popular recipes.</p>
        <ul>
          <li>Exercised JavaScript and React to create responsive frontend components.</li>
          <li>Assembled a local db.json file to store recipe data provided.</li>
          <li>Combined custom CSS and Semantic UI CSS to design the frontend interface.</li>
        </ul>
      </div>
      </>)}



      <div className='proSect'>

      
      <div className="juan2">
      <h2 style={{ fontWeight: 'bolder',textShadow: '0 0 15px black',color:'lightblue'}} className="exsect3 juan">COMPUTER SOFTWARE ENGINEER </h2>
      <h2 className="exsect3 "  style={{ fontWeight: 'bolder',textShadow: '0 0 15px black',color:'lightblue'}}>TECHNICAL SKILLS</h2>
      <p className="exsectSK" style={{ fontWeight: '',textAlign:'center' }}>Flask, Python, SQLalchemy, PostgreSQL,
      SQL, JavaScript, React, CSS, HTML, Node, Tailwind,
      Restful API, Git, Stripe, Redux, JSON</p></div>
      <p className="exsectP" style={{textAlign:'center',textShadow: '0 0 15px black',backgroundColor:'rgb(2, 2, 31)',marginLeft:'0%',borderTop: '2px solid white',borderRight: '2px solid white',paddingBottom:'5%'}}>Full Stack Web Developer with experience in React.js, Python, and Flask-based programming. Combines a diverse background in teaching, management, sales, and sustainable design to bring a unique perspective to projects. Demonstrates excellent communication, team-building, and project management skills, driving impactful results that enhance the work environment and deliver exceptional outcomes.</p>
      
        </div>


    </div>
  );
}

export default Projects;

