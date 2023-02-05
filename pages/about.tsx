import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const features = [
    {
      name: "Our Staffing Solutions",
      description: "Flexi is a leading provider of staffing relief and consulting services for hospitals, vaccine clinics, LTC, RH, and restaurants. Our mission is to help organizations operate smoothly and efficiently, even during the most challenging times.",
    },
    {
      name: "Our Consulting Services",
      description: "In addition to staffing solutions, we also provide complete consulting services, including PPE/IPAC training, IPAC Auditing and certification, and Rapid Antigen Testing. Our team of experts is equipped with the knowledge and resources to help you keep your organization safe and compliant during these trying times.",
    },
    {
      name: "Our Commitment to Excellence",
      description: "At Flexi, we're committed to providing the highest level of service to our clients. Our goal is to help you achieve your goals, and we're dedicated to making sure that you're completely satisfied with the solutions and services we provide.",
    },
    {
      name: "Get in Touch",
      description: "If you're interested in learning more about how Flexi can help your organization, please don't hesitate to get in touch. You can contact us by phone, email, or by filling out the form on our contact page.",
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
              About Us              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-flexi-900 sm:text-4xl">
              Get to know Flexi
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-500">
              Flexi is a leading provider of staffing relief and consulting services for hospitals, vaccine clinics, LTC, and retirement homes. Our mission is to help organizations operate smoothly and efficiently, even during the most challenging times.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center">
                        <Image width={100} height={100} alt="FlexiIcon" src="logo.svg"/>
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
