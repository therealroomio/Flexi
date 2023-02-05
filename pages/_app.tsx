import "@/styles/globals.css";
import Image from "next/image";
import { Navbar, Button } from "flowbite-react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar className="sticky-navbar" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <Image
            src="logo.svg"
            width={50}
            height={50}
            className="mx-3 h-6 sm:h-9"
            alt="Flexi Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flexi
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            className="bg-flexi-900 hover:bg-flexi-800 rounded-full"
            href="/register"
          >
            Join Felxi
          </Button>
          <Navbar.Toggle className="ml-2" />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className="text-flexi-900 md:hover:text-flexi-900 hover:text-flexi-900"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/about"
            className="md:hover:text-flexi-900 hover:text-flexi-900"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            href="/services"
            className="md:hover:text-flexi-900 hover:text-flexi-900"
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            href="/pricing"
            className="md:hover:text-flexi-900 hover:text-flexi-900"
          >
            Pricing
          </Navbar.Link>
          <Navbar.Link
            href="/contact"
            className="md:hover:text-flexi-900 hover:text-flexi-900"
          >
            Get in Touch
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Component {...pageProps} />
    </>
  );
}
