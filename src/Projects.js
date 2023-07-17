function Projects() {
  return (
    <div>
      <div style={{backgroundColor:'black'}}>
      <h1 className='exsect3 bigGuy font-size-55px juan'>My Projects</h1></div>
      <h2 className="exsect3">Software Engineer</h2>
      <p className="exsectP">Full Stack Web Developer with experience in React.js, Python, and Flask-based programming. Combines a diverse background in teaching, management, sales, and sustainable design to bring a unique perspective to projects. Demonstrates excellent communication, team-building, and project management skills, driving impactful results that enhance the work environment and deliver exceptional outcomes.</p>
      <h2 className="exsect3">TECHNICAL SKILLS</h2>
      <p className="exsectP" style={{ fontWeight: 'bolder', paddingBottom:'100px' }}>Flask, Python, SQLalchemy, SQL, JavaScript, React, CSS, HTML, Restful API, Git, Stripe, Redux, JSON</p>

      <div className="exsect3 cft">
        <h3 className="proT" >
         - Chicago Fight Team -
        </h3>
        <div   >
        <a className="proA" style={{color:'black',cursor: 'pointer' }} href="https://github.com/Duggan1/Project5-Project-cft">Github</a>
        <p style={{ display: 'inline-block', marginBottom: '20px', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'black',cursor: 'pointer' }} href="https://www.loom.com/embed/b47df9c98bb14da38dcdccf5f6a833ac">Demo</a>
        <p style={{ display: 'inline-block', marginBottom: '20px', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{color:'black',cursor: 'pointer' }} href="https://chicago-fight-team.onrender.com/">Chicago Fight Team</a>
        </div></div><div className="textC juan"><iframe
          src="https://www.loom.com/embed/b47df9c98bb14da38dcdccf5f6a833ac"
          frameBorder="0"
          allowFullScreen
          title="Chicago Fight Team Demo"
          style={{ borderRadius: '25%', width: '250px', height: '150px', border: 'darkred 5px solid' }}
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
      </div>

      <div className="exsect3 krt">
        <h3 className="proT" >
          - KRT -
        </h3>
        <a className="proA" style={{ }} href="https://github.com/Duggan1/p4-project-krt">Github</a>
        <p style={{ display: 'inline-block', verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{ }} href="https://www.loom.com/embed/cfeec326bc324e7bbbbd172634ed53b0">Demo</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{  }}  href="https://krt-kitchen.onrender.com/">KRT-Kitchen</a>
        </div><div className="textC juan"><iframe
          src="https://www.loom.com/embed/cfeec326bc324e7bbbbd172634ed53b0"
          frameBorder="0"
          allowFullScreen
          title="KRT-Kitchen Demo"
          style={{ borderRadius: '25%', width: '250px', height: '150px', border: 'yellow 5px solid' }}
        ></iframe></div>
      

      <div className="exsectP" style={{ paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>A dynamic, Full Stack restaurant website enabling users to browse menus, explore locations, and leave reviews.</p>
        <ul>
          <li>Applied React for the frontend implementation, incorporating efficient routing for seamless navigation and providing users with the ability to use full CRUD on reviews.</li>
          <li>Connected a robust Flask backend for secure data storage and management of user-posted data, ensuring reliable data persistence and retrieval.</li>
          <li>Integrated the Google Maps API to enhance the user experience, enabling an easy exploration of designated locations.</li>
        </ul>
      </div>

      <div className="exsect3 rbg" >
        <h3 className="proT">
          - Recipe Box -
        </h3>
        <a className="proA" style={{ }} href="https://github.com/Duggan1/phase-2-project-Recipe-Box">Github</a>
        <p style={{ display: 'inline-block',  verticalAlign: 'middle', padding: '0 5px 0 5px' }}> | </p>
        <a className="proA" style={{ }} href="https://www.loom.com/embed/0a472f2e032544c9949de200888d9f69">Demo</a>
        </div><div className="textC juan"><iframe
          src="https://www.loom.com/embed/0a472f2e032544c9949de200888d9f69"
          frameBorder="0"
          allowFullScreen
          title="Recipe Box Demo"
          style={{ borderRadius: '25%', width: '250px', height: '150px', border: 'lightblue 5px solid' }}
        ></iframe></div>
      

      <div className="exsectP" style={{  paddingBottom: '50px' }}>
        <p style={{ fontWeight: 'bold' }}>An app that allows users to virtually store and access popular recipes.</p>
        <ul>
          <li>Exercised JavaScript and React to create responsive frontend components.</li>
          <li>Assembled a local db.json file to store recipe data provided.</li>
          <li>Combined custom CSS and Semantic UI CSS to design the frontend interface.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;

