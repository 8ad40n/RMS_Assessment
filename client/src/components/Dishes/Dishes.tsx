"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Food data with all required properties
const foodData = [
  {
    id: 1,
    name: "Salad Fry",
    category: "Breakfast",
    price: 230,
    rating: 5,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Chicken Breast",
    category: "Lunch",
    price: 230,
    rating: 5,
    image: "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Chicken Legs",
    category: "Dinner",
    price: 230,
    rating: 5,
    image: "https://images.pexels.com/photos/6210933/pexels-photo-6210933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Fruit Basic",
    category: "Lunch",
    price: 230,
    rating: 5,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Veggie salad",
    category: "Dinner",
    price: 230,
    rating: 5,
    image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Chicken Roll",
    category: "Breakfast",
    price: 230,
    rating: 5,
    image: "https://images.pexels.com/photos/8696567/pexels-photo-8696567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Available categories plus "All" option
  const categories = ["All", "Breakfast", "Lunch", "Dinner"];
  
  // Filter dishes based on selected category
  const filteredDishes = activeCategory === "All" 
    ? foodData 
    : foodData.filter(dish => dish.category === activeCategory);

  return (
    <main className="bg-white">
      <div className="container max-w-7xl mx-auto my-12 md:my-28 relative z-10 bg-white px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our best Seller Dishes</h1>
          <p className="text-gray-500 text-sm md:text-lg max-w-2xl mb-8">
            Our fresh garden salad is a light and refreshing option. It features a
            mix of crisp lettuce, juicy tomatoes all tossed in your choice of
            dressing.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-col justify-between items-center sm:flex-row gap-4 mb-8 w-full">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium transition-colors cursor-pointer",
                    activeCategory === category 
                      ? "bg-black text-white" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2 justify-center sm:justify-end">
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-full text-sm font-medium cursor-pointer">
                Add Food
              </button>
              <button className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-full text-sm font-medium cursor-pointer">
                Add Category
              </button>
            </div>
          </div>
          
          {/* Dishes grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={dish.id <= 3}
                  />
                </div>
                <div className="p-2 md:p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm md:text-lg font-medium">{dish.name}</h3>
                    <span className={cn(
                      "text-xs font-semibold px-2 py-1 rounded-3xl text-white",
                      dish.category === "Breakfast" ? "bg-red-500" :
                      dish.category === "Lunch" ? "bg-orange-500" : "bg-red-500"
                    )}>
                      {dish.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center my-3">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="md:h-4 md:w-4 h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="font-bold text-right">${dish.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}