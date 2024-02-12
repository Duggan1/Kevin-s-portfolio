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
  if (projectONE === 6 ) {
    setShowRBG(false)
    setShowORP(false)
    setShowCFT(false)
    setShowTTT(false)
    setShowKRT(false)
    
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
  


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  return (
    <div id={`${!marginADJ && windowWidth < 1023 ?  'display-none' : ''}`} className={`bg-gradient-to-b from-indigo-100/20`}>
      
      <div style={{backgroundImage:'url("data:image/jpeg;base64,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")'}} 
         
          className={`  inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]
           bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 ${marginADJ ? 'absolute': ' '} `}
          aria-hidden="true" />
      
      {/* <div style={{backgroundColor:'pink'}}>
   
      </div> */}
      <div  className='margin-0-10'>
         <h1  className='font-size-55px text-align-center font-black color-black'><span style={{ backgroundColor: '', padding:'1%' }}>My Projects</span></h1>
        
         <button onClick={toggleAll} className={` ${marginADJ}`}  style={{ backgroundColor: "whitesmoke", display: 'flex',color: 'grey', border: 'black 2px solid', borderRadius: '25%', padding: '1%', marginLeft: 'auto' }}>
    {showAll ? (
      <span style={{ color: 'red', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', backgroundColor: 'red' }}></span>
    ) : (
      <span style={{ color: 'green', borderRadius: '50%', width: '20px', height: '20px', display: 'inline-block', backgroundColor: 'green' }}></span>
    )}
    &nbsp;{showAll ? 'Hide all' : 'Show all'}
  </button>
       {/* <div style={{ fontWeight: 'bold', textAlign: 'center', display: 'flex', justifyContent: 'center' ,
       flexStart:'start',
       }}> */}
 <p style={{ color: 'grey', padding:'1%', marginBottom:'30px' }}><span style={{backgroundColor: 'whitesmoke'}}>
 Individually Click Projects <span className='fs35 color-black'>&#x2198;</span> or Use the toggle Button<span className='fs35 color-black'>&#x2192;</span></span></p>
 {/* </div> */}
 







      <div id='midcft' className={`orp ${marginADJ}`} onClick={toggleORP} style={{cursor:'pointer',marginTop:'0px', zIndex:'0', border:'2px solid white', borderRadius:'8px', marginBottom:'30px' }} >
        <h3 className="proT" >
          - Picks 4 Points -
        </h3>
        <a className="proA" style={{color:'white',cursor: 'pointer' }}  href="https://github.com/Duggan1/offRecord">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'white',cursor: 'pointer' }}  href="https://picks4points.com/">Picks4points.com</a>
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
            borderTop: 'red solid 5px',
  borderBottom: 'blue solid 5px',
  borderRight: 'blue solid 5px',
  borderLeft: 'red solid 5px',
            
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
        <p style={{ color: 'black',backgroundColor: 'white'}}>This innovative application offers UFC enthusiasts the opportunity to showcase their predictive prowess by making fight picks for UFC events and engaging in a friendly competition with fellow fans, all without the involvement of real currency.</p>
        <ul style={{ color: 'black',backgroundColor: 'white', padding:'1%' }}>
          <li>The application boasts an aesthetically pleasing and highly responsive frontend, meticulously crafted with React. It seamlessly facilitates user interactions, allowing for user registration, login, and the effortless submission of fight predictions.</li>
          <li>Behind the scenes, a robust backend powered by Flask, a Python web framework, and PostgreSQL, a secure relational database, ensures the safe and structured storage of user data and their astute predictions.</li>
          <li>Notably, the application incorporates an Admin account with the authority to post-event results. This administrative capability is pivotal, as it triggers an automated evaluation process that meticulously assesses each user's predictions, duly awarding points for each impeccably foreseen match outcome.</li>
        </ul>
      </div></>
      )}




      <div id='midcft' className={` cft ${marginADJ}`} onClick={toggleCFT} style={{cursor:'pointer',border:'2px solid white', borderRadius:'8px', marginBottom:'30px'  }} >
        <h3 className="proT" >
         - Chicago Fight Team -
        </h3>
        <div   >
        <a className="proA" style={{color:'red',cursor: 'pointer',textShadow: '0 0 15px black' }} href="https://github.com/Duggan1/Project5-Project-cft">Github</a>
        <p style={{ display: 'inline-block',color:'red',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'red',cursor: 'pointer',textShadow: '0 0 15px black' }} href="https://www.loom.com/embed/b47df9c98bb14da38dcdccf5f6a833ac">Demo</a>
        <p style={{ display: 'inline-block',color:'red',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'red',textShadow: '0 0 15px black',cursor: 'pointer' }} href="https://chicagofightteam.org">Chicago Fight Team</a>
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
        <p style={{ color: 'black',backgroundColor: 'white' }}>Developed a functional website allowing users to sign-up and pay for memberships for CFT’s two different gym locations.</p>
        <ul style={{ color: 'black',backgroundColor: 'white', padding:'1%' }}>
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


      <div id='midcft' className={`ttt ${marginADJ}`} onClick={toggleTTT} style={{cursor:'pointer',marginLeft: marginADJ ,border:'2px solid white', borderRadius:'8px', marginBottom:'30px' }}>
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
        <p style={{ color: 'black',backgroundColor: 'white'}}>This dynamic website serves as a comprehensive platform designed to empower both parents and students by offering a seamless blend of tutoring services and enriching educational content. Its primary mission is to enhance classroom performance through tailored guidance and accessible learning resources</p>
        <ul style={{ color: 'black',backgroundColor: 'white', padding:'1%' }}>
        <li>Prior to committing to tutoring lessons, users are provided with the invaluable opportunity to explore the website's extensive content and program details. This feature allows for an informed decision-making process, ensuring users are well-equipped to make the best choice for their educational journey.</li>
          <li>Once registered or logged in, users gain access to a user-friendly scheduling system. This system empowers them to book convenient time slots for tutoring sessions based on tutor availability. During the sign-up process, the teacher can collect vital information about the student's academic performance. This data-driven approach provides valuable insights, enabling the tutor to tailor their guidance effectively and focus on areas that require improvement.</li>
          <li>To streamline the process further, the website incorporates a secure payment section using Stripe. This enables students to conveniently finance their tutoring lessons online, ensuring a hassle-free experience</li>
        </ul>
      </div>
      </>)}

      <div  className={`krt ${marginADJ}`} onClick={toggleKRT} style={{cursor:'pointer',border:'2px solid white', borderRadius:'8px', marginBottom:'30px'  }} >
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
        <p style={{ color: 'black',backgroundColor: 'white'}}>A dynamic, Full Stack restaurant website enabling users to browse menus, explore locations, and leave reviews.</p>
        <ul style={{ color: 'black',backgroundColor: 'white', padding:'1%' }}>
          <li>Applied React for the frontend implementation, incorporating efficient routing for seamless navigation and providing users with the ability to use full CRUD on reviews.</li>
          <li>Connected a robust Flask backend for secure data storage and management of user-posted data, ensuring reliable data persistence and retrieval.</li>
          <li>Integrated the Google Maps API to enhance the user experience, enabling an easy exploration of designated locations.</li>
        </ul>
      </div>
      </>)}



      <div className={`rbg ${marginADJ}`}   onClick={toggleRBG}style={{cursor:'pointer',border:'2px solid white', borderRadius:'8px' , marginBottom:'100px' }} >
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
        <p style={{ color: 'black',backgroundColor: 'white' }}>An app that allows users to virtually store and access popular recipes.</p>
        <ul style={{ color: 'black',backgroundColor: 'white', padding:'1%' }}>
          <li>Exercised JavaScript and React to create responsive frontend components.</li>
          <li>Assembled a local db.json file to store recipe data provided.</li>
          <li>Combined custom CSS and Semantic UI CSS to design the frontend interface.</li>
        </ul>
      </div>
      </>)}


