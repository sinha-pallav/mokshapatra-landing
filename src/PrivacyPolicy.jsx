import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: November 24, 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Mokshapatra ("we," "our," or "us"). We are committed to protecting your privacy 
            and personal information. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you use our website and mobile application (collectively, the "Service").
          </p>
          <p>
            By using Mokshapatra, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Email address, name, and any profile information you choose to provide</li>
            <li><strong>Assessment Data:</strong> Responses to our initial spiritual assessment questions</li>
            <li><strong>Conversation Data:</strong> Messages exchanged with our AI companion</li>
            <li><strong>Contact Information:</strong> Any information you provide when contacting us for support</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with the Service (features used, time spent, dice rolls, practices completed)</li>
            <li><strong>Device Information:</strong> Device type, operating system, browser type</li>
            <li><strong>Log Data:</strong> IP address, access times, pages viewed</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our Service</li>
            <li>Personalize your spiritual practice experience</li>
            <li>Generate AI-powered guidance tailored to your journey</li>
            <li>Track your progress on your healing board</li>
            <li>Send you updates, newsletters, and promotional content (with your consent)</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns to improve our Service</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party companies that help us operate our Service (hosting, analytics, AI processing)</li>
            <li><strong>AI Processing:</strong> Your conversation data is processed by Anthropic's Claude AI to provide personalized guidance. This data is handled according to Anthropic's privacy practices.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed to provide 
            you with our Service. You may request deletion of your data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Data portability (receive your data in a structured format)</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, please contact us at pallavsinha8@gmail.com.</p>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Service and hold certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
            However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Services</h2>
          <p>Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.</p>
          <p>Third-party services we use include:</p>
          <ul>
            <li>Google Analytics (usage analytics)</li>
            <li>Firebase (authentication and data storage)</li>
            <li>Anthropic Claude API (AI conversation processing)</li>
            <li>Vercel (hosting)</li>
          </ul>
        </section>

        <section>
          <h2>10. Children's Privacy</h2>
          <p>
            Our Service is not intended for individuals under the age of 17. We do not knowingly collect 
            personal information from children under 17. If you are a parent or guardian and believe your 
            child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. 
            By using our Service, you consent to such transfers. We ensure appropriate safeguards 
            are in place for international data transfers.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last Updated" date. 
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> pallavsinha8@gmail.com</li>
            <li><strong>Contact Form:</strong> <Link to="/contact">mokshapatra.com/contact</Link></li>
          </ul>
        </section>
      </div>

      <footer className="legal-footer">
        <p>&copy; 2025 Mokshapatra. All rights reserved.</p>
        <div className="legal-footer-links">
          <Link to="/">Home</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
