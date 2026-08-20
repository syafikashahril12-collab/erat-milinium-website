import Image from "next/image";

export const metadata = {
  title: "Who We Are | ERAT MILINIUM (M) Sdn Bhd",
};

const whyChooseUs = [
  "Experienced operations team",
  "Fast response & 24/7 support",
  "Strong coordination with authorities",
  "Competitive pricing",
  "Reliable and efficient service",
  "Customer-focused solutions",
  "Compliance with port and customs regulations",
];

const missionPoints = [
  "To provide efficient and dependable shipping solutions.",
  "To maintain high standards of customer service.",
  "To ensure smooth and timely operations for every vessel and cargo handled.",
  "To build long-term partnerships with our clients and stakeholders.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-midnight text-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Who We Are
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-tight md:text-5xl">
            The company behind the delivery.
          </h1>
          <div className="horizon-rule mt-8 w-40" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="relative h-80 w-full overflow-hidden order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=900&auto=format&fit=crop"
              alt="Port and vessel operations"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-2xl uppercase text-harbor">
              Our Story
            </h2>
            <div className="horizon-rule-thin mt-4 w-24" />
            <p className="mt-6 text-harbor/80">
              Erat Milinium (M) Sdn Bhd was incorporated on 23 April 2005. We
              are a registered and licensed shipping, forwarding and
              logistics service provider specializing in port operations,
              vessel clearance, freight forwarding and marine support
              services throughout Malaysia.
            </p>
            <p className="mt-4 text-harbor/80">
              With extensive industry experience and a dedicated operations
              team, we are committed to delivering efficient, reliable and
              cost-effective solutions to ship owners, charterers, operators,
              freight forwarders and logistics partners.
            </p>
            <p className="mt-4 text-harbor/80">
              We provide comprehensive coordination with port authorities,
              customs and relevant government agencies to ensure smooth
              vessel and cargo operations while maintaining high standards
              of professionalism and customer service.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-harbor text-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-2xl uppercase md:text-3xl">
            What clients get working with us
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {whyChooseUs.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-rig" />
                <p className="text-steel">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl uppercase text-harbor">
            Vision & Mission
          </h2>
          <div className="horizon-rule-thin mt-4 w-24" />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border border-steel/40 p-8">
              <p className="font-display text-sm uppercase tracking-widest text-rig">
                Vision
              </p>
              <p className="mt-3 text-harbor/80">
                To become a trusted and leading shipping and logistics
                service provider in the region through excellence,
                reliability and professionalism.
              </p>
            </div>
            <div className="border border-steel/40 p-8">
              <p className="font-display text-sm uppercase tracking-widest text-rig">
                Mission
              </p>
              <ul className="mt-3 space-y-2 text-harbor/80">
                {missionPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-rig">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-harbor text-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Our Commitment
          </p>
          <div className="mt-6 max-w-3xl space-y-4 text-steel">
            <p>
              Our commitment is to deliver prompt, efficient and dependable
              services tailored to meet the operational requirements of our
              clients at all major Malaysian ports.
            </p>
            <p>
              We are committed to delivering professional services with
              integrity, efficiency and operational excellence while
              ensuring customer satisfaction at every stage of the
              operation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
