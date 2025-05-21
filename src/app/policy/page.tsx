import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-30 max-w-4xl">
      <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] text-destructive sm:text-[32px] lg:text-[40px] leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
        Privacy Policy
      </h2>
      <p className="mb-4">
        At <strong>Benfort Real Estate</strong>, we are committed to protecting
        your personal information and respecting your privacy. This Privacy
        Policy explains how we collect, use, and protect the information you
        provide to us.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        1. Information We Collect
      </h2>
      <ul className="space-y-1 mb-4 list-disc list-inside">
        <li>Personal identification information (Name, email, phone number)</li>
        <li>Property preferences and inquiry details</li>
        <li>Technical data (IP address, browser type, etc.)</li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        2. How We Use Your Information
      </h2>
      <ul className="space-y-1 mb-4 list-disc list-inside">
        <li>To respond to inquiries and schedule viewings</li>
        <li>To send newsletters and updates (only with consent)</li>
        <li>To improve our website and services</li>
      </ul>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal data to third parties. Your
        information may only be shared with our agents or partners when
        necessary to fulfill your real estate request or service needs.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        4. Cookies
      </h2>
      <p className="mb-4">
        Our website uses cookies to enhance user experience and track website
        performance. You may disable cookies in your browser settings if you
        prefer.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        5. Data Security
      </h2>
      <p className="mb-4">
        We implement industry-standard measures to ensure your personal data is
        protected against unauthorized access, disclosure, or alteration.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        6. Your Rights
      </h2>
      <p className="mb-4">
        You may request access to or deletion of your personal data at any time.
        Simply contact us with your request.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        7. Updates to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. All changes will be
        posted on this page with a revised effective date.
      </p>

      <h2 className="mt-6 mb-2 font-semibold text-xl lg:text-2xl">
        8. Contact Information
      </h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at:
        <br />
        <strong>Email:</strong> support@benfort.com
      </p>
    </section>
  );
};

export default PrivacyPolicy;
