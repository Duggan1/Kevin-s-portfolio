

function About({marginADJ}) {
    return (
        <>
      <div style={{backgroundColor:'rgb(2, 2, 31)'}}>
      <h1 className='exsect3 bigGuy font-size-55px ' >About Kevin</h1>
        {/* <h2 className='exsect3' style={{color:'white'}}></h2> */}
        
      </div>
      <div style={{height:'500px',marginLeft:"5%", margin:'5%',  }}className="ye"></div>
      
      <p className="exsectP upUp">
Hey there! I'm Kevin, a passionate software engineer with a knack for problem-solving and a love for coding

My journey into the world of software engineering began in 2020 when I decided to pursue my dream while living in the city of Bangkok. However, my path to becoming a developer was anything but traditional. Prior to diving into coding, I led a diverse life, exploring and taking on different roles. I had the privilege of teaching English online and even engaging in the thrilling world of martial arts, specifically Muay Thai & MMA.

However, fate had a different plan for me. A knee injury forced me to slow down and reevaluate my career path. It was during this time that I rediscovered my passion for coding and decided to give it another shot. Despite previous setbacks, I knew that with determination and a fresh perspective, I would succeed.

I started my journey afresh, this time with Python as my chosen language. I delved into online tutorials and books, spending countless hours honing my coding skills. Although it wasn't always smooth sailing, I persisted, motivated by the words of encouragement from friends and the belief that every experience, contributes to growth.

To ensure I was on the right track, I sought advice from experienced programmers who emphasized the importance of structure and a clear learning path. With their guidance, I signed up to Codecademy, where I further developed my Python skills and expanded my knowledge of JavaScript, HTML, and CSS. Codecademy provided a solid foundation, but I craved a more immersive learning experience that would allow me to apply my skills in practical projects.

</p>
<img className="codinggif" src="https://cdn1.vogel.de/BNueWF9WfxZoOJIfpXvTMKXU868=/fit-in/800x0/p7i.vogel.de/wcms/9d/e0/9de0c6f0fcd9f328c533d415a3c4488e/0113286401.jpeg"
 alt="Animated GIF"></img>

<p className="exsectP ">That's when I discovered Flat Iron School. Following the recommendation of a friend who shared my passion for both coding and martial arts, I made the bold decision to quit my job and join the bootcamp. Through intensive training and hands-on projects, I gained invaluable experience and learned to tackle real-world challenges head-on.

Today, I'm an enthusiastic software engineer, eager to contribute my skills and knowledge to create innovative solutions. Whether it's building user-friendly websites or developing robust applications, I approach each project with a combination of creativity, determination, and attention to detail.

When I'm not coding, you can find me exploring new martial arts techniques, enjoying a good cup of coffee at a local cafe, or immersing myself in the latest technology trends. I'm always up for a challenge and ready to take on new opportunities in the ever-evolving world of software engineering.

Let's connect and embark on this exciting coding journey together!</p>
<center>
<iframe width="560" height="315"
 src="https://www.youtube.com/embed/tdDCfCLTRGw"
  frameborder="0"
   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    className={`akavid ${marginADJ}`} 
    style={{
      // marginLeft: marginADJ === "0%" ? "20%" : marginADJ,
      width: '80%',
      justifyContent: 'center'
    }}
    
    ></iframe></center>
      </>
    );
  }
  
  export default About;