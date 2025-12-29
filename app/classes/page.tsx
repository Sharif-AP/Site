import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LazyWrapper } from "@/components/lazy-wrapper"
import { Calendar, FileText, Presentation, ExternalLink, Download } from "lucide-react"
import lecturesData from "@/data/lectures.json"

export default function ClassesPage() {
  const { lectures, workshops } = lecturesData

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Classes & Workshops</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Access lecture slides, materials, and workshop resources organized by week.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <LazyWrapper>
          <section className="container mx-auto px-4 py-12 md:py-16">
            <Tabs defaultValue="lectures" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="lectures">Lectures</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
              </TabsList>

              <TabsContent value="lectures" className="space-y-6">
                {lectures.map((lecture) => (
                  <Card key={lecture.id} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">Week {lecture.week}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(lecture.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <CardTitle className="text-xl mb-2">{lecture.title}</CardTitle>
                          <CardDescription className="text-base">{lecture.description}</CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {lecture.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {lecture.assets.html && (
                          <a href={lecture.assets.html} target="_blank" rel="noopener noreferrer">
                            <Button variant="default" size="sm">
                              <Presentation className="h-4 w-4 mr-2" />
                              View Slides
                            </Button>
                          </a>
                        )}
                        {lecture.assets.pdf && (
                          <a href={lecture.assets.pdf} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </a>
                        )}
                        {lecture.assets.pptx && (
                          <a href={lecture.assets.pptx} download>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              PPTX
                            </Button>
                          </a>
                        )}
                        {lecture.assets.external && (
                          <a href={lecture.assets.external} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              External
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="workshops" className="space-y-6">
                {workshops.map((workshop) => (
                  <Card key={workshop.id} className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">Week {workshop.week}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {new Date(workshop.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <CardTitle className="text-xl mb-2">{workshop.title}</CardTitle>
                          <CardDescription className="text-base">{workshop.description}</CardDescription>
                          <div className="mt-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Location:</span> {workshop.location}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {workshop.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {workshop.assets.html && (
                          <a href={workshop.assets.html} target="_blank" rel="noopener noreferrer">
                            <Button variant="default" size="sm">
                              <Presentation className="h-4 w-4 mr-2" />
                              View Materials
                            </Button>
                          </a>
                        )}
                        {workshop.assets.pdf && (
                          <a href={workshop.assets.pdf} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              PDF
                            </Button>
                          </a>
                        )}
                          {workshop.assets.pptx && (
                          <a href={workshop.assets.pptx} download>
                              <Button variant="outline" size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  PPTX
                              </Button>
                          </a>
                      )}
                        {workshop.assets.external && (
                          <a href={workshop.assets.external} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              External
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </section>
        </LazyWrapper>
      </main>

      <Footer />
    </div>
  )
}
