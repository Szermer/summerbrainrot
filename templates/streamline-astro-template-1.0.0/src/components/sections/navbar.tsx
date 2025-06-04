import React, { useState, useEffect } from "react";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../elements/theme-toggle";

export const Navbar = ({ currentPage }: { currentPage: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = currentPage;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const ITEMS = [
    {
      label: "Product",
      href: "#product",
      dropdownItems: [
        {
          title: "Feature1",
          href: "/#feature1",
          description:
            "Streamline is built on the habits that make the best product teams successful",
        },
        {
          title: "Feature2",
          href: "/#feature2",
          description: "Streamline your resource allocation and execution",
        },
        {
          title: "Feature3",
          href: "/#feature3",
          description: "Streamline your feature development",
        },
      ],
    },
    { label: "About us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const bgColor =
    pathname === "/about"
      ? "bg-mint-50"
      : ["/", "/faq", "/signup", "/login"].includes(pathname)
        ? "bg-sand-100"
        : "bg-background";

  return (
    <header className={cn("relative z-50", bgColor)}>
      <div className="max-w-9xl container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/layout/logo.svg"
              alt="logo"
              width={129}
              height={32}
              className="dark:invert"
            />
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden items-center gap-8 lg:flex">
            <NavigationMenuList>
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className="text-primary bg-transparent font-normal lg:text-base">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-hidden flex select-none items-center rounded-md p-3 leading-none no-underline transition-colors"
                              >
                                <div className="space-y-1.5">
                                  <div className="text-sm font-medium leading-none">
                                    {item.title}
                                  </div>
                                  <p className="text-muted-foreground line-clamp-2 text-sm leading-tight">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-primary p-2 lg:text-base",
                        pathname === link.href && "text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2.5">
            <a href="/signup" className="hidden lg:block">
              <Button variant="ghost" className="text-muted-foreground">
                Sign up
              </Button>
            </a>
            <a
              href="/login"
              className={`transition-opacity duration-300 ${isMenuOpen ? "max-lg:pointer-events-none max-lg:opacity-0" : "opacity-100"}`}
            >
              <Button variant="outline">Login</Button>
            </a>
            <div
              className={`transition-opacity duration-300 ${isMenuOpen ? "max-lg:pointer-events-none max-lg:opacity-0" : "opacity-100"}`}
            >
              <ThemeToggle />
            </div>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="text-muted-foreground relative flex size-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "container absolute inset-0 top-full flex h-[calc(100vh-64px)] flex-col transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0",
          bgColor,
        )}
      >
        <div className="mt-8 space-y-2">
          <a
            href="/signup"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="sm" className="w-full">
              Sign up
            </Button>
          </a>
          <a
            href="/login"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="sm" className="w-full" variant="outline">
              Login
            </Button>
          </a>
        </div>
        <nav className="mt-3 flex flex-1 flex-col gap-6">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="text-primary flex w-full items-center justify-between text-lg tracking-[-0.36px]"
                  aria-label={`${link.label} menu`}
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={cn(
                    "ml-4 space-y-3 overflow-hidden transition-all",
                    openDropdown === link.label
                      ? "mt-3 max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  {link.dropdownItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="hover:bg-accent flex items-start gap-3 rounded-md p-2"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      <div>
                        <div className="text-primary font-medium">
                          {item.title}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-primary text-lg tracking-[-0.36px]",
                  pathname === link.href && "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
};
