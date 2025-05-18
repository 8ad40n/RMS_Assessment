"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(1);
  const prevImageRef = useRef(currentImage);

  useEffect(() => {
    prevImageRef.current = currentImage;
  }, [currentImage]);

  const isForward = currentImage > prevImageRef.current;

  const imageData = [
    {
      id: 1,
      image: "/assets/image1_banner.png",
      background: "#880808",
      sub_background: "#A52A2A",
    },
    {
      id: 2,
      image: "/assets/image2_banner.png",
      background: "#0a4669",
      sub_background: "#0a3659",
    },
    {
      id: 3,
      image: "/assets/image3_banner.png",
      background: "#953553",
      sub_background: "#a95c68",
    },
    {
      id: 4,
      image: "/assets/image4_banner.png",
      background: "#006666",
      sub_background: "#003333",
    },
  ];
  return (
    <div
      className={`h-[95vh] md:h-screen md:w-screen overflow-hidden relative transition-colors duration-500`}
      style={{ backgroundColor: imageData[currentImage - 1].background }}
    >
      <div
        className="rounded-full w-[50vw] h-[50vw] absolute top-0 left-0 -translate-x-[30%] -translate-y-[30%] transition-colors duration-500"
        style={{ backgroundColor: imageData[currentImage - 1].sub_background }}
      ></div>
      <div
        className="rounded-full w-[40vw] h-[40vw] absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] transition-colors duration-500"
        style={{ backgroundColor: imageData[currentImage - 1].sub_background }}
      ></div>
      {/* MOBILE LAYOUT */}
      <div className="block md:hidden w-full h-full absolute top-0 left-0 z-20">
        {/* Navbar */}
        <div className="flex items-center p-4 w-full">
          <div className="bg-white rounded-2xl w-full h-full flex items-center relative">
            <Search className="w-5 h-5 absolute left-4" />
            <Input
              placeholder="Search...."
              className="text-black pl-12 h-10 text-lg bg-transparent"
            />
          </div>
        </div>
        {/* Text */}
        <div className="px-8 mt-6 mb-6">
          <h1 className="text-4xl font-semibold mb-2 mt-10 text-white leading-tight">
            BREAKFAST
          </h1>
          <p className="text-base text-gray-300 mt-4 mb-10 leading-snug">
            Breakfast, often referred to as the &apos;most important meal of the
            day&apos;, provides essential nutrients to kick start our day. It
            includes a variety of foods, like fruits, cereals, dairy products,
            and proteins, that contribute to a balanced diet.{" "}
            {/* <a href="#" className="underline">
              See more
            </a> */}
          </p>
        </div>
        {/* Large Image with Arrows */}
        <div className="flex flex-col items-center w-full mt-4">
          <div className="relative flex items-center justify-center w-full">
            <button
              className="absolute left-2 z-10 bg-white/30 hover:bg-white/60 rounded-full p-1 text-white"
              onClick={() =>
                setCurrentImage(
                  currentImage === 1 ? imageData.length : currentImage - 1
                )
              }
              aria-label="Previous image"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <motion.div
              key={currentImage}
              initial={{
                x: isForward ? 300 : -300,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 2,
              }}
              className="flex justify-center w-full"
            >
              <Image
                src={imageData[currentImage - 1].image}
                alt="image"
                width={220}
                height={220}
                className="object-contain rounded-full w-[220px] h-[220px] bg-white/10"
              />
            </motion.div>
            <button
              className="absolute right-2 z-10 bg-white/30 hover:bg-white/60 rounded-full p-1 text-white"
              onClick={() =>
                setCurrentImage(
                  currentImage === imageData.length ? 1 : currentImage + 1
                )
              }
              aria-label="Next image"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
          {/* Thumbnails Row */}
          <div className="flex justify-center gap-3 mt-6 w-full">
            {imageData.map((item) => (
              <div
                key={item.id}
                onClick={() => setCurrentImage(item.id)}
                className={`cursor-pointer relative flex-shrink-0 transition-all duration-200 ${
                  currentImage === item.id ? "pb-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt="image"
                  width={60}
                  height={60}
                  className="object-cover rounded-full border-2 border-white/70"
                />
                {currentImage === item.id && (
                  <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 w-10 h-1 rounded-full bg-white"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* DESKTOP/TABLET LAYOUT (unchanged) */}
      <div className="hidden md:block w-full h-full absolute top-0 left-0">
        {/* navbar */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-10 z-20">
          <div className="hidden md:block text-white text-xl md:text-3xl font-bold">
            RESTAURANT
          </div>
          <div className="bg-white rounded-2xl w-1/3 h-full flex items-center relative">
            <Search className="w-5 h-5 absolute left-4" />
            <Input
              placeholder="Search..."
              className="text-black pl-12 h-10 text-lg"
            />
          </div>
        </div>
        {/* main content */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center ">
          <div>
            <div className="text-white pl-14 mb-10">
              <h1 className="text-8xl font-normal mb-6">BREAKFAST</h1>
              <p className="text-2xl text-gray-300 w-2/3">
                Breakfast, often referred to as the &apos;most important meal of
                the day&apos;, provides essential nutrients to kick start our
                day. It includes a variety of foods, like fruits, cereals, dairy
                products, and proteins, that contribute to a balanced diet.{" "}
              </p>
            </div>
            <div className="flex justify-start gap-2 px-14">
              {imageData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentImage(item.id)}
                  className={`cursor-pointer relative ${
                    currentImage === item.id
                      ? "pb-2 border-b-2 border-white"
                      : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt="image"
                    width={130}
                    height={130}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div
              key={currentImage}
              initial={{
                x: isForward ? 1000 : -1000,
                y: isForward ? -1000 : 1000,
                rotate: isForward ? 360 : -360,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                x: isForward ? -1000 : 1000,
                y: isForward ? 1000 : -1000,
                rotate: isForward ? -360 : 360,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 2,
              }}
            >
              <Image
                src={imageData[currentImage - 1].image}
                alt="image"
                width={1000}
                height={1000}
                className="object-contain pr-6"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
