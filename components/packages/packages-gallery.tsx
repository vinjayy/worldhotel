"use client"

import { CarouselComponent } from "@/components/ui/carousel-component"

export function PackagesGallery() {
  const galleryImages = [
    "/meeting1.jpg",
    "/meeting2.jpg",
    "/meeting3.jpg",
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Our Event Spaces</h2>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground">
            Explore our versatile venues for meetings, weddings, and corporate events
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <CarouselComponent images={galleryImages} alt="World Hotel Event Spaces" className="h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
