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

// Ocean Life image URLs organized by month
const oceanLifeImages = {
  aralik2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/12/DJI_20251105113327_0110_D-min-1024x576.jpg",
  ],
  kasim2025: [
    // Using October 2025 images for November as placeholder
  ],
  ekim2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim1-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim2-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim4-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim5-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim6-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim7-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim8-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/10/oceanekim9-1024x576.jpg",
  ],
  eylul2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul1-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul2-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul3-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul4-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul5-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul6-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul7-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul8-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/09/oceaneylul9-1024x576.jpg",
  ],
  agustos2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean1-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean2-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean3-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean4-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean5-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean6-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean7-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean8-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/08/ocean9-min-1024x576.jpg",
  ],
  temmuz2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707160941_0075_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707160949_0077_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707161012_0083_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707161050_0085_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707161122_0086_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707161129_0088_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707161137_0091_D-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/07/DJI_20250707161200_0096_D-min-1024x576.jpg",
  ],
  haziran2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/06/ocean-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/06/ocean2-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/06/ocean3-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/06/ocean4-1024x576.jpg",
  ],
  mayis2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life--1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-2-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-3-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-4-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-5-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-6-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-7-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/05/ocean-life-8-1024x576.jpg",
  ],
  nisan2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean1-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean2-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean3-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean4-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean5-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean6-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean7-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean8-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/04/ocean9-1024x576.jpg",
  ],
  mart2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-01-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-02-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-03-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-04-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-05-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-06-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-07-min-1024x576.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/03/ocean-life-04-03-2025-08-min-1024x576.jpg",
  ],
  subat2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-01-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-02-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-03-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-04-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-05-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-06-1-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/02/ocean-life-10-02-2025-07-300x169.jpg",
  ],
  ocak2025: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-01-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-02-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-03-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-04-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-05-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-06-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-07-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-08-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-09-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2025/01/ocean-life-13-01-2025-10-300x169.jpg",
  ],
  aralik2024: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-01-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-02-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-03-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-04-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-05-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-06-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-07-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-08-min-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/12/ocean-life-14-12-2024-09-min-300x169.jpg",
  ],
  kasim2024: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-01-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-02-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-03-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-04-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-05-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-06-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-07-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-08-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-09-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/11/ocean-life-11-11-2024-10-300x169.jpg",
  ],
  ekim2024: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-01-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-02-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-03-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-04-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-05-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-06-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-07-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-08-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-09-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-10-300x200.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/10/ocean-life-04-10-2024-11-300x200.jpg",
  ],
  eylul2024: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-01-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-02-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-03-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-04-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-05-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-06-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-09-2024-07-300x169.jpg",
  ],
  temmuz2024: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-01-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-02-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-03-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-04-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-05-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-06-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-07-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-08-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-09-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-10-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-11-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-07-2024-12-300x169.jpg",
  ],
  haziran2024: [
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-01-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-02-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-03-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-04-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-05-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-06-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-07-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-08-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-09-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-10-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-11-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-12-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-13-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-14-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-15-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-16-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-17-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-18-300x169.jpg",
    "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2024/09/ocean-life-06-2024-19-300x169.jpg",
  ],
  banner: "https://www.noyanlarconstructionprogress.com/wp-content/uploads/2023/12/ocean-lifew-residence-web-768x438.png",
};

export const projects: Project[] = [
  {
    id: "ocean-life",
    name: "Ocean Life Residence",
    slug: "ocean-life-residence",
    location: "İskele - Kıbrıs",
    startDate: "2023",
    endDate: "2026",
    heroImage: oceanLifeImages.banner,
    color: "hsl(200, 70%, 50%)",
    latestUpdate: "Aralık 2025",
    description: "Ocean Life Residence draws inspiration from the Mediterranean's captivating nature and deep blue waters, placing aesthetics and harmony at its core. This project reflects nature's rhythmic and balanced structure in every detail, offering modern living spaces in the most beautiful way.",
    descriptionTr: "Akdeniz'in büyüleyici doğası ve masmavi sularından ilham alan Ocean Life Residence, estetik ve uyumu merkezine alıyor. Her detayında doğanın ritmik ve dengeli yapısını yansıtan bu proje, modern yaşam alanlarını en güzel şekilde sunuyor.",
    gallery: [
      ...oceanLifeImages.aralik2025,
      ...oceanLifeImages.ekim2025.slice(0, 3),
    ],
    monthlyProgress: [
      {
        month: "Aralık",
        year: 2025,
        coverImage: oceanLifeImages.aralik2025[0],
        images: oceanLifeImages.aralik2025,
      },
      {
        month: "Ekim",
        year: 2025,
        coverImage: oceanLifeImages.ekim2025[0],
        images: oceanLifeImages.ekim2025,
      },
      {
        month: "Eylül",
        year: 2025,
        coverImage: oceanLifeImages.eylul2025[0],
        images: oceanLifeImages.eylul2025,
      },
      {
        month: "Ağustos",
        year: 2025,
        coverImage: oceanLifeImages.agustos2025[0],
        images: oceanLifeImages.agustos2025,
      },
      {
        month: "Temmuz",
        year: 2025,
        coverImage: oceanLifeImages.temmuz2025[0],
        images: oceanLifeImages.temmuz2025,
      },
      {
        month: "Haziran",
        year: 2025,
        coverImage: oceanLifeImages.haziran2025[0],
        images: oceanLifeImages.haziran2025,
      },
      {
        month: "Mayıs",
        year: 2025,
        coverImage: oceanLifeImages.mayis2025[0],
        images: oceanLifeImages.mayis2025,
      },
      {
        month: "Nisan",
        year: 2025,
        coverImage: oceanLifeImages.nisan2025[0],
        images: oceanLifeImages.nisan2025,
      },
      {
        month: "Mart",
        year: 2025,
        coverImage: oceanLifeImages.mart2025[0],
        images: oceanLifeImages.mart2025,
      },
      {
        month: "Şubat",
        year: 2025,
        coverImage: oceanLifeImages.subat2025[0],
        images: oceanLifeImages.subat2025,
      },
      {
        month: "Ocak",
        year: 2025,
        coverImage: oceanLifeImages.ocak2025[0],
        images: oceanLifeImages.ocak2025,
      },
      {
        month: "Aralık",
        year: 2024,
        coverImage: oceanLifeImages.aralik2024[0],
        images: oceanLifeImages.aralik2024,
      },
      {
        month: "Kasım",
        year: 2024,
        coverImage: oceanLifeImages.kasim2024[0],
        images: oceanLifeImages.kasim2024,
      },
      {
        month: "Ekim",
        year: 2024,
        coverImage: oceanLifeImages.ekim2024[0],
        images: oceanLifeImages.ekim2024,
      },
      {
        month: "Eylül",
        year: 2024,
        coverImage: oceanLifeImages.eylul2024[0],
        images: oceanLifeImages.eylul2024,
      },
      {
        month: "Temmuz",
        year: 2024,
        coverImage: oceanLifeImages.temmuz2024[0],
        images: oceanLifeImages.temmuz2024,
      },
      {
        month: "Haziran",
        year: 2024,
        coverImage: oceanLifeImages.haziran2024[0],
        images: oceanLifeImages.haziran2024,
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
