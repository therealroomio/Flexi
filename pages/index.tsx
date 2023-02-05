import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const features = [
  {
    name: "User-Friendly Platform",
    description:
      "Book mobile healthcare workers easily with our user-friendly platform that lets you schedule appointments, manage services, and track worker availability with a few clicks.",
  },
  {
    name: "Experienced Staff",
    description:
      "We have a team of experienced staff that curates and maintains a database of the best mobile healthcare workers, ensuring you get the highest quality service.",
  },
  {
    name: "Customizable Service",
    description:
      "Customize your mobile healthcare worker experience to fit your needs. Our platform allows you to choose from a range of services and tailor them to your specific requirements.",
  },
  {
    name: "Availability",
    description:
      "Check the real-time availability of mobile healthcare workers on our platform, making it easy to book the right worker at the right time, without having to wait.",
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Flexi</title>
        <meta name="description" content="Flexible healthcare on your time" />
      </Head>

      <main>
        
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-lg min-h-[90vh] px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div className="mx-5 place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-flexi-900 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Flexible Healthcare On Your Time
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Experience round-the-clock convenience with our mobile or
                virtual care services. Quickly book same or next-day
                appointments in-person or via video chat using Flexi. No more
                waiting rooms!
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-flexi-900 hover:bg-flexi-800 focus:ring-4 focus:ring-flexi-300 dark:focus:ring-flexi-900"
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
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Join Flexi
              </Link>
            </div>
            <div className="hidden ml-5 place-items-center relative lg:mt-0 lg:col-span-5 lg:flex flex-col lg:place-content-center">
            <Image width={100} height={100} alt="FlexiIcon" 
                src="hero.jpg"

                className="rounded-2xl drop-shadow-xl w-5/6 absolute left-0 mb-40"
              />
              <Image width={100} height={100} alt="FlexiIcon" 
                src="header.jpg"

                className="rounded-2xl drop-shadow-xl absolute right-0 w-5/6 mt-80"
              />
            </div>
          </div>
        </section>
        <div className="bg-slate-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="text-lg font-semibold leading-8 tracking-tight text-flexi-600">
                Care Faster
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-flexi-900 sm:text-4xl">
                Everything you need to know about Flexi
              </h2>
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
                      <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-flexi-600"></div>
                      {feature.name}
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
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}

