"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Tayyab Sohail",
    role: "UX/UI Designer",
    content: "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    avatar: "/assets/avatar1.png"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Food Critic",
    content: "The attention to detail in presentation and flavor combinations is remarkable. Each dish tells a story of culinary excellence and passion.",
    avatar: "/assets/avatar2.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Food Blogger",
    content: "An exceptional dining experience that combines traditional techniques with modern creativity. The service is impeccable.",
    avatar: "/assets/avatar3.avif"
  }
];

export default function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="container max-w-7xl mx-auto mt-12 md:mt-28 relative z-10 bg-white px-4 sm:px-6">
      <div className="flex flex-col-reverse md:flex-row md:gap-20 items-center">
        {/* Text/Testimonial Section */}
        <div className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Customer <span className="text-[#AD1519]">Feedback</span>
          </h2>
          <div className="">
            <p className="max-w-xl text-gray-600 text-base sm:text-lg text-center md:text-left">
              {testimonials[currentSlide].content}
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].name}
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-base sm:text-lg text-center md:text-left">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
                {testimonials[currentSlide].role}
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? "bg-[#8B0000] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-6">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <Image src="/assets/Vector.png" alt="Vector" width={500} height={500} className="w-full h-auto" />
            <div className="absolute bottom-0 right-0 left-0">
              <Image src="/assets/feedback_person.png" alt="Vector" width={500} height={500} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}