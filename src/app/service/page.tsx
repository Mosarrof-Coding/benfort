import React, { ReactNode } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Property Buying Assistance",
    description:
      "We guide clients through every step of purchasing their dream home, from market research to property visits, negotiations, legal paperwork, and final handover. Our team ensures a smooth buying experience with full transparency and personalized attention.",
    icon: <span>🏠</span>,
  },
  {
    id: 2,
    title: "Property Selling Services",
    description:
      "Our experienced agents use market insights and advanced marketing strategies to help homeowners sell their property quickly and at the best price. We handle listings, professional photography, staging advice, viewings, and negotiations with potential buyers.",
    icon: <span>🔑</span>,
  },
  {
    id: 3,
    title: "Property Management",
    description:
      "For owners who wish to rent or maintain their properties hassle-free, we provide full-service property management, including tenant screening, rent collection, maintenance, and regular inspections to ensure your property stays in top condition.",
    icon: <span>🛠️</span>,
  },
  {
    id: 4,
    title: "Legal and Documentation Support",
    description:
      "We assist clients with legal paperwork, title verification, registration, tax guidance, and compliance with local property laws. Our legal experts ensure your transaction is secure and free of hidden liabilities.",
    icon: <span>📜</span>,
  },
  {
    id: 5,
    title: "Home Loan Advisory",
    description:
      "Our financial consultants help you choose the right mortgage plan with competitive interest rates. We liaise with reputed banks and lenders to simplify the loan approval process, ensuring timely disbursement and minimal hassle.",
    icon: <span>💰</span>,
  },
  {
    id: 6,
    title: "Interior Design & Renovation",
    description:
      "To help you personalize your new home or upgrade your existing space, we offer professional interior design and renovation services. Our designers work closely with you to create functional, beautiful spaces tailored to your taste and budget.",
    icon: <span>🛋️</span>,
  },
  {
    id: 7,
    title: "Valuation & Investment Advice",
    description:
      "Our experts provide accurate property valuations and investment advice based on the latest market trends. Whether you’re a first-time investor or a seasoned buyer, we help you make informed decisions to maximize ROI.",
    icon: <span>📈</span>,
  },
];

const Services: React.FC = () => {
  return (
    <section className="mx-auto px-4 py-12 max-w-7xl">
      <h2 className="mb-4 font-bold text-4xl text-center"></h2>
      <h2 className="mb-1 sm:mb-2 lg:mb-4 font-medium text-[26px] sm:text-[32px] lg:text-[40px] text-center leading-[44px] sm:leading-[46px] lg:leading-[48px] tracking-[-1px] sm:tracking-[-2px]">
        Our
        <span className="text-destructive"> Services</span>
      </h2>
      <p className="opacity-80 mx-auto mb-10 max-w-3xl text-center">
        At Vista Real Estate, we offer a comprehensive suite of services
        designed to make your real estate journey seamless and rewarding. From
        buying and selling to property management and interior design, our
        dedicated team ensures your peace of mind every step of the way.
      </p>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="shadow-sm hover:shadow-md p-3 sm:p-4 lg:p-6 border border-border rounded-lg transition-shadow duration-300"
          >
            <div className="mb-4 text-4xl">{service.icon}</div>
            <h3 className="mb-2 font-semibold text-2xl">{service.title}</h3>
            <p className="opacity-80">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
