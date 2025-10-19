import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, ExternalLink, Clock } from "lucide-react"
import lecturesData from "@/data/lectures.json"

export default function ExercisesPage() {
  const { exercises } = lecturesData

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Exercises & Homework</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Practice assignments to reinforce your understanding of course concepts.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {exercises.map((exercise) => {
              const isUpcoming = new Date(exercise.date) > new Date()
              const isPastDeadline = new Date(exercise.deadline) < new Date()

              return (
                <Card key={exercise.id} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="outline">Week {exercise.week}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            Released:{" "}
                            {new Date(exercise.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span
                            className={`text-sm flex items-center gap-1 ${isPastDeadline ? "text-destructive" : "text-accent"}`}
                          >
                            <Clock className="h-3.5 w-3.5" />
                            Due:{" "}
                            {new Date(exercise.deadline).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{exercise.title}</CardTitle>
                        <CardDescription className="text-base">{exercise.description}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exercise.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {isUpcoming && (
                          <Badge variant="outline" className="text-xs">
                            Upcoming
                          </Badge>
                        )}
                        {isPastDeadline && (
                          <Badge variant="destructive" className="text-xs">
                            Past Due
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {exercise.assets.pdf && (
                        <a href={exercise.assets.pdf} target="_blank" rel="noopener noreferrer">
                          <Button variant="default" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            View Assignment
                          </Button>
                        </a>
                      )}
                      {exercise.assets.external && (
                        <a href={exercise.assets.external} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            External Link
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
