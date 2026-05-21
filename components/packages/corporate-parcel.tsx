import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Truck, Mail, MessageSquare } from "lucide-react"

export function CorporateParcel() {
  const features = [
    { icon: Gift, text: "Premium snacks from Papi Papo Bakery" },
    { icon: Gift, text: "Special cookies & cake" },
    { icon: Gift, text: "Exclusive & elegant packaging" },
  ]

  const bonuses = [
    { icon: Truck, text: "Free delivery" },
    { icon: Mail, text: "Free greeting card" },
    { icon: MessageSquare, text: "Custom message available" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Corporate Parcel</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Send happiness in one special package.
            <br />
            Perfect for family, friends, business partners, and loved ones.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Parcel Includes */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Parcel Includes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg">{feature.text}</p>
                  </div>
                ))}
                <div className="pt-6 border-t">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Starting from</span>
                      <span className="text-2xl font-bold text-primary">IDR 1.200.000</span>
                    </div>
                    <p className="text-sm text-muted-foreground">per parcel</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parcel Package */}
            <Card className="hover:shadow-xl transition-shadow ring-2 ring-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">Parcel Package</CardTitle>
                  <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full">Best Value</span>
                </div>
                <div className="text-3xl font-bold text-primary">IDR 22.000.000</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-lg">10 Parcels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-lg">10 Lapis Legit</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="font-semibold mb-3">Bonuses:</p>
                  <div className="space-y-3">
                    {bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <bonus.icon className="w-5 h-5 text-accent" />
                        <span>{bonus.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-6">
                  <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
