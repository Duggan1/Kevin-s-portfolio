import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

function Docs({ marginADJ }) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState('Doc Details');

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth < 1023) { // Adjust the breakpoint as needed
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const handleRClick = (documentLink) => {
    setSelectedDocument(documentLink);
  };
  const handleDClick = (documentDetails) => {
    setSelectedDetails(documentDetails);
  };
  const handleResumeClick = () => {
    window.open("https://docs.google.com/document/d/1m1uW6tSQ3suBAurwu5kaeojt2sDRwVAnyeWFuIVUPlY/edit?usp=sharing", "_blank");
  }
  const closeDocumentModal = () => {
    setSelectedDocument(null);
  };

  const documents = [
    {
      title: "Kevin Duggan's Resume",
      institution: "Resume",
      date: "2023",
      className: "respic",
      link: "respic",
    },
    {
      title: "Software Engineering Certificate",
      institution: "Flat Iron School",
      date: "2023",
      className: "cert",
      link: "cert",
    },
    {
        title: "Bachelor's Degree",
        institution: "University of Illinois at Chicago",
        date: "2018",
        className: "cert2",
        link: "cert2",
      },
      {
        title: "JavaScript Course Certificate",
        institution: "Codecademy",
        date: "2022",
        className: "ca1",
        link: "ca1",

      },
      {
        title: "HTML Course Certificate",
        institution: "Codecademy",
        date: "2022",
        className: "ca2",
        link: "ca2",

      },
      {
        title: "CSS Course Certificate",
        institution: "Codecademy",
        date: "2022",
        className: "ca3",
        link: "ca3",

      },
    
    // Add more documents as needed
  ];

  return (
    <div className={`bg-gradient-to-b from-indigo-100/20`}>
      
      <div style={{backgroundImage:'url("data:image/jpeg;base64,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")'}} 
          
          className={`  inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]
           bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 ${marginADJ ? 'absolute': ' '} `}
          aria-hidden="true" />



      {marginADJ || !isMobile ? 
      (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 margin70pxleft-at-640">
          <h2 className="text-xl font-bold text-gray-900 font-size-55px ">Kevin's Documents</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
            {documents.map((document, index) => (
              <div key={index}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <div style={{border:"solid black 3px"}}
                      alt={document.title}
                      className={`h-full w-full object-cover object-center ${document.className}`}
                    >
                      <a href={document.link} target="_blank">Kevin Duggan</a>
                    </div>
                  </div>
                  <div className="relative mt-4 bg-white" style={{border:"solid black 3px",padding:'1%'}}>
                    <h3 className="text-sm font-medium text-gray-900">
                      {document.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{document.institution}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{document.date}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a style={{border:"solid black 1px"}}
                    onClick={() => {
                        handleRClick(document.link);
                        handleDClick(document.title);
                      }}
                      
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: 'center' }} className="bigGuy font-size-55px">
          Documents
        </h1>
      )}

      {/* Modal for displaying selected document */}
      <Transition.Root show={selectedDocument !== null} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDocumentModal}>
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
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                      onClick={closeDocumentModal}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10 Dlogo">
                      {/* You can add an icon or logo here */}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      {selectedDetails}
                      </Dialog.Title>
                      <div className="mt-2">
                        <iframe
                          title="Document Viewer"
                        //   src={selectedDocument}
                          style={{ width: '100%', height: '500px', backgroundSize:'100% 100%' }}
                          className={selectedDocument}
                          frameborder="0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-500 sm:ml-3 sm:w-auto"
                      onClick={closeDocumentModal}
                    >
                      Close
                    </button>
                    {selectedDetails == "Kevin Duggan's Resume" ? 
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      onClick={handleResumeClick}
                    >
                      Open
                    </button>:  null}


                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Docs;
