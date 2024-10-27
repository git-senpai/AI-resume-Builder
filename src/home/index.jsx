import Header from "@/components/custom/Header";
import { UserButton } from "@clerk/clerk-react";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">@satyam_shukla</span>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Build Your Resume <span className="text-green-400">With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <motion.div
              className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition duration-300 ease-in-out"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12">
          <motion.h2
            className="font-bold text-3xl text-green-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            How it Works
          </motion.h2>
          <motion.p
            className="text-md text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Create your AI Resume and increase the chances of getting placed
            quickly
          </motion.p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <AtomIcon className="h-8 w-8 text-green-400" />,
                title: "Write prompt for your form",
                description:
                  "Fill the required details like personal details, experience, educational details, and skills. You can also select your custom theme color for your resume.",
              },
              {
                icon: <Edit className="h-8 w-8 text-green-400" />,
                title: "Edit Your form",
                description:
                  "As soon as you finish completing your resume, you can find it in your dashboard. You can edit your details anytime by simply selecting the edit option from the dropdown.",
              },
              {
                icon: <Share2 className="h-8 w-8 text-green-400" />,
                title: "Share & Start Accepting Responses",
                description:
                  "Once your Resume is ready, you can download the PDF or share the URL or copy of it.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="block rounded-xl border border-gray-700 p-8 shadow-xl transition duration-300 ease-in-out hover:border-green-500 hover:shadow-green-500/20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h2 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="/sign-in"
              className="inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400"
            >
              Get Started Today
            </a>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}

export default Home;
