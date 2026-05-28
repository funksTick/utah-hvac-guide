import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Utah HVAC Guide',
  description: 'Privacy policy for Utah HVAC Guide. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-8">Effective Date: May 28, 2025</p>

        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
            <p className="mb-3">
              Utah HVAC Guide ("we," "us," or "our") operates utahhvacguide.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p>
              By using the Site, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Personal Information</h3>
            <p className="mb-3">When you submit a request for HVAC services, quotes, inspections, or maintenance, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Name (first and last)</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Home address (street, city, state, zip code)</li>
              <li>Service type and urgency</li>
              <li>Additional notes or details about your request</li>
              <li>SMS consent status and timestamp</li>
            </ul>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Automatically Collected Information</h3>
            <p className="mb-3">We may automatically collect certain information about your device and browsing activity, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring/exit pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Connect you with qualified HVAC contractors in Northern Utah</li>
              <li>Process and fulfill your service requests</li>
              <li>Send you confirmations, updates, and service-related communications</li>
              <li>Send SMS text messages (only if you have opted in)</li>
              <li>Improve our website and services</li>
              <li>Analyze site usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. SMS Text Messaging</h2>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Consent</h3>
            <p className="mb-3">
              By checking the SMS opt-in box on our forms, you expressly consent to receive text messages from Utah HVAC Guide and our partner HVAC contractors regarding your service request. You are not required to opt in to SMS as a condition of purchasing any goods or services.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Message Frequency</h3>
            <p className="mb-3">
              Message frequency varies depending on your service request. You may receive confirmation messages, appointment reminders, and follow-up communications related to your HVAC service.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Opt-Out</h3>
            <p className="mb-3">
              You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any text message you receive from us. Upon opting out, you will receive a final confirmation message, and no further messages will be sent unless you re-opt in.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Message and Data Rates</h3>
            <p className="mb-3">
              Standard message and data rates may apply depending on your mobile carrier and plan. Please check with your carrier for details.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Support</h3>
            <p>
              For SMS support, reply <strong>HELP</strong> to any message or contact us at the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. How We Share Your Information</h2>
            <p className="mb-3">We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">HVAC Contractors</h3>
            <p className="mb-3">
              We share your contact information and service request details with qualified HVAC contractors in Northern Utah (including 1-Home and other partner contractors) so they can contact you and provide the services you requested.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Service Providers</h3>
            <p className="mb-3">
              We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, email delivery, and SMS messaging platforms.
            </p>

            <h3 className="text-xl font-semibold text-white/90 mt-4 mb-2">Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Lead information is typically retained for up to 2 years for service history and warranty purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">8. Your Privacy Rights</h2>
            <p className="mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt out of SMS messages by replying STOP</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">9. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">10. Children's Privacy</h2>
            <p>
              Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">12. Contact Us</h2>
            <p className="mb-3">If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="mb-2"><strong className="text-white">Utah HVAC Guide</strong></p>
              <p className="mb-1">Email: info@utahhvacguide.com</p>
              <p className="mb-1">Phone: (385) 486-0072</p>
            </div>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/50">
              This privacy policy complies with applicable federal and state laws, including the Telephone Consumer Protection Act (TCPA) and state privacy regulations.
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
