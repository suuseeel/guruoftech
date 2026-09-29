
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Bug,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Layers,
  Mail,
  Menu,
  MessageSquare,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

import { SiReact, SiNextdotjs, SiNodedotjs } from "react-icons/si";

import { FaAws } from "react-icons/fa6";

import { ThemeToggle } from "@/components/theme-toggle";
import { aiGroups } from "@/components/ai/data";
import { industriesMeta } from "@/components/industry/data";


const aiMenu = aiGroups.map((group) => ({
  id: group.id,
  title: group.title,
  icon: group.icon,
  color: group.color,
  items: group.items.map((item) => ({
    title: item.title,
    href: `/ai#${item.id}`,
  })),
}));

/* =========================================================
   SERVICES
========================================================= */

const servicesMenu = [
  {
    title: "Software Development",
    href: "/services/software-development",
    icon: Code2,
    desc: "Product, enterprise, offshore & nearshore",
  },
  {
    title: "eCommerce Development",
    href: "/services/ecommerce-development",
    icon: ShoppingCart,
    desc: "Storefronts, B2B/B2C, integrations",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    desc: "Android, Kotlin, Flutter & Xamarin",
  },
  {
    title: "Analytics & DevOps",
    href: "/services/analytics-devops",
    icon: BarChart3,
    desc: "Big data, DevOps, AWS, Azure & GCP",
  },
  {
    title: "Software Testing",
    href: "/services/software-testing",
    icon: Bug,
    desc: "Security, automated & accessibility QA",
  },
  {
    title: "Startup Consulting",
    href: "/services/startup-consulting",
    icon: Rocket,
    desc: "AI/ML, RPA, IoT & VR/AR",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

type TechHighlight = {
  label: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
};

const techHighlights: TechHighlight[] = [
  {
    label: "React",
    Icon: SiReact,
    color: "#61DAFB",
  },
  {
    label: "Next.js",
    Icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    label: "Node.js",
    Icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    label: "AWS",
    Icon: FaAws,
    color: "#FF9900",
  },
  {
    label: "AI",
    Icon: Sparkles,
    color: "#A78BFA",
  },
  {
    label: "eCommerce",
    Icon: ShoppingCart,
    color: "#22C55E",
  },
];

const technologiesMenu = [
  {
    title: "Backend",
    href: "/technologies/backend",
    icon: Server,
    items: ["PHP", "Laravel", ".NET", "Python", "Java", "Node.js"],
  },
  {
    title: "Frontend",
    href: "/technologies/frontend",
    icon: Layers,
    items: ["React", "Angular", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Mobile",
    href: "/technologies/mobile",
    icon: Smartphone,
    items: ["Android", "iOS", "Flutter", "Kotlin"],
  },
  {
    title: "CMS",
    href: "/technologies/cms",
    icon: FileText,
    items: ["WordPress", "Drupal", "Sitecore", "Joomla"],
  },
  {
    title: "eCommerce",
    href: "/technologies/ecommerce",
    icon: ShoppingBag,
    items: ["Magento", "Shopify", "WooCommerce"],
  },
  {
    title: "Full Stack",
    href: "/technologies/full-stack",
    icon: Layers,
    items: ["MEAN", "MERN", "Angular", "React"],
  },
  {
    title: "Cloud & DevOps",
    href: "/technologies/cloud-devops",
    icon: Cloud,
    items: ["AWS", "Azure", "Google Cloud", "Docker"],
  },
  {
    title: "Databases",
    href: "/technologies/databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industriesMenu = industriesMeta.map((i) => ({
  title: i.name,
  href: i.href ?? `/industries/${i.slug}`,
}));

/* =========================================================
   COMPANY
========================================================= */

const companyMenu = [
  {
    title: "Overview",
    href: "/about",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Clients & Testimonials",
    href: "/testimonials",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "AI",
    key: "ai",
  },
  {
    label: "Services",
    key: "services",
  },
  {
    label: "Technologies",
    key: "technologies",
  },
  {
    label: "Industries",
    key: "industries",
  },
  {
    label: "Company",
    key: "company",
  },
] as const;

/* =========================================================
   ROTATING ANNOUNCEMENTS
========================================================= */

const announcementMessages = [
  {
    icon: "✦",
    text: "Building digital products that move businesses forward",
  },
  {
    icon: "⚡",
    text: "Full-stack Web • Mobile • AI • eCommerce",
  },
  {
    icon: "◈",
    text: "6 core services, 35+ technologies, 9 industries served",
  },
  {
    icon: "◆",
    text: "Noida, India • Serving businesses worldwide",
  },
  {
    icon: "↗",
    text: "Have a project in mind? Let's build it together",
  },
];

/* =========================================================
   HEADER
========================================================= */

export function Header() {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const [mobileAiGroup, setMobileAiGroup] = useState<string | null>(null);

  const [activeAiGroup, setActiveAiGroup] = useState<string>(aiMenu[0].id);

  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

 

  /* =======================================================
     ANNOUNCEMENT ROTATION
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(
        (current) => (current + 1) % announcementMessages.length,
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =======================================================
     DROPDOWN
  ======================================================= */

  function openWithDelay(key: string) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setOpenMenu(key);
  }

  function closeWithDelay() {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setActiveAiGroup(aiMenu[0].id);
    }, 150);
  }

  const activeGroup = aiMenu.find((group) => group.id === activeAiGroup) ?? aiMenu[0];
  const ActiveGroupIcon = activeGroup.icon;

  return (
    <header
      className={["guru-header", scrolled ? "guru-header-scrolled" : ""].join(
        " ",
      )}
    >
      {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

      {/* =====================================================
    PREMIUM TECHNOLOGY ANNOUNCEMENT BAR
===================================================== */}

      <div className="guru-announcement-bar">
        {/* Ambient glow layers */}
        <div className="guru-announcement-glow guru-glow-left" />
        <div className="guru-announcement-glow guru-glow-center" />
        <div className="guru-announcement-glow guru-glow-right" />

        {/* animated top line */}
        <div className="guru-announcement-light-line" />

        <div className="guru-announcement-inner">
          {/* ==========================================
        LEFT — ROTATING MESSAGE
    ========================================== */}

          <div key={announcementIndex} className="guru-announcement-message">
            <span className="guru-announcement-message-icon">
              {announcementMessages[announcementIndex].icon}
            </span>

            <span className="guru-announcement-message-text">
              {announcementMessages[announcementIndex].text}
            </span>
          </div>

          {/* ==========================================
        CENTER — TECHNOLOGY TICKER
    ========================================== */}

          <div className="guru-tech-ticker">
            <div className="guru-tech-ticker-track">
              {[...techHighlights, ...techHighlights].map((tech, index) => {
                const Icon = tech.Icon;

                return (
                  <span
                    key={`${tech.label}-${index}`}
                    className="guru-tech-pill"
                  >
                    <span className="guru-tech-icon">
                      <Icon
                        className="guru-tech-svg"
                        style={{
                          color: tech.color,
                        }}
                      />
                    </span>

                    <span className="guru-tech-name">{tech.label}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* ==========================================
        RIGHT — LIVE STATUS
    ========================================== */}

          <div className="guru-announcement-status">
            <span className="guru-live-indicator">
              <span className="guru-live-dot" />
              <span className="guru-live-ring" />
            </span>

            <span className="guru-status-text">Available for new projects</span>

            <span className="guru-announcement-divider" />

            <Link href="/contact" className="guru-announcement-cta">
              <span>{"Let's"} talk</span>

              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="guru-nav-shell">
        <div className="guru-navbar">
          {/* =================================================
              BRAND
          ================================================= */}

          <Link href="/" className="guru-brand">
            <Image
              src="/techlightz.png"
              alt="GuruOfTech"
              width={160}
              height={50}
              priority
              className="guru-brand-logo"
            />
          </Link>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <nav className="guru-desktop-navigation">
            {navItems.map((item) =>
              "href" in item ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "guru-nav-item",
                    pathname === item.href ? "guru-nav-item-active" : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="guru-nav-dropdown"
                  onMouseEnter={() => openWithDelay(item.key)}
                  onMouseLeave={closeWithDelay}
                >
                  <button
                    type="button"
                    className={[
                      "guru-nav-item",
                      "guru-nav-button",
                      openMenu === item.key ? "guru-nav-item-active" : "",
                    ].join(" ")}
                    aria-expanded={openMenu === item.key}
                  >
                    {item.label}

                    <ChevronDown
                      className={[
                        "guru-nav-chevron",
                        openMenu === item.key ? "guru-nav-chevron-open" : "",
                      ].join(" ")}
                    />
                  </button>

                  {/* =================================================
                      DROPDOWN
                  ================================================= */}
                  {openMenu === item.key && (
                    <div
                      className={[
                        "guru-dropdown-anchor",
                        item.key === "company"
                          ? "guru-dropdown-company-anchor"
                          : "",
                        item.key === "ai" ? "guru-dropdown-ai-anchor" : "",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "guru-dropdown-panel",
                          item.key === "company" ? "guru-dropdown-company" : "",
                          item.key === "ai" ? "guru-dropdown-ai" : "",
                        ].join(" ")}
                      >
                        {/* ==============================
                            AI — full service line-up,
                            grouped into five columns so
                            30+ services stay scannable.
                        ============================== */}

                        {item.key === "ai" && (
                          <>
                            <div className="guru-dropdown-top">
                              <div>
                                <strong>AI Services</strong>
                              </div>
                            </div>
                            <div className="guru-ai-menu-split">
                              <div
                                className="guru-ai-menu-tabs"
                                role="tablist"
                                aria-orientation="vertical"
                                aria-label="AI service categories"
                              >
                                {aiMenu.map((group) => {
                                  const GroupIcon = group.icon;
                                  const isActive = group.id === activeGroup.id;

                                  return (
                                    <button
                                      key={group.id}
                                      type="button"
                                      role="tab"
                                      id={`ai-tab-${group.id}`}
                                      aria-selected={isActive}
                                      aria-controls="ai-menu-panel"
                                      onClick={() => setActiveAiGroup(group.id)}
                                      className={[
                                        "guru-ai-menu-tab",
                                        isActive ? "guru-ai-menu-tab-active" : "",
                                      ].join(" ")}
                                    >
                                      <span
                                        className="guru-ai-menu-category-icon"
                                        style={{ "--c": group.color } as React.CSSProperties}
                                      >
                                        <GroupIcon className="h-3.5 w-3.5" />
                                      </span>

                                      <span className="guru-ai-menu-tab-title">
                                        {group.title}
                                      </span>

                                      <ChevronRight className="guru-ai-menu-tab-chevron" />
                                    </button>
                                  );
                                })}
                              </div>

                              <div
                                key={activeGroup.id}
                                id="ai-menu-panel"
                                role="tabpanel"
                                aria-labelledby={`ai-tab-${activeGroup.id}`}
                                className="guru-ai-menu-detail"
                              >
                                <div className="guru-ai-menu-detail-head">
                                  <span
                                    className="guru-ai-menu-category-icon"
                                    style={{ "--c": activeGroup.color } as React.CSSProperties}
                                  >
                                    <ActiveGroupIcon className="h-3.5 w-3.5" />
                                  </span>

                                  <strong>{activeGroup.title}</strong>

                                  <small>{activeGroup.items.length} services</small>
                                </div>

                                <div className="guru-ai-menu-list">
                                  {activeGroup.items.map((service) => (
                                    <Link
                                      key={service.title}
                                      href={service.href}
                                      className="guru-ai-menu-link"
                                      onClick={() => {
                                        setOpenMenu(null);
                                        setMobileOpen(false);
                                      }}
                                      style={{ "--c": activeGroup.color } as React.CSSProperties}
                                    >
                                      <span className="guru-ai-menu-dot" />

                                      <span>{service.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <Link href="/ai" className="guru-dropdown-footer">
                              Explore all AI capabilities
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </>
                        )}

                        {/* ==============================
                            SERVICES
                        ============================== */}

                        {item.key === "services" && (
                          <>
                            <div className="guru-dropdown-top">
                              <div>
                                <span>WHAT WE BUILD</span>

                                <strong>Services</strong>
                              </div>

                              <span className="guru-dropdown-number">01</span>
                            </div>

                            <div className="guru-dropdown-grid">
                              {servicesMenu.map((service) => {
                                const Icon = service.icon;

                                return (
                                  <Link
                                    key={service.title}
                                    href={service.href}
                                    className="guru-dropdown-card"
                                  >
                                    <span className="guru-dropdown-card-icon">
                                      <Icon className="h-4 w-4" />
                                    </span>

                                    <span className="guru-dropdown-card-content">
                                      <strong>{service.title}</strong>

                                      <small>{service.desc}</small>
                                    </span>

                                    <ArrowUpRight className="guru-dropdown-arrow" />
                                  </Link>
                                );
                              })}
                            </div>

                            <Link
                              href="/services"
                              className="guru-dropdown-footer"
                            >
                              Explore all services
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </>
                        )}

                        {/* ==============================
                            TECHNOLOGIES
                        ============================== */}

                        {item.key === "technologies" && (
                          <>
                            <div className="guru-dropdown-top">
                              <div>
                                <span>OUR TECHNOLOGY STACK</span>

                                <strong>Technologies</strong>
                              </div>

                              <span className="guru-dropdown-number">02</span>
                            </div>

                            <div className="guru-dropdown-grid">
                              {technologiesMenu.map((technology) => {
                                const Icon = technology.icon;

                                return (
                                  <Link
                                    key={technology.title}
                                    href={technology.href}
                                    className="guru-dropdown-card"
                                  >
                                    <span className="guru-dropdown-card-icon">
                                      <Icon className="h-4 w-4" />
                                    </span>

                                    <span className="guru-dropdown-card-content">
                                      <strong>{technology.title}</strong>

                                      <small>
                                        {technology.items.join(" · ")}
                                      </small>
                                    </span>

                                    <ArrowUpRight className="guru-dropdown-arrow" />
                                  </Link>
                                );
                              })}
                            </div>

                            <Link
                              href="/technologies"
                              className="guru-dropdown-footer"
                            >
                              Explore all technologies
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </>
                        )}

                        {/* ==============================
                            INDUSTRIES
                        ============================== */}

                        {item.key === "industries" && (
                          <>
                            <div className="guru-dropdown-top">
                              <div>
                                <span>WHO WE SERVE</span>

                                <strong>Industries</strong>
                              </div>

                              <span className="guru-dropdown-number">03</span>
                            </div>

                            <div className="guru-industry-grid">
                              {industriesMenu.map((industry) => (
                                <Link
                                  key={industry.title}
                                  href={industry.href}
                                  className="guru-industry-item"
                                >
                                  <span />

                                  {industry.title}

                                  <ArrowUpRight className="guru-industry-arrow" />
                                </Link>
                              ))}
                            </div>

                            <Link
                              href="/industries"
                              className="guru-dropdown-footer"
                            >
                              Explore all industries
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </>
                        )}

                        {/* ==============================
                            COMPANY
                        ============================== */}

                        {item.key === "company" && (
                          <>
                            <div className="guru-dropdown-top">
                              <div>
                                <span>GET TO KNOW US</span>

                                <strong>Company</strong>
                              </div>

                              <span className="guru-dropdown-number">04</span>
                            </div>

                            <div className="guru-company-list">
                              {companyMenu.map((company) => (
                                <Link
                                  key={company.title}
                                  href={company.href}
                                  className="guru-company-item"
                                >
                                  <span>{company.title}</span>

                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ),
            )}
          </nav>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="guru-nav-actions">
            <ThemeToggle />

            <Link href="/contact" className="guru-header-button group">
              <span>Get in touch</span>

              <span className="guru-header-button-icon">
                <ArrowUpRight
                  className="
                    h-4 w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================= */}

          <div className="guru-mobile-actions">
            <ThemeToggle />

            <Link href="/contact" className="guru-mobile-header-cta group">
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((value) => !value)}
              className="guru-mobile-menu-button"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileOpen && (
        <div className="guru-mobile-panel">
          <nav>
            <Link href="/" className="guru-mobile-link">
              Home
            </Link>

            <MobileSection
              label="AI"
              open={mobileSection === "ai"}
              onToggle={() =>
                setMobileSection((value) => (value === "ai" ? null : "ai"))
              }
            >
              {aiMenu.map((group) => (
                <div key={group.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileAiGroup((value) =>
                        value === group.id ? null : group.id,
                      )
                    }
                    className="guru-mobile-ai-group-button"
                  >
                    <span>{group.title}</span>

                    <ChevronDown
                      className={[
                        "h-3.5 w-3.5 transition-transform",
                        mobileAiGroup === group.id ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>

                  {mobileAiGroup === group.id && (
                    <div className="guru-mobile-ai-group-list">
                      {group.items.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="guru-mobile-sub-link"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link href="/ai" className="guru-mobile-all-link">
                Explore all AI capabilities →
              </Link>
            </MobileSection>

            <MobileSection
              label="Services"
              open={mobileSection === "services"}
              onToggle={() =>
                setMobileSection((value) =>
                  value === "services" ? null : "services",
                )
              }
            >
              {servicesMenu.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="guru-mobile-sub-link"
                >
                  {service.title}
                </Link>
              ))}

              <Link href="/services" className="guru-mobile-all-link">
                Explore all services →
              </Link>
            </MobileSection>

            <MobileSection
              label="Technologies"
              open={mobileSection === "technologies"}
              onToggle={() =>
                setMobileSection((value) =>
                  value === "technologies" ? null : "technologies",
                )
              }
            >
              {technologiesMenu.map((technology) => (
                <Link
                  key={technology.title}
                  href={technology.href}
                  className="guru-mobile-sub-link"
                >
                  {technology.title}
                </Link>
              ))}

              <Link href="/technologies" className="guru-mobile-all-link">
                Explore all technologies →
              </Link>
            </MobileSection>

            <MobileSection
              label="Industries"
              open={mobileSection === "industries"}
              onToggle={() =>
                setMobileSection((value) =>
                  value === "industries" ? null : "industries",
                )
              }
            >
              {industriesMenu.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  onClick={() => setMobileOpen(false)}
                  className="guru-mobile-sub-link"
                >
                  {industry.title}
                </Link>
              ))}

              <Link href="/industries" className="guru-mobile-all-link">
                Explore all industries →
              </Link>
            </MobileSection>

            <MobileSection
              label="Company"
              open={mobileSection === "company"}
              onToggle={() =>
                setMobileSection((value) =>
                  value === "company" ? null : "company",
                )
              }
            >
              {companyMenu.map((company) => (
                <Link
                  key={company.title}
                  href={company.href}
                  className="guru-mobile-sub-link"
                >
                  {company.title}
                </Link>
              ))}
            </MobileSection>

            <Link href="/contact" className="guru-mobile-cta">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   MOBILE SECTION
========================================================= */

function MobileSection({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="guru-mobile-section-button"
      >
        <span>{label}</span>

        <ChevronDown
          className={[
            "h-4 w-4 transition-transform",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open && <div className="guru-mobile-submenu">{children}</div>}
    </div>
  );
}
