import { RoomCard } from "@/components/rooms/room-card"
import { Button } from "@/components/ui/button"

export default function RoomsPage() {
  const rooms = [
    {
      type: "Superior – Double Bed",
      count: 47,
      images: [
        "/super-double1.jpg",
        "/super-double2.jpg",
        "/super-double3.jpg",
      ],
      facilities: [
        "Flat LED TV with channels",
        "Air Conditioning",
        "Smoking & Non-smoking",
        "Water Heater",
        "Free WiFi",
        "Complimentary Mineral Water",
        "Safety Box",
        "Laundry Service",
        "Secure Parking",
      ],
    },
    {
      type: "Superior – Twin Bed",
      count: 28,
      images: [
        "/super-twin1.jpg",
        "/super-twin2.jpg",
        "/super-twin3.jpg",
      ],
      facilities: [
        "Flat LED TV with channels",
        "Air Conditioning",
        "Smoking & Non-smoking",
        "Water Heater",
        "Free WiFi",
        "Complimentary Mineral Water",
        "Safety Box",
        "Laundry Service",
        "Secure Parking",
      ],
    },
    {
      type: "Deluxe – Double Bed",
      count: 20,
      images: [
        "/deluxe1.jpg",
        "/deluxe2.jpg",
        "/deluxe3.jpg",
      ],
      facilities: [
        "Flat LED TV with channels",
        "Air Conditioning",
        "Smoking & Non-smoking",
        "Water Heater",
        "Free WiFi",
        "Complimentary Mineral Water",
        "Coffee Set",
        "Safety Box",
        "Laundry Service",
        "Secure Parking",
      ],
      isDeluxe: true,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/world lobby.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Rooms</h1>
          <p className="text-xl md:text-2xl text-white/90">Comfortable accommodations for every need</p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-secondary/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Contact us via WhatsApp for room availability and special rates
              </p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
