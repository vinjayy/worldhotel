import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown } from "lucide-react"

export function WeddingPackages() {
  const packages = [
    {
      name: "RUBY",
      price: "IDR 30.000.000",
      features: [
        "Venue 4-6 hours",
        "Photo & video documentation",
        "Catering for 50 guests",
        "Sound system & wireless mic",
      ],
      tier: 1,
    },
    {
      name: "GOLD",
      price: "IDR 50.000.000",
      features: [
        "Venue 4-6 hours",
        "Photo & video documentation",
        "Catering for 80 guests",
        "Sound system & wireless mic",
        "Free 1 Superior Room",
      ],
      tier: 2,
      featured: true,
    },
    {
      name: "DIAMOND",
      price: "IDR 80.000.000",
      features: [
        "Venue 4-6 hours",
        "Photo & video documentation",
        "Catering for 110 guests",
        "Sound system & wireless mic",
        "Free 1 Deluxe Room",
      ],
      tier: 3,
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Wedding Packages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrate your special day with our elegant wedding packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all ${pkg.featured ? "ring-2 ring-primary scale-105" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Crown className={`w-6 h-6 ${pkg.tier === 3 ? "text-primary" : "text-muted-foreground"}`} />
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  </div>
                  {pkg.featured && (
                    <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">Popular</span>
                  )}
                </div>
                <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
