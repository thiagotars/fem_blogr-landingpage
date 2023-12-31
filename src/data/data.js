import { v4 as uuidv4 } from "uuid";

export const linksData = [
  {
    id: uuidv4(),
    title: "Product",
    link: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    id: uuidv4(),
    title: "Company",
    link: ["About", "Team", "Blog", "Careers"],
  },
  {
    id: uuidv4(),
    title: "Connect",
    link: ["Contact", "Newsletter", "LinkedIn"],
  },
];