</div>


      <div className=''>

      
      <div className="juan2 bg-gray-700 ">
      <h2 style={{ fontWeight: 'bolder',textShadow: '0 0 15px black',color:'black',backgroundColor:'white', padding:'5%',margin:'5%', borderRadius:'35%'}} className=""><span style={{ }}>COMPUTER SOFTWARE ENGINEER  TECHNICAL SKILLS</span></h2>
      {/* <h2 className="exsect3 "  style={{ fontWeight: 'bolder',textShadow: '0 0 15px black',color:'white'}}></h2> */}

      
      <p className="exsectSK" style={{ fontWeight: '',textAlign:'center', padding:'1%' }}>Flask, Python, SQLalchemy, PostgreSQL,
      SQL, JavaScript, React, CSS, HTML, Node, Tailwind,
      Restful API, Git, Stripe, Redux, JSON, Node.js, Web-Scraping</p></div>
      <p className="exsectP bg-gray-700" style={{textAlign:'center',textShadow: '0 0 15px black',marginLeft:'0%',marginTop:'5%',borderTop: '2px solid white',borderRight: '2px solid white',paddingBottom:'5%'}}>Full Stack Web Developer with experience in React.js, Python, and Flask-based programming. Combines a diverse background in teaching, management, sales, and sustainable design to bring a unique perspective to projects. Demonstrates excellent communication, team-building, and project management skills, driving impactful results that enhance the work environment and deliver exceptional outcomes.</p>
      
        </div>


    </div>
  );
}

export default Projects;

