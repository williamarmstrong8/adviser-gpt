"use client";

import { BookOpen, Briefcase, Building2, Database, FileText, GraduationCap, Globe, Menu, MoreHorizontal, PlayCircle, Search, Shield, Table, TrendingUp, UserCheck, Users } from "lucide-react";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export interface NavbarProps {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: { name: string; url: string }[];
  auth?: {
    login: { text: string; url: string };
    signup: { text: string; url: string };
  };
  /** Hide search and cart; show only auth (Login + Request Demo) */
  showSearch?: boolean;
  showCart?: boolean;
}

const defaultMenu: MenuItem[] = [
  {
    title: "Products",
    url: "/products",
    items: [
      {
        title: "Vault",
        description: "Your previous RFPs and DDQs in your firm's tone",
        url: "/products#vault",
        icon: <Database className="size-5 shrink-0" />,
      },
      {
        title: "Word add-in",
        description: "Draft and refine in Word with your Vault",
        url: "/products#word",
        icon: <FileText className="size-5 shrink-0" />,
      },
      {
        title: "Excel add-in",
        description: "Keep data and narrative in sync",
        url: "/products#excel",
        icon: <Table className="size-5 shrink-0" />,
      },
      {
        title: "Web app",
        description: "Your team's AI command center",
        url: "/products#webapp",
        icon: <Globe className="size-5 shrink-0" />,
      },
    ],
  },
  {
    title: "Solutions",
    url: "/solutions",
    items: [
      {
        title: "Asset Managers",
        description: "Automate RFPs and DDQs",
        url: "/solutions/asset-managers",
        icon: <TrendingUp className="size-5 shrink-0" />,
      },
      {
        title: "Wealth Advisers",
        description: "Faster client communication",
        url: "/solutions/wealth-advisers",
        icon: <UserCheck className="size-5 shrink-0" />,
      },
      {
        title: "Client Service Teams",
        description: "Consistent, compliant answers",
        url: "/solutions/client-service-teams",
        icon: <Users className="size-5 shrink-0" />,
      },
      {
        title: "Compliance Teams",
        description: "Trust Score and audit controls",
        url: "/solutions/compliance-teams",
        icon: <Shield className="size-5 shrink-0" />,
      },
      {
        title: "RFP & DDQ Teams",
        description: "Cut turnaround time",
        url: "/solutions/rfp-teams",
        icon: <Briefcase className="size-5 shrink-0" />,
      },
      {
        title: "Outsourced CIOs",
        description: "Multi-mandate efficiency",
        url: "/solutions/outsourced-cios",
        icon: <Building2 className="size-5 shrink-0" />,
      },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    items: [
      {
        title: "Blogs",
        description: "Latest posts and insights",
        url: "/resources/blogs",
        icon: <BookOpen className="size-5 shrink-0" />,
      },
      {
        title: "Educational",
        description: "Guides and learning",
        url: "/resources/educational",
        icon: <GraduationCap className="size-5 shrink-0" />,
      },
      {
        title: "Videos",
        description: "Walkthroughs and demos",
        url: "/resources/videos",
        icon: <PlayCircle className="size-5 shrink-0" />,
      },
      {
        title: "Customers",
        description: "Success stories",
        url: "/resources/customers",
        icon: <Building2 className="size-5 shrink-0" />,
      },
      {
        title: "All resources",
        description: "Blogs, guides, and more",
        url: "/resources",
        icon: <MoreHorizontal className="size-5 shrink-0" />,
      },
    ],
  },
  { title: "Pricing", url: "/pricing" },
];

export default function Navbar({
  logo = {
    url: "/",
    alt: "AdviserGPT",
    title: "AdviserGPT",
  },
  menu = defaultMenu,
  mobileExtraLinks = [],
  auth = {
    login: { text: "Login", url: "https://app.advisergpt.ai/login" },
    signup: { text: "Request Demo", url: "/contact-sales" },
  },
  showSearch = false,
  showCart = false,
}: NavbarProps) {
  const [openSearch, setOpenSearch] = React.useState(false);

  return (
    <section className="py-4">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar — logo left, nav center, auth right */}
        <nav className="hidden lg:flex items-center justify-between relative">
          <div className="flex items-center flex-1 min-w-0">
            <Link
              href={logo.url}
              className="flex items-center gap-2 text-2xl font-bold text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" }}
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  className="h-8 w-auto"
                  alt={logo.alt}
                />
              ) : (
                logo.title
              )}
            </Link>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <NavigationMenu className="[&_[data-radix-navigation-menu-viewport]]:rounded-xl">
              <NavigationMenuList className="rounded-xl gap-1">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
            {showSearch && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenSearch(true)}
                aria-label="Search"
              >
                <Search className="size-4" />
              </Button>
            )}
            {showCart && (
              <Button variant="ghost" size="icon" aria-label="Cart">
                <span className="size-4" />
              </Button>
            )}
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <a href={auth.login.url} target="_blank" rel="noopener noreferrer">{auth.login.text}</a>
            </Button>
            <Button asChild size="sm" className="rounded-full">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href={logo.url}
              className="flex items-center gap-2 text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" }}
            >
              {logo.src ? (
                <img src={logo.src} className="h-8 w-auto" alt={logo.alt} />
              ) : (
                logo.title
              )}
            </Link>
            <div className="flex items-center gap-2">
              {showSearch && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpenSearch(true)}
                  aria-label="Search"
                >
                  <Search className="size-4" />
                </Button>
              )}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto w-[min(100vw-2rem,320px)]">
                  <SheetHeader>
                    <SheetTitle>
                      <Link
                        href={logo.url}
                        className="flex items-center gap-2 text-xl font-bold"
                        style={{ fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif" }}
                      >
                        {logo.title}
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-6 flex flex-col gap-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                    {mobileExtraLinks.length > 0 && (
                      <div className="border-t border-border py-4">
                        <div className="grid grid-cols-2 justify-start gap-2">
                          {mobileExtraLinks.map((link) => (
                            <Link
                              key={link.url}
                              href={link.url}
                              className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-3">
                      <Button asChild variant="ghost" className="rounded-full">
                        <a href={auth.login.url} target="_blank" rel="noopener noreferrer">{auth.login.text}</a>
                      </Button>
                      <Button asChild className="rounded-full">
                        <a href={auth.signup.url}>{auth.signup.text}</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {showSearch && (
        <CommandDialog open={openSearch} onOpenChange={setOpenSearch}>
          <CommandInput placeholder="Search products, blogs, resources..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Link href="/resources">Resources</Link>
              </CommandItem>
              <CommandItem>
                <Link href="/pricing">Pricing</Link>
              </CommandItem>
              <CommandItem>
                <Link href="/contact-sales">Request Demo</Link>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      )}
    </section>
  );
}

function renderMenuItem(item: MenuItem) {
  if (item.items?.length) {
    return (
      <NavigationMenuItem key={item.title} className="!rounded-xl">
        <NavigationMenuTrigger className="!rounded-xl">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl">
          <ul className="w-80 p-3">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors text-foreground hover:bg-[var(--nav-hover)] hover:text-foreground [&_.description]:text-muted-foreground hover:[&_.description]:text-muted-foreground [&_svg]:text-foreground hover:[&_svg]:text-foreground"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="description text-sm leading-snug text-muted-foreground mt-0.5">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url}
          className={cn(navigationMenuTriggerStyle(), "rounded-xl")}
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function renderMobileMenuItem(item: MenuItem) {
  if (item.items?.length) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors text-foreground hover:bg-[var(--nav-hover)] hover:text-foreground"
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="block font-semibold py-2"
    >
      {item.title}
    </Link>
  );
}
