import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"
import {
    BookOpen,
    Clock,
    FileCheck,
    Users,
    AlertCircle,
    Layers,
    Target,
    Mail,
    MessageSquare,
    Link as LinkIcon,
    ExternalLink,
} from "lucide-react"

export default function PoliciesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation/>

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                                Course Policies — Advanced Programming (Fall 1404)
                            </h1>
                            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                                Syllabus-based rules for grading, projects, assignments, workshops, exams, teamwork,
                                integrity, and communication.
                            </p>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Instructor: <span className="font-medium">Dr. Ali Najimi</span>
                            </p>

                            {/* Quick links */}
                            <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                                <a
                                    href="https://quera.org/course/23972"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-accent"
                                >
                                    <ExternalLink className="h-4 w-4"/>
                                    Quera Course (23972)
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-accent"
                                >
                                    <LinkIcon className="h-4 w-4"/>
                                    Course Website (this site)
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="container mx-auto px-4 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Alert>
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Important</AlertTitle>
                            <AlertDescription>
                                You are responsible for reading and following all policies. Changes may occur by
                                instructor decision if extraordinary circumstances arise.
                            </AlertDescription>
                        </Alert>

                        {/* Grading */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <BookOpen className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Grading Policy (Total = 24 points)</CardTitle>
                                        <CardDescription>Breakdown and exam modes</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <span className="font-medium">Course Project</span>
                                        <span className="text-muted-foreground">11 pts (8 + 3)</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <span className="font-medium">Homework Assignments</span>
                                        <span className="text-muted-foreground">6 pts</span>
                                    </div>
                                    <div className=" border-b">
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <span className="font-medium">Exams (Midterm + Final)</span>
                                        <span className="text-muted-foreground">6 pts</span>
                                    </div>
                                    <div className="mt-4 rounded-lg border p-4">
                                        <p className="text-sm font-medium mb-2">Exam scoring uses the better of two
                                            modes:</p>
                                        <ul className="text-sm space-y-1">
                                            <li>Mode A — Midterm: 2 pts, Final: 4 pts</li>
                                            <li>Mode B — Midterm: 4 pts, Final: 2 pts</li>
                                        </ul>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            The higher resulting total is recorded as your exam score.
                                        </p>
                                    </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Workshops (Bonus)</span>
                                        <span className="text-muted-foreground">+1 pt (extra credit)</span>
                                    </div>

                                    <div className="mt-2 rounded-lg border p-4">
                                        <p className="text-sm font-medium mb-2">Workshop bonus distribution</p>
                                        <p className="text-sm">
                                            Workshop credit is optional and distributed proportionally across homeworks;
                                            you
                                            must attend the related workshop
                                            and earn the corresponding homework score to receive that portion of the
                                            bonus.
                                        </p>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>

                        {/* Project selection & teams */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <Target className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Project: Selection & Teaming</CardTitle>
                                        <CardDescription>Unique project per team, priority-based
                                            selection</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="text-sm space-y-2 leading-relaxed">
                                    <li>Projects are offered as a “basket”. Each team ranks preferences; if conflicts
                                        occur, a lottery decides.
                                    </li>
                                    <li>Each team must implement a distinct project; two teams cannot implement the same
                                        project.
                                    </li>
                                    <li>Teams are typically <b>3 members</b>. If one or two students remain unteamed,
                                        one or two <b>4-member</b> teams may be formed.
                                    </li>
                                    <li>If two members drop a team, the remaining member may continue, join another
                                        team, or merge teams by mutual consent.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Project phases */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <Layers className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Project Phases & Rubrics</CardTitle>
                                        <CardDescription>Deliverables, tools, and evaluation</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Phase 1 */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Phase 1 (Weeks 7–11)</h3>
                                    <p className="text-sm">
                                        Modular development using at least <b>two GoF patterns</b>; add file I/O and
                                        Java Collections.
                                        Deliver a <b>1–2 page design document</b> (UML class diagram) and a <b>test
                                        coverage report</b>.
                                    </p>
                                    <p className="text-sm"><b>Suggested tools:</b> PlantUML, JaCoCo,
                                        SpotBugs/Checkstyle.</p>
                                    <div className="text-sm grid grid-cols-2 gap-2">
                                        <div>Design quality — 40%</div>
                                        <div>Use of patterns — 25%</div>
                                        <div>Reliability — 20%</div>
                                        <div>Docs/Tests — 15%</div>
                                    </div>
                                </div>

                                <hr className="my-2"/>

                                {/* Phase 2 */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Phase 2 (Weeks 3–6)</h3>
                                    <p className="text-sm">
                                        Build a Java <b>CLI</b> app demonstrating core OOP concepts; include unit tests
                                        (JUnit).
                                        Deliver source code, <b>README (max 3 pages)</b>, test report, and a short demo
                                        video.
                                    </p>
                                    <p className="text-sm"><b>Suggested tools:</b> JDK 17, Gradle/Maven, JUnit 5, Git.
                                    </p>
                                    <div className="text-sm grid grid-cols-2 gap-2">
                                        <div>Correctness — 40%</div>
                                        <div>OOP design — 30%</div>
                                        <div>Tests — 20%</div>
                                        <div>Documentation — 10%</div>
                                    </div>
                                </div>

                                <hr className="my-2"/>

                                {/* Phase 3 */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold">Phase 3 (Weeks 12–15)</h3>
                                    <p className="text-sm">
                                        Add a <b>concurrent client/server</b> component (sockets) and perform
                                        refactoring.
                                        Deliver source code, a release package, concurrency design notes, and load-test
                                        results.
                                    </p>
                                    <p className="text-sm"><b>Suggested tools:</b> Java Sockets/Netty, JMH or simple
                                        benchmarking, GitHub Actions (CI).</p>
                                    <div className="text-sm grid grid-cols-2 gap-2">
                                        <div>Concurrency safety — 35%</div>
                                        <div>Network correctness — 25%</div>
                                        <div>Performance — 20%</div>
                                        <div>Documentation — 20%</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Homeworks */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <FileCheck className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Homeworks (HW0–HW4)</CardTitle>
                                        <CardDescription>Topics, submission, reviews</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="text-sm space-y-2 leading-relaxed">
                                    <li><b>HW0:</b> Java introduction.</li>
                                    <li><b>HW1:</b> Core OOP & data structures.</li>
                                    <li><b>HW2:</b> Advanced OOP (inheritance, polymorphism, interfaces), software
                                        testing, refactoring.
                                    </li>
                                    <li><b>HW3:</b> Generics, File I/O, Networking.</li>
                                    <li><b>HW4:</b> Reflection & Design Patterns.</li>
                                </ul>
                                <p className="text-sm">
                                    HW0–HW1 include Quera judged components; HW2–HW4 include mini-project style
                                    deliverables (repository uploads).
                                    Time slots for submission may be coordinated per student.
                                </p>
                                <p className="text-sm">
                                    <b>Code reviews:</b> You may be asked to explain any part of your submission live.
                                    Failure to explain your own work
                                    results in <b>zero</b> for that homework, regardless of correctness.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Late & extensions */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <Clock className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Extensions & Late Policy</CardTitle>
                                        <CardDescription>Deadlines and penalties</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <ul className="text-sm space-y-2">
                                    <li>Extensions may be granted if a majority of students request and it is
                                        feasible.
                                    </li>
                                    <li><b>Global late budget:</b> Up to <b>10 total days</b> of lateness across all
                                        homeworks.
                                    </li>
                                    <li>Beyond the allowed budget, late submissions are not accepted.</li>
                                    <li><b>Penalty:</b> linear <b>10% per day</b> on the assignment’s score.</li>
                                </ul>
                                <p className="text-xs text-muted-foreground">
                                    Some assignments may allow 2–4 days late individually; follow the official
                                    release/announcement per task.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Collaboration & integrity */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <Users className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Teamwork & Academic Integrity</CardTitle>
                                        <CardDescription>Expectations and consequences</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <ul className="text-sm space-y-2 leading-relaxed">
                                    <li>All team members must contribute equitably to all phases of the project.</li>
                                    <li>Non-cooperation can result in <b>zero</b> on the project for the offending
                                        student, even if they helped elsewhere; teams may appeal.
                                    </li>
                                    <li>Use of AI tools is <b>allowed</b> and even encouraged for productivity; however,
                                        you must understand and <b>be able to explain</b> your deliverables.
                                    </li>
                                    <li>Failure to explain implies lack of authorship and leads to <b>zero</b> for that
                                        deliverable.
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Exams */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <BookOpen className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Exams</CardTitle>
                                        <CardDescription>Written midterm and final (total 6 pts)</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    Two written exams (midterm and final). Scoring uses the better of the two predefined
                                    modes (see Grading).
                                </p>
                            </CardContent>
                        </Card>

                        {/* Communication */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <MessageSquare className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Communication Channels</CardTitle>
                                        <CardDescription>Announcements, Q&A, and contacts</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-start gap-2">
                                        <LinkIcon className="h-4 w-4 mt-1 text-primary"/>
                                        {/* Quera link provided by user */}
                                        <span>
                      <a
                          href="https://quera.org/course/add_to_course/course/23972/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-primary"
                      >
                        Quera
                      </a>{" "}
                                            — official announcements, slides, homeworks, project specs, and grading.
                    </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LinkIcon className="h-4 w-4 mt-1 text-primary"/>
                                        {/* Site root is this project */}
                                        <span>
                      <a href="/" className="underline hover:text-primary">
                        Course Website
                      </a>{" "}
                                            — syllabus, slides, team list, and project list.
                    </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LinkIcon className="h-4 w-4 mt-1 text-primary"/>
                                        <span>Telegram group — open discussion among students and TAs.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LinkIcon className="h-4 w-4 mt-1 text-primary"/>
                                        <span>Bale group — for emergencies (limited external internet, e.g.).</span>
                                    </li>
                                </ul>
                                <div className="pt-3 border-t">
                                    <p className="text-sm font-medium mb-1 flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-primary"/> Contacts
                                    </p>
                                    <ul className="text-sm space-y-1">
                                        <li>
                                            Instructor —{" "}
                                            <a className="underline hover:text-primary"
                                               href="mailto:najimi56@gmail.com">
                                                najimi56@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            Head TA —{" "}
                                            <a className="underline hover:text-primary"
                                               href="mailto:sohaibsadeghy@gmail.com">
                                                sohaibsadeghy@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Extraordinary conditions */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="h-6 w-6 text-primary mt-1"/>
                                    <div>
                                        <CardTitle className="text-xl">Extraordinary Conditions</CardTitle>
                                        <CardDescription>Policy adjustments</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    In emergencies (e.g., campus closure, remote-only periods), the calendar and
                                    deadlines may change as needed by
                                    instructor decision.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}
