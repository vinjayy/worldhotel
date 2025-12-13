"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { CarouselComponent } from "@/components/ui/carousel-component"

interface RoomCardProps {
  type: string
  count: number
  images: string[]
  facilities: string[]
  isDeluxe?: boolean
}

export function RoomCard({ type, count, images, facilities, isDeluxe }: RoomCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      {/* Room Image Carousel */}
      <div className="relative h-64">
        <CarouselComponent images={images} alt={type} className="h-full" />
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">{count} Rooms</Badge>
        {isDeluxe && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">Premium</Badge>}
      </div>

      <CardHeader>
        <CardTitle className="text-2xl">{type}</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {facilities.map((facility, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{facility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
