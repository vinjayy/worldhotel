import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions - World Hotel",
  description: "Read our terms and conditions, cancellation policy, and house rules",
}

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms and Conditions</h1>
          <p className="text-lg text-foreground/70">World Hotel Jakarta</p>
        </div>

        <div className="prose prose-invert max-w-4xl">
          <div className="bg-card rounded-lg p-8 space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-foreground/80 leading-relaxed">
                Welcome to World Hotel Jakarta. By making a reservation or staying at our property, you agree to comply
                with and be bound by the following terms and conditions. Please read them carefully.
              </p>
            </div>

            {/* Section 1: Booking and Reservation */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Booking and Reservation</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>All reservations must be guaranteed with a valid credit card or a full advance deposit.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    The guest who made the booking must be at least 18 years of age and present a valid
                    government-issued photo ID (KTP/Passport) upon check-in.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    Special requests (e.g., bed type, floor level) are subject to availability and are not guaranteed.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 2: Cancellation and Refund Policy */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">
                2. Cancellation and Refund Policy (STRICTLY NON-REFUNDABLE)
              </h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Non-Refundable Rates:</strong> All bookings made under "Non-Refundable," "Advance Purchase,"
                    or "Special Promotional" rates are strictly non-refundable.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>No Modifications:</strong> Once a non-refundable booking is confirmed, no changes to the
                    dates, room type, or guest name will be permitted.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Cancellations:</strong> In the event of a cancellation or "no-show," the total price of the
                    reservation (including taxes and fees) will be charged, and no refund will be issued.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Early Departure:</strong> No refunds or credits will be provided for guests who choose to
                    check out earlier than their scheduled departure date.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3: Check-in and Check-out */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Check-in and Check-out</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Check-in Time:</strong> From 14:00 (2:00 PM) onwards.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Check-out Time:</strong> No later than 12:00 (12:00 PM).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span className="space-y-2">
                    <strong>Late Check-out:</strong> Requests for late check-out are subject to availability and will
                    incur additional charges:
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• Up to 18:00: 50% of the daily room rate.</li>
                      <li>• After 18:00: 100% of the daily room rate.</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 4: Security Deposit */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Security Deposit</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    A security deposit (cash or credit card authorization) is required upon check-in to cover incidental
                    charges (mini-bar, laundry, damages, etc.).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    This deposit is fully refundable upon check-out, provided no damages or incidental charges have been
                    incurred.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 5: Hotel Rules and Guest Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Hotel Rules and Guest Conduct</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Smoking Policy:</strong> World Hotel Jakarta is a non-smoking property. Smoking in guest
                    rooms will result in a cleaning fee of IDR 2,000,000.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Prohibited Items:</strong> Drugs, firearms, explosive materials, and pets are strictly
                    prohibited on hotel premises.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    <strong>Quiet Hours:</strong> To ensure the comfort of all guests, please keep noise to a minimum
                    between 22:00 and 07:00.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 6: Liability */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Liability</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    World Hotel Jakarta is not responsible for the loss, theft, or damage of any money, jewelry, or
                    valuables left in the guest rooms. We strongly recommend using the in-room electronic safety deposit
                    box.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold min-w-fit">•</span>
                  <span>
                    Guests are liable for any damage caused to the hotel property or equipment by themselves or their
                    visitors.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 7: Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These terms and conditions are governed by the laws of the Republic of Indonesia. Any disputes arising
                shall be settled in the courts of Jakarta.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
