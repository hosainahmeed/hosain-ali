import Avatar from "./hero-cards/Avatar"
import ClickToAction from "./hero-cards/ClickToAction"
import Description from "./hero-cards/Description"
import MainInfoCard from "./hero-cards/MainInfoCard"
import Skills from "./hero-cards/Skills"
import Social from "./hero-cards/Social"
import Stats from "./hero-cards/Stats"
import { useGetHeroDataQuery } from "../redux/services/heroApi"

function HeroSkeleton() {
    return (
        <div className="bento-grid">
            {/* Main Info Card Skeleton */}
            <div className="bcard card-main-info animate-pulse flex flex-col items-start justify-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="h-6 w-28 bg-purple-500/15 border border-purple-500/25 rounded-full" />
                    <div className="h-5 w-32 bg-white/5 rounded-full" />
                </div>
                <div className="w-full space-y-2 py-1">
                    <div className="h-9 w-3/4 bg-white/10 rounded-lg" />
                    <div className="h-5 w-1/2 bg-purple-400/20 rounded" />
                </div>
                <div className="h-9 w-32 bg-purple-500/20 border border-purple-500/30 rounded-xl" />
            </div>

            {/* Avatar Card Skeleton */}
            <div className="bcard card-avatar animate-pulse relative overflow-hidden bg-white/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-purple-500/15 border border-purple-500/20" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 h-3 w-20 bg-purple-400/20 rounded" />
            </div>

            {/* Description Card Skeleton */}
            <div className="bcard card-desc animate-pulse flex flex-col justify-center gap-2.5">
                <div className="h-4 w-full bg-white/10 rounded" />
                <div className="h-4 w-11/12 bg-white/10 rounded" />
                <div className="h-4 w-2/3 bg-white/10 rounded" />
            </div>

            {/* Stats Card Skeleton */}
            <div className="bcard card-stats animate-pulse">
                <div className="stats-logo stats-cell flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/15" />
                </div>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="stats-cell flex flex-col items-center justify-center">
                        <div className="h-7 w-12 bg-purple-400/25 rounded mb-1" />
                        <div className="h-3 w-16 bg-white/10 rounded" />
                    </div>
                ))}
            </div>

            {/* Skills Card Skeleton */}
            <div className="bcard card-skills animate-pulse flex flex-col justify-center gap-3">
                <div className="h-3 w-20 bg-white/10 rounded" />
                <div className="flex gap-2 overflow-hidden py-1">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-6 w-16 bg-purple-500/10 border border-purple-500/20 rounded-full flex-shrink-0" />
                    ))}
                </div>
                <div className="flex gap-2 overflow-hidden py-1">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-6 w-16 bg-white/5 border border-white/10 rounded-full flex-shrink-0" />
                    ))}
                </div>
            </div>

            {/* Social Card Skeleton */}
            <div className="bcard card-social animate-pulse">
                <div className="social-row">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="social-btn flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-purple-400/20 flex-shrink-0" />
                            <div className="space-y-1.5 flex-1 min-w-0">
                                <div className="h-3 w-14 bg-white/10 rounded" />
                                <div className="h-2.5 w-20 bg-white/5 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ClickToAction Card Skeleton */}
            <div className="bcard card-cta animate-pulse flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-400/20 flex-shrink-0" />
                <div className="flex-1 min-w-0 space-y-2">
                    <div className="h-4 w-32 bg-purple-400/25 rounded" />
                    <div className="h-3 w-40 bg-purple-400/15 rounded" />
                </div>
            </div>
        </div>
    );
}

function HeroSection() {
    const { data, isLoading } = useGetHeroDataQuery();
    const heroData = data?.data;

    if (isLoading) {
        return <HeroSkeleton />;
    }

    return (
        <div className="bento-grid">
            <MainInfoCard
                availabilityStatus={heroData?.availabilityStatus}
                location={heroData?.location}
                name={heroData?.name}
                tagline={heroData?.tagline}
                cvUrl={heroData?.cvUrl}
            />
            <Avatar
                avatarUrl={heroData?.avatarUrl}
                name={heroData?.name}
            />
            <Description
                welcomeMessage={heroData?.welcomeMessage}
            />
            <Stats
                stats={heroData?.stats}
            />
            <Skills
                featuredTechStack={heroData?.featuredTechStack}
            />
            <Social
                socialLinks={heroData?.socialLinks}
            />
            <ClickToAction
                ctaText={heroData?.ctaText}
            />
        </div>
    )
}

export default HeroSection