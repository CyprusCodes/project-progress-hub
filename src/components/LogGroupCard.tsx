import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { LogGroup } from "@/data/projects";
import { useLanguage } from "@/hooks/useLanguage";
import { translateDateString } from "@/lib/i18n";

interface LogGroupCardProps {
    logGroup: LogGroup;
    index: number;
}

const LogGroupCard = ({ logGroup, index }: LogGroupCardProps) => {
    const { language, t } = useLanguage();
    const isEven = index % 2 === 0;

    const description = language === "en"
        ? logGroup.descriptionEn
        : logGroup.descriptionTr;

    return (
        <Link
            to={`/log-group/${logGroup.slug}`}
            className="group block"
        >
            <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50`}>
                {/* Image Section */}
                <div className="relative lg:w-3/5 h-72 lg:h-[400px] overflow-hidden">
                    <img
                        src={logGroup.heroImage || logGroup.bannerUrl || ""}
                        alt={logGroup.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                    {/* Arrow indicator */}
                    <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-6 h-6 text-primary-foreground group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                    {/* Logo circle */}
                    <div
                        className="w-36 h-36 rounded-2xl flex items-center justify-center mb-6 shadow-lg overflow-hidden relative"
                        style={{ background: `linear-gradient(135deg, ${logGroup.color}, ${logGroup.color}dd)` }}
                    >
                        {logGroup.iconUrl ? (
                            <img src={logGroup.iconUrl} alt={`${logGroup.name} icon`} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-4xl font-bold text-primary-foreground">
                                {logGroup.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                            </span>
                        )}
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {logGroup.name}
                    </h2>

                    {description && (
                        <p className="text-muted-foreground mb-6 line-clamp-2">
                            {description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        {logGroup.location && (
                            <a
                                href={logGroup.location}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary hover:underline"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <MapPin className="w-4 h-4" />
                                {t("clickHere")}
                            </a>
                        )}
                        {logGroup.startDate && (
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                {translateDateString(logGroup.startDate, language)}
                            </div>
                        )}
                    </div>

                    {logGroup.latestUpdate && (
                        <div className="mt-6 pt-6 border-t border-border">
                            <span className="text-sm text-primary font-medium flex items-center gap-2">
                                {t("lastUpdate")}: {translateDateString(logGroup.latestUpdate, language)}
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default LogGroupCard;
