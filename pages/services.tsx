import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const features = [
    {
      name: "Staffing Relief for Healthcare",
      description:
        "Flexi offers staffing relief for hospitals, vaccine clinics, LTC, RH, and restaurants. Our highly trained and qualified professionals can support your business with RPN, RN, ops support, dietary aides, cleaning aids, PSW's, screeners, and covid swabbing.",
    },
    {
      name: "Comprehensive Consulting",
      description:
        "We also provide complete consulting services including PPE/IPAC training, IPAC auditing and certification, and rapid antigen testing. Trust Flexi to help you keep your workplace safe and compliant with industry standards.",
    },
  ];
export default function Page() {
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
Services              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-flexi-900 sm:text-4xl">
              Flexi - Your Trusted Partner for Comprehensive Staffing and Consulting Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-500">
                We're revolutionizing the caregiving experience by providing
                lightning-fast, and effortless healthcare services that are
                fully covered by OHIP!
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center">
                        <img src="logo.svg"/>
                      </div>
                      <h2 className="text-2xl tracking-tight text-flexi-900">{feature.name}</h2>
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

              

      </main>
    </>
  );
}
