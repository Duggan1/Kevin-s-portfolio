import React, { useState } from 'react';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import FooterDash from './FooterDash';
import Docs from './Docs';


function Home2() {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      toggleML()


    };
    const [ML, setML] = useState(isMobileMenuOpen ? "relative" : "");
    const toggleML = () => {
        if (isMobileMenuOpen){
            setML("");
        }
        if (!isMobileMenuOpen){
            setML("relative");
        }
  console.log(ML)
      };

    
    
    

    const handleLClick = () => {
        window.open("https://www.linkedin.com/in/kevin-duggan-420624164/", "_blank");
      }
    const handleGClick = () => {
        window.open("https://github.com/Duggan1", "_blank");
      }
     const [projectON, setProjectON] = useState(0)
    const [page , setPage] = useState('Home')
    let content;
    if (page === 'Home') {
    content = <Home  marginADJ={ML} />;
    } else if (page === 'About') {
    content = <About  marginADJ={ML} />;
    } else if (page === 'Experience') {
    content = <Experience marginADJ={ML} />;
    } else if (page === 'Projects') {
    content = <Projects marginADJ={ML} projectON={projectON} />;
    } else if (page === 'Docs') {
        content = <Docs marginADJ={ML} projectON={projectON} />;
        }


    function calculateRedBorderWidth() {
        const redBorderDiv = document.getElementById('redBorderDiv');
      
        if (redBorderDiv) {
          const redBorderWidth = redBorderDiv.offsetWidth;
          console.log(`Red border width: ${redBorderWidth}px`);
        }
      }
      
      // Call the function after the component is rendered or when you need to get the width.
      calculateRedBorderWidth();



    // <!--
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// -->


