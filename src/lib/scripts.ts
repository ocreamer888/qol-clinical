import type { IconName } from "@/components/icons";

export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  iconBg: string;
};

export type Treatment = {
    id: number;
    name: string;
    icon: IconName;
    iconBg: string;
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
    { id: 1,  
      name: "Oncología",           
      icon: "oncology",
      iconBg: "bg-[#f9f9f9]",
   },
    { id: 2,  
      name: "Endocronología",      
      icon: "endocrinology",
      iconBg: "bg-[#f9f9f9]", },
    { id: 3,  
      name: "Infertilidad",        
      icon: "infertility",
    iconBg: "bg-[#f9f9f9]", },
    { id: 4,  
      name: "Salud Mental",        
      icon: "brain",
    iconBg: "bg-[#f9f9f9]", },
    { id: 5,  
      name: "Cardiología",         
      icon: "cardiology",
    iconBg: "bg-[#f9f9f9]", },
    { id: 6,  
      name: "Neurología",          
      icon: "neurology",
    iconBg: "bg-[#f9f9f9]", },
    { id: 7,  
      name: "Reumatología",        
      icon: "rheumatology",
    iconBg: "bg-[#f9f9f9]", },
    { id: 8,  
      name: "Estética",            
      icon: "estetica",
    iconBg: "bg-[#f9f9f9]", },
    { id: 9,  
      name: "Enfermedades\nRaras", 
      icon: "rareDiseases",
      iconBg: "bg-[#f9f9f9]", 
      multiline: true },
    { id: 10, 
      name: "Surrogacy",           
      icon: "surrogacy",
    iconBg: "bg-[#f9f9f9]", },
  ];
  
  export const doctors: Doctor[] = [
    {
      id: 11,
      name: "Dr. Javier León",
      specialty: "Director Clínico",
      image: "/photos/dr-javier-leon.png",
      description: "Farmaceútico con sólida experiencia en gestión operativa enfocado en el sector salud y tecnología, logística de suministros, mejora de la experiencia del paciente, y operaciones de centros de servicios compartidos. Con experiencia clínica y comercial, marketing, optimización de recursos, procesos y gestión de talento. He desempeñado roles en contextos industriales y clínicos a nivel regional, con un enfoque multicultural. Todo ello orientado a la excelencia en el seguimiento farmacoterapéutico.",
    },
  ];

  export const features: Feature[] = [
    {
      id: 12,
      title: "Segunda Opinión",
      description: "Claridad sobre tu diagnóstico y tratamiento actual, con una mirada fresca e independiente",
      icon: "secondOpinion",
      iconBg: "bg-[#f9f9f9]",
    },
    {
      id: 13,
      title: "Tratamiento",
      description: "Revisión profesional de tus medicamentos para maximizar resultados y minimizar riesgos",
      icon: "treatment",
      iconBg: "bg-[#f8f8f8]",
    },
    {
      id: 14,
      title: "Teleconsulta",
      description: "Atención clínica de calidad desde tu casa, tu trabajo, donde la vida te encuentre",
      icon: "world",
      iconBg: "bg-[#f9f9f9]",
    },
  ];