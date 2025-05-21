import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-30">
      <div className="mx-auto px-4 max-w-[1232px]">
        <div className="items-center gap-12 grid md:grid-cols-2">
          {/* Text Content */}
          <div>
            <h2 className="mb-6 font-bold text-gray-800 text-4xl">
              About Benfort
            </h2>
            <p className="opacity-80 mb-4 text-lg">
              At <strong>Benfort Real Estate</strong>, we don’t just sell
              properties — we craft journeys toward inspired living. From modern
              penthouses overlooking city skylines to tranquil countryside
              estates, our portfolio reflects sophistication, lifestyle, and
              long-term value.
            </p>
            <p className="opacity-80 mb-4 text-lg">
              With decades of combined experience, our elite team of real estate
              professionals provides insights rooted in trust and precision.
              Whether you&#39;re a first-time buyer, seasoned investor, or
              seeking a luxury getaway, we’re committed to understanding your
              vision and exceeding your expectations.
            </p>
            <p className="opacity-80 text-lg">
              Experience the difference with Benfort — where exceptional service
              meets exceptional properties.
            </p>
          </div>

          {/* Image */}
          <div className="relative shadow-xl rounded-xl w-full h-80 md:h-[420px] overflow-hidden">
            <Image
              src="/office.jpg"
              alt="Benfort Real Estate Office or Property"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        {/* Feature Cards */}
        <div className="gap-8 grid md:grid-cols-3 mt-20">
          {[
            {
              title: "Trusted Experts",
              desc: "Decades of experience and a proven track record in premium property markets.",
              icon: "🏠",
            },
            {
              title: "Tailored Experiences",
              desc: "Every client journey is curated with personalized service and attention.",
              icon: "🤝",
            },
            {
              title: "Exclusive Listings",
              desc: "Access hand-picked homes and developments you won’t find elsewhere.",
              icon: "🌟",
            },
            {
              title: "End-to-End Guidance",
              desc: "From property tours to paperwork, we simplify every step of the process.",
              icon: "📑",
            },
            {
              title: "Global Reach",
              desc: "Connecting international buyers with premium investments worldwide.",
              icon: "🌍",
            },
            {
              title: "Commitment to Integrity",
              desc: "We value transparency, ethics, and long-term relationships above all.",
              icon: "💼",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="shadow-sm hover:shadow-md p-6 border border-border rounded-xl text-center transition duration-300"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 font-semibold text-xl">{item.title}</h3>
              <p className="opacity-75">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
