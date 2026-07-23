// TermsPage — Terms of Use content, rendered inside the shared LegalPage chrome.
function TermsPage() {
  const href = window.NV_HREF || (() => "#");
  return (
    <window.LegalPage title="Terms of Use" effective="Effective date: April 10, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using the Node Ventures Portal (the "Portal"), you agree to be bound by these Terms of Use ("Terms") and all applicable laws and regulations. If you do not agree with any part of these Terms, you may not use the Portal.</p>
      <p>Node Ventures Inc. ("Node Ventures", "we", "us", or "our") reserves the right to modify these Terms at any time. Continued use of the Portal after changes are posted constitutes your acceptance of the revised Terms.</p>

      <h2>2. Description of Service</h2>
      <p>The Portal is a private platform that facilitates consultant onboarding and verification, contribution tracking, investor portfolio management, and related administrative workflows for Node Ventures and its stakeholders. Access is restricted to authorized users including verified consultants, investors, and Node Ventures personnel.</p>

      <h2>3. User Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must:</p>
      <ul>
        <li>Provide accurate and complete information when creating your account.</li>
        <li>Notify us immediately of any unauthorized use of your account.</li>
        <li>Not share your credentials with any third party.</li>
        <li>Not create accounts for others without their explicit consent.</li>
      </ul>
      <p>We reserve the right to suspend or terminate accounts that violate these Terms or at our sole discretion.</p>

      <h2>4. Consultant Onboarding and Verification</h2>
      <p>Consultants who apply to join the Node Ventures consultant pool acknowledge that:</p>
      <ul>
        <li>Submission of a profile for verification does not guarantee approval or any engagement with portfolio companies.</li>
        <li>Node Ventures may reject, delay, or revoke verification status at any time for any reason.</li>
        <li>Profile information, including uploaded documents, may be reviewed by Node Ventures staff.</li>
        <li>Hourly rates and availability information provided are indicative and do not constitute a binding contract.</li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Portal for any unlawful purpose or in violation of any regulations.</li>
        <li>Upload or transmit malicious code, spam, or harmful content.</li>
        <li>Attempt to gain unauthorized access to any part of the Portal or its systems.</li>
        <li>Scrape, crawl, or systematically extract data from the Portal.</li>
        <li>Impersonate any person or entity or misrepresent your affiliation.</li>
        <li>Interfere with or disrupt the integrity or performance of the Portal.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>All content, features, and functionality of the Portal, including but not limited to text, graphics, logos, and software, are the exclusive property of Node Ventures and are protected by Canadian and international intellectual property laws.</p>
      <p>By uploading content (such as profile photos, CVs, or documents), you grant Node Ventures a non-exclusive, royalty-free licence to store, process, and display that content solely for the purposes of operating the Portal.</p>

      <h2>7. Privacy</h2>
      <p>Your use of the Portal is also governed by our <a href={href("Privacy")}>Privacy Policy</a>, which is incorporated into these Terms by reference.</p>

      <h2>8. Disclaimers</h2>
      <p>The Portal is provided "as is" and "as available" without warranties of any kind, either express or implied. Node Ventures does not warrant that the Portal will be uninterrupted, error-free, or free of harmful components.</p>

      <h2>9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by applicable law, Node Ventures and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Portal, even if we have been advised of the possibility of such damages.</p>
      <p>Our total liability to you for any claim arising from these Terms or your use of the Portal shall not exceed CAD $100.</p>

      <h2>10. Governing Law</h2>
      <p>These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. You irrevocably submit to the exclusive jurisdiction of the courts of Ontario for the resolution of any dispute arising from these Terms.</p>

      <h2>11. Contact</h2>
      <p>If you have questions about these Terms, please contact us at <a href="mailto:admin@nodeventures.ca">admin@nodeventures.ca</a>.</p>
    </window.LegalPage>
  );
}
window.TermsPage = TermsPage;
