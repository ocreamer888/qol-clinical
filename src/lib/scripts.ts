export type Treatment = {
    id: number;
    name: string;
    icon: string;
    multiline?: boolean;
  };
  
  export type Doctor = {
    id: number;
    name: string;
    specialty: string;
    image: string;
    description: string;
  };
  
  export const treatments: Treatment[] = [
    { id: 1,  name: "Oncología",           icon: "/icons/oncology-icon.svg" },
    { id: 2,  name: "Endocronología",      icon: "/icons/endocronology-icon.svg" },
    { id: 3,  name: "Infertilidad",        icon: "/icons/infertility-icon.svg" },
    { id: 4,  name: "Salud Mental",        icon: "/icons/brain-icon.svg" },
    { id: 5,  name: "Cardiología",         icon: "/icons/cardiology-icon.svg" },
    { id: 6,  name: "Neurología",          icon: "/icons/neurology-icon.svg" },
    { id: 7,  name: "Reumatología",        icon: "/icons/rheumatology-icon.svg" },
    { id: 8,  name: "Estética",            icon: "/icons/estetica-icon.svg" },
    { id: 9,  name: "Enfermedades\nRaras", icon: "/icons/rare-diseases-icon.svg", multiline: true },
    { id: 10, name: "Surrogacy",           icon: "/icons/surrogacy-icon.svg" },
  ];
  
  export const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Javier León",
      specialty: "Director Clínico",
      image: "/photos/dr-javier-leon.png",
      description: "Farmaceútico con sólida experiencia...",
    },
  ];