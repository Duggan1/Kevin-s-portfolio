import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import cp1 from './cp1.jpeg'
import cp2  from './cp2.jpeg'
import cp3 from './cp3.jpeg'
import cp4 from './cp4.jpeg'
import cp0 from './kevo.jpeg'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home3({marginADJ}) {


  const images = [
    cp0, 
    cp2,
    cp3,
    cp1
    
  ];
  const mainImage = cp4; 
  
    const [picNow, setPicNow] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMainImage, setIsMainImage] = useState(false);
  
    useEffect(() => {
      if (isMainImage) {
        const mainImageTimer = setTimeout(() => {
          // Reset to the first image after displaying the main image
          setPicNow(images[0]);
          setCurrentIndex(0);
          setIsMainImage(false);
        }, 5000); // Display the main image for 5 seconds
  
        return () => clearTimeout(mainImageTimer); // Clear the timeout if the component unmounts
      } else {
        const imageTimer = setTimeout(() => {
          const nextIndex = currentIndex + 1;
          if (nextIndex < images.length) {
            setPicNow(images[nextIndex]);
            setCurrentIndex(nextIndex);
          } else {
            setPicNow(mainImage);
            setIsMainImage(true);
          }
        }, 2000); // Change image every 1 second
  
        return () => clearTimeout(imageTimer); // Clear the timeout if the component unmounts or updates
      }
    }, [currentIndex, isMainImage]);


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(true);

  const toggleVideoVisibility = () => {
    setShowVideo(!showVideo);
  };
  const handleRClick = () => {
    window.open("https://picks4points.com", "_blank");
  }

  // Get the width and height of the browser window
// var windowWidth = window.innerWidth;
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

console.log("Small Screen",windowWidth < 1023 );

console.log(!marginADJ)
console.log(!marginADJ && windowWidth < 1023 )
  return (
    <div   id={`${!marginADJ && windowWidth < 1023 ?  'display-none' : ''}`}
          className={`${!marginADJ  ?  marginADJ : ''}`}>
      {/* <header className="absolute inset-x-0 top-0 z-50">
        

      </header> */}
      <div className={`overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-4 ${marginADJ ? '' : ' '}  ` }
>
        <div style={{backgroundImage:'url("data:image/jpeg;base64,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")'}} 
          className={`  inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]
           bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 ${marginADJ ? 'absolute': ' '} `}
          aria-hidden="true" />
        
        <div style={{marginTop:'-50px'}} className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div  className='flex-start'>
          <p class="h-24 w-24 rounded-full bg-gray-800 kevio2 margin70pxleft-at-760"  style={{paddingTop:'40px',paddingRight:'40px',marginTop:'-15%'}}
                                    >
                                </p>
                                <h1 className="landstrom max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            <span style={{backgroundColor:'whitesmoke'}}  >Kevin T. Duggan</span>
            </h1></div>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 "style={{backgroundColor:'whitesmoke'}} >
              Full Stack Web Developer with experience in React.js, Python, and Flask-based programming. Combines a diverse background in teaching, management, sales, and sustainable design to bring a unique perspective to projects. Demonstrates excellent communication, team-building, and project management skills, driving impactful results that enhance the work environment and deliver exceptional outcomes.
              </p>
              <div className={`mt-10 flex items-center gap-x-6  ${marginADJ ? marginADJ : ' '}`}>
                <a href="#" onClick={toggleVideoVisibility} 
                className={` shook shake text-sm font-semibold leading-6 text-gray-900 bg-ws hover:bg-gray-500   ${marginADJ ? marginADJ : ' '} `}
                
                style={{border:'gray 2px solid',borderRadius:'5%',padding:'1%',backgroundColor:'white'}}>
                  Allow me to Introduce Myself 
                </a>
                <a
                  onClick={handleRClick}
                  href="#"
                  className=" shake rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Most Recent Work <span aria-hidden="true">→</span>
                </a>
                
              </div>
            </div>
           
           {showVideo ?  
            <div
              
              style={{backgroundImage:`url(${picNow})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl
                sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 
               xl:row-end-2 xl:mt-36 bg-black"
            ></div>
:
            
                <iframe 
                    src="https://www.loom.com/embed/a5e33ab39fb040bea9ed716f4ac4fc9f?sid=c706cf97-5b76-43cc-a3f2-e264e8b4530f"
                    frameBorder="0"
                    allowFullScreen
                    title="kevin"
                    
                    className={`mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36  ${marginADJ ? marginADJ : ' '} `}
                ></iframe>
          
}

          </div>
        </div>
        <div className={`  inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32  ${marginADJ ? 'absolute': ' '} `} />
      </div>
    </div>
  )
}
