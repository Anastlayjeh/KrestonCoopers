"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [office, setOffice] = useState("ghana"); // default

  const content = {
    ghana: {
      bg: "from-blue-900 to-blue-800",
      titlePart1: "Professional",
      titleHighlight: "Accounting",
      titlePart2: "& Business Advisory",
      desc: "Providing trusted financial and advisory services across Ghana, helping organizations grow with confidence.",
      image: "/building.webp",
      accentColor: "text-[#F2A634]", // Kreston Orange more yellow
    },
    dubai: {
      bg: "from-[#0F172A] to-[#1E293B]",
      titlePart1: "International",
      titleHighlight: "Audit",
      titlePart2: "& Advisory Experts",
      desc: "Serving corporations in the UAE with world-class financial, audit, and compliance services.",
      image: "/World.webp",
      accentColor: "text-[#F2A634]", // same orange, or change per design
    },
  };

  // initial content
  const [current, setCurrent] = useState(content[office]);

  useEffect(() => {
    // load initial office from localStorage
    const mapOffice = (o) => (o === "uae" ? "dubai" : o);
    const savedOfficeRaw = localStorage.getItem("office");
    const savedOffice = mapOffice(savedOfficeRaw);
    if (savedOffice && content[savedOffice]) {
      setOffice(savedOffice);
      setCurrent(content[savedOffice]);
    }

    // listen to office change events
    const handleOfficeChange = (event) => {
      // Accept either a string detail ('dubai') or an object ({ office: 'dubai' })
      let newOffice;
      if (event && event.detail) {
        if (typeof event.detail === "string") {
          newOffice = event.detail;
        } else if (typeof event.detail === "object" && event.detail.office) {
          newOffice = event.detail.office;
        }
      }

      // Fallback to localStorage or default
      if (!newOffice) {
        const ls = localStorage.getItem("office");
        newOffice = mapOffice(ls) || "ghana";
      }

      if (content[newOffice]) {
        setOffice(newOffice);
        setCurrent(content[newOffice]);
        // persist so refresh or other components can read it
        try {
          localStorage.setItem("office", newOffice);
        } catch (e) {
          /* ignore localStorage errors */
        }
      }
    };

    // small helper so other scripts/components can change office reliably:
    // window.setOffice("dubai")
    // this will both persist and dispatch the event
    if (typeof window !== "undefined") {
      window.setOffice = (name) => {
        if (!name) return;
        try { localStorage.setItem("office", name); } catch (e) {}
        window.dispatchEvent(new CustomEvent("office-changed", { detail: name }));
      };
    }

    window.addEventListener("office-changed", handleOfficeChange);
    return () => window.removeEventListener("office-changed", handleOfficeChange);
  }, []);

  return (
    <section className={`w-full bg-gradient-to-br ${current.bg} py-16 md:py-20 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {current.titlePart1} <br className="hidden sm:block" />
            <span className={current.accentColor}>{current.titleHighlight}</span> <br />
            {current.titlePart2}
          </h1>

          <p className="text-gray-200 mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {current.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10 justify-center lg:justify-start">
            <Link href="/contact">
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
                Contact Us
              </button>
            </Link>

            <Link href="/services">
              <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 sm:px-8 rounded-md transition w-full sm:w-auto">
                Our Services
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 mt-10 lg:mt-0">
          <img
            src={current.image}
            alt="Hero Image"
            className="rounded-xl shadow-2xl w-full max-w-lg lg:max-w-none mx-auto object-cover"
            style={{ maxHeight: "550px" }}
          />
        </div>
      </div>
    </section>
  );
}
