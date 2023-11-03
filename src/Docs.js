import certPdf from './cert.pdf';

function Docs({marginADJ}) {

    // const handleLClick = () => {
    //     window.open("https://www.linkedin.com/in/kevin-duggan-420624164/", "_blank");
    //   }
    //   const handleGClick = () => {
    //     window.open("https://github.com/Duggan1", "_blank");
    //   }
    //   const handleRClick = () => {
    //     window.open("https://docs.google.com/document/d/1m1uW6tSQ3suBAurwu5kaeojt2sDRwVAnyeWFuIVUPlY/edit?usp=sharing", "_blank");
    //   }
    
    
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
      </div>: <h1 style={{textAlign:'center'}} className=' bigGuy font-size-55px '>Documents</h1>  }
    </div>
        );
}

export default Docs;