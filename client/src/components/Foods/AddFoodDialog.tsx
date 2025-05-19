"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ImageUpload } from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

interface Category {
  _id: string;
  name: string;
}

interface AddFoodDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  categories: Category[];
}

export function AddFoodDialog({ isOpen, onClose, onSuccess, categories }: AddFoodDialogProps) {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName("");
    setCategoryId("");
    setPrice(0);
    setImageUrl("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Food name is required");
      return;
    }
    
    if (!categoryId) {
      toast.error("Please select a category");
      return;
    }
    
    if (!imageUrl) {
      toast.error("Please upload an image");
      return;
    }
    
    try {
      setIsSubmitting(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/food`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          category: categoryId,
          image: imageUrl,
          price: price || 0,
          rating: 5 // Default rating
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to add food");
      }
      
      toast.success("Food item added successfully");
      
      resetForm();
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to add food:", error);
    //   toast.error("Failed to add food item");
      toast.error(error instanceof Error ? error.message : "Failed to add food item");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Add Food</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="food-name">Food Name</Label>
            <Input
              id="food-name"
              placeholder="Food Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="food-category">Food Category</Label>
            <Select
              value={categoryId}
              onValueChange={setCategoryId}
              disabled={isSubmitting || categories.length === 0}
            >
              <SelectTrigger id="food-category" className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category._id} value={category._id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="food-price">Price</Label>
            <Input
              id="food-price"
              type="number"
              placeholder="Price"
              value={price || ""}
              onChange={(e) => setPrice(Number(e.target.value))}
              disabled={isSubmitting}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Food Image</Label>
            <ImageUpload
              value={imageUrl}
              onChange={setImageUrl}
              className={imageUrl ? "border-green-500" : "border-gray-300"}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-600 text-white cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}