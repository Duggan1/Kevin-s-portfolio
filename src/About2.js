import { useState, useEffect } from 'react'

function About2({marginADJ}) {



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
      
        <div id={`${!marginADJ && windowWidth < 1023 ?  'display-none' : ''}`} 
        className="bg-gradient-to-b from-indigo-100/20 pb-20 sm:pb-24 xl:pb-0" style={{borderLeft:'solid 3px white'}}>
            <div style={{backgroundImage:'url("data:image/jpeg;base64,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")'}} 
          className={`  inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]
           bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 ${marginADJ ? 'absolute': ' '} `}
          aria-hidden="true" />
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className={`${!marginADJ ?  marginADJ : ' '} aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto` } >
                <img style={{minHeight:'300px'}}
                  className={`${marginADJ ? '': ' '} inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl ye`}
                  
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="  pt-6 sm:pt-12" >
               
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <h4 className="font-size-50-36px text-gray-900">Greetings!</h4>
                  <p style={{backgroundColor:'whitesmoke'}}className=" mt-2 text-gray-600">
                  I'm Kevin, an enthusiastic software engineer, eager to contribute my skills and knowledge to create innovative solutions. Whether it's building user-friendly websites or developing robust applications, I approach each project with a combination of creativity, determination, and attention to detail.

When I'm not coding, you can find me enjoying a good cup of coffee, training or watching martial arts,  or immersing myself in the latest technology trends. I'm always up for a challenge and ready to take on new opportunities in the ever-evolving world of software engineering.

Let's connect and embark on this exciting coding journey together!
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base" style={{paddingBottom:'20px'}}>
                  <div className="font-semibold text-white-700"><span style={{paddingBottom:'30px'}} className="">Certified Software Engineer</span></div>
                  <div className="mt-1 text-white"><span className="">Kevin Thomas Duggan</span></div>
                </figcaption>
              </figure>
            </div>


          </div>



    <section className="bg-gray-700 py-24 sm:py-32" style={{border:'solid 3px white'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div style={{backgroundImage:'url("https://cdn1.vogel.de/BNueWF9WfxZoOJIfpXvTMKXU868=/fit-in/800x0/p7i.vogel.de/wcms/9d/e0/9de0c6f0fcd9f328c533d415a3c4488e/0113286401.jpeg")',backgroundSize:"100% 100%",minHeight:'200px'}} className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 " >
                <img
                  className=" bg-gray-800 width100"
                  src=""
                  alt=""
                /> 
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
           
            <figcaption className="flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-50"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-gray-100">About the Software Engineer</div>
                  <div className="mt-1 text-gray-400">Watch Video</div>
                </div>
              </figcaption>
            <figure style={{}} className=" flex flex-auto flex-col justify-between">
            <iframe width="100%" height="315"
                    src="https://www.youtube.com/embed/tdDCfCLTRGw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        className={`akavid ${marginADJ}`} 
                        style={{
                        // marginLeft: marginADJ === "0%" ? "20%" : marginADJ,
                        width: '100%',
                        justifyContent: 'center'
                        }}
                        
                        ></iframe>
              
            </figure>
          </div>
        </div>
      </div>
    </section>


    <center className="margin-0-10 ">
        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="  pt-6 sm:pt-12" >
               
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <h4 className="font-size-50-36px">Hello again!</h4>
                  <p className="mt-2">
                   Did I mention I'm a dedicated software engineer with a passion for creative problem-solving and a deep love for coding.

My venture into the realm of software engineering kicked off in 2020 when I decided to pursue my dream while residing in the vibrant city of Bangkok. However, my journey to becoming a developer was far from conventional. Prior to immersing myself in coding, my life took diverse turns, including teaching English online and exploring the dynamic worlds of Muay Thai and MMA.

A twist of fate led me to reassess my career trajectory after a knee injury, reigniting my love for coding. Despite previous setbacks, I embraced the challenge with determination and a fresh perspective.

Embarking on my coding journey anew, I chose Python as my primary language. Immersing myself in online tutorials and books, I dedicated countless hours to refining my coding skills. Despite the occasional hurdles, I persevered, fueled by encouragement from friends and the belief that every experience contributes to personal growth.

Seeking guidance from seasoned programmers, I prioritized structure and a clear learning path. Enrolling in Codecademy, I honed my Python skills and expanded my knowledge of JavaScript, HTML, and CSS. While Codecademy provided a solid foundation, my hunger for a more immersive learning experience led me to Flat Iron School. Acting on a friend's recommendation, I took a bold step, quitting my job to join the bootcamp. Through intensive training and hands-on projects, I gained invaluable experience, learning to tackle real-world challenges.

Now, as an enthusiastic software engineer, I'm eager to contribute my skills and knowledge to create innovative solutions. Whether crafting user-friendly websites or developing robust applications, I approach each project with a blend of creativity, determination, and meticulous attention to detail.

Outside the coding realm, you'll find me training or watching martial arts, savoring a good cup of coffee, or staying abreast of the latest technology trends. I thrive on challenges and am ready to embrace new opportunities in the ever-evolving world of software engineering.

Let's connect and embark on this exciting coding journey together!
                  </p>
                </blockquote>
                
              </figure>
            </div>
            </center>








        </div>
      
    )
  }

  export default About2;