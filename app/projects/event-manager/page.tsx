import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const { projects } = projectsData as { projects: Project[] };
    const project = projects.find(p => p.slug === params.slug);
    if (!project) return notFound();

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            {project.docUrl && (
                <div className="border rounded-lg overflow-hidden mb-8">
                    {/* Simple PDF preview; browser-native */}
                    <object data={project.docUrl} type="application/pdf" width="100%" height="700">
                        <iframe src={project.docUrl} width="100%" height="700" />
                    </object>
                </div>
            )}

            {/* Optional: render phases again with more details */}
            {/* ... */}
        </div>
    );
}
