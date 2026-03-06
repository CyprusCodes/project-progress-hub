import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, CalendarCheck, Building2, Loader2 } from "lucide-react";
import { getOptimizedImageUrl } from "@/lib/imageUtils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import MonthlyProgressItem from "@/components/MonthlyProgressItem";
import { LogGroup } from "@/data/projects";
import { fetchLogGroupBySlug } from "@/lib/api";
import { translateDateString } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const LogGroupDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language, t } = useLanguage();
    const [logGroup, setLogGroup] = useState<LogGroup | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLogGroup = async () => {
            if (!slug) return;
            try {
                const data = await fetchLogGroupBySlug(slug);
                setLogGroup(data);
            } catch (error) {
                console.error("Error loading log group:", error);
            } finally {
                setLoading(false);
            }
        };
        loadLogGroup();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!logGroup) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">{t("projectNotFound")}</h1>
                    <Link to="/" className="text-primary hover:underline">
                        {t("goHome")}
                    </Link>
                </div>
            </div>
        );
    }

    const description = language === "en"
        ? logGroup.descriptionEn
        : logGroup.descriptionTr;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src={getOptimizedImageUrl(logGroup.heroImage || logGroup.bannerUrl || "", "hero")}
                    alt={logGroup.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 pb-12">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>{t("allProjects")}</span>
                        </Link>

                        <div>
                            {logGroup.location && (
                                <a
                                    href={logGroup.location}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-primary-foreground mb-4 bg-primary/80 hover:bg-primary transition-colors"
                                >
                                    <MapPin className="w-4 h-4" />
                                    {t("viewLocation")}
                                </a>
                            )}
                            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                                {logGroup.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 -mt-6 relative z-10">
                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {logGroup.location && (
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{t("location")}</p>
                                    <a
                                        href={logGroup.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        {t("viewOnMap")}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {logGroup.startDate && (
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{t("startDate")}</p>
                                    <p className="font-semibold text-foreground">{translateDateString(logGroup.startDate!, language)}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {logGroup.finishDate && (
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <CalendarCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{t("estimatedEnd")}</p>
                                    <p className="font-semibold text-foreground">{translateDateString(logGroup.finishDate!, language)}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>



                {/* Latest Update Banner */}
                {logGroup.latestUpdate && (
                    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 md:p-8 mb-12 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-1">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    {t("liveUpdate")}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                                    {t("lastUpdateLabel")}: {translateDateString(logGroup.latestUpdate, language)}
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 text-primary-foreground/80">
                                <Building2 className="w-5 h-5" />
                                <span>{logGroup.monthlyProgress.length} {t("monthlyRecords")}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Gallery Section */}
                {logGroup.gallery && logGroup.gallery.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                            {t("currentPhotos")}
                        </h2>
                        <ImageSlider images={logGroup.gallery} />
                    </section>
                )}

                {/* About Section */}
                {description && (
                    <section className="mb-16">
                        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                                {t("aboutProject")}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                {description}
                            </p>
                            <div className="mt-8 pt-8 border-t border-border">
                                <p className="text-muted-foreground">
                                    {t("moreInfo")}{" "}
                                    <a href="mailto:info@noyanlar.com" className="text-primary font-medium hover:underline">
                                        info@noyanlar.com
                                    </a>{" "}
                                    {t("contactEmail")}
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Monthly Progress Section */}
                {logGroup.monthlyProgress && logGroup.monthlyProgress.length > 0 && (
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {t("progressHistory")}
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                {t("progressHistoryDesc")}
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {logGroup.monthlyProgress.map((progress, index) => (
                                <MonthlyProgressItem
                                    key={`${progress.month}-${progress.year}-${index}`}
                                    progress={progress}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default LogGroupDetail;
