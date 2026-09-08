import { christianZilmanCv } from "@/assets";
import type { Profile, SocialLink } from "./types";

export const profile: Profile = {
  name: "Christian Julio Zilman",
  role: "Senior Full Stack .NET Developer",
  location: "Tucumán, Argentina",
  email: "christianzilman@gmail.com",
  phone: "381-6463461",
  cvFile: christianZilmanCv,
  summary:
    "Ingeniero en Sistemas de Información con más de 12 años de experiencia en desarrollo de software, especializado en el ecosistema .NET / C#, con fuerte orientación Backend y experiencia Full Stack. Trabajo con arquitecturas de microservicios y sistemas distribuidos de alta concurrencia en los sectores FinTech y TravelTech, sobre infraestructura cloud (AWS) e integraciones con proveedores globales mediante APIs.",
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
  // PENDIENTE: el CV no incluye un perfil de GitHub.
  // Completá el href y el handle cuando lo tengas; si queda vacío se muestra como "pendiente".
  {
    label: "GitHub",
    href: "",
    handle: "",
  },
];
