function About2({marginADJ}) {
    return (
      
        <div className="bg-gradient-to-b from-indigo-100/20 pb-20 sm:pb-24 xl:pb-0" style={{borderLeft:'solid 3px white'}}>
            <div
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
                  <p className="bg-white text-gray-600">
                  Greetings! I'm Kevin, an enthusiastic software engineer, eager to contribute my skills and knowledge to create innovative solutions. Whether it's building user-friendly websites or developing robust applications, I approach each project with a combination of creativity, determination, and attention to detail.

When I'm not coding, you can find me enjoying a good cup of coffee, training or watching martial arts,  or immersing myself in the latest technology trends. I'm always up for a challenge and ready to take on new opportunities in the ever-evolving world of software engineering.

Let's connect and embark on this exciting coding journey together!
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base" style={{paddingBottom:'20px'}}>
                  <div className="font-semibold text-gray-800"><span style={{paddingBottom:'30px'}} className="bg-white">Certified Software Engineer</span></div>
                  <div className="mt-1 text-gray-700"><span className="bg-white">Kevin Thomas Duggan</span></div>
                </figcaption>
              </figure>
            </div>


          </div>



    <section className="bg-gray-700 py-24 sm:py-32" style={{border:'solid 3px white'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div style={{backgroundImage:'url("https://cdn1.vogel.de/BNueWF9WfxZoOJIfpXvTMKXU868=/fit-in/800x0/p7i.vogel.de/wcms/9d/e0/9de0c6f0fcd9f328c533d415a3c4488e/0113286401.jpeg")',backgroundSize:"100% 100%",minHeight:'200px'}} className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 " >
            {/* <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="" />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                  arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                  ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
               
                <div className="text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <div className="mt-1 text-gray-400">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure> */}
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
            <figure style={{}} className="mt-10 flex flex-auto flex-col justify-between">
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
                  <p>
                  Hello again! Did I mention I'm a dedicated software engineer with a passion for creative problem-solving and a deep love for coding.

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