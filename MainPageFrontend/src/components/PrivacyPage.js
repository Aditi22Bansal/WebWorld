import React from "react";
import Navb from "./Navb"; // Import the navbar component
import { Card } from "react-bootstrap"; // Import Card component from React Bootstrap

function PrivacyPage() {
  return (
    <div>
      <Navb />
      <div className="container mt-5">
        {/* Card with the same color as navbar */}
        <Card bg="dark" text="white" className="mb-4">
          <Card.Body>
            <h1>Privacy Policy</h1>
            <p>
              <strong>Effective Date:</strong>
            </p>

            <h2>1. Introduction</h2>
            <p>
              At <strong>CLASSROOM</strong>, we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website.
              Please read this policy carefully. By using our website, you consent
              to the data practices described in this policy.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <strong>Personal Information:</strong> This may include your name,
                email address, phone number, and other contact details that you
                provide when filling out forms or interacting with us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information automatically collected when
                you visit our website, such as your IP address, browser type,
                operating system, referring URLs, and pages viewed.
              </li>
              <li>
                <strong>Cookies:</strong> We may use cookies and similar tracking
                technologies to enhance your experience on our website. Cookies help
                us remember your preferences and improve the website functionality.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To personalize your experience on our website.</li>
              <li>To send you promotional materials or newsletters (if you opt-in).</li>
              <li>To monitor and analyze trends, usage, and activities on our website.</li>
              <li>To ensure the security and integrity of our website.</li>
            </ul>

            <h2>4. Sharing Your Information</h2>
            <p>
              We do not share your personal information with third parties, except
              in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your information with
                trusted service providers who assist us in operating our website or
                conducting our business.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if
                required by law, regulation, or court order.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition,
                or asset sale, your information may be transferred as part of the
                business transaction.
              </li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We take reasonable measures to protect your information from unauthorized
              access, use, or disclosure. However, no method of data transmission or
              storage is 100% secure, so we cannot guarantee the absolute security of
              your information.
            </p>

            <h2>6. Your Choices</h2>
            <p>
              <strong>Opting Out:</strong> You may opt out of receiving promotional emails
              from us by following the unsubscribe instructions included in those emails.
            </p>
            <p>
              <strong>Cookies:</strong> You can manage your cookie preferences through your
              browser settings. However, disabling cookies may affect the functionality of
              our website.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these third-party sites.
              Please review their privacy policies before providing any personal
              information.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under the age of 13. We do not
              knowingly collect personal information from children. If we learn that we
              have collected personal information from a child under 13, we will delete
              that information as quickly as possible.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make changes,
              we will revise the "Effective Date" at the top of this page. We encourage
              you to review this Privacy Policy periodically for any updates.
            </p>

            <a
              href="/home"
              style={{
                color: "white",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              Back to Home
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PrivacyPage;
