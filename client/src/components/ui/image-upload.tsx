"use client";

import { Loader2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ImageUpload({ value, onChange, className }: ImageUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setIsLoading(true);
        const data = new FormData();
        data.append("file", file);
        data.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
        );
        data.append(
          "cloud_name",
          process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string
        );

        try {
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: data,
            }
          );
          const fileData = await res.json();
          onChange(fileData.url);
        } catch (error) {
          console.error("Error uploading image:", error);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
    disabled: isLoading,
  });

  return (
    <div
      {...getRootProps()}
      className={`cursor-pointer border-2 border-dashed rounded-lg p-4 text-center hover:border-gray-400 transition ${className} ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <input {...getInputProps()} />
      {value ? (
        <div className="relative h-28 w-full">
          {isLoading ? (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-6 w-6 text-white animate-spin" />
                <span className="text-white text-sm">Uploading...</span>
              </div>
            </div>
          ) : (
            <Image src={value} alt="Upload" fill className="object-contain" />
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[38px]">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Uploading...</span>
            </div>
          ) : (
            <>
              <UploadCloud className="h-4 w-4 mr-2" />
              <span>Upload Image</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}