import walkthruOTRP from './walkthruOTRP.mp4'
import React, { useState } from 'react';



function Projects() {
  const [showORP, setShowORP] = useState(false);
  const [showCFT, setShowCFT] = useState(false);
  const [showTTT, setShowTTT] = useState(false);
  const [showKRT, setShowKRT] = useState(false);
  const [showRBG, setShowRBG] = useState(false);

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
  }
  function toggleRBG() {
    setShowRBG(!showRBG);
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
    <div>
      <div style={{backgroundColor:'black'}}>
      <h1 className='exsect3 bigGuy font-size-55px juan'>My Projects</h1></div>
      <div className='home2'>
      <h2 style={{ fontWeight: 'bolder',textShadow: '0 0 15px black'}} className="exsect3 juan">Software Engineer</h2>
      
      <div className="juan2">
      <h2 className="exsect3 "  style={{ fontWeight: 'bolder',textShadow: '0 0 15px white'}}>TECHNICAL SKILLS</h2>
      <p className="exsectSK" style={{ fontWeight: 'bold',textAlign:'center' }}>Flask, Python, SQLalchemy, PostgreSQL,
      SQL, JavaScript, React, CSS, HTML,
      Restful API, Git, Stripe, Redux, JSON</p></div>
      <p className="exsectP" style={{textAlign:'center',textShadow: '0 0 15px black',backgroundColor:'black',marginLeft:'0%',borderTop: '2px solid white',borderRight: '2px solid white',paddingBottom:'5%'}}>Full Stack Web Developer with experience in React.js, Python, and Flask-based programming. Combines a diverse background in teaching, management, sales, and sustainable design to bring a unique perspective to projects. Demonstrates excellent communication, team-building, and project management skills, driving impactful results that enhance the work environment and deliver exceptional outcomes.</p>
      
        </div>
        
        
        <div style={{ fontWeight: 'bold',textAlign:'center',backgroundColor:'black',borderTop:"white 3px solid" }} >
         <p style={{ color: 'orange' }}>Individually Click the Headers to see the projects details </p><p style={{ color: 'orange' }}>or Use the Button to toggle </p>
         <button onClick={toggleAll}>
          {showAll ? (
            <span style={{ color: 'red', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', backgroundColor: 'red' }}></span>
          ) : (
            <span style={{ color: 'green', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', backgroundColor: 'green' }}></span>
          )}
          &nbsp;{showAll ? 'Hide all' : 'Show all'}
        </button>
        
          






        </div>
      <div id='midcft' className=" orp" onClick={toggleORP} style={{cursor:'pointer',marginTop:'0px'}} >
        <h3 className="proT" >
          - Off Record Picks -
        </h3>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://github.com/Duggan1/offRecord">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://offtherecordpicks.onrender.com/">Off Record Picks</a>
        </div>
        { showORP && ( <>
           <div className="textC juan">
        <div className="textC juan">
        <video
        controls // Add controls for play, pause, and volume
        style={{ borderRadius: '5%', width: '250px', height: '200px', border: 'purple 5px solid' }}
      >
        <source src={walkthruOTRP} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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




      <div id='midcft' className="exsect3 cft" onClick={toggleCFT} style={{cursor:'pointer'}} >
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
        {showCFT && (<>
        <div className="textC juan"><iframe
          src="https://www.loom.com/embed/b47df9c98bb14da38dcdccf5f6a833ac"
          frameBorder="0"
          allowFullScreen
          title="Chicago Fight Team Demo"
          style={{ borderRadius: '5%', width: '250px', height: '150px', border: 'darkred 5px solid' }}
        ></iframe></div>
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


      <div id='midcft' className=" ttt" onClick={toggleTTT} style={{cursor:'pointer'}}>
        <h3 className="proT">
          - Trish the Teacher -
        </h3>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://github.com/Duggan1/Trish-the-Teacher">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'gold',cursor: 'pointer' }}  href="https://trishtheteacher.com/">TrishTheTeacher.com</a>
        </div>
        {showTTT && (<>
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

      <div className="exsect3 krt" onClick={toggleKRT} style={{cursor:'pointer'}} >
        <h3 className="proT" >
          - KRT -
        </h3>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }} href="https://github.com/Duggan1/p4-project-krt">Github</a>
        <p style={{ display: 'inline-block', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }} href="https://www.loom.com/embed/cfeec326bc324e7bbbbd172634ed53b0">Demo</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }}  href="https://krt-kitchen.onrender.com/">KRT-Kitchen</a>
        </div>
        {showKRT && (<>
        <div className="textC juan"><iframe
          src="https://www.loom.com/embed/cfeec326bc324e7bbbbd172634ed53b0"
          frameBorder="0"
          allowFullScreen
          title="KRT-Kitchen Demo"
          style={{ borderRadius: '5%', width: '250px', height: '150px', border: 'yellow 5px solid' }}
        ></iframe></div>
          <div className="exsectP" style={{ paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>A dynamic, Full Stack restaurant website enabling users to browse menus, explore locations, and leave reviews.</p>
        <ul>
          <li>Applied React for the frontend implementation, incorporating efficient routing for seamless navigation and providing users with the ability to use full CRUD on reviews.</li>
          <li>Connected a robust Flask backend for secure data storage and management of user-posted data, ensuring reliable data persistence and retrieval.</li>
          <li>Integrated the Google Maps API to enhance the user experience, enabling an easy exploration of designated locations.</li>
        </ul>
      </div>
      </>)}



      <div className="exsect3 rbg"onClick={toggleRBG}style={{cursor:'pointer'}} >
        <h3 className="proT">
          - Recipe Box -
        </h3>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }}  href="https://github.com/Duggan1/phase-2-project-Recipe-Box">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'blue',cursor: 'pointer' }}  href="https://www.loom.com/embed/0a472f2e032544c9949de200888d9f69">Demo</a>
        </div>
        {showRBG && (<>
        <div className="textC juan"><iframe
          src="https://www.loom.com/embed/0a472f2e032544c9949de200888d9f69"
          frameBorder="0"
          allowFullScreen
          title="Recipe Box Demo"
          style={{ borderRadius: '5%', width: '250px', height: '150px', border: 'lightblue 5px solid' }}
        ></iframe></div>
      <div className="exsectP" style={{  paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>An app that allows users to virtually store and access popular recipes.</p>
        <ul>
          <li>Exercised JavaScript and React to create responsive frontend components.</li>
          <li>Assembled a local db.json file to store recipe data provided.</li>
          <li>Combined custom CSS and Semantic UI CSS to design the frontend interface.</li>
        </ul>
      </div>
      </>)}






    </div>
  );
}

export default Projects;

