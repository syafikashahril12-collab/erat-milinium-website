import Link from "next/link";
import PortCoverageMap from "@/components/PortCoverageMap";

export const metadata = {
  title: "Services | ERAT MILINIUM (M) Sdn Bhd",
};

const serviceCategories = [
  {
    number: "01",
    title: "Shipping Agency Services",
    items: [
      "Vessel inward & outward clearance",
      "Port documentation",
      "Coordination with port authorities",
      "Pilotage & tug arrangement",
      "Berthing arrangement",
      "Crew handling services",
      "Crew sign on/sign off arrangements",
      "Crew work permit & immigration application services",
      "Visa extension and immigration clearance coordination",
      "Ship spares clearance and delivery",
      "Fresh water, bunker & ship supplies arrangement",
    ],
  },
  {
    number: "02",
    title: "Freight Forwarding",
    items: [
      "Import & export shipment handling",
      "Air & sea freight coordination",
      "Door-to-door delivery",
      "Transshipment services",
      "Cargo consolidation",
    ],
  },
  {
    number: "03",
    title: "Customs Clearance",
    items: [
      "Customs declaration",
      "Permit application",
      "Duty & tax coordination",
      "Import/export documentation",
    ],
  },
  {
    number: "04",
    title: "Logistics & Transportation",
    items: [
      "Haulage & trucking services",
      "Warehouse coordination",
      "Cargo handling",
      "Heavy lift / project cargo arrangement",
    ],
  },
  {
    number: "05",
    title: "Marine & Husbandry Services",
    items: [
      "Crew change arrangement",
      "Medical assistance",
      "Cash to Master",
      "Spare parts clearance & delivery",
      "Ship chandelling coordination",
      "UDAT & safety arrangement",
    ],
  },
  {
    number: "06",
    title: "Submarine Cable Services",
    items: [
      "Desktop study including project planning & engineering",
      "Marine survey",
      "Submarine cable installation",
      "Submarine gas pipeline installation",
      "Repair and maintenance",
      "Permit in Principle (P.I.P) application",
    ],
  },
];

const shoreServices = [
  {
    title: "Off Shore",
    items: [
      "International freighting (sea)",
      "International freighting (air)",
      "FOB arrangement",
      "Cargo survey / inspection & fumigation",
    ],
  },
  {
    title: "On Shore",
    items: [
      "Land transportation",
      "Heavy lift",
      "Warehouse",
      "Clearance / forwarding",
      "Man power",
      "Bunkering",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-midnight text-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-tight md:text-5xl">
            One partner, every leg of the move.
          </h1>
          <div className="horizon-rule mt-8 w-40" />
          <p className="mt-6 max-w-xl text-steel">
            From vessel clearance at the port to the last mile on land, here
            is where ERAT MILINIUM (M) Sdn Bhd plugs in.
          </p>
        </div>
      </section>

      {/* SIX SERVICE CATEGORIES */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {serviceCategories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-rig">
                    {cat.number}
                  </span>
                  <h3 className="font-display text-xl uppercase text-harbor">
                    {cat.title}
                  </h3>
                </div>
                <div className="horizon-rule-thin mt-4 w-16" />
                <ul className="mt-4 space-y-2 text-sm text-harbor/70">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-rig">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFF SHORE / ON SHORE */}
      <section className="bg-harbor text-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Coverage
          </p>
          <h2 className="mt-3 font-display text-2xl uppercase md:text-3xl">
            Off shore and on shore, under one roof.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {shoreServices.map((group) => (
              <div key={group.title} className="border border-white/15 p-8">
                <h3 className="font-display text-lg uppercase text-rig">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-steel">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-rig">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORT COVERAGE */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
            Port Coverage
          </p>
          <h2 className="mt-3 font-display text-2xl uppercase text-harbor md:text-3xl">
            We provide services at major ports across Malaysia and beyond.
          </h2>
          <div className="horizon-rule-thin mt-6 w-24" />
          <p className="mt-4 max-w-xl text-sm text-harbor/70">
            Click a port to pin its location on the map.
          </p>

          <div className="mt-10">
            <PortCoverageMap />
          </div>
        </div>
      </section>

      <section className="bg-harbor text-mist">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-20 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl uppercase md:text-3xl">
              Not sure which service fits?
            </h2>
            <p className="mt-2 text-steel">
              Tell us what you&apos;re moving and we&apos;ll map out the
              right combination.
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
