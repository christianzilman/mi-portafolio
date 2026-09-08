import { christianZilmanCv } from "@/assets";
import type { Profile, SocialLink } from "./types";

export const profile: Profile = {
  name: "Christian Julio C. Zilman",
  role: "Senior Full Stack .NET Software Engineer",
  location: "San Miguel de Tucumán, Argentina",
  email: "christianzilman@gmail.com",
  phone: "381-6463461",
  cvFile: christianZilmanCv,
  summary:
    "Ingeniero en Sistemas de Información con más de 12 años de experiencia en desarrollo de software. Me especializo en backend con .NET / C#, microservicios y sistemas distribuidos de alta concurrencia, con experiencia Full Stack en React e infraestructura cloud sobre AWS para los sectores FinTech y TravelTech.",
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/christian-zilman-4187aa47",
    handle: "in/christian-zilman-4187aa47",
  },
  {
    label: "Email",
    href: "mailto:christianzilman@gmail.com",
    handle: "christianzilman@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/christianzilman",
    handle: "@christianzilman",
  },
];
