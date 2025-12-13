import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Jl. Bandengan Selatan No. 14, Jakarta Barat",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "0818 0900 8585 | 021 2962 0888",
    },
    {
      icon: Clock,
      title: "Reception Hours",
      content: "24 Hours Service",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@worldhotel.com",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/reception.jpg?height=1080&width=1920&query=hotel+reception+desk+modern+elegant)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90">We're here to assist you 24/7</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-muted-foreground">{info.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center mb-16">
              <Card className="max-w-2xl mx-auto bg-secondary/50">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Contact us directly via WhatsApp for quick responses and special offers
                  </p>
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="https://wa.me/6281809008585" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Location</h2>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9579446721955!2d106.80029706535612!3d-6.1363529844397915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f61d66cc0c79%3A0x8732837d2d49e0a!2sWorld%20Hotel%20Jakarta%20Bandengan!5e0!3m2!1sen!2sid!4v1765616995788!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />

                </CardContent>
              </Card>
              <div className="mt-6 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Strategically located in Jakarta Barat with easy access to major business districts and attractions
                </p>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://maps.google.com/?q=Jl.+Bandengan+Selatan+No.+14,+Jakarta+Barat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
