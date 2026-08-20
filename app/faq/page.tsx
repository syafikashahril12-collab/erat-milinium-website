import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "FAQ | ERAT MILINIUM (M) Sdn Bhd",
};

const faqGroups = [
  {
    category: "About Erat Milinium",
    items: [
      {
        question: "What services does Erat Milinium (M) Sdn. Bhd. provide?",
        answer:
          "Erat Milinium provides shipping agency, freight forwarding, Customs clearance, logistics and transportation, marine and husbandry services, and support for submarine cable and offshore projects.",
      },
      {
        question: "How long has Erat Milinium been in operation?",
        answer:
          "Erat Milinium (M) Sdn. Bhd. was incorporated on 23 April 2005 and has extensive experience in shipping, forwarding, logistics, port operations and marine support services.",
      },
      {
        question: "Who are your typical clients?",
        answer:
          "We serve ship owners, charterers, vessel operators, freight forwarders, logistics partners, offshore and marine contractors, and companies requiring shipping and project logistics support.",
      },
      {
        question: "Why should clients choose Erat Milinium?",
        answer:
          "We offer an experienced operations team, responsive 24/7 support, strong coordination with relevant authorities, competitive pricing and reliable, customer-focused services while maintaining compliance with applicable port and Customs requirements.",
      },
      {
        question: "Do you provide 24/7 operational support?",
        answer:
          "Yes. Our operations team provides responsive support for time-sensitive vessel, cargo, crew and marine operations.",
      },
    ],
  },
  {
    category: "Shipping Agency & Vessel Services",
    items: [
      {
        question: "Can you handle vessel inward and outward clearance?",
        answer:
          "Yes. We provide vessel inward and outward clearance coordination, port documentation and liaison with the relevant port and government authorities.",
      },
      {
        question: "Can you arrange pilotage, tug and berthing services?",
        answer:
          "Yes. We can coordinate pilotage, tug assistance and berthing arrangements according to vessel and port requirements.",
      },
      {
        question:
          "Can you arrange bunker fuel, fresh water and ship supplies?",
        answer:
          "Yes. We can coordinate bunker fuel, fresh water, ship chandelling and other vessel supplies according to operational requirements.",
      },
      {
        question: "Do you handle ship spares?",
        answer:
          "Yes. We can coordinate the Customs clearance, transportation and delivery of ship spares to vessels.",
      },
      {
        question: "Can you provide husbandry services for vessels?",
        answer:
          "Yes. Our marine and husbandry support includes crew changes, medical assistance, Cash to Master, spare-parts clearance and delivery, ship chandelling coordination, and UDAT and safety arrangements.",
      },
    ],
  },
  {
    category: "Crew & Immigration Services",
    items: [
      {
        question: "Do you provide crew sign-on and sign-off services?",
        answer:
          "Yes. We coordinate crew sign-on and sign-off arrangements, immigration clearance and associated crew logistics.",
      },
      {
        question: "Can you assist with crew visas and work permits?",
        answer:
          "Yes. We can provide support for crew work permit and immigration applications, visa extensions and related documentation, subject to the requirements and approval of the relevant authorities.",
      },
      {
        question:
          "Can you arrange crew transportation and other crew support?",
        answer:
          "Yes. We can coordinate local transportation and other necessary logistics associated with crew movements and vessel operations.",
      },
    ],
  },
  {
    category: "Freight Forwarding, Customs & Logistics",
    items: [
      {
        question: "Do you handle air and sea freight?",
        answer:
          "Yes. We coordinate air and sea freight for import and export shipments, including door-to-door delivery, transshipment and cargo consolidation.",
      },
      {
        question: "Can you assist with Customs clearance?",
        answer:
          "Yes. Our Customs clearance services include Customs declarations, permit applications, duty and tax coordination, and import/export documentation.",
      },
      {
        question:
          "Can you assist with the importation of project equipment and materials?",
        answer:
          "Yes. We can coordinate Customs clearance and import/export documentation for project equipment, marine equipment, vessel supplies and other cargo, subject to applicable regulatory requirements.",
      },
      {
        question: "Can you arrange heavy-lift and project cargo transportation?",
        answer:
          "Yes. We can coordinate haulage, trucking, cargo handling and heavy-lift/project cargo arrangements according to project requirements.",
      },
      {
        question:
          "Do you provide warehouse and land transportation services?",
        answer:
          "Yes. We can coordinate warehousing, land transportation, heavy-lift activities and other onshore logistics requirements.",
      },
      {
        question:
          "Can you arrange cargo surveys, inspections and fumigation?",
        answer:
          "Yes. Cargo survey, inspection and fumigation services can be coordinated as part of our freight and logistics support services.",
      },
    ],
  },
  {
    category: "Offshore & Submarine Cable Projects",
    items: [
      {
        question: "Do you support offshore and submarine cable projects?",
        answer:
          "Yes. Erat Milinium provides support for submarine cable and offshore projects, including project coordination, marine survey support, submarine cable installation support, repair and maintenance, and Permit in Principle (PIP) application support.",
      },
      {
        question:
          "Can you assist with Permit in Principle (PIP) and government approvals?",
        answer:
          "Yes. We can support Permit in Principle applications and coordinate with relevant authorities for project permitting and approvals. Specialist technical, engineering or environmental input can be coordinated where required.",
      },
      {
        question: "Do you provide marine survey services?",
        answer:
          "Marine survey services can be coordinated according to project requirements, including specialist survey resources where required.",
      },
      {
        question: "Can you support submarine cable installation projects?",
        answer:
          "Yes. We can provide and coordinate local support for submarine cable installation projects, including permitting, marine and port coordination, vessel support, Customs, immigration and logistics requirements.",
      },
      {
        question:
          "Do you provide Post-Lay Burial (PLB) and specialist ROV services?",
        answer:
          "Specialist PLB and ROV services can be coordinated through suitable marine contractors according to project requirements, while Erat Milinium can provide associated local permitting, vessel agency, Customs, immigration and logistics support.",
      },
      {
        question:
          "Can you support submarine cable repair and maintenance projects?",
        answer:
          "Yes. Repair and maintenance form part of the submarine cable services covered by our company capabilities, with specialist resources coordinated according to the technical requirements of each project.",
      },
      {
        question:
          "Can Erat Milinium provide an integrated solution for international marine and offshore contractors working in Malaysia?",
        answer:
          "Yes. We can act as a local coordination point for vessel agency, port and government authority liaison, Customs and immigration, crew handling, logistics, transportation and other marine support requirements. Specialist technical services can be coordinated according to the project scope.",
      },
    ],
  },
  {
    category: "Coverage & Enquiries",
    items: [
      {
        question: "Which ports and locations do you cover?",
        answer:
          "We provide services at major Malaysian ports, including Northport and Westports in Port Klang, Pasir Gudang Port, Port of Tanjung Pelepas, Kemaman Port, Kuantan Port, Tok Bali Port, Lumut Port, Penang Port, Labuan Port, Tawau Port and Miri Port. Our company profile also includes Muara Port in Brunei.",
      },
      {
        question: "How can we request a quotation or discuss a project?",
        answer:
          "Please contact our team with your vessel, cargo or project details, location, expected schedule and required scope of services. We will review the requirements and provide an appropriate service proposal or quotation.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-rig">
          FAQ
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase leading-tight text-harbor md:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="horizon-rule mt-8 w-40" />

        <div className="mt-12">
          <FaqAccordion groups={faqGroups} />
        </div>
      </div>
    </section>
  );
}
