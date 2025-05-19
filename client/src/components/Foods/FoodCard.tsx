"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";

interface Food {
  _id: string;
  name: string;
  category: {
    _id: string;
    name: string;
  };
  price: number;
  rating: number;
  image: string;
}

interface FoodCardProps {
  dish: Food;
}

export function FoodCard({ dish }: FoodCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-2 md:p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm md:text-lg font-medium">{dish.name}</h3>
          <span className={cn(
            "text-xs font-semibold px-2 py-1 rounded-3xl text-white",
            dish.category.name === "Breakfast" ? "bg-red-500" :
            dish.category.name === "Lunch" ? "bg-orange-500" : "bg-purple-500"
          )}>
            {dish.category.name}
          </span>
        </div>
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center mb-2">
            {[...Array(dish.rating || 5)].map((_, i) => (
              <Star key={i} className="md:h-4 md:w-4 h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="font-bold text-right">${dish.price}</div>
        </div>
      </div>
    </div>
  );
}