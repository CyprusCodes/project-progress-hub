import oceanLifeHero from "@/assets/ocean-life-hero.jpg";
import oleaCyprusHero from "@/assets/olea-cyprus-hero.jpg";
import laPalazzoHero from "@/assets/la-palazzo-hero.jpg";
import constructionProgress1 from "@/assets/construction-progress-1.jpg";
import constructionProgress2 from "@/assets/construction-progress-2.jpg";
import constructionProgress3 from "@/assets/construction-progress-3.jpg";
import constructionProgress4 from "@/assets/construction-progress-4.jpg";

export interface MonthlyProgress {
  month: string;
  year: number;
  coverImage: string;
  images: string[];
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  startDate: string;
  endDate: string;
  heroImage: string;
  description: string;
  descriptionTr: string;
  color: string;
  latestUpdate: string;
  gallery: string[];
  monthlyProgress: MonthlyProgress[];
}

export const projects: Project[] = [
  {
    id: "ocean-life",
    name: "Ocean Life Residence",
    slug: "ocean-life-residence",
    location: "İskele - Kıbrıs",
    startDate: "2023",
    endDate: "2026",
    heroImage: oceanLifeHero,
    color: "hsl(200, 70%, 50%)",
    latestUpdate: "Aralık 2025",
    description: "Ocean Life Residence draws inspiration from the Mediterranean's captivating nature and deep blue waters, placing aesthetics and harmony at its core. This project reflects nature's rhythmic and balanced structure in every detail, offering modern living spaces in the most beautiful way.",
    descriptionTr: "Akdeniz'in büyüleyici doğası ve masmavi sularından ilham alan Ocean Life Residence, estetik ve uyumu merkezine alıyor. Her detayında doğanın ritmik ve dengeli yapısını yansıtan bu proje, modern yaşam alanlarını en güzel şekilde sunuyor.",
    gallery: [
      constructionProgress1,
      constructionProgress2,
      constructionProgress3,
      constructionProgress4,
    ],
    monthlyProgress: [
      {
        month: "Aralık",
        year: 2025,
        coverImage: constructionProgress1,
        images: [constructionProgress1, constructionProgress2, constructionProgress3, constructionProgress4],
      },
      {
        month: "Kasım",
        year: 2025,
        coverImage: constructionProgress2,
        images: [constructionProgress2, constructionProgress3, constructionProgress4, constructionProgress1],
      },
      {
        month: "Ekim",
        year: 2025,
        coverImage: constructionProgress3,
        images: [constructionProgress3, constructionProgress4, constructionProgress1, constructionProgress2],
      },
      {
        month: "Eylül",
        year: 2025,
        coverImage: constructionProgress4,
        images: [constructionProgress4, constructionProgress1, constructionProgress2, constructionProgress3],
      },
      {
        month: "Ağustos",
        year: 2025,
        coverImage: constructionProgress1,
        images: [constructionProgress1, constructionProgress2, constructionProgress3, constructionProgress4],
      },
    ],
  },
  {
    id: "olea-cyprus",
    name: "Olea Cyprus",
    slug: "olea-cyprus",
    location: "Lefkoşa - Kıbrıs",
    startDate: "2024",
    endDate: "2027",
    heroImage: oleaCyprusHero,
    color: "hsl(140, 50%, 40%)",
    latestUpdate: "Aralık 2025",
    description: "Olea Cyprus is an eco-friendly residential complex surrounded by olive groves and lush gardens. The project combines modern architecture with natural elements to create a harmonious living environment.",
    descriptionTr: "Olea Cyprus, zeytin ağaçları ve yemyeşil bahçelerle çevrili çevre dostu bir konut kompleksidir. Proje, modern mimariyi doğal unsurlarla birleştirerek uyumlu bir yaşam ortamı oluşturuyor.",
    gallery: [
      constructionProgress2,
      constructionProgress3,
      constructionProgress4,
      constructionProgress1,
    ],
    monthlyProgress: [
      {
        month: "Aralık",
        year: 2025,
        coverImage: constructionProgress2,
        images: [constructionProgress2, constructionProgress3, constructionProgress4, constructionProgress1],
      },
      {
        month: "Kasım",
        year: 2025,
        coverImage: constructionProgress3,
        images: [constructionProgress3, constructionProgress4, constructionProgress1, constructionProgress2],
      },
      {
        month: "Ekim",
        year: 2025,
        coverImage: constructionProgress4,
        images: [constructionProgress4, constructionProgress1, constructionProgress2, constructionProgress3],
      },
    ],
  },
  {
    id: "la-palazzo",
    name: "La Palazzo",
    slug: "la-palazzo",
    location: "Girne - Kıbrıs",
    startDate: "2024",
    endDate: "2027",
    heroImage: laPalazzoHero,
    color: "hsl(40, 50%, 55%)",
    latestUpdate: "Aralık 2025",
    description: "La Palazzo is an elegant Italian palazzo-style luxury townhouse complex featuring classical architecture with arches and columns. The Mediterranean villa design offers a sophisticated and timeless living experience.",
    descriptionTr: "La Palazzo, kemerler ve sütunlarla klasik mimariyi öne çıkaran zarif İtalyan palazzo tarzı lüks bir şehir evi kompleksidir. Akdeniz villa tasarımı, sofistike ve zamansız bir yaşam deneyimi sunuyor.",
    gallery: [
      constructionProgress3,
      constructionProgress4,
      constructionProgress1,
      constructionProgress2,
    ],
    monthlyProgress: [
      {
        month: "Aralık",
        year: 2025,
        coverImage: constructionProgress3,
        images: [constructionProgress3, constructionProgress4, constructionProgress1, constructionProgress2],
      },
      {
        month: "Kasım",
        year: 2025,
        coverImage: constructionProgress4,
        images: [constructionProgress4, constructionProgress1, constructionProgress2, constructionProgress3],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
