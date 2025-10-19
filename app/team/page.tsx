import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LazyWrapper } from "@/components/lazy-wrapper"
import { Mail, ExternalLink, MapPin } from "lucide-react"
import lecturesData from "@/data/lectures.json"

export default function TeamPage() {
  const { team } = lecturesData

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Course Team</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Meet the instructors and teaching assistants dedicated to your learning experience.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <LazyWrapper>
          <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Instructor */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Instructor</h2>
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {getInitials(team.instructor.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{team.instructor.name}</CardTitle>
                        <CardDescription className="text-base">Course Instructor</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${team.instructor.email}`} className="text-primary hover:underline">
                        {team.instructor.email}
                      </a>
                    </div>
                    {team.instructor.office && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{team.instructor.office}</span>
                      </div>
                    )}
                    {team.instructor.homepage && (
                      <div className="mt-3">
                        <a href={team.instructor.homepage} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Homepage
                          </Button>
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Teaching Assistants */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Teaching Assistants</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {team.tas.map((ta) => (
                    <Card key={ta.email} className="hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-secondary text-secondary-foreground">
                              {getInitials(ta.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg mb-1">{ta.name}</CardTitle>
                            <CardDescription>{ta.role || "Teaching Assistant"}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${ta.email}`} className="text-primary hover:underline truncate">
                            {ta.email}
                          </a>
                        </div>
                        {ta.links && ta.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {ta.links.map((link, index) => (
                              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm">
                                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                  {link.label}
                                </Button>
                              </a>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </LazyWrapper>
      </main>

      <Footer />
    </div>
  )
}
