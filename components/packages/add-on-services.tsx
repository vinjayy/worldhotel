import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export function AddOnServices() {
  const services = [
    {
      name: "Sound System",
      price: "IDR 2.000.000 nett",
      description: "Professional audio equipment for your event",
    },
    {
      name: "Customized Packaging incl. Design",
      price: "IDR 980.000 nett",
      description: "Elegant custom packaging with professional design",
    },
    {
      name: "Breakfast",
      price: "IDR 100.000 / pax",
      description: "Delicious breakfast buffet per person",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Add-On Services</h2>
          <p className="text-lg text-muted-foreground">Enhance your package with additional services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <div className="text-2xl font-bold text-primary mt-2">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
