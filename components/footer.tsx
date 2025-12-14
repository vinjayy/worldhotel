import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">World Hotel</h3>
            <p className="text-background/80 leading-relaxed">
              Convenient, Smart, Quality Over Quantity.
              <br />
              Home for Everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-background/80 hover:text-background transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-background/80 hover:text-background transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/20 hover:bg-background/30 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20">
          <h4 className="font-semibold mb-4 text-center">Accepted Payment Methods</h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-background rounded-lg p-2 h-12 w-16 flex items-center justify-center">
              <Image src="/VISA-logo.jpg" alt="Visa" width={60} height={40} className="object-contain" />
            </div>
            <div className="bg-background rounded-lg p-2 h-12 w-16 flex items-center justify-center">
              <Image src="/mastercard.jpg" alt="Mastercard" width={60} height={40} className="object-contain" />
            </div>
            <div className="bg-background rounded-lg p-2 h-12 w-16 flex items-center justify-center">
              <Image src="/JCB_logo.svg.png" alt="JCB" width={60} height={40} className="object-contain" />
            </div>
            <div className="bg-background rounded-lg p-2 h-12 w-16 flex items-center justify-center">
              <Image src="/American-Express.png" alt="American Express" width={60} height={40} className="object-contain" />
            </div>
            <div className="bg-background rounded-lg p-2 h-12 w-16 flex items-center justify-center">
              <Image src="/union pay.jpg" alt="UnionPay" width={60} height={40} className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-background/80">
          <p>&copy; {new Date().getFullYear()} World Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
