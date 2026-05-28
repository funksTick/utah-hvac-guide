import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Utah HVAC Guide',
  description: 'Terms and conditions for using Utah HVAC Guide. Learn about our service, user responsibilities, and limitations.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-4">Terms and Conditions</h1>
        <p className="text-white/60 mb-8">Effective Date: May 28, 2025</p>

        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="mb-3">
              Welcome to Utah HVAC Guide ("we," "us," or "our"). By accessing or using utahhvacguide.com (the "Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Site.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the Site after changes are posted constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Description of Service</h2>
            <p className="mb-3">
              Utah HVAC Guide is an educational platform and referral service that:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Provides information about HVAC systems, maintenance, and energy efficiency</li>
              <li>Connects homeowners in Northern Utah with qualified HVAC contractors</li>
              <li>Offers tools like sizing calculators and quote checkers</li>
              <li>Publishes educational blog content about HVAC topics</li>
            </ul>
            <p>
              <strong className="text-white">We are NOT an HVAC contractor.</strong> We are a referral and information service. All actual HVAC work is performed by independent third-party contractors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. User Eligibility</h2>
            <p>
              You must be at least 18 years old to use this Site and submit service requests. By using the Site, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Service Requests and Referrals</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">How It Works</h3>
            <p className="mb-3">
              When you submit a service request through our forms, we forward your information to qualified HVAC contractors in your area. These contractors are independent businesses and are not our employees or agents.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">No Guarantee of Service</h3>
            <p className="mb-3">
              We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>A contractor will contact you within a specific timeframe</li>
              <li>A contractor will be available for your requested service date</li>
              <li>You will receive a specific number of quotes</li>
              <li>Any particular price, quality, or outcome</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Your Responsibilities</h3>
            <p className="mb-3">When submitting a service request, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Respond to contractor inquiries in a timely manner</li>
              <li>Not submit false, fraudulent, or spam requests</li>
              <li>Only submit requests for properties you own or have authority to make decisions for</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. Third-Party Contractors</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Independent Businesses</h3>
            <p className="mb-3">
              All HVAC contractors in our network are independent businesses. We do not employ, supervise, or control these contractors. Each contractor is responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Their own licensing, insurance, and bonding</li>
              <li>The quality and safety of their work</li>
              <li>Pricing, scheduling, and customer service</li>
              <li>Compliance with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Vetting Process</h3>
            <p className="mb-3">
              While we make reasonable efforts to partner with reputable contractors, we do not guarantee or warranty their work, qualifications, or conduct. We recommend that you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verify licensing and insurance before hiring</li>
              <li>Get multiple quotes when possible</li>
              <li>Check references and reviews</li>
              <li>Get written estimates and contracts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Disclaimer of Warranties</h3>
            <p className="mb-3">
              THE SITE AND ALL INFORMATION, TOOLS, AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">No Liability for Contractor Actions</h3>
            <p className="mb-3">
              <strong className="text-white">UTAH HVAC GUIDE IS NOT LIABLE FOR:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>The quality, safety, or legality of HVAC work performed by contractors</li>
              <li>Any injuries, property damage, or losses arising from contractor services</li>
              <li>Contractor misconduct, fraud, or breach of contract</li>
              <li>Disputes between you and any contractor</li>
              <li>Failure of contractors to respond or provide services</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Limitation of Damages</h3>
            <p className="mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, UTAH HVAC GUIDE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR GOODWILL.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED $100 OR THE AMOUNT YOU PAID TO US IN THE LAST 12 MONTHS, WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">7. Educational Content</h2>
            <p className="mb-3">
              The information on our Site, including blog posts, guides, and calculators, is for educational purposes only and should not be considered professional advice. Always consult with a licensed HVAC professional for specific recommendations about your system.
            </p>
            <p>
              We make reasonable efforts to provide accurate information but do not guarantee its completeness, accuracy, or timeliness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">8. Intellectual Property</h2>
            <p className="mb-3">
              All content on the Site, including text, graphics, logos, images, and software, is the property of Utah HVAC Guide or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may use the Site for personal, non-commercial purposes only. You may not copy, reproduce, distribute, modify, or create derivative works from our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">9. User Conduct</h2>
            <p className="mb-3">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Use the Site to spam, harass, or solicit contractors</li>
              <li>Attempt to circumvent our referral system</li>
              <li>Scrape, harvest, or collect user information</li>
              <li>Interfere with the Site's operation or security</li>
              <li>Use the Site for any illegal purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">10. SMS Text Messaging</h2>
            <p className="mb-3">
              If you opt in to receive SMS text messages, the following additional terms apply:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Message frequency varies; message and data rates may apply</li>
              <li>Opt-in is not a condition of service or purchase</li>
              <li>Reply STOP to opt out at any time</li>
              <li>Reply HELP for support</li>
            </ul>
            <p>
              For more information, see our <a href="/privacy-policy" className="text-[#e85d26] hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">11. Privacy</h2>
            <p>
              Your use of the Site is also governed by our <a href="/privacy-policy" className="text-[#e85d26] hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Informal Resolution</h3>
            <p className="mb-3">
              If you have a dispute with us, please contact us first at info@utahhvacguide.com. We will attempt to resolve the issue informally.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Contractor Disputes</h3>
            <p className="mb-3">
              Disputes with contractors must be resolved directly with the contractor. We are not responsible for mediating or resolving contractor disputes.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Governing Law</h3>
            <p>
              These Terms are governed by the laws of the State of Utah, without regard to conflict of law principles. Any legal action must be brought in the state or federal courts located in Utah.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Utah HVAC Guide, its owners, employees, and contractors from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your interactions with contractors</li>
              <li>Any information you submit through the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">14. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Site at any time, with or without notice, for any reason, including violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">15. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">16. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Utah HVAC Guide regarding the use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">17. Contact Information</h2>
            <p className="mb-3">For questions about these Terms, please contact us:</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="mb-2"><strong className="text-white">Utah HVAC Guide</strong></p>
              <p className="mb-1">Email: info@utahhvacguide.com</p>
              <p className="mb-1">Phone: (385) 486-0072</p>
            </div>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 mb-3">
              <strong>Important Notice:</strong> Utah HVAC Guide is a referral service only. We do not perform HVAC work. All work is performed by independent contractors who are solely responsible for their services.
            </p>
            <p className="text-sm text-white/50">
              By using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-block bg-[#e85d26] hover:bg-[#d04e1a] text-white font-bold py-3 px-8 rounded-2xl transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
