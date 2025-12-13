import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function MeetingPackages() {
  const packages = [
    {
      name: "Package 1",
      price: "IDR 13.000.000 ++",
      features: ["5 Superior Rooms (1 night)", "Meeting Room (4-6 hours)"],
    },
    {
      name: "Package 2",
      price: "IDR 14.000.000 ++",
      features: ["7 Superior Rooms (1 night)", "Meeting Room (4-6 hours)"],
    },
    {
      name: "Package 3",
      price: "IDR 15.000.000 ++",
      features: ["7 Superior Rooms (1 night)", "Meeting Room (4-6 hours)", "Coffee Break"],
    },
    {
      name: "Package 4",
      price: "IDR 20.000.000 ++",
      features: ["10 Superior Rooms (1 night)", "Meeting Room (4-6 hours)", "1x Coffee Break"],
    },
    {
      name: "Package 5",
      price: "IDR 22.000.000 ++",
      features: ["10 Superior Rooms (1 night)", "Meeting Room (4-6 hours)", "1x Coffee Break", "Lunch or Dinner"],
    },
    {
      name: "Package 6",
      price: "IDR 24.000.000 ++",
      features: ["10 Superior Rooms (1 night)", "Meeting Room (4-6 hours)", "2x Coffee Break", "Lunch or Dinner"],
      featured: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Meeting & Stay Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfect solutions for corporate meetings, training programs, and official visits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all ${pkg.featured ? "ring-2 ring-primary" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{pkg.name}</span>
                  {pkg.featured && (
                    <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">Popular</span>
                  )}
                </CardTitle>
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
                    Inquire Now
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
