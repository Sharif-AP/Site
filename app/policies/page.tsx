import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BookOpen, Clock, FileCheck, Users, AlertCircle } from "lucide-react"

export default function PoliciesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Course Policies</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Important guidelines and expectations for the course.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important Notice</AlertTitle>
              <AlertDescription>
                Please read all policies carefully. You are responsible for understanding and following these guidelines
                throughout the course.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl">Grading Policy</CardTitle>
                    <CardDescription>How your final grade is calculated</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Homework Assignments</span>
                    <span className="text-muted-foreground">30%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Course Project</span>
                    <span className="text-muted-foreground">40%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Midterm Exam</span>
                    <span className="text-muted-foreground">15%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Final Exam</span>
                    <span className="text-muted-foreground">15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl">Late Submission Policy</CardTitle>
                    <CardDescription>Guidelines for submitting work after deadlines</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed">
                  Late submissions will be accepted with the following penalties:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Up to 24 hours late: 10% deduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>24-48 hours late: 25% deduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>More than 48 hours late: Not accepted without prior approval</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Extensions may be granted for documented emergencies. Contact the instructor as soon as possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl">Academic Integrity</CardTitle>
                    <CardDescription>Expectations for honest academic work</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed">
                  All students are expected to maintain the highest standards of academic integrity. This includes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Submitting only your own original work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Properly citing all sources and collaborators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Not sharing solutions with other students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Following collaboration guidelines for each assignment</span>
                  </li>
                </ul>
                <p className="text-sm text-destructive mt-3">
                  Violations of academic integrity will result in serious consequences, including potential course
                  failure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <CardTitle className="text-xl">Collaboration Policy</CardTitle>
                    <CardDescription>When and how you can work with others</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed">
                  Collaboration is encouraged for learning, but all submitted work must be your own:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You may discuss concepts and approaches with classmates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You must write all code and solutions independently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Acknowledge any discussions or help received in your submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Project work may have specific collaboration rules - check each assignment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
