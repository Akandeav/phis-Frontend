import { ChevronRightIcon } from '@heroicons/react/solid'
import { BsGlobe2 } from 'react-icons/bs'
import { FaMicroscope, FaWarehouse } from 'react-icons/fa'
import { CgDatabase } from 'react-icons/cg'
import cu from '../../assets/img/cu.png'
import ace from '../../assets/img/ace.png'
import afd from '../../assets/img/afd.png'
import dstn from '../../assets/img/dstn.png'
import inr from '../../assets/img/inr.png'
import wb from '../../assets/img/wb.png'
import cea from '../../assets/img/mitic.png'
/*
const navigation = [
  
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
  
]
*/
export default function Header() {
  return (
    <div className="relative overflow-hidden">
      
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-skyblue-300 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative  pb-16 sm:pb-24">
      

        <main className="mt-16 sm:mt-24">
          <div className="mx-auto w-full">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      Find More!
                    </span>
                    <span className="ml-4 text-sm">Visit our about page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-8xl">
                    
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500 md:block">FEDGEN </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    A Federated Genomic (FEDGEN) cloud infrastructure (with in-memory conputing and 
                    cloud AI capabilities) towards an informatics based genomic research in Africa.
                  </p>
                  <p className="mt-8 text-sm text-indigo-500 uppercase tracking-wide font-semibold sm:mt-10">Powered by</p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center mx-2">
                        <img src={cu} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                      <div className="flex justify-center mx-1">
                        <img src={ace} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                      <div className="flex justify-center mx-1">
                        <img src={cea} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                      <div className="flex justify-center mx-1">
                        <img src={dstn} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                      <div className="flex justify-center mx-1">
                        <img src={wb} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                      <div className="flex justify-center mx-2">
                        <img src={inr} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                      <div className="flex justify-center ">
                        <img src={afd} alt="CU" className="text-3xl inline-block align-middle mr-2 h-12 text-gray-400 sm:h-10 md:text-9xl"/> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="h-auto bg-white shadow-lg sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div>
                      <p className="text-sm text-center font-bold text-gray-700 mb-10">FEDGEN APPS</p>

                      <div className="mt-1 grid gap-x-5 gap-y-8 grid-cols-2 ">
                        <div className="py-1 h-full w-full rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-indigo-50">
                          <a
                            href="/"
                          >
                            <div className="grid grid-col-1 items-center">
                              <span className="sr-only">Cloud</span>
                              <CgDatabase className=" text-3xl mx-auto text-indigo-700 md:text-7xl"/>
                              <p className="object-none text-center mt-2 object-bottom">FEDGEN Testbed</p>
                            </div>
                          </a>
                          
                        </div>

                        <div className="py-1 h-full w-full rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-indigo-50">
                          <a
                            href="/phis" 
                          >
                            <div className="grid grid-col-1 items-center">
                              <span className="sr-only">FEDGEN HealthEdu App</span>
                              <FaMicroscope className="text-3xl mx-auto text-indigo-700 md:text-6xl"/>
                              <p className="mx-auto text-center object-bottom">FEDGEN <br /> HealthEdu App</p>
                            </div>
                          </a>
                          
                        </div>
                        <div className="py-1 h-full w-full rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-indigo-50">
                          <a
                            href="https://ace.covenantuniversity.edu.ng"
                          >
                            <div className="grid grid-col-1 items-center">
                              <span className="sr-only">Web</span>
                              <BsGlobe2 className="text-3xl mx-auto text-indigo-700 md:text-6xl"/>
                              <p className="object-none text-center mt-2 object-bottom">CApIC-ACE Website</p>
                            </div>
                          </a>
                        </div>
                        <div className="py-1 h-full w-full rounded-md  bg-white text-sm font-medium text-gray-500 hover:bg-indigo-50">
                          <a
                            href="https://ace.covenantuniversity.edu.ng"
                          >
                            <div className="grid grid-col-1 items-center">
                              <span className="sr-only">Web</span>
                              <FaWarehouse className="text-3xl mx-auto text-indigo-700 md:text-6xl"/>
                              <p className="object-none text-center object-bottom">Fedgen <br /> Data Center</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">coming soon</span>
                      </div>
                    </div>

                    
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="/" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="/" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="/" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
