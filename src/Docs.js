import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

function Docs({ marginADJ }) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

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
    },{
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
    // {
    //     title: "Bachelor's Degree",
    //     institution: "University of Illinois at Chicago",
    //     date: "2018",
    //     className: "cert",
    //     link: "cert",
    //   },
    // Add more documents as needed
  ];

  return (
    <div className="bg-white">
      {marginADJ || !isMobile ? (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Kevin's Documents</h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {documents.map((document, index) => (
              <div key={index}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <div
                      alt={document.title}
                      className={`h-full w-full object-cover object-center ${document.className}`}
                    >
                      <a href={document.link} target="_blank">Kevin Duggan</a>
                    </div>
                  </div>
                  <div className="relative mt-4">
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
                  <a
                    onClick={() => handleRClick(document.link)}
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
                        Document Title
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
