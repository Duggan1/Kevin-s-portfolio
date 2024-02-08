function EX2({marginADJ}) {
    return (<>
      <section style={{marginBottom:'-50px'}} className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <center><h2 className="font-size-50-26px color-black">Experience </h2></center>
          <img className="mx-auto h-12" src="data:image/png;base64,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" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
              As a Full Stack Web Developer with a passion for problem-solving and a diverse background in teaching, management, sales, and sustainable design, my journey as a software engineer has been an exciting and fulfilling one. I'll take you through my experiences, projects, and the skills I've gained along the way, showcasing how my unique perspective and dedication have propelled me in the world of coding
              </p>
            </blockquote>
           
          </figure>
        </div>
      </section>

<section style={{marginTop:'-50px',marginBottom:'-50px'}}  className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),white)] opacity-20" />
<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
<div className="mx-auto max-w-2xl lg:max-w-4xl">
  <h2 className="font-size-50-26px">Finding my Path</h2>
  <figure className="mt-10">
    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        
      <p>
      My journey into the world of software engineering began with a desire to combine my love for technology with my knack for teaching. While working as an English Tutor at EnGoo, I had the opportunity to evaluate students' progress and tailor lessons to their unique learning styles. It was during this time that I realized the power of technology in facilitating effective learning. Eager to explore this further, I embarked on a path that would lead me to become a software engineer.
      </p>
    </blockquote>
    
  </figure>
</div>
</section>

<section style={{marginTop:'-50px',marginBottom:'-50px'}}  className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),white)] opacity-20" />
<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
<div className="mx-auto max-w-2xl lg:max-w-4xl">
<h2 className="font-size-50-26px">The Transformation</h2>
  <figure className="mt-10">
    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
      <p>
      Once I knew I had passion for coding and problem solving, I enrolled in the Full Stack Web Development program at Flatiron School. This immersive program introduced me to a world of possibilities, equipping me with the necessary skills to bring ideas to life. Through hands-on experience with technologies like React.js, Python, SQLalchemy, and Flask, I honed my programming abilities and developed a solid foundation in web development principles.
      </p>
    </blockquote>
    
  </figure>
</div>
</section>

<section style={{marginTop:'-50px',marginBottom:'-50px'}}  className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),white)] opacity-20" />
<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
<div className="mx-auto max-w-2xl lg:max-w-4xl">
<h2 className="font-size-50-26px">Projects that Made an Impact</h2>
  <figure className="mt-10">
    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900  sm:leading-9">
      <p>Throughout my journey, I had the privilege of working on several impactful projects that showcased my technical expertise and problem-solving skills. One of my notable projects was the creation of Chicago Fight Team's website. This functional platform allowed users to sign up and pay for gym memberships seamlessly. By implementing secure user authentication and integrating payment processing with Stripe, I ensured a smooth and secure user experience. The use of React.js for the front-end and Flask for backend management enabled efficient handling of user and gym information, streamlining operations for the team.
      Another exciting project was KRT-Kitchen, a dynamic restaurant website. This application enabled users to explore menus, browse locations, and leave reviews. Leveraging the power of React.js, I created a seamless user experience with efficient routing and full CRUD functionality for reviews. The integration of a robust Flask backend ensured secure data storage and retrieval, while the integration of the Google Maps API enhanced the user experience by providing easy exploration of designated locations.
      </p>
    </blockquote>
    
  </figure>
</div>
</section>

<section style={{marginTop:'-50px',marginBottom:'0px'}}  className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.900),white)] opacity-20" />
<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
<div className="mx-auto max-w-2xl lg:max-w-4xl">
<h2 className="font-size-50-26px">Skills that Set Me Apart</h2>
  <figure className="mt-10">
    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
      <p>
      Alongside my technical skills, my journey as a software engineer has also taught me the importance of effective communication, team-building, and project management. Collaborating with cross-functional teams, including designers, project managers, and clients, I've learned the value of clear and concise communication in driving successful outcomes. The ability to adapt, learn from others, and foster a collaborative work environment has been crucial in delivering exceptional results.
      As I reflect on my journey from teaching to coding, I am grateful for the experiences that have shaped me into the software engineer I am today. My diverse background, coupled with a passion for problem-solving, has given me a unique perspective that allows me to approach projects with creativity and innovation. Looking ahead, I am excited to continue growing and contributing to the ever-evolving field of software engineering, making a positive impact one line of code at a time.
      </p>
    </blockquote>
    <figcaption className="mt-10">
      <img
        className="mx-auto h-10 w-10 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png"
        alt=""
      />
      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
        <div className="font-semibold text-gray-900">Kevin Duggan</div>
        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
          <circle cx={1} cy={1} r={1} />
        </svg>
        <div className="text-gray-600">CEO of Picks4Points</div>
      </div>
    </figcaption>
  </figure>
</div>
</section>
</>
    )
  }
  
  export default EX2;