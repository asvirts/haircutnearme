"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface SalonImageGalleryProps {
  mainImage: string
  thumbnails: (string | number | object)[]
  altText: string
}

export function SalonImageGallery({
  mainImage,
  thumbnails,
  altText
}: SalonImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState<string>(mainImage)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  // Process thumbnails to handle different formats
  const processedThumbnails = thumbnails.map((img) => {
    if (typeof img === "string") {
      return img
    } else if (typeof img === "number") {
      return `/images/salon-detail-${img}.jpg`
    } else if (img && typeof img === "object") {
      // Handle object format from database
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const imgObj = img as Record<string, any>
      if (imgObj.image) {
        return imgObj.image
      }
    }
    return "/images/salon-detail-1.jpg" // Fallback
  })

  const handleThumbnailClick = (imageSrc: string) => {
    setCurrentImage(imageSrc)
  }

  const openModal = () => {
    setModalOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling while modal is open
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "" // Restore scrolling
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="relative h-80 w-full overflow-hidden rounded-lg cursor-pointer"
          onClick={openModal}
        >
          <img
            src={currentImage}
            alt={altText}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">
          {processedThumbnails.slice(0, 4).map((img, i) => (
            <div
              key={i}
              className={`relative h-20 overflow-hidden rounded-lg cursor-pointer transition-opacity ${
                currentImage === img
                  ? "ring-2 ring-blue-500"
                  : "opacity-80 hover:opacity-100"
              }`}
              onClick={() => handleThumbnailClick(img)}
            >
              <img
                src={img}
                alt={`${altText} view ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-2">
            <button
              className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            >
              <X size={24} />
            </button>
            <img
              src={currentImage}
              alt={altText}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
