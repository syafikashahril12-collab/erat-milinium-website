import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | ERAT MILINIUM (M) Sdn Bhd",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-midnight text-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-tight md:text-5xl">
            Let&apos;s plan the move.
          </h1>
          <div className="horizon-rule mt-8 w-40" />
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5">
          {/* Details */}
          <div className="md:col-span-2">
            <h2 className="font-display text-xl uppercase text-harbor">
              Reach Us Directly
            </h2>
            <div className="horizon-rule-thin mt-4 w-20" />

            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="font-display uppercase tracking-widest text-rig">
                  Email
                </dt>
                <dd className="mt-1 text-harbor/80">
                  <a
                    href="mailto:erat_mili@yahoo.com"
                    className="hover:text-rig"
                  >
                    erat_mili@yahoo.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-rig">
                  Phone
                </dt>
                <dd className="mt-1 text-harbor/80">
                  <a href="tel:+60356926372" className="hover:text-rig">
                    +605-692 6372
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-rig">
                  Fax
                </dt>
                <dd className="mt-1 text-harbor/80">+605-692 6472</dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-rig">
                  Operating Hours
                </dt>
                <dd className="mt-1 text-harbor/80">
                  Mon – Fri: 9:00 AM – 5:30 PM
                  <br />
                  Sat: 9:00 AM – 12:30 PM
                  <br />
                  (GMT+8)
                </dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-rig">
                  Office
                </dt>
                <dd className="mt-1 text-harbor/80">
                  No 34, Jalan Acheh 2,
                  <br />
                  Medan Acheh,
                  <br />
                  32000 Sitiawan, Perak Darul Ridzuan
                </dd>
              </div>
              <div>
                <dt className="font-display uppercase tracking-widest text-rig">
                  Operations Contact (24 Hours)
                </dt>
                <dd className="mt-1 text-harbor/80">
                  Azam Mudzaffar Othman —{" "}
                  <a href="tel:+60125067843" className="hover:text-rig">
                    012-506 7843
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="font-display text-xl uppercase text-harbor">
              Send an Enquiry
            </h2>
            <div className="horizon-rule-thin mt-4 w-20" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
