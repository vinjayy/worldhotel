import { CheckCircle } from "lucide-react"

export function About() {
  const highlights = [
    "Strategic & easy-to-access location",
    "Competitive pricing for corporate & government institutions",
    "Friendly & professional service",
    "Suitable for short stay & long stay",
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">About World Hotel</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <img src="/hotel.jpg" alt="World Hotel Building" className="w-full h-full object-cover" />
            </div>

            {/* Text Content */}
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                World Hotel is a hotel that prioritizes comfort, cleanliness, and easy access. Strategically located in
                Jakarta Barat, World Hotel is ideal for business trips, official visits, training programs, meetings,
                and long or short stays.
              </p>
            </div>
          </div>
          {/* </CHANGE> */}

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
