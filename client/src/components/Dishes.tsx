import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const dishes = [
  {
    id: 1,
    name: "Fresh Garden Salad",
    description: "A light and refreshing salad with mixed greens, cherry tomatoes, and your choice of dressing.",
    price: 12.99,
    image: "/images/salad.jpg",
    category: "Lunch",
  },
  {
    id: 2,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce on a toasted bun.",
    price: 15.99,
    image: "/images/burger.jpg",
    category: "Lunch",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato sauce, fresh mozzarella, and basil.",
    price: 18.99,
    image: "/images/pizza.jpg",
    category: "Dinner",
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Smashed avocado on artisan bread with a sprinkle of sea salt and red pepper flakes.",
    price: 9.99,
    image: "/images/avocado-toast.jpg",
    category: "Breakfast",
  },
  {
    id: 5,
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken, romaine lettuce, parmesan, and Caesar dressing in a tortilla wrap.",
    price: 13.99,
    image: "/images/wrap.jpg",
    category: "Lunch",
  },
  {
    id: 6,
    name: "Pancake Stack",
    description: "Fluffy pancakes served with maple syrup and fresh berries.",
    price: 11.99,
    image: "/images/pancakes.jpg",
    category: "Breakfast",
  },
];

export default function Dishes() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [newFood, setNewFood] = useState({ name: "", price: "", category: "", image: "" });
  const [newCategory, setNewCategory] = useState("");

  const filteredDishes = activeCategory === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  const handleAddFood = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle adding new food
    console.log("Adding new food:", newFood);
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle adding new category
    console.log("Adding new category:", newCategory);
  };

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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
                    Add Food
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Food</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddFood} className="space-y-4">
                    <Input
                      placeholder="Food Name"
                      value={newFood.name}
                      onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                    />
                    <Input
                      placeholder="Price"
                      type="number"
                      value={newFood.price}
                      onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
                    />
                    <Input
                      placeholder="Category"
                      value={newFood.category}
                      onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
                    />
                    <Input
                      placeholder="Image URL"
                      value={newFood.image}
                      onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
                    />
                    <Button type="submit" className="w-full">Add Food</Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-full text-sm font-medium">
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddCategory} className="space-y-4">
                    <Input
                      placeholder="Category Name"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <Button type="submit" className="w-full">Add Category</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Dishes grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {filteredDishes.map((dish) => (
              <Card key={dish.id} className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 