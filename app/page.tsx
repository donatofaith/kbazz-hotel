"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   APARTMENTS
========================================================= */

const apartments = [
  {
    location: "Basorun",
    title: "2 Bedroom Apartment",
    price: "₦90,000",
    text:
      "Ideal for couples, small families and guests who want a private serviced apartment in Ibadan.",
    features: [
      "2 Bedrooms",
      "Entire Apartment",
      "Wi-Fi & Smart TV",
      "Air Conditioning",
      "Full Kitchen",
      "Secure Parking",
      "Backup Power",
      "24/7 Security",
    ],
    link:
      "https://wa.me/2348035350939?text=Hello%20Kbazz%20Apartments%2C%20I%27d%20like%20to%20check%20availability%20for%20the%202-bedroom%20Basorun%20apartment.",
  },
  {
    location: "Iyaganku",
    title: "4 Bedroom Apartment",
    price: "₦150,000",
    text:
      "A spacious serviced apartment suited to families, groups and corporate stays in New Iyaganku GRA.",
    features: [
      "4 Bedrooms",
      "Entire Apartment",
      "Wi-Fi & Smart TV",
      "Air Conditioning",
      "Full Kitchen",
      "Secure Parking",
      "Backup Power",
      "24/7 Security",
    ],
    link:
      "https://wa.me/2348035350939?text=Hello%20Kbazz%20Apartments%2C%20I%27d%20like%20to%20check%20availability%20for%20the%204-bedroom%20Iyaganku%20apartment.",
  },
];

/* =========================================================
   GALLERY
========================================================= */

const galleryImages = [
  {
    src: "/media/apartments/kbazz-living-room-orange-rug.webp",
    alt: "Kbazz Apartments living room",
  },
  {
    src: "/media/apartments/kbazz-bedroom-wide.webp",
    alt: "Kbazz Apartments bedroom",
  },
  {
    src: "/media/apartments/kbazz-kitchen.webp",
    alt: "Kbazz Apartments kitchen",
  },
  {
    src: "/media/apartments/kbazz-bedroom-headboard.webp",
    alt: "Kbazz Apartments furnished bedroom",
  },
  {
    src: "/media/apartments/kbazz-living-room-wide.webp",
    alt: "Kbazz Apartments living area",
  },
  {
    src: "/media/apartments/kbazz-bedroom-tv.webp",
    alt: "Kbazz Apartments bedroom with television",
  },
  {
    src: "/media/apartments/kbazz-bathroom.webp",
    alt: "Kbazz Apartments bathroom",
  },
  {
    src: "/media/apartments/kbazz-bedroom-door-view.webp",
    alt: "Kbazz Apartments bedroom interior",
  },
];

/* =========================================================
   REVIEWS
========================================================= */

