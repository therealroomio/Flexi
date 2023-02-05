
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


<Navbar fluid={true}>
<Navbar.Brand href="#">
  <span className="px-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    Flexi
  </span>
</Navbar.Brand>
<div className="flex md:order-2">
  <Button className="bg-flexi-900 hover:bg-flexi-800 rounded-full mr-1" href='/register'>Join Felxi</Button>
  <Navbar.Toggle />
</div>
<Navbar.Collapse>
  <Navbar.Link href="/" className="text-flexi-900 md:hover:text-flexi-900 hover:text-flexi-900">
    Home
  </Navbar.Link>
  <Navbar.Link href="/about" className="md:hover:text-flexi-900 hover:text-flexi-900">About</Navbar.Link>
  <Navbar.Link href="/services" className="md:hover:text-flexi-900 hover:text-flexi-900">Services</Navbar.Link>
  <Navbar.Link href="/pricing" className="md:hover:text-flexi-900 hover:text-flexi-900">Pricing</Navbar.Link>
  <Navbar.Link href="/contact" className="md:hover:text-flexi-900 hover:text-flexi-900">Get in Touch</Navbar.Link>
</Navbar.Collapse>
</Navbar>