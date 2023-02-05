import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Flexible healthcare on your time. Are you a medical professional? We want you." />
      </Head>

      <main>

      <div className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto min-h-[90vh] flex flex-col place-content-center">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl dark:text-white">Pricing</h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase dark:text-gray-300">Free</p>

                <h6 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    $0
                </h6>

                <p className="font-medium text-gray-500 dark:text-gray-300">Life time</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-flexi-600 rounded-md hover:bg-flexi-500 focus:outline-none focus:bg-flexi-500 focus:ring focus:ring-flexi-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center bg-flexi-600 rounded-lg">
                <p className="font-medium text-gray-200 uppercase">Premium</p>

                <h6 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
                    $40
                </h6>

                <p className="font-medium text-gray-200">Per month</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-flexi-900 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <p className="font-medium text-gray-500 uppercase dark:text-gray-300">Enterprise</p>

                <h6 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
                    $100
                </h6>

                <p className="font-medium text-gray-500 dark:text-gray-300">Life time</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-flexi-600 rounded-md hover:bg-flexi-500 focus:outline-none focus:bg-flexi-500 focus:ring focus:ring-flexi-300 focus:ring-opacity-80">
                    Start Now
                </button>
            </div>
        </div>
    </div>
</div>

      </main>
      
    </>
  );
}
