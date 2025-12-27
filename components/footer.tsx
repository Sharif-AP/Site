import Link from "next/link"
import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Advanced Programming</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sharif University of Technology
              <br />
              Fall 2025
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/classes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="text-muted-foreground hover:text-foreground transition-colors">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="flex gap-3">
              <a
                href="mailto:admin@sharif-ap.ir"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Sharif-AP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Sharif University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
