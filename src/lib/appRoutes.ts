import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const appNavigate = (navigate: AppRouterInstance, route: string) => {
  switch (route) {
    case "Our Story":
      setTimeout(() => {
        navigate.push("/our-story");
      }, 300);
      break;
    case "Our Mission & Vision":
      setTimeout(() => {
        navigate.push("/our-mission-and-vision");
      }, 300);
      break;
    case "Team":
      setTimeout(() => {
        navigate.push("/team");
      }, 300);
      break;
    case "Careers":
      setTimeout(() => {
        navigate.push("/careers");
      }, 300);
      break;
    case "Contact Us":
      setTimeout(() => {
        navigate.push("/contact-us");
      }, 300);
      break;
    case "Product":
    case "Pricing":
      setTimeout(() => {
        navigate.push("/" + route.toLowerCase());
      }, 300);
      break;
    case "Roster Management":
      setTimeout(() => {
        navigate.push("/product/roster-manager");
      }, 300);
      break;
    case "Timesheet":
      setTimeout(() => {
        navigate.push("/product/timesheet");
      }, 300);
      break;
    case "Admin Console":
      setTimeout(() => {
        navigate.push("/product/admin-console");
      }, 300);
      break;
    case "Access Control Panel":
      setTimeout(() => {
        navigate.push("/product/access-control-panel");
      }, 300);
      break;
    case "HR Operations":
      setTimeout(() => {
        navigate.push("/product/hr-operations");
      }, 300);
      break;
    case "T-sign":
      setTimeout(() => {
        navigate.push("/product/t-sign");
      }, 300);
      break;
    case "Clock In & Clock Out":
      setTimeout(() => {
        navigate.push("/product/clock-in-and-clock-out");
      }, 300);
      break;
    case "Participant Management":
      setTimeout(() => {
        navigate.push("/product/participant-management");
      }, 300);
      break;
    case "Repository":
      setTimeout(() => {
        navigate.push("/product/ripository");
      }, 300);
      break;
    case "Role based Dashboard":
      setTimeout(() => {
        navigate.push("/product/role-based-dashboard");
      }, 300);
      break;
    case "My Profile":
      setTimeout(() => {
        navigate.push("/product/my-profile");
      }, 300);
      break;
    case "Forms":
      setTimeout(() => {
        navigate.push("/product/forms");
      }, 300);
      break;
    case "Accounting":
      setTimeout(() => {
        navigate.push("/product/accounting");
      }, 300);
      break;
    case "T Learning Hub":
      setTimeout(() => {
        navigate.push("/product/t-learning-hub");
      }, 300);
      break;
    case "ChaT":
      setTimeout(() => {
        navigate.push("/product/chat");
      }, 300);
      break;
    case "Incident Management":
      setTimeout(() => {
        navigate.push("/product/incident-management");
      }, 300);
      break;
    case "NDIS Industry":
      setTimeout(() => {
        navigate.push("/industry/ndis");
      }, 300);
      break;
    case "ICT Industry":
      setTimeout(() => {
        navigate.push("/industry/ict");
      }, 300);
      break;
    case "Administrator":
      setTimeout(() => {
        navigate.push("/role/administrator");
      }, 300);
      break;
    case "Roster Manager":
      setTimeout(() => {
        navigate.push("/role/roster-manager");
      }, 300);
      break;
    case "NDIS Staff":
      setTimeout(() => {
        navigate.push("/role/ndis-staff");
      }, 300);
      break;
    case "HR Manager":
      setTimeout(() => {
        navigate.push("/role/hr-manager");
      }, 300);
      break;
    case "Accountant":
      setTimeout(() => {
        navigate.push("/role/accountant");
      }, 300);
      break;
    case "Participant":
      setTimeout(() => {
        navigate.push("/role/participant");
      }, 300);
      break;
    case "Blog":
      setTimeout(() => {
        navigate.push("/blog");
      }, 300);
      break;
    case "Whitepapers":
      setTimeout(() => {
        navigate.push("/whitepapers");
      }, 300);
      break;
    case "FAQs":
      setTimeout(() => {
        navigate.push("/faq");
      }, 300);
      break;
    case "Book a Demo":
      setTimeout(() => {
        navigate.push("/book-demo");
      }, 300);
      break;
    case "Talk to an expert":
      setTimeout(() => {
        navigate.push("/talk-to-expert");
      }, 300);
      break;

    case "Privacy Policy":
      setTimeout(() => {
        navigate.push("/privacy-policy");
      }, 300);
      break;
    case "Terms & Conditions":
      setTimeout(() => {
        navigate.push("/terms-and-conditions");
      }, 300);
      break;
    default:
      setTimeout(() => {
        navigate.push("/coming-soon");
      }, 300);
      break;
  }
};
export const PATH_SECTION_MAP: Record<string, string> = {
  // About
  "our-story": "About",
  "our-mission": "About",
  "our-vision": "About",
  team: "About",
  careers: "About",
  "contact-information": "About",

  // Product
  // product: "Product",
  "roster-management": "Product",
  "clock-in-and-clock-out": "Product",
  forms: "Product",
  timesheet: "Product",
  "participant-management": "Product",
  accounting: "Product",
  "admin-console": "Product",
  "incident-management": "Product",
  "t-learning-hub": "Product",
  "access-control-panel": "Product",
  chat: "Product",
  "hr-operations": "Product",
  "role-based-dashboard": "Product",
  "t-sign": "Product",
  "my-profile": "Product",

  // Solutions
  "ndis-industry": "Solutions",
  "ict-industry": "Solutions",
  administrator: "Solutions",
  "roster-manager": "Solutions",
  "ndis-staff": "Solutions",
  "hr-manager": "Solutions",
  accountant: "Solutions",
  participant: "Solutions",

  // Pricing
  pricing: "Pricing",

  // Resources
  blogs: "Resources",
  faq: "Resources",

  // Additional Features
  requestDemo: "Additional Features",
};
export const ROUTE_MAP: Record<string, string> = {
  "Our Story": "/our-story",
  "Our Mission & Vision": "/our-mission-and-vision",
  Team: "/team",
  Careers: "/careers",
  "Contact Us": "/contact-us",
  Product: "/product",
  Pricing: "/pricing",
  "Roster Management": "/product/roster-manager",
  Timesheet: "/product/timesheet",
  "Admin Console": "/product/admin-console",
  "Access Control Panel": "/product/access-control-panel",
  "HR Operations": "/product/hr-operations",
  "T-sign": "/product/t-sign",
  "Clock In & Clock Out": "/product/clock-in-and-clock-out",
  "Participant Management": "/product/participant-management",
  Repository: "/product/ripository",
  "Role based Dashboard": "/product/role-based-dashboard",
  "My Profile": "/product/my-profile",
  Forms: "/product/forms",
  Accounting: "/product/accounting",
  "T Learning Hub": "/product/t-learning-hub",
  ChaT: "/product/chat",
  "Incident Management": "/product/incident-management",
  "NDIS Industry": "/industry/ndis",
  "ICT Industry": "/industry/ict",
  Administrator: "/role/administrator",
  "Roster Manager": "/role/roster-manager",
  "NDIS Staff": "/role/ndis-staff",
  "HR Manager": "/role/hr-manager",
  Accountant: "/role/accountant",
  Participant: "/role/participant",
  Blog: "/blog",
  Whitepapers: "/whitepapers",
  FAQs: "/faq",
  "Book a Demo": "/book-demo",
  "Talk to an expert": "/talk-to-expert",
  "Privacy Policy": "/privacy-policy",
  "Terms & Conditions": "/terms-and-conditions",
  facebook: "https://www.facebook.com/people/TesseractApps/61573872703468/",
  instagram: "https://www.instagram.com/tesseract_apps",
  linkedin: "https://www.linkedin.com/company/tesseractapps",
  youtube: "https://www.youtube.com/@TesseractApps",
};
export const getRoute = (key: string): string => {
  return ROUTE_MAP[key] || "/coming-soon";
};
