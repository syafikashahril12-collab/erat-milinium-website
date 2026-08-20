import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-harbor text-mist">
      <div className="horizon-rule" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ERAT MILINIUM (M) Sdn Bhd logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-base uppercase tracking-wide">
              Erat Milinium
            </span>
          </div>
          <p className="max-w-xs text-sm text-steel">
            ERAT MILINIUM (M) Sdn Bhd (Reg No. 200501012090 / 689138-W) is a
            registered and licensed shipping, forwarding and logistics
            service provider specializing in port operations, vessel
            clearance, freight forwarding and marine support services
            throughout Malaysia.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm uppercase tracking-widest text-rig">
            Site Map
          </h3>
          <ul className="space-y-2 text-sm text-steel">
            <li><Link href="/" className="hover:text-mist">Home</Link></li>
            <li><Link href="/about" className="hover:text-mist">Who We Are</Link></li>
            <li><Link href="/services" className="hover:text-mist">Services</Link></li>
            <li><Link href="/faq" className="hover:text-mist">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-mist">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm uppercase tracking-widest text-rig">
            Reach Us
          </h3>
          <ul className="space-y-2 text-sm text-steel">
            <li>
              Email:{" "}
              <a
                href="mailto:erat_mili@yahoo.com"
                className="hover:text-mist"
              >
                erat_mili@yahoo.com
              </a>
            </li>
            <li>
              Tel:{" "}
              <a href="tel:+60356926372" className="hover:text-mist">
                +605-692 6372
              </a>
            </li>
            <li>Fax: +605-692 6472</li>
            <li>
              No. 34, Jalan Acheh 2, Medan Acheh,
              <br />
              32000 Sitiawan, Perak Darul Ridzuan
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-steel">
        © {new Date().getFullYear()} ERAT MILINIUM (M) Sdn Bhd (Reg No.
        200501012090 / 689138-W). All rights reserved.
      </div>
    </footer>
  );
}