const reviews = [
  {
    name: "Toyin Mobola Oso",
    rating: 5,
    time: "11 months ago",
    text:
      "My experience with kbazzapartment is beautiful. The most profound is their customer service, top notch. The apartment is very clean and in a very serene environment. Kbazz- exceptional, quiet, beautiful, clean, comfy. Management is responsive. We asked for an item that we needed and it was provided.",
    image:
      "/media/apartments/kbazz-living-room-orange-rug.webp",
  },
  {
    name: "Cassius Samuel-Ejekwu",
    rating: 5,
    time: "5 months ago",
    text:
      "The reception was good, and the place was very neat",
    image:
      "/media/apartments/kbazz-living-room-wide.webp",
  },
  {
    name: "Adeosun Oluwafemi",
    rating: 5,
    time: "10 months ago",
    text: "Cool environment",
    image:
      "/media/apartments/kbazz-bedroom-wide.webp",
  },
  {
    name: "Adedayo Sekinat",
    rating: 5,
    time: "Edited a year ago",
    text: "Lovely place",
    image:
      "/media/apartments/kbazz-bedroom-headboard.webp",
  },
];

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  {
    name: "Iyaganku",
    address:
      "Unit 4A Westlink, Clinton's Court, 8 Adebo Close, New Iyaganku GRA, Ibadan",
    map:
      "https://www.google.com/maps?q=Unit%204A%20Westlink%20Clinton's%20Court%208%20Adebo%20Close%20New%20Iyaganku%20GRA%20Ibadan&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Kbazz+Apartments+Iyaganku+Ibadan",
  },
  {
    name: "Basorun",
    address:
      "Fola Kongi Street, opposite Olarem Filling Station, Bashorun, Ibadan",
    map:
      "https://www.google.com/maps?q=Fola%20Kongi%20Street%20Bashorun%20Ibadan&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Kbazz+Apartments+Basorun+Ibadan",
  },
];

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 34,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y,
              filter: "blur(7px)",
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
      }
      viewport={{
        once: true,
        amount: 0.16,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   FIXED CONTACT
========================================================= */

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-[900] flex flex-col gap-3 sm:bottom-8 sm:right-6">
      {/* WHATSAPP */}

      <motion.a
        href="https://wa.me/2348035350939"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Kbazz Apartments"
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_38px_rgba(0,0,0,0.28)] sm:h-16 sm:w-16"
      >
        <svg
          viewBox="0 0 24 24"
          width="27"
          height="27"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 11.5a8.2 8.2 0 0 1-9 8.15 8 8 0 0 1-3.15-1.1L4 20l1.35-3.65A8.15 8.15 0 1 1 20 11.5Z" />
          <path d="M8.8 8.7c.5 2.5 2.2 4.2 4.7 4.9" />
          <path d="M8.8 8.7 8.1 9.8c-.2.35-.15.7.05 1" />
          <path d="m13.5 13.6 1.2-.7c.35-.2.75-.15 1 .1" />
        </svg>
      </motion.a>

      {/* CALL */}

      <motion.a
        href="tel:+2348035350939"
        aria-label="Call Kbazz Apartments"
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#0866C6] text-white shadow-[0_14px_38px_rgba(0,0,0,0.28)] sm:h-16 sm:w-16"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.2 3.5 4.8 4.8c-.8.45-1.15 1.4-.85 2.25 2.15 6.15 6.85 10.85 13 13 .85.3 1.8-.05 2.25-.85l1.3-2.4c.35-.65.2-1.45-.4-1.9l-3-2.25c-.55-.4-1.3-.35-1.8.15l-1.4 1.4a13 13 0 0 1-4.1-4.1l1.4-1.4c.5-.5.55-1.25.15-1.8L9.1 3.9c-.45-.6-1.25-.75-1.9-.4Z" />
        </svg>
      </motion.a>
    </div>
  );
}

/* =========================================================
   GALLERY CARD
========================================================= */

