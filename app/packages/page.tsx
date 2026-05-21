import { MeetingPackages } from "@/components/packages/meeting-packages"
import { AddOnServices } from "@/components/packages/add-on-services"
import { CorporateParcel } from "@/components/packages/corporate-parcel"
import { WeddingPackages } from "@/components/packages/wedding-packages"
import { PackagesGallery } from "@/components/packages/packages-gallery"

export default function PackagesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/package.jpg?height=1080&width=1920&query=hotel+conference+meeting+room+professional)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Packages</h1>
          <p className="text-xl md:text-2xl text-white/90">Complete solutions for meetings, events, and celebrations</p>
        </div>
      </section>

      <PackagesGallery />

      <MeetingPackages />
      <AddOnServices />
      <CorporateParcel />
      <WeddingPackages />
    </main>
  )
}
