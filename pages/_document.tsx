import { Html, Head, Main, NextScript } from 'next/document';
import { Navbar, Button, Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap" rel="stylesheet" />
        </Head>
      <body>
 
        <Main />
        <NextScript />
        <div className="bg-flexi-900 py-14 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">

            <img src="logo-white.svg" width="25%" className="mx-auto mb-14 sm:mb-24"/>
                    <h2 className="text-white text-3xl mb-14 md:mb-24 md:text-4xl">Get started with Flexi today.</h2>
                    <a
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-flexi-900 rounded-full bg-white hover:bg-flexi-800 hover:text-white focus:ring-4 focus:ring-flexi-300 dark:focus:ring-flexi-900"
              >
                Services
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white/20 rounded-full hover:bg-white/20 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Join Flexi
              </a></div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              
            </div>
          </div>
        </div>
        <Footer container={true} className="bg-flexi-900 rounded-none text-white">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>


              
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" className="text-white" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/" className="text-flexi-500 ">
                    Home
                  </Footer.Link>
                  <Footer.Link href="/about" className="text-white">About</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" className="text-white" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/" className="text-white">Another Link</Footer.Link>
                  <Footer.Link href="/" className="text-white">Button Link</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" className="text-white" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/" className="text-white">Privacy Policy</Footer.Link>
                  <Footer.Link href="/" className="text-white">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider className="border-flexi-800"/>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flexi" year={2023} className="text-white"/>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
              <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
              <Footer.Icon href="#" icon={BsLinkedin} className="text-white" />
            </div>
          </div>
        </div>
      </Footer>
      </body>
    </Html>
  )
}