function GalleryCard({
  image,
  index,
  layout,
  onOpen,
}: {
  image: (typeof galleryImages)[number];
  index: number;
  layout: string;
  onOpen: () => void;
}) {
  const reduceMotion = useReducedMotion();

  const ref =
    useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-7%", "7%"]
  );

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 45,
              scale: 0.98,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.8,
        delay: (index % 4) * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -5,
            }
      }
      className={`group relative overflow-hidden rounded-[22px] bg-[#151515] ${layout}`}
    >
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                y: imageY,
              }
        }
        whileHover={
          reduceMotion
            ? {}
            : {
                scale: 1.045,
              }
        }
        transition={{
          duration: 0.7,
        }}
        className="absolute -inset-[8%]"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 65vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

      <span className="absolute bottom-5 left-5 text-[10px] font-black tracking-[0.15em] text-white/65">
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>

      <motion.span
        whileHover={{
          rotate: 45,
        }}
        className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-[#f4efe6] text-lg font-black text-[#111111]"
      >
        ↗
      </motion.span>
    </motion.button>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const reduceMotion = useReducedMotion();

  const heroRef =
    useRef<HTMLElement>(null);

  const {
    scrollYProgress: pageProgress,
  } = useScroll();

  const smoothProgress = useSpring(
    pageProgress,
    {
      stiffness: 100,
      damping: 25,
      mass: 0.25,
    }
  );

  const {
    scrollYProgress: heroProgress,
  } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    heroProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const heroScale = useTransform(
    heroProgress,
    [0, 1],
    [1, 1.08]
  );

  const [
    selectedImage,
    setSelectedImage,
  ] = useState<number | null>(null);

  const [
    activeReview,
    setActiveReview,
  ] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const timer =
      window.setTimeout(() => {
        setActiveReview(
          (current) =>
            (current + 1) %
            reviews.length
        );
      }, 6500);

    return () =>
      window.clearTimeout(timer);
  }, [activeReview, reduceMotion]);

  function nextReview() {
    setActiveReview(
      (current) =>
        (current + 1) %
        reviews.length
    );
  }

  function previousReview() {
    setActiveReview(
      (current) =>
        (current -
          1 +
          reviews.length) %
        reviews.length
    );
  }

  const currentReview =
    reviews[activeReview];

  return (
    <main className="overflow-x-hidden">
      <FloatingContact />

      {/* PAGE PROGRESS */}

      <motion.div
        style={{
          scaleX: smoothProgress,
        }}
        className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-[#c9a55c]"
      />

      {/* ==================================================
          HERO
      ================================================== */}

      <section
        ref={heroRef}
        id="home"
        className="hero"
      >
        <motion.div
          style={
            reduceMotion
              ? {}
              : {
                  y: heroY,
                  scale: heroScale,
                }
          }
          className="absolute inset-0"
        >
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="/media/hero/kbazz.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <div className="heroOverlay" />
        <div className="heroGlow" />

        <motion.nav
          className="navbar"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -25,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="relative h-[46px] w-[46px] shrink-0 overflow-hidden rounded-full sm:h-[52px] sm:w-[52px]">
              <Image
                src="/media/brand/plot1-logo.png"
                alt="Plot 1"
                fill
                priority
                sizes="52px"
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-[12px] font-black tracking-[0.15em] text-white">
                KBAZZ
              </p>

              <p className="mt-1 text-[7px] font-bold tracking-[0.25em] text-[#c9a55c]">
                APARTMENTS
              </p>
            </div>
          </a>

          <div className="navLinks">
            <a href="#pricing">
              Apartments
            </a>

            <a href="#gallery">
              Gallery
            </a>

            <a href="#reviews">
              Reviews
            </a>

            <a href="#location">
              Locations
            </a>
          </div>

          <motion.a
            href="https://wa.me/2348035350939"
            target="_blank"
            rel="noreferrer"
            className="navButton"
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -2,
                    scale: 1.03,
                  }
            }
            whileTap={{
              scale: 0.97,
            }}
          >
            Book a Stay
            <span>↗</span>
          </motion.a>
        </motion.nav>

        <div className="heroContent">
          <motion.p
            className="eyebrow"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            Luxury Serviced Apartments ·
            Ibadan
          </motion.p>

          <h1 className="heroTitle">
            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 70,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              Your stay,
            </motion.span>

            <motion.span
              className="goldText"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 70,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              elevated.
            </motion.span>
          </h1>

          <motion.p
            className="heroDescription"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
          >
            Tastefully furnished serviced
            apartments in Ibadan, created for
            comfortable stays in a serene and
            secure environment.
          </motion.p>

          <motion.div
            className="heroActions"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
          >
            <motion.a
              href="#pricing"
              className="primaryButton"
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -4,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
            >
              Explore Apartments
              <span>↘</span>
            </motion.a>

            <motion.a
              href="https://wa.me/2348035350939"
              target="_blank"
              rel="noreferrer"
              className="secondaryButton"
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -4,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
            >
              Check Availability
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="heroBottom"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >
          <div className="heroLocation">
            <span className="goldDot" />
            Ibadan, Nigeria
          </div>

          <motion.a
            href="#pricing"
            className="scrollCue"
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, 7, 0],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore
            <span>↓</span>
          </motion.a>
        </motion.div>
      </section>

      {/* ==================================================
          PRICING
      ================================================== */}

      <section
        id="pricing"
        className="relative overflow-hidden bg-[#f7f7f5] px-5 py-24 text-[#111111] sm:px-8 md:py-32 lg:px-12"
      >
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [
                    "-8%",
                    "8%",
                    "-8%",
                  ],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-[180px] top-[40px] h-[500px] w-[500px] rounded-full bg-[#c9a55c]/[0.08] blur-[110px]"
        />

        <div className="relative mx-auto max-w-[1350px]">
          <Reveal className="mx-auto mb-16 max-w-[800px] text-center md:mb-20">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#a17b36]">
              Choose your stay
            </p>

            <h2 className="font-serif text-[clamp(48px,6vw,80px)] font-semibold leading-none tracking-[-0.045em]">
              Transparent Pricing
            </h2>

            <p className="mx-auto mt-6 max-w-[600px] text-[15px] leading-7 text-black/55">
              Choose the apartment that fits
              your stay. Current listed
              nightly rates are shown upfront.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-[1050px] gap-6 lg:grid-cols-2">
            {apartments.map(
              (apartment, index) => (
                <motion.article
                  key={apartment.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 55,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay:
                      index * 0.1,
                  }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          y: -7,
                        }
                  }
                  className="group relative overflow-hidden rounded-[24px] border border-black/[0.07] bg-white p-6 shadow-[0_15px_55px_rgba(0,0,0,0.05)] sm:p-8"
                >
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#c9a55c] transition-all duration-700 group-hover:w-full" />

                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a17b36]">
                    {apartment.location}, Ibadan
                  </p>

                  <h3 className="mt-5 font-serif text-[34px] font-semibold leading-[1.05] tracking-[-0.035em]">
                    {apartment.title}
                  </h3>

                  <p className="mt-4 min-h-[70px] text-sm leading-6 text-black/55">
                    {apartment.text}
                  </p>

                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-[43px] font-black tracking-[-0.05em]">
                      {apartment.price}
                    </span>

                    <span className="pb-2 text-xs text-black/40">
                      / night
                    </span>
                  </div>

                  <motion.a
                    href={apartment.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.015,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="mt-7 flex min-h-[58px] w-full items-center justify-between rounded-[14px] bg-[#c9a55c] py-2 pl-6 pr-2 text-sm font-black"
                  >
                    Book Now

                    <motion.span
                      whileHover={{
                        rotate: 45,
                      }}
                      className="grid h-10 w-10 place-items-center rounded-full bg-[#111111] text-white"
                    >
                      ↗
                    </motion.span>
                  </motion.a>

                  <div className="mt-8 border-t border-black/10 pt-7">
                    <p className="mb-5 text-[9px] font-black uppercase tracking-[0.17em] text-black/35">
                      Included
                    </p>

                    <div className="space-y-4">
                      {apartment.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-black/65"
                          >
                            <span className="text-lg text-[#b58b3d]">
                              ✓
                            </span>

                            <span>
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>

          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.13em] text-black/35">
            Availability is confirmed before
            booking.
          </p>
        </div>
      </section>

      {/* ==================================================
          GALLERY
      ================================================== */}

      <section
        id="gallery"
        className="overflow-hidden bg-[#0b0b0b] px-5 py-24 text-[#f4efe6] sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.26em] text-[#c9a55c]">
                Inside Kbazz
              </p>

              <h2 className="text-[clamp(50px,7vw,100px)] font-bold leading-[0.88] tracking-[-0.06em]">
                Take a closer
                <br />

                <span className="font-serif italic font-normal text-[#c9a55c]">
                  look inside.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={0.12}
              className="max-w-[380px]"
            >
              <p className="text-sm leading-7 text-white/45">
                Bedrooms, living spaces,
                kitchen and bathroom — a
                glimpse of the spaces
                prepared for your stay.
              </p>
            </Reveal>
          </div>

          <div className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[320px] lg:grid-cols-12">
            {galleryImages.map(
              (image, index) => {
                const layout = [
                  "lg:col-span-7 lg:row-span-2",
                  "lg:col-span-5 lg:row-span-1",
                  "lg:col-span-5 lg:row-span-1",
                  "lg:col-span-4 lg:row-span-1",
                  "lg:col-span-8 lg:row-span-1",
                  "lg:col-span-5 lg:row-span-1",
                  "lg:col-span-3 lg:row-span-1",
                  "lg:col-span-4 lg:row-span-1",
                ][index];

                return (
                  <GalleryCard
                    key={image.src}
                    image={image}
                    index={index}
                    layout={layout}
                    onOpen={() =>
                      setSelectedImage(
                        index
                      )
                    }
                  />
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ==================================================
          REVIEWS
      ================================================== */}

      <section
        id="reviews"
        className="relative overflow-hidden bg-[#f4efe6] px-5 py-24 text-[#111111] sm:px-8 md:py-32 lg:px-12"
      >
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [
                    -30,
                    40,
                    -30,
                  ],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-[160px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#c9a55c]/10 blur-[110px]"
        />

        <div className="relative mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Reveal>
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.26em] text-[#9c7937]">
                Guest notes
              </p>

              <h2 className="max-w-[850px] text-[clamp(48px,7vw,96px)] font-bold leading-[0.9] tracking-[-0.065em]">
                Clean. Quiet.
                <br />

                <span className="font-serif italic font-normal text-[#b58b3d]">
                  Responsive.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={0.12}
              className="max-w-[420px] lg:justify-self-end"
            >
              <p className="text-sm leading-7 text-black/50">
                The details people remembered
                after staying at Kbazz.
              </p>
            </Reveal>
          </div>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 45,
                    scale: 0.985,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.9,
            }}
            className="overflow-hidden rounded-[30px] bg-[#101010] text-white"
          >
            <div className="h-[3px] bg-white/10">
              <motion.div
                key={`review-progress-${activeReview}`}
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration:
                    reduceMotion
                      ? 0
                      : 6.5,
                  ease: "linear",
                }}
                className="h-full bg-[#c9a55c]"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="grid lg:grid-cols-[1.1fr_0.9fr]"
              >
                <motion.div
                  drag={
                    reduceMotion
                      ? false
                      : "x"
                  }
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.12}
                  dragMomentum={false}
                  onDragEnd={(_, info) => {
                    if (
                      info.offset.x <
                      -75
                    ) {
                      nextReview();
                    }

                    if (
                      info.offset.x >
                      75
                    ) {
                      previousReview();
                    }
                  }}
                  className="cursor-grab p-7 active:cursor-grabbing sm:p-10 md:p-14 lg:p-16"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#c9a55c]">
                      {Array.from({
                        length:
                          currentReview.rating,
                      }).map(
                        (_, index) => (
                          <span
                            key={index}
                            className="text-lg"
                          >
                            ★
                          </span>
                        )
                      )}
                    </div>

                    <span className="hidden text-[9px] font-black uppercase tracking-[0.17em] text-white/25 sm:block">
                      Drag to explore
                    </span>
                  </div>

                  <blockquote className="mt-10 max-w-[820px] text-[clamp(25px,3.3vw,46px)] font-semibold leading-[1.18] tracking-[-0.045em]">
                    “{currentReview.text}”
                  </blockquote>

                  <div className="mt-12 border-t border-white/10 pt-7">
                    <p className="text-lg font-bold">
                      {currentReview.name}
                    </p>

                    <p className="mt-1 text-sm text-white/35">
                      {currentReview.time}
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex gap-2">
                      {reviews.map(
                        (
                          review,
                          index
                        ) => (
                          <button
                            key={review.name}
                            onClick={() =>
                              setActiveReview(
                                index
                              )
                            }
                            className={`h-2.5 rounded-full transition-all ${
                              activeReview ===
                              index
                                ? "w-9 bg-[#c9a55c]"
                                : "w-2.5 bg-white/20"
                            }`}
                          />
                        )
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={
                          previousReview
                        }
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15"
                      >
                        ←
                      </button>

                      <button
                        onClick={nextReview}
                        className="grid h-11 w-11 place-items-center rounded-full bg-[#c9a55c] font-black text-[#111111]"
                      >
                        →
                      </button>

                      <span className="ml-1 text-[9px] font-bold tracking-[0.16em] text-white/35">
                        {String(
                          activeReview +
                            1
                        ).padStart(
                          2,
                          "0"
                        )}
                        {" / "}
                        {String(
                          reviews.length
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-full">
                  <motion.div
                    initial={{
                      scale: 1.1,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        currentReview.image
                      }
                      alt="Kbazz Apartments interior"
                      fill
                      sizes="(max-width:1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          LOCATIONS WITH MAPS
      ================================================== */}

      <section
        id="location"
        className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <Reveal>
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.24em] text-[#c9a55c]">
                Find Kbazz
              </p>

              <h2 className="max-w-[800px] text-[clamp(48px,7vw,90px)] font-bold leading-[0.9] tracking-[-0.06em]">
                Two locations
                <br />

                <span className="font-serif italic font-normal text-[#c9a55c]">
                  in Ibadan.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={0.1}
              className="max-w-[400px] lg:justify-self-end"
            >
              <p className="text-sm leading-7 text-white/45">
                View each location directly
                on the map and open Google
                Maps when you need directions.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {locations.map(
              (location, index) => (
                <motion.article
                  key={location.name}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay:
                      index * 0.1,
                  }}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-[#131313]"
                >
                  {/* MAP */}

                  <div className="relative h-[330px] w-full overflow-hidden sm:h-[400px]">
                    <iframe
                      src={location.map}
                      title={`${location.name} Kbazz Apartments map`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />

                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />
                  </div>

                  {/* LOCATION DETAILS */}

                  <div className="p-7 sm:p-8">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#c9a55c]">
                      Location{" "}
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </p>

                    <h3 className="mt-4 text-[34px] font-bold tracking-[-0.04em]">
                      {location.name}
                    </h3>

                    <p className="mt-4 max-w-[430px] text-sm leading-7 text-white/45">
                      {location.address}
                    </p>

                    <motion.a
                      href={
                        location.directions
                      }
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        x: 4,
                      }}
                      className="mt-7 flex items-center justify-between border-t border-white/10 pt-6 text-sm font-bold"
                    >
                      Get Directions

                      <motion.span
                        whileHover={{
                          rotate: 45,
                        }}
                        className="grid h-10 w-10 place-items-center rounded-full bg-[#f4efe6] text-black"
                      >
                        ↗
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.article>
              )
            )}
          </div>

          {/* FINAL CTA */}

          <div className="mt-24 grid gap-10 border-t border-white/10 pt-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a55c]">
                Your stay starts here
              </p>

              <h2 className="mt-5 max-w-[850px] text-[clamp(48px,7vw,90px)] font-bold leading-[0.9] tracking-[-0.06em]">
                Ready when
                <br />

                <span className="font-serif italic font-normal text-[#c9a55c]">
                  you are.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <motion.a
                href="https://wa.me/2348035350939"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex min-h-[64px] min-w-[220px] items-center justify-between gap-7 rounded-full bg-[#c9a55c] py-2 pl-7 pr-2 text-sm font-black text-[#111111]"
              >
                Book your stay

                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#111111] text-white">
                  ↗
                </span>
              </motion.a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-white/10 bg-[#080808] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full">
                  <Image
                    src="/media/brand/plot1-logo.png"
                    alt="Plot 1"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-base font-black tracking-[0.14em]">
                    KBAZZ
                  </p>

                  <p className="mt-1 text-[8px] font-bold tracking-[0.24em] text-[#c9a55c]">
                    APARTMENTS
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-[390px] text-sm leading-7 text-white/40">
                Tastefully furnished
                serviced apartments for
                comfortable stays in Ibadan.
              </p>

              <a
                href="tel:+2348035350939"
                className="mt-5 block text-sm font-bold text-white/70"
              >
                +234 803 535 0939
              </a>
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                Explore
              </p>

              <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-white/65">
                <a href="#home">
                  Home
                </a>

                <a href="#pricing">
                  Apartments
                </a>

                <a href="#gallery">
                  Gallery
                </a>

                <a href="#reviews">
                  Reviews
                </a>

                <a href="#location">
                  Locations
                </a>
              </div>
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                Connect
              </p>

              <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-white/65">
                <a
                  href="https://www.instagram.com/kbazzapartments/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://wa.me/2348035350939"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp ↗
                </a>

                <a href="tel:+2348035350939">
                  Call Us ↗
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-7 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Kbazz Apartments.
              All rights reserved.
            </p>

            <a href="#home">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* ==================================================
          LIGHTBOX
      ================================================== */}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedImage(null)
            }
            className="fixed inset-0 z-[999] grid place-items-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative h-[80vh] w-full max-w-[1200px] overflow-hidden rounded-[24px] bg-[#151515]"
            >
              <Image
                src={
                  galleryImages[
                    selectedImage
                  ].src
                }
                alt={
                  galleryImages[
                    selectedImage
                  ].alt
                }
                fill
                sizes="95vw"
                className="object-contain"
              />

              <button
                onClick={() =>
                  setSelectedImage(null)
                }
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#f4efe6] text-xl font-bold text-black"
              >
                ×
              </button>

              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage -
                      1 +
                      galleryImages.length) %
                      galleryImages.length
                  )
                }
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-white"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setSelectedImage(
                    (selectedImage +
                      1) %
                      galleryImages.length
                  )
                }
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-white"
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}