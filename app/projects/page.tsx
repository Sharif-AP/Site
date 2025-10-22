import Link from "next/link";
import projectsData from "@/data/projects.json";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, FileText, ExternalLink, Clock, Target } from "lucide-react";

export default function ProjectsPage() {
  const { projects } = projectsData as { projects: Project[] };

  return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Course Projects</h1>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Multi-phase projects to apply your knowledge and build real applications.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto space-y-8">
              {projects.map((project) => (
                  <Card key={project.id} className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-3 mb-3">
                        <Target className="h-8 w-8 text-primary mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                            <Badge variant="outline">{project.slug}</Badge>
                          </div>
                          <CardDescription className="text-base">{project.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/projects/${project.slug}`}>
                          <Button size="sm" variant="secondary">Open details</Button>
                        </Link>
                        {project.docUrl && (
                            <a href={project.docUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm">
                                <FileText className="h-4 w-4 mr-2" />
                                View project doc
                              </Button>
                            </a>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {project.phases.map((phase, index) => {
                          const isPastDeadline = new Date(phase.deadline) < new Date();
                          const isUpcoming = new Date(phase.date) > new Date();
                          return (
                              <AccordionItem key={phase.id} value={phase.id}>
                                <AccordionTrigger className="hover:no-underline">
                                  <div className="flex items-center gap-3 text-left w-full">
                                    <Badge variant="outline" className="shrink-0">Phase {index + 1}</Badge>
                                    <span className="font-semibold">{phase.title}</span>
                                    <div className="ml-auto flex items-center gap-2">
                                      {isUpcoming && <Badge variant="secondary" className="text-xs">Upcoming</Badge>}
                                      {isPastDeadline && <Badge variant="outline" className="text-xs">Completed</Badge>}
                                    </div>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="pt-4 space-y-4">
                                    <div className="flex flex-wrap gap-4 text-sm">
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">Start:</span>
                                        <span>{new Date(phase.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Clock className={`h-4 w-4 ${isPastDeadline ? "text-muted-foreground" : "text-accent"}`} />
                                        <span className="text-muted-foreground">Deadline:</span>
                                        <span className={isPastDeadline ? "text-muted-foreground" : "text-accent font-semibold"}>
                                    {new Date(phase.deadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                  </span>
                                      </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                      {phase.assets?.pdf && (
                                          <a href={phase.assets.pdf} target="_blank" rel="noopener noreferrer">
                                            <Button variant="default" size="sm">
                                              <FileText className="h-4 w-4 mr-2" />
                                              View Guidelines
                                            </Button>
                                          </a>
                                      )}
                                      {phase.assets?.external && (
                                          <a href={phase.assets.external} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm">
                                              <ExternalLink className="h-4 w-4 mr-2" />
                                              External Resources
                                            </Button>
                                          </a>
                                      )}
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}
