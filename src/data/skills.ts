import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Arquitectura",
    items: [
      "C#",
      ".NET Core / .NET 6 / .NET 8",
      ".NET Framework 4.5 / 4.8",
      "ASP.NET MVC 5 / 4",
      "Microservicios (Convey Stack)",
      "Event-Driven Architecture",
      "RabbitMQ",
      "Sistemas Distribuidos",
      "Modular Monolith",
      "REST / Minimal API",
      "WCF",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "jQuery",
      "Bootstrap 4",
      "Razor",
    ],
  },
  {
    title: "Datos & ORM",
    items: [
      "SQL Server",
      "PostgreSQL (PostGIS)",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Redis",
      "Entity Framework (EF Core)",
      "Dapper",
    ],
  },
  {
    title: "Cloud, Seguridad & DevOps",
    items: [
      "AWS (ALB, S3, Lambda, ECS, EC2)",
      "AWS Secrets Manager",
      "Docker",
      "JWT / MFA",
      "Jenkins / TeamCity",
      "Git",
      "SSH Tunneling / VPN",
    ],
  },
];
