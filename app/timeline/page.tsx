import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, Code, Users, Target, ExternalLink } from "lucide-react"
import lecturesData from "@/data/lectures.json"

const categoryConfig: Record<
    string,
    { icon: any; color: string; label: string }
> = {
    lecture: {
        icon: BookOpen,
        color: "bg-primary/10 text-primary border-primary/20",
        label: "Lecture",
    },
    exercise: {
        icon: Code,
        color: "bg-accent/10 text-accent border-accent/20",
        label: "Exercise",
    },
    workshop: {
        icon: Users,
        color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
        label: "Workshop",
    },
    project: {
        icon: Target,
        color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
        label: "Project",
    },
}

// Fallback for unknown/missing categories
const DEFAULT_CATEGORY = {
    icon: Calendar,
    color: "bg-muted text-foreground border-border",
    label: "Event",
}

// Safe getter for category config
function getCategory(cat?: string) {
    return (cat && categoryConfig[cat]) || DEFAULT_CATEGORY
}

// Safe date parser (returns null on invalid)
function parseISODate(d?: string | null): Date | null {
    if (!d) return null
    const t = Date.parse(d)
    return isNaN(t) ? null : new Date(t)
}

// Sort with invalid dates last
function compareDates(a: any, b: any) {
    const da = parseISODate(a.date)
    const db = parseISODate(b.date)
    const ta = da ? da.getTime() : Number.POSITIVE_INFINITY
    const tb = db ? db.getTime() : Number.POSITIVE_INFINITY
    return ta - tb
}

export default function TimelinePage() {
    const { timeline = [] } = lecturesData as { timeline: any[] }

    const sortedTimeline = [...timeline].sort(compareDates)

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />

            <main className="flex-1">
                {/* Header */}
                <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Course Timeline</h1>
                            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                                A chronological view of all lectures, assignments, workshops, and project milestones.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Legend */}
                <section className="container mx-auto px-4 pt-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center mb-8">
                            {Object.entries(categoryConfig).map(([key, cfg]) => {
                                const Icon = cfg.icon || Calendar
                                return (
                                    <Badge key={key} variant="outline" className={`${cfg.color} px-3 py-1.5`}>
                                        <Icon className="h-3.5 w-3.5 mr-1.5" />
                                        {cfg.label}
                                    </Badge>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="container mx-auto px-4 pb-12 md:pb-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                            {/* Timeline items */}
                            <div className="space-y-6">
                                {sortedTimeline.map((event, index) => {
                                    const cfg = getCategory(event?.category)
                                    const Icon = cfg.icon || Calendar
                                    const dateObj = parseISODate(event?.date)
                                    const isPast = dateObj ? dateObj < new Date() : false

                                    // First color token (e.g., "bg-primary/10") for the dot; fallback if missing
                                    const dotColor = (cfg.color?.split(" ")?.[0]) || "bg-muted-foreground"

                                    return (
                                        <div key={index} className="relative pl-20">
                                            {/* Timeline dot */}
                                            <div
                                                className={`absolute left-6 top-6 h-5 w-5 rounded-full border-4 border-background ${
                                                    isPast ? "bg-muted-foreground" : dotColor
                                                }`}
                                            />

                                            <Card className={`hover:border-primary/50 transition-colors ${isPast ? "opacity-75" : ""}`}>
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start justify-between gap-4 mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="outline" className={cfg.color}>
                                                                <Icon className="h-3 w-3 mr-1" />
                                                                {cfg.label}
                                                            </Badge>

                                                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                                                {dateObj
                                                                    ? dateObj.toLocaleDateString("en-US", {
                                                                        month: "short",
                                                                        day: "numeric",
                                                                        year: "numeric",
                                                                    })
                                                                    : "TBD"}
                              </span>
                                                        </div>
                                                    </div>

                                                    <h3 className="font-semibold text-lg mb-2">{event?.label ?? "Untitled Event"}</h3>

                                                    {event?.link ? (
                                                        <a
                                                            href={event.link}
                                                            target={event.link?.startsWith("http") ? "_blank" : undefined}
                                                            rel={event.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                                                        >
                                                            <Button variant="outline" size="sm">
                                                                <ExternalLink className="h-3.5 w-3.5 mr-2" />
                                                                View Details
                                                            </Button>
                                                        </a>
                                                    ) : null}
                                                </CardContent>
                                            </Card>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
