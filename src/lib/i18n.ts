export type Language = "tr" | "en";

export const translations = {
    tr: {
        // Header
        projects: "Projeler",
        about: "Hakkımızda",
        contact: "İletişim",

        // Hero
        liveBadge: "Canlı İnşaat Takibi",
        heroTitle1: "İnşaat İlerlemelerinizi",
        heroTitle2: "Takip Edin",
        heroDescription:
            "Noyanlar Group of Companies olarak projelerimizin her aşamasını şeffaf bir şekilde paylaşıyoruz. Yatırımınızın gelişimini aylık güncellemelerle takip edin.",
        exploreProjects: "Projeleri İncele",
        contactUs: "Bize Ulaşın",

        // Stats
        completedProjects: "Tamamlanan Proje",
        happyCustomers: "Mutlu Müşteri",
        yearsExperience: "Yıllık Deneyim",
        ongoingProjects: "Devam Eden Proje",

        // Projects section
        activeProjects: "Aktif Projelerimiz",
        activeProjectsDesc:
            "Kıbrıs'ın en prestijli lokasyonlarında hayata geçirdiğimiz projelerimizi keşfedin",

        // CTA
        ctaTitle: "Hayalinizdeki Eve Bir Adım Daha Yaklaşın",
        ctaDescription:
            "Projelerimiz hakkında detaylı bilgi almak ve size özel fırsatlardan haberdar olmak için bizimle iletişime geçin.",
        freeCounseling: "Ücretsiz Danışmanlık Alın",

        // Footer
        allRightsReserved: "Tüm hakları saklıdır.",

        // Project Card
        lastUpdate: "Son Güncelleme",

        // Project Detail
        allProjects: "Tüm Projeler",
        location: "Konum",
        startDate: "Başlangıç",
        estimatedEnd: "Tahmini Bitiş",
        liveUpdate: "Canlı Güncelleme",
        lastUpdateLabel: "Son Güncelleme",
        monthlyRecords: "aylık ilerleme kaydı",
        currentPhotos: "Güncel Fotoğraflar",
        aboutProject: "Proje Hakkında",
        moreInfo: "Daha fazla bilgi için",
        contactEmail: "adresinden bize ulaşabilirsiniz.",
        progressHistory: "İnşaat İlerleme Geçmişi",
        progressHistoryDesc:
            "Projenin başlangıcından bu yana tüm aylık güncellemeleri görüntüleyin. Her ay için detaylı fotoğraf galerisi mevcuttur.",
        projectNotFound: "Proje bulunamadı",
        goHome: "Ana sayfaya dön",
        associatedProjects: "İlişkili Projeler",
        viewLocation: "Konumu Görüntüle",
        viewOnMap: "Haritada Görüntüle",
    },
    en: {
        // Header
        projects: "Projects",
        about: "About Us",
        contact: "Contact",

        // Hero
        liveBadge: "Live Construction Tracking",
        heroTitle1: "Track Your",
        heroTitle2: "Construction Progress",
        heroDescription:
            "At Noyanlar Group of Companies, we transparently share every stage of our projects. Follow the development of your investment with monthly updates.",
        exploreProjects: "Explore Projects",
        contactUs: "Contact Us",

        // Stats
        completedProjects: "Completed Projects",
        happyCustomers: "Happy Customers",
        yearsExperience: "Years of Experience",
        ongoingProjects: "Ongoing Projects",

        // Projects section
        activeProjects: "Our Active Projects",
        activeProjectsDesc:
            "Discover our projects in the most prestigious locations of Cyprus",

        // CTA
        ctaTitle: "One Step Closer to Your Dream Home",
        ctaDescription:
            "Contact us for detailed information about our projects and to stay informed about exclusive opportunities.",
        freeCounseling: "Get Free Counseling",

        // Footer
        allRightsReserved: "All rights reserved.",

        // Project Card
        lastUpdate: "Last Update",

        // Project Detail
        allProjects: "All Projects",
        location: "Location",
        startDate: "Start Date",
        estimatedEnd: "Estimated Completion",
        liveUpdate: "Live Update",
        lastUpdateLabel: "Last Update",
        monthlyRecords: "monthly progress records",
        currentPhotos: "Current Photos",
        aboutProject: "About the Project",
        moreInfo: "For more information,",
        contactEmail: "you can reach us at",
        progressHistory: "Construction Progress History",
        progressHistoryDesc:
            "View all monthly updates since the beginning of the project. A detailed photo gallery is available for each month.",
        projectNotFound: "Project not found",
        goHome: "Go to homepage",
        associatedProjects: "Associated Projects",
        viewLocation: "View Location",
        viewOnMap: "View on Map",
    },
};

export type TranslationKey = keyof typeof translations.tr;
