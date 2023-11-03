import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'

function Docs({marginADJ}) {

    // const handleLClick = () => {
    //     window.open("https://www.linkedin.com/in/kevin-duggan-420624164/", "_blank");
    //   }
    //   const handleGClick = () => {
    //     window.open("https://github.com/Duggan1", "_blank");
    //   }
    // const documentData = [
    //     {
    //       title: "Kevin Duggan's Resume",
    //       institution: "N/A",
    //       date: "2023",
    //     },
    //     {
    //       title: "Software Engineering Certificate",
    //       institution: "Flat Iron School",
    //       date: "2023",
    //     },
    //     {
    //       title: "Bachelor's Degree",
    //       institution: "University Of Illinois at Chicago",
    //       date: "2018",
    //     },
    //     {
    //       title: "Software Engineering Certificate",
    //       institution: "Codecademy",
    //       date: "2022",
    //     },
    //   ];
    
      const handleRClick = () => {
        window.open("https://docs.google.com/document/d/1m1uW6tSQ3suBAurwu5kaeojt2sDRwVAnyeWFuIVUPlY/edit?usp=sharing", "_blank");
      }
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <div className="bg-white">
         {marginADJ ?  
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Kevin's Documents </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {/* {products.map((product) => ( */}
            <div 
            // key={product.id}
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg respic">
                  <div
                    
                    alt="Software Engineering Certificate"
                    className="h-full w-full object-cover object-center "
                  /><a href="cert.pdf" target="_blank">Open PDF</a>

                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Kevin Duggan's Resume
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                     Resume
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                     2023
                    </p>
                </div>
              </div>
              <div className="mt-6">
                <a 
                //   href=
                //   {}
                onClick={() => setOpen(true)}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"  
                >
                  Open <span className="sr-only">,
                   {/* {product.name} */}
                   </span>
                </a>
              </div>
            </div>
          {/* ))} */}
          <div 
            // key={product.id}
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <div
                    
                    alt="Software Engineering Certificate"
                    className="h-full w-full object-cover object-center cert"
                  /><a href="cert.pdf" target="_blank">Open PDF</a>

                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Software Engineering Certificate
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Flat Iron School 
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                     2023
                    </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                //   href=
                //   {}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Open <span className="sr-only">,
                   {/* {product.name} */}
                   </span>
                </a>
              </div>
            </div>
          {/* ))} */}
          <div 
            // key={product.id}
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <div
                    
                    alt="Software Engineering Certificate"
                    className="h-full w-full object-cover object-center cert"
                  /><a href="cert.pdf" target="_blank">Open PDF</a>

                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                  Bachelor's Degree
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    University Of Illinois at Chicago
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                     2018
                    </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                //   href=
                //   {}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Open <span className="sr-only">,
                   {/* {product.name} */}
                   </span>
                </a>
              </div>
            </div>
          {/* ))} */}
          <div 
            // key={product.id}
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <div
                    
                    alt="Software Engineering Certificate"
                    className="h-full w-full object-cover object-center cert"
                  /><a href="cert.pdf" target="_blank">Open PDF</a>

                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Software Engineering Certificate
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                  Codecademy
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                     2022
                    </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                //   href=
                //   {}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Open <span className="sr-only">,
                   {/* {product.name} */}
                   </span>
                </a>
              </div>
            </div>
          {/* ))} */}
          <div 
            // key={product.id}
            >
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <div
                    
                    alt="Software Engineering Certificate"
                    className="h-full w-full object-cover object-center cert"
                  /><a href="cert.pdf" target="_blank">Open PDF</a>

                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Software Engineering Certificate
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Flat Iron Scool
                    </p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                     
                    </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                //   href=
                //   {}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Open <span className="sr-only">,
                   {/* {product.name} */}
                   </span>
                </a>
              </div>
            </div>
          {/* ))} */}
          
          
        </div>
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 Dlogo">
                    {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    {/* <image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eo_circle_orange_letter-d.svg/1200px-Eo_circle_orange_letter-d.svg.png" alt="not it champ"></image> */}
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Kevin's Resume
                    </Dialog.Title>
                    <div className="mt-2">


                      <p style={{height:'400px', width:'350px'}}className=" respic"> </p>





                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">


                <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-500 sm:ml-3 sm:w-auto"
                        onClick={() => {
                            setOpen(false);
                            handleRClick(); // Invoke the function
                        }}
>
                    Open
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>

                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>



      </div>: <h1 style={{textAlign:'center'}} className=' bigGuy font-size-55px '>Documents</h1>  }
    </div>
        );
}

export default Docs;