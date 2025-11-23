import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function TermsOfService() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link to="/" className="back-link">← Back to Home</Link>
      </nav>
      
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: November 24, 2025</p>
        
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Mokshapatra ("Service"), you agree to be bound by these Terms of Service 
            ("Terms"). If you do not agree to these Terms, please do not use our Service.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Mokshapatra is a spiritual wellness application that provides personalized daily spiritual 
            practices through an AI-powered companion. The Service includes:
          </p>
          <ul>
            <li>Personalized 100-square healing board based on your initial assessment</li>
            <li>Daily dice rolls to guide your spiritual practice</li>
            <li>AI-powered conversations for reflection and guidance</li>
            <li>Progress tracking throughout your healing journey</li>
          </ul>
        </section>

        <section>
          <h2>3. Eligibility</h2>
          <p>
            You must be at least 17 years of age to use this Service. By using Mokshapatra, you represent 
            and warrant that you meet this age requirement. If you are using the Service on behalf of an 
            organization, you represent that you have the authority to bind that organization to these Terms.
          </p>
        </section>

        <section>
          <h2>4. Account Registration</h2>
          <p>
            To access certain features, you may need to create an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>
        </section>

        <section>
          <h2>5. Important Disclaimers</h2>
          
          <h3>5.1 Not a Substitute for Professional Help</h3>
          <p className="disclaimer-highlight">
            MOKSHAPATRA IS DESIGNED FOR PERSONAL GROWTH AND SPIRITUAL EXPLORATION ONLY. 
            IT IS NOT A SUBSTITUTE FOR PROFESSIONAL MENTAL HEALTH TREATMENT, MEDICAL ADVICE, 
            OR THERAPY. If you are experiencing a mental health crisis, suicidal thoughts, 
            or any medical emergency, please seek help from a qualified professional immediately.
          </p>

          <h3>5.2 AI Limitations</h3>
          <p>
            Our AI companion is designed to support your spiritual journey but has limitations. 
            It does not replace human connection, professional guidance, or medical treatment. 
            The AI may occasionally provide responses that are not perfectly suited to your situation.
          </p>

          <h3>5.3 Spiritual Practices</h3>
          <p>
            The spiritual practices suggested through our Service are general in nature. 
            If you have any physical or mental health conditions, please consult with 
            appropriate healthcare providers before engaging in any practices.
          </p>
        </section>

        <section>
          <h2>6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Upload malicious code or content</li>
            <li>Impersonate any person or entity</li>
            <li>Use the Service to harm, harass, or abuse others</li>
            <li>Share your account credentials with others</li>
            <li>Use automated systems to access the Service without permission</li>
          </ul>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            All content, features, and functionality of Mokshapatra—including but not limited to 
            text, graphics, logos, icons, images, audio, software, and the overall design—are 
            owned by Mokshapatra and protected by intellectual property laws.
          </p>
          <p>
            You may not copy, modify, distribute, sell, or lease any part of our Service without 
            prior written consent.
          </p>
        </section>

        <section>
          <h2>8. User Content</h2>
          <p>
            You retain ownership of any content you submit through the Service (such as assessment 
            responses and conversation messages). By submitting content, you grant us a license to 
            use, process, and store this content to provide and improve our Service.
          </p>
          <p>
            You are responsible for ensuring your content does not violate any third-party rights 
            or applicable laws.
          </p>
        </section>

        <section>
          <h2>9. Subscription and Payment</h2>
          <p>
            Certain features of Mokshapatra may require a paid subscription. By subscribing, you agree to:
          </p>
          <ul>
            <li>Pay all fees associated with your subscription plan</li>
            <li>Provide accurate billing information</li>
            <li>Accept automatic renewal unless you cancel before the renewal date</li>
          </ul>
          <p>
            Founding members who join during our initial launch period receive lifetime free access 
            as specified in our promotional materials.
          </p>
        </section>

        <section>
          <h2>10. Refund Policy</h2>
          <p>
            Refund requests will be handled on a case-by-case basis. Please contact us at 
            pallavsinha8@gmail.com within 14 days of purchase if you are not satisfied with our Service.
          </p>
        </section>

        <section>
          <h2>11. Service Modifications</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) 
            at any time, with or without notice. We will not be liable to you or any third party for 
            any modification, suspension, or discontinuation.
          </p>
        </section>

        <section>
          <h2>12. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOKSHAPATRA AND ITS AFFILIATES SHALL NOT BE LIABLE 
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT 
            NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
          </p>
          <p>
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS 
            PRECEDING THE CLAIM.
          </p>
        </section>

        <section>
          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Mokshapatra, its affiliates, and their respective 
            officers, directors, employees, and agents from any claims, damages, or expenses arising 
            from your use of the Service or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, 
            without regard to its conflict of law provisions. Any disputes arising from these Terms 
            shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section>
          <h2>15. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of any material changes 
            by posting the new Terms on this page and updating the "Last Updated" date. Your continued 
            use of the Service after such changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>16. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice, 
            for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>
          <p>
            You may terminate your account at any time by contacting us. Upon termination, your right 
            to use the Service will immediately cease.
          </p>
        </section>

        <section>
          <h2>17. Contact Information</h2>
          <p>For questions about these Terms, please contact us:</p>
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
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default TermsOfService;
