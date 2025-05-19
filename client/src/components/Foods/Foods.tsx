"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { AddCategoryDialog } from "./AddCategoryDialog";
import { AddFoodDialog } from "./AddFoodDialog";
import { FoodCard } from "./FoodCard";

// Types
interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

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
  createdAt: string;
  updatedAt: string;
}

export default function Foods() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCategoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [isFoodDialogOpen, setFoodDialogOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Memoized fetch functions
  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`, {
        cache: 'force-cache',
        next: { revalidate: 3600 } // Revalidate every hour
      });
      const data = await response.json();
      if (data.success) {
        setCategories(data.data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      toast.error("Failed to load categories");
    }
  }, []);

  const fetchFoods = useCallback(async () => {
    try {
      setIsInitialLoad(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/food`, {
        cache: 'force-cache',
        next: { revalidate: 3600 } // Revalidate every hour
      });
      const data = await response.json();
      if (data.success) {
        setFoods(data.data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch foods:", error);
      toast.error("Failed to load food items");
    } finally {
      setIsInitialLoad(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    const fetchInitialData = async () => {
      await Promise.all([fetchCategories(), fetchFoods()]);
    };
    fetchInitialData();
  }, [fetchCategories, fetchFoods]);

  // Get all available category names including "All"
  const categoryNames = ["All", ...categories.map((cat) => cat.name)];

  // Filter foods based on active category
  const filteredFoods = activeCategory === "All" 
    ? foods 
    : foods.filter(food => food.category.name === activeCategory);

  // Handle successful operations
  const handleCategoryAdded = useCallback(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleFoodAdded = useCallback(() => {
    fetchFoods();
  }, [fetchFoods]);

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
              {categoryNames.map((category) => (
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
              <button 
                className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-full text-sm font-medium cursor-pointer"
                onClick={() => setFoodDialogOpen(true)}
              >
                Add Food
              </button>
              <button 
                className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-full text-sm font-medium cursor-pointer"
                onClick={() => setCategoryDialogOpen(true)}
              >
                Add Category
              </button>
            </div>
          </div>
          
          {/* Dishes grid */}
          {isInitialLoad ? (
            <div className="py-20 text-center">
              <Loader className="w-10 h-10 animate-spin" />
            </div>
          ) : filteredFoods.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
              {filteredFoods.map((dish) => (
                <FoodCard key={dish._id} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500">No dishes found in this category.</p>
              <button 
                className="mt-4 px-4 py-2 bg-black text-white rounded-full text-sm font-medium" 
                onClick={() => setFoodDialogOpen(true)}
              >
                Add your first dish
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dialogs */}
      <AddCategoryDialog 
        isOpen={isCategoryDialogOpen}
        onClose={() => setCategoryDialogOpen(false)}
        onSuccess={handleCategoryAdded}
      />
      
      <AddFoodDialog
        isOpen={isFoodDialogOpen}
        onClose={() => setFoodDialogOpen(false)}
        onSuccess={handleFoodAdded}
        categories={categories}
      />
    </main>
  );
}