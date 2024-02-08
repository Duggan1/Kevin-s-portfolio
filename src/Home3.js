import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home3({marginADJ}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(true);

  const toggleVideoVisibility = () => {
    setShowVideo(!showVideo);
  };
  const handleRClick = () => {
    window.open("https://picks4points.com", "_blank");
  }
console.log(marginADJ)
  return (
    <div className={`${!marginADJ ?  marginADJ : ' '}`}>
      {/* <header className="absolute inset-x-0 top-0 z-50">
        

      </header> */}
      <div className={`overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 ${marginADJ ? '' : ' '}  ` }
>
        <div
          className={`  inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]
           bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 ${marginADJ ? 'absolute': ' '} `}
          aria-hidden="true" />
        
        <div style={{marginTop:'-50px'}} className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <div   className='flex-start'>
          <p class="h-24 w-24 rounded-full bg-gray-800 kevio2"  style={{paddingTop:'40px',paddingRight:'40px',marginTop:'-15%'}}
                                    >
                                </p>
                                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            Kevin Thomas Duggan
            </h1></div>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600 bg-white">
              Full Stack Web Developer with experience in React.js, Python, and Flask-based programming. Combines a diverse background in teaching, management, sales, and sustainable design to bring a unique perspective to projects. Demonstrates excellent communication, team-building, and project management skills, driving impactful results that enhance the work environment and deliver exceptional outcomes.
              </p>
              <div className={`mt-10 flex items-center gap-x-6  ${marginADJ ? marginADJ : ' '}`}>
                <a href="#" onClick={toggleVideoVisibility} 
                className={`text-sm font-semibold leading-6 text-gray-900 bg-ws hover:bg-gray-500   ${marginADJ ? marginADJ : ' '} `}
                
                style={{border:'gray 1px solid',borderRadius:'5%',padding:'1%',backgroundColor:'whitesmoke'}}>
                  Allow me to Introduce Myself 
                </a>
                <a
                  onClick={handleRClick}
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Most Recent Work <span aria-hidden="true">→</span>
                </a>
                
              </div>
            </div>
           
           {showVideo ?  
            <div
              
              style={{backgroundSize:'100% 100%'}}
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 kevo"
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
