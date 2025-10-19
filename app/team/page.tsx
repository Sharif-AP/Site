"use client"
import {useMemo, useState} from "react"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {LazyWrapper} from "@/components/lazy-wrapper"
import {Mail, ExternalLink, MapPin, Users, Github, Linkedin} from "lucide-react"
import lecturesData from "@/data/lectures.json"

type LinkItem = { label: string; url?: string; href?: string }
type Member = {
    name: string
    email: string
    role?: string
    homepage?: string
    office?: string
    photo?: string
    areas?: string[]
    links?: LinkItem[]
}
type TeamData = {
    instructor: Member
    tas: Member[]
}

export default function TeamPage() {
    const {team} = lecturesData as { team: TeamData }

    const [selectedAreas, setSelectedAreas] = useState<Set<string>>(new Set())

    const normalizedAreas = (areas?: string[]) =>
        (areas ?? []).map((a) => a.trim().toLowerCase()).filter(Boolean)

    const allAreas = useMemo(() => {
        const s = new Set<string>()
        team.tas.forEach((ta) => normalizedAreas(ta.areas).forEach((a) => s.add(a)))
        normalizedAreas(team.instructor.areas).forEach((a) => s.add(a))
        const order = ["exercises", "workshops", "projects", "exams"]
        const ordered = order.filter((a) => s.has(a))
        const rest = [...s].filter((a) => !order.includes(a)).sort()
        return [...ordered, ...rest]
    }, [team])

    const toggleArea = (area: string) => {
        setSelectedAreas((prev) => {
            const next = new Set(prev)
            if (next.has(area)) next.delete(area)
            else next.add(area)
            return next
        })
    }

    const clearAreas = () => setSelectedAreas(new Set())

    const linkHref = (l: LinkItem) => l.url ?? l.href ?? "#"

    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()

    const matchesFilter = (member: Member) => {
        if (selectedAreas.size === 0) return true
        const areas = normalizedAreas(member.areas)
        return areas.some((a) => selectedAreas.has(a))
    }

    const visibleTAs = team.tas.filter(matchesFilter)

    const getLinkIcon = (label: string) => {
        const lower = label.toLowerCase()
        if (lower.includes("github")) return <Github className="h-3.5 w-3.5 mr-1.5"/>
        if (lower.includes("linkedin")) return <Linkedin className="h-3.5 w-3.5 mr-1.5"/>
        return <ExternalLink className="h-3.5 w-3.5 mr-1.5"/>
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation/>

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
                        <div className="max-w-5xl mx-auto space-y-12">
                            {/* Instructor */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Instructor</h2>
                                <Card className="border-2">
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <Avatar className="h-16 w-16">
                                                {team.instructor.photo && (
                                                    <AvatarImage src={team.instructor.photo}
                                                                 alt={team.instructor.name}/>
                                                )}
                                                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                                                    {getInitials(team.instructor.name)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <CardTitle className="text-xl mb-1">{team.instructor.name}</CardTitle>
                                                <CardDescription className="text-base">Course
                                                    Instructor</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Mail className="h-4 w-4 text-muted-foreground"/>
                                            <a href={`mailto:${team.instructor.email}`}
                                               className="text-primary hover:underline">
                                                {team.instructor.email}
                                            </a>
                                        </div>
                                        {team.instructor.office && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <MapPin className="h-4 w-4 text-muted-foreground"/>
                                                <span>{team.instructor.office}</span>
                                            </div>
                                        )}
                                        {team.instructor.homepage && (
                                            <div className="mt-3">
                                                <a href={team.instructor.homepage} target="_blank"
                                                   rel="noopener noreferrer">
                                                    <Button variant="outline" size="sm">
                                                        <ExternalLink className="h-4 w-4 mr-2"/>
                                                        Homepage
                                                    </Button>
                                                </a>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Filters */}
                            <div>
                                <div className="flex items-center justify-between gap-3 flex-wrap">
                                    <h2 className="text-2xl font-bold">Teaching Assistants</h2>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4 text-muted-foreground"/>
                                        <span className="text-sm text-muted-foreground">
                      {selectedAreas.size === 0 ? "All areas" : `${selectedAreas.size} selected`}
                    </span>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    <Button
                                        variant={selectedAreas.size === 0 ? "default" : "outline"}
                                        size="sm"
                                        onClick={clearAreas}
                                    >
                                        All
                                    </Button>
                                    {allAreas.map((area) => {
                                        const active = selectedAreas.has(area)
                                        return (
                                            <Button
                                                key={area}
                                                variant={active ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => toggleArea(area)}
                                                className="capitalize"
                                            >
                                                {area}
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Teaching Assistants */}
                            <div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {visibleTAs.map((ta) => (
                                        <Card key={ta.email} className="hover:border-primary/50 transition-colors">
                                            <CardHeader>
                                                <div className="flex items-start gap-4">
                                                    <Avatar className="h-12 w-12">
                                                        {ta.photo && <AvatarImage src={ta.photo} alt={ta.name}/>}
                                                        <AvatarFallback
                                                            className="bg-secondary text-secondary-foreground">
                                                            {getInitials(ta.name)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 min-w-0">
                                                        <CardTitle
                                                            className="text-lg mb-1 truncate">{ta.name}</CardTitle>
                                                        <CardDescription className="truncate">
                                                            {ta.role || "Teaching Assistant"}
                                                        </CardDescription>

                                                        {ta.areas && ta.areas.length > 0 && (
                                                            <div className="mt-2 flex flex-wrap gap-1.5">
                                                                {ta.areas.map((a) => (
                                                                    <span
                                                                        key={a}
                                                                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground capitalize"
                                                                    >
                                    {a}
                                  </span>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-3">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Mail className="h-4 w-4 text-muted-foreground"/>
                                                    <a
                                                        href={`mailto:${ta.email}`}
                                                        className="text-primary hover:underline truncate"
                                                        title={ta.email}
                                                    >
                                                        {ta.email}
                                                    </a>
                                                </div>

                                                {ta.links && ta.links.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {ta.links.map((link, index) => (
                                                            <a
                                                                key={`${ta.email}-${index}-${link.label}`}
                                                                href={linkHref(link)}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <Button variant="outline" size="sm">
                                                                    {getLinkIcon(link.label)}
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

                                {visibleTAs.length === 0 && (
                                    <div className="text-center text-muted-foreground mt-8">
                                        No teaching assistants match the selected areas.
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </LazyWrapper>
            </main>

            <Footer/>
        </div>
    )
}
