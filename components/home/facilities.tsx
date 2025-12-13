import { Wifi, Car, Clock, Sparkles, Coffee, Cake, Building2, Armchair } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Facilities() {
  const generalFacilities = [
    { icon: Wifi, name: "Free WiFi", description: "High-speed internet" },
    { icon: Car, name: "Spacious Parking", description: "Secure parking area" },
    { icon: Clock, name: "24-Hour Reception", description: "Always at your service" },
    { icon: Sparkles, name: "Daily Housekeeping", description: "Clean & fresh daily" },
    { icon: Coffee, name: "Marso Brasserie Café", description: "On-site dining" },
    { icon: Cake, name: "Papi Papo Bakery", description: "Fresh baked goods" },
    { icon: Building2, name: "Elevator", description: "Easy access" },
    { icon: Armchair, name: "Lobby & Waiting Area", description: "Comfortable space" },
  ]

  const roomFacilities = [
    "Air Conditioning",
    "TV",
    "Private bathroom",
    "Hot water",
    "Work desk",
    "Complimentary mineral water",
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Hotel Facilities</h2>

        {/* General Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">General Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalFacilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Room Facilities */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Room Facilities</h3>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roomFacilities.map((facility, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-lg">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
