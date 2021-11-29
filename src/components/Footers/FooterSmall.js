/* This example requires Tailwind CSS v2.0+ */
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble  } from "react-icons/bs"
const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <BsFacebook />
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <BsInstagram/>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
         <BsTwitter/>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <BsGithub/>
        ),
      },
      {
        name: 'Dribbble',
        href: '#',
        icon: (props) => (
          <BsDribbble/>
        ),
      },
    ],
  }
  
const Footersmall = () => {
    return (
      <footer className="absolute w-full h-3 bottom-0 bg-transparent ">
        <div className="max-w-7xl mx-auto py-9 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 CApIC-ACE. All rights reserved.</p>
        </div>
      </footer>
    )
  }
export default Footersmall