return (
//     <!--
//     This example requires updating your template:
  
//     ```
//     <html class="h-full bg-white">
//     <body class="h-full">
//     ```
//   -->
  <div 
//   style={{border:'grey 3px solid'}}
  >
    {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
    <div class=" z-50 lg:hidden" role="dialog" aria-modal="false"
    //  style={{border:'pink 13px solid'}}
     >
      {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
      <div class="fixed inset-0 " 
    //   style={{border:'white 3px solid'}}
      ></div>
  
      <div class="fixed inset-0 flex" 
    //   style={{border:'purple 13px solid'}}
      >
        {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "-translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "-translate-x-full"
        --> */}
        {isMobileMenuOpen ? <div class="  left-full top-0 flex w-16 justify-center  navbutton"  style={{}}>
            <button  onClick={() => {
  toggleMobileMenu();
  toggleML();
}} type="button" class="-m-2.5 p-2.5">
             <span class="sr-only">Open sidebar</span>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
            </button>
            
          </div> :
        <div id="redBorderDiv" class="relative  z-50 mr-16 flex w-full max-w-xs flex-1"
        //  style={{border:'red 3px solid',}}
         >
          {/* <!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          --> */}
          <div class="absolute left-full top-0 flex w-16 justify-center  navbutton"  style={{}}>
            <button  onClick={toggleMobileMenu} type="button" class="-m-2.5 p-2.5">
              <span class="sr-only">Close sidebar</span>
              <svg class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
          </div>
  
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png"  alt="Your Company"></img>
            </div>


            {/* <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png"  alt="Your Company"></img>
            </div> */}



            <nav class="flex flex-1 flex-col">
              <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" class="-mx-2 space-y-1">
                  <li class="-mx-6 mt-auto">
                        <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white ">
                        <p class="h-8 w-8 rounded-full bg-gray-800 kevio2" 
                                    >
                                </p>

                            <span class="sr-only">Your profile</span>
                            <span aria-hidden="true">Kevin Thomas Duggan </span>
                        </a>
                        {/* <Footer/>  */}
                        </li>

                    <li onClick={() => {setPage("Home");
                toggleMobileMenu();
                toggleML()}}>
                      {/* <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" --> */}
                      <a href="#" class={`${ page === "Home" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>

                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Home Page
                      </a>
                    </li>
                    <li onClick={() => {setPage("About");
                toggleMobileMenu();
                toggleML()}}>
                    <a href="#" class={`${ page === "About" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    About 
                  </a>
                </li>
                   <li onClick={() => {
                    setProjectON(6);
                    setPage("Projects");
                    toggleMobileMenu();
                    toggleML()
                }}>
                   <a href="#" class={`${ page === "Projects" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Projects
                  </a>
                    </li>
                    <li onClick={() => {setPage("Experience");
                toggleMobileMenu();
                toggleML()}}>
                    <a href="#" class={`${ page === "Experience" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        Experience
                    </a>
                    </li>
                    <li onClick={() => {setPage("Docs");
                toggleMobileMenu();
                toggleML()}}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        Documents
                    </a>
                    </li>
                    {/* <li>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                        Reports
                    </a>
                    </li> */}
                    {/* <div class="text-xs font-semibold leading-6 text-gray-400">Kevin's External Links</div>
                    <li onClick={handleLClick}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        LinkedIn 
                    </a>
                    </li>
                    <li onClick={handleGClick}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        Github 
                    </a>
                    </li> */}
                </ul>
                </li>
                <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">Kevin's Projects</div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                    <li onClick={() => {
                            setProjectON(1);
                            setPage("Projects");
                            toggleMobileMenu();
                            toggleML()
                            }}>
                    {/* <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" --> */}
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">ORP</span>
                        <span class="truncate">Off the Record Picks</span>
                    </a>
                    </li>
                    <li onClick={() => {
                        setProjectON(2);
                        setPage("Projects");
                        toggleMobileMenu();
                        toggleML()
                        }}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">CFT</span>
                        <span class="truncate">Chicago Fight Team</span>
                    </a>
                    </li>
                    <li onClick={() => {
                        setProjectON(3);
                        setPage("Projects");
                        toggleMobileMenu();
                        toggleML()
                        }}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">TT</span>
                        <span class="truncate">Trish the Teacher</span>
                    </a>
                    </li>
                    <li onClick={() => {
                        setProjectON(4);
                        setPage("Projects");
                        toggleMobileMenu();
                        toggleML()
                        }}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">KRT</span>
                        <span class="truncate">KRT Kitchen</span>
                    </a>
                    </li>
                    <li onClick={() => {
                        setProjectON(5);
                        setPage("Projects");
                        toggleMobileMenu();
                        toggleML()
                        }}>
                    <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">RB</span>
                        <span class="truncate">Recipe Box</span>
                    </a>
                    </li>
                </ul>
                </li>
                <li class="-mx-6 mt-auto">
                <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white ">
                    <img class="h-8 w-8 rounded-full bg-gray-800" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq3sbqmqNc-nj1D2ciLrSEXVfSFoyGytFTDzZLhLTE4-SIg1qdk-EWxXGv0MPb0vW7Ow&usqp=CAU" alt=""></img>
                    <span class="sr-only">Your profile</span>
                    <span aria-hidden="true">Chicago, IL, USA </span>
                </a>
                {/* <Footer/>  */}
                </li>

                <li class="-mx-6 mt-auto">
               
                <FooterDash/> 
                </li>
            </ul>
            </nav>
          </div>
        </div>}

      </div>
    </div>
  
    {/* <!-- Static sidebar for desktop --> */}
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col" 
    // style={{border:'blue 3px solid'}}
    >
      {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png" alt="Your Company"></img>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">


              <li class="-mx-6 mt-auto">
              <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white ">
              <p class="h-8 w-8 rounded-full bg-gray-800 kevio2" 
                        >
                    </p>

                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Kevin Thomas Duggan </span>
              </a>
              {/* <Footer/>  */}
            </li>
                <li onClick={() => setPage("Home")}>




                  {/* <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" --> */}
                  <a href="#" class={`${ page === "Home" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>

                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home Page
                  </a>
                </li>
                <li onClick={() => setPage("About")}>
                {/* `fighter-image ${
          predictions[index]?.winner === 1 ? 'selected' : ''
                             }`}
                             ${page === 'About' ? 'bg-gray-800' : 'text-gray-400'}  */}
                    
                    <a href="#" class={`${ page === "About" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>


                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    About 
                  </a>
                </li>
                <li onClick={() => {
                    setProjectON(6);
                    setPage("Projects");
                    }}>
                <a href="#" class={`${ page === "Projects" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>

                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Projects
                  </a>
                </li>
                <li onClick={() => setPage("Experience")}>
                <a href="#" class={`${ page === "Experience" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>

                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Experience
                  </a>
                </li>
                <li onClick={() => setPage("Docs")}>
                <a href="#" class={`${ page === "Documents" ? 'bg-gray-800' : 'text-gray-400' } hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>

                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    Documents
                  </a>
                </li>
                {/* <li>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                    Reports
                  </a>
                </li> */}
                 <li onClick={handleLClick} >
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    LinkedIn 
                  </a>
                </li>
                <li onClick={handleGClick}>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <svg class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    Github 
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs font-semibold leading-6 text-gray-400">Kevin's Projects</div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
              <li onClick={() => {
                    setProjectON(1);
                    setPage("Projects");
                    }}>
                  {/* <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" --> */}
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">ORP</span>
                    <span class="truncate">Off the Record Picks</span>
                  </a>
                </li>
                <li onClick={() => {
                    setProjectON(2);
                    setPage("Projects");
                    }}>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">CFT</span>
                    <span class="truncate">Chicago Fight Team</span>
                  </a>
                </li>
                <li onClick={() => {
                    setProjectON(3);
                    setPage("Projects");
                    }}>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">TT</span>
                    <span class="truncate">Trish the Teacher</span>
                  </a>
                </li>
                <li onClick={() => {
                    setProjectON(4);
                    setPage("Projects");
                    }}>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">KRT</span>
                    <span class="truncate">KRT Kitchen</span>
                  </a>
                </li>
                <li onClick={() => {
                    setProjectON(5);
                    setPage("Projects");
                    }}>
                  <a href="#" class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                    <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">RB</span>
                    <span class="truncate">Recipe Box</span>
                  </a>
                </li>
              </ul>
            </li>
            
            <li  class="-mx-6 mt-auto">
              <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white ">
                <img class="h-8 w-8 rounded-full bg-gray-800" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWq3sbqmqNc-nj1D2ciLrSEXVfSFoyGytFTDzZLhLTE4-SIg1qdk-EWxXGv0MPb0vW7Ow&usqp=CAU" alt=""></img>
                <span class="sr-only">Your profile</span>
                <span aria-hidden="true">Chicago, IL, USA </span>
              </a>
              {/* <FooterDash/>  */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  
    {/* <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden" style={{border:'yellow 3px solid'}}>
      <button type="button" class="-m-2.5 p-2.5 text-gray-400 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
      </a>
    </div>
   */}
    <main class="py-10 lg:pl-72" 
    // style={{border:'white 3px solid'}}
    >
    {content}

    <Footer marginADJ={ML} ></Footer>
      <div class="px-4 sm:px-6 lg:px-8" >
        
        
        
      </div>
    </main>
  </div>
  
)
}
export default Home2;

