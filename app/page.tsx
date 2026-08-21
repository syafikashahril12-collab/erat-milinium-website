import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO — sunset-to-night gradient, echoing the rig photo in the logo */}
      <section className="relative overflow-hidden bg-horizon">
        <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-28 md:py-36">
          <p className="fade-up mb-4 font-display text-sm uppercase tracking-[0.3em] text-rig">
            Est. Malaysia
          </p>
          <h1 className="fade-up max-w-3xl font-display text-4xl uppercase leading-tight text-mist md:text-6xl">
            Reliable service, seamless
            <br />
            coordination & trusted support.
          </h1>
          <div className="horizon-rule fade-up my-8 w-40" />
          <p className="fade-up max-w-xl text-base text-steel md:text-lg">
            ERAT MILINIUM (M) Sdn Bhd is a Malaysian-based company providing
            reliable shipping, forwarding, logistics, marine support and
            project coordination services.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-rig px-7 py-3 font-display text-sm uppercase tracking-widest text-harbor transition-transform hover:scale-[1.03]"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="border border-steel px-7 py-3 font-display text-sm uppercase tracking-widest text-mist transition-colors hover:border-rig hover:text-rig"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE PHOTO STRIP */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=800&auto=format&fit=crop",
                title: "Land Freight",
                copy: "Scheduled and project cargo moved by road across Peninsular and East Malaysia.",
              },
              {
                img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800&auto=format&fit=crop",
                title: "Marine & Port",
                copy: "Vessel coordination, port handling and marine transfers for time-sensitive loads.",
              },
              {
                img: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=800&auto=format&fit=crop",
                title: "Offshore Support",
                copy: "Supply runs and logistics support built around rig and platform schedules.",
              },
            ].map((card) => (
              <div key={card.title} className="group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="horizon-rule-thin mt-5" />
                <h3 className="mt-4 font-display text-lg uppercase tracking-wide text-harbor">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-harbor/70">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="bg-harbor text-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
              Who We Are
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase leading-tight md:text-4xl">
              Local Expertise. Global Connections
              <br />
              Committed to Service. Driven by Reliability.
            </h2>
            <p className="mt-6 max-w-md text-steel">
              Every load has a deadline attached to someone else&apos;s
              operation. That&apos;s the standard we plan around — read more
              about how ERAT MILINIUM works.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border-b-2 border-rig font-display text-sm uppercase tracking-widest text-mist"
            >
              Read Our Story →
            </Link>
          </div>
          <div className="relative h-72 w-full overflow-hidden md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=900&auto=format&fit=crop"
              alt="Container port operations at dusk"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-rig">
            Trusted By
          </p>
          <h2 className="mt-3 text-center font-display text-2xl uppercase text-harbor md:text-3xl">
            80+ clients across oil & gas, marine and logistics
          </h2>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              "PETRONAS",
              "Sarawak Shell Berhad",
              "Petrofac",
              "Hess Exploration & Production",
              "Murphy Sarawak Oil",
              "Sapura Kencana",
              "MISC Integrated Logistics",
              "Tenaga Nasional Berhad",
              "TIME dotCom",
              "Kebabangan Petroleum Operating Co",
              "Global Marine System Ltd",
              "Kontena Nasional",
            ].map((name) => (
              <span
                key={name}
                className="font-display text-sm uppercase tracking-wide text-harbor/60"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-harbor/50">
            …and 70+ more clients across Malaysia, Thailand, Indonesia,
            Japan and the Philippines.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-20 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl uppercase text-harbor md:text-3xl">
              Have cargo to move?
            </h2>
            <p className="mt-2 text-harbor/70">
              Tell us the route, the load and the deadline — we&apos;ll work
              out the rest.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-rig px-8 py-4 font-display text-sm uppercase tracking-widest text-harbor transition-transform hover:scale-[1.03]"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
