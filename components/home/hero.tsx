import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/lobi.jpg?height=1080&width=1920&query=luxury+hotel+lobby+interior+modern+elegant)",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">World Hotel</h1>
        <p className="text-xl md:text-3xl font-light mb-4 tracking-wide">CONVENIENT, SMART, QUALITY OVER QUANTITY</p>
        <p className="text-xl md:text-2xl font-semibold mb-8">HOME FOR EVERYONE.</p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
          Comfortable, strategic, and affordable accommodation for business, government, and leisure needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white hover:bg-white/20 text-white"
          >
            <Link href="/packages">View Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
