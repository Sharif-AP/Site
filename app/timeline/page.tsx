import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, Code, Users, Target, ExternalLink } from "lucide-react"
import lecturesData from "@/data/lectures.json"

const categoryConfig = {
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

export default function TimelinePage() {
  const { timeline } = lecturesData

  const sortedTimeline = [...timeline].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

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
              {Object.entries(categoryConfig).map(([key, config]) => {
                const Icon = config.icon
                return (
                  <Badge key={key} variant="outline" className={`${config.color} px-3 py-1.5`}>
                    <Icon className="h-3.5 w-3.5 mr-1.5" />
                    {config.label}
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
                  const config = categoryConfig[event.category]
                  const Icon = config.icon
                  const isPast = new Date(event.date) < new Date()

                  return (
                    <div key={index} className="relative pl-20">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 top-6 h-5 w-5 rounded-full border-4 border-background ${isPast ? "bg-muted-foreground" : config.color.split(" ")[0]}`}
                      />

                      <Card className={`hover:border-primary/50 transition-colors ${isPast ? "opacity-75" : ""}`}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className={config.color}>
                                <Icon className="h-3 w-3 mr-1" />
                                {config.label}
                              </Badge>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {new Date(event.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{event.label}</h3>
                          {event.link ? (
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
