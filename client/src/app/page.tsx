"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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
    },
    {
      id: 2,
      image: "/assets/image2_banner.png",
    },
    {
      id: 3,
      image: "/assets/image3_banner.png",
    },
    {
      id: 4,
      image: "/assets/image4_banner.png",
    },
  ];
  return (
    <div className="bg-[#880808] h-screen w-screen overflow-hidden relative">
      <div className="rounded-full bg-[#A52A2A] w-[50vw] h-[50vw] top-0 left-0 -translate-x-[30%] -translate-y-[30%]"></div>
      <div className="rounded-full bg-[#A52A2A] w-[40vw] h-[40vw] right-0 translate-x-[180%] -translate-y-[40%]"></div>
      {/* navbar */}
      <div className="absolute t
      op-0 left-0 w-full flex justify-between items-center p-10">
        <div className="text-white text-3xl font-bold">RESTAURANT</div>
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
          <div className="text-white px-10">
            <h1 className="text-7xl font-normal">BREAKFAST</h1>
            <p className="text-lg w-2/3">
              Breakfast, often referred to as the ‘most important meal of the
              day’, provides essential nutrients to kick start our day. It
              includes a variety of foods, like fruits, cereals, dairy products,
              and proteins, that contribute to a balanced diet.{" "}
            </p>
          </div>
          <div className="flex justify-start gap-2 px-10">
            {imageData.map((item) => (
              <div key={item.id} onClick={() => setCurrentImage(item.id)} className="">
                <Image src={item.image} alt="image" width={100} height={100} />
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
              opacity: 0 
            }}
            animate={{ 
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1 
            }}
            exit={{ 
              x: isForward ? -1000 : 1000,
              y: isForward ? 1000 : -1000,
              rotate: isForward ? -360 : 360,
              opacity: 0 
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 2
            }}
          >
            <Image 
              src={imageData[currentImage - 1].image} 
              alt="image" 
              width={1000} 
              height={1000}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
