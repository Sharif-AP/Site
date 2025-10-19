import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LazyWrapper } from "@/components/lazy-wrapper"
import Link from "next/link"
import { BookOpen, Code, Users, Calendar, FileText, Target, Github } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Fall 2025
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Advanced Programming</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Learn. Build. Ship.
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
                A practical course covering core programming concepts with Java, software design, and modern development
                tooling.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/classes">
                  <Button size="lg" className="text-base">
                    View Classes
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="text-base bg-transparent">
                    Explore Projects
                  </Button>
                </Link>
                <Link href="/timeline">
                  <Button size="lg" variant="ghost" className="text-base">
                    Course Timeline
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <LazyWrapper>
          <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Comprehensive Lectures</CardTitle>
                  <CardDescription>
                    Weekly lectures covering Java fundamentals, OOP, design patterns, and advanced topics.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Code className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Hands-on Exercises</CardTitle>
                  <CardDescription>
                    Practice with homework assignments and coding challenges to reinforce concepts.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Multi-Phase Project</CardTitle>
                  <CardDescription>
                    Build a complete application through structured project phases throughout the semester.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Expert Instruction</CardTitle>
                  <CardDescription>
                    Learn from experienced instructors and teaching assistants dedicated to your success.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Structured Timeline</CardTitle>
                  <CardDescription>
                    Clear schedule with deadlines, workshops, and milestones to keep you on track.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>Rich Resources</CardTitle>
                  <CardDescription>
                    Access slides, documentation, code examples, and supplementary materials.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </LazyWrapper>

        <LazyWrapper>
          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Course Information</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Prerequisites</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Programming Fundamentals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Data Structures (recommended)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">Email</div>
                        <a href="mailto:ap@sharif.edu" className="text-primary hover:underline">
                          ap@sharif.edu
                        </a>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">Office Hours</div>
                        <div>Sun & Tue 14:00–16:00</div>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">Location</div>
                        <div>CE Department</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <a href="https://github.com/AliJimi/sharif-ap-slides" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub Repository
                    </Button>
                  </a>
                  <a href="https://docs.ce.sharif.edu/courses/40244" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      Course Documentation
                    </Button>
                  </a>
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
