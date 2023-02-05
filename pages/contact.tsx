import Head from "next/head";
import { Label, TextInput, Checkbox, Button, Select } from "flowbite-react";


export default function Contact() {
  return (
    <>
      <Head>
        <title>Flexi - Comprehensive Staffing and Consulting Services</title>
        <meta
          name="description"
          content="Flexi provides staffing relief for hospitals, vaccine clinics, LTC, RH, restaurants, and complete consulting services including PPE/IPAC training, auditing and certification, and rapid antigen testing."
        />
        <meta
          name="keywords"
          content="Flexi, staffing, hospitals, vaccine clinics, LTC, RH, restaurants, PPE, IPAC, training, auditing, certification, rapid antigen testing"
        />
      </Head>

      <main>
        <div className="bg-slate-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="text-lg font-semibold leading-8 tracking-tight text-flexi-600">
                Contact Us
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-flexi-900 sm:text-4xl">
                Flexi - Get in Touch
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-500">
                At Flexi, we're dedicated to providing top-quality staffing and
                consulting services to hospitals, vaccine clinics, LTC, and
                retirement homes. If you have any questions or would like to get
                in touch with our team, please don't hesitate to reach out using
                the information below.
              </p>

              <form className="flex flex-col gap-4 my-8 text-left">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name1"
                      value="Your Name"
                      className="font-light text-sm p-2 block"
                    />
                    <TextInput
                      id="name1"
                      style={{borderRadius:30}}
                      type="text"
                      placeholder="John Doe"
                      required={true}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email1"
                      value="Your Email"
                      className="font-light text-sm p-2 block"
                    />
                    <TextInput
                      id="email1"
                      style={{borderRadius:30}}
                      type="email"
                      placeholder="john@flexi.com"
                      required={true}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone1"
                      value="Phone Number"
                      className="font-light text-sm p-2 block"
                    />
                    <TextInput
                      id="phone1"
                      style={{borderRadius:30}}
                      type="tel"
                      placeholder="(416) 123-4567"
                      required={true}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="service1"
                      value="Select Service"
                      className="font-light text-sm p-2 block"
                    />
                    <Select
                      id="service1"
                      style={{borderRadius:30}}
                      required={true}
                    >
                      <option>
                        Option One
                      </option>
                      <option>
                        Another Option
                      </option>
                      <option>
                        Another Option
                      </option>
                      <option>
                        Another Option
                      </option>
                    </Select>
                  </div>
                </div>
                
                <Button type="submit" className="mt-2 rounded-full bg-flexi-900 hover:bg-flexi-800">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
