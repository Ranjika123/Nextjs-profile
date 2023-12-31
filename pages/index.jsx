import { useTheme } from "next-themes";
import Blob from "@/components/Blob";
import Image from "next/image";
import Avatar_Black from "../public/Avatar-black.svg";
import Avatar_White from "../public/Avatar-white.svg";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Pranjal Shikhar %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>ranjika_neth ✦ developer, designer</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-screen 2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            {currentTheme === "dark" ? (
              <Image
                src={Avatar_White}
                alt="pranjal"
                width="100"
                height="100"
              />
            ) : (
              <Image
                src={Avatar_Black}
                alt="pranjal"
                width="100"
                height="100"
              />
            )}
            <div className="flex flex-col ml-4">
              <h2 className="font-bold sm:text-2xl md:text-2xl lg:text-4xl">
                Ranjika Nethpriya
              </h2>
              <h4 className="text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                (～￣▽￣)～
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              A front-end engineer from {" "}
              <span className="font-medium select-none animate-text bg-gradient-to-br from-[#FF0000] dark:from-[#FFFF00] via-[#FF0000] dark:via-[#FFF000] dark:text-black  text-border2 to-[#FF0000] dark:to-[#FF0000] rounded px-2 py-[0.05rem] ">
                Sri Lanka
              </span>{" "}
              who develops modern, reactive, and user-friendly web applications
              using the latest technologies currently.Also I am a graphic designer,
              I am creating beautiful user friendly UI using my graphic designing knowladge
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
