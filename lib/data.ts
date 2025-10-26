export interface Lecture {
  id: string
  week: number
  date: string
  title: string
  tags: string[]
  assets: {
    html?: string | null
    pdf?: string | null
    pptx?: string | null
    external?: string | null
  }
  description: string
}

export interface Exercise {
  id: string
  week: number
  date: string
  title: string
  tags: string[]
  assets: {
    pdf?: string | null
    external?: string | null
  }
  description: string
  deadline: string
}

export interface Workshop {
  id: string
  week: number
  date: string
  title: string
  tags: string[]
  assets: {
    html?: string | null
    pdf?: string | null
    external?: string | null
  }
  description: string
  location: string
}

export interface ProjectPhase {
  id: string;
  title: string;
  date: string;
  deadline: string;
  assets: { pdf?: string; external?: string };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  docUrl?: string;
  tags?: string[];
  phases: ProjectPhase[];
}


export interface TimelineEvent {
  date: string
  label: string
  link: string
  category: "lecture" | "exercise" | "workshop" | "project"
}

export interface TeamMember {
  name: string
  email: string
  role?: string
  homepage?: string
  office?: string
  photo?: string
  areas?: string[]
  links?: Array<{ label: string; url: string }>
}


export interface CourseData {
  meta: {
    course: string
    term: string
    brandColor: string
  }
  overview: {
    title: string
    subtitle: string
    description: string
    prerequisites: string[]
    contacts: {
      website: string
      email: string
      office: string
      office_hours: string
    }
    links: Array<{ label: string; href: string }>
    hero: {
      headline: string
      tagline: string
    }
  }
  lectures: Lecture[]
  exercises: Exercise[]
  workshops: Workshop[]
  projects: Project[]
  timeline: TimelineEvent[]
  policies: {
    html_url: string | null
    markdown_url: string | null
  }
  team: {
    instructor: TeamMember
    tas: TeamMember[]
  }
}

export async function getCourseData(): Promise<CourseData> {
  // In a real app, this would fetch from an API or file system
  // For now, we'll return the data structure
  const response = await fetch("/data/lectures.json")
  return response.json()
}
