"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [office, setOffice] = useState("ghana"); // default

  const KRESTON_ORANGE = "text-[#F28E34]"; // Adjusted Kreston Orange (more yellowish)

  const content = {
    ghana: {
      bg: "from-blue-900 to-blue-800",
      titleHighlight: KRESTON_ORANGE,
      title: "Professional Accounting & Business Advisory",
      desc: "Providing trusted financial and advisory services across Ghana, helping organizations grow with confidence.",
      image: "/building.webp",
    },
    dubai: {
      bg: "from-[#0F172A] to-[#1E293B]", // deep blue/gray background
      titleHighlight: KRESTON_ORANGE,
      title: "International Audit, Tax & Advisory Experts",
      desc: "Serving corporations in the UAE with world-class financial, audit, and compliance services.",
      image: "/World.webp",
    },
  };

  const current = content[office] || content.ghana;

  useEffect(() => {
    setLoaded(true);

    const savedOffice = localStorage.getItem("office");
    if (savedOffice && content[savedOffice]) setOffice(savedOffice);

    const handleOfficeChange = () => {
      const newOffice = localStorage.getItem("office") || "ghana";
      if (content[newOffice]) setOffice(newOffice);
    };

    window.addEventListener("office-changed", handleOfficeChange);
    return () => window.removeEventListener("office-changed", handleOfficeChange);
  }, []);

  return (
    <section
      className={`w-full bg-gradient-to-br ${current.bg} py-16 md:py-20 transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 md:gap-12">
        {/* LEFT TEXT */}
        <div
          className={`flex-1 transition-all duration-900 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } text-center lg:text-left`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {current.title.split("&")[0]} <br className="hidden sm:block" />
            <span className={current.titleHighlight}>
              {office === "ghana" ? "Accounting" : "Audit"}
            </span>{" "}
            & <br />
            {current.title.split("&")[1]}
          </h1>

          <p className="text-gray-200 mt-4 md:mt-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            {current.desc}
          </p>

          {/* Buttons */}
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

        {/* RIGHT IMAGE */}
        <div
          className={`flex-1 transition-all duration-900 ease-out ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } mt-10 lg:mt-0`}
        >
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
