// common.js — shared helpers for AP portal (English-only comments)
const BRAND = "#1966ab";
const LOGO_SRC = "/static/images/sharif-logo-blue.png"; // adjust as needed
const JSON_URL = "/data/lectures.json";

async function loadData() {
    const res = await fetch(JSON_URL + "?_=" + Date.now(), { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load data/lectures.json");
    return await res.json();
}

function $(sel) { return document.querySelector(sel); }
function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html!==undefined) e.innerHTML = html; return e; }
function fmtDate(iso) { if (!iso) return ""; const d = new Date(iso); return d.toLocaleDateString(); }
function sameOrigin(url) { try { const u = new URL(url, location.href); return u.origin === location.origin; } catch { return false; } }

function renderNavbar(active) {
    const nav = el("nav","navbar bg-base-100 border-b");
    const wrap = el("div","container mx-auto px-4 flex w-full items-center gap-3");
    const left = el("div","flex items-center gap-3");
    const logo = el("img","w-9 h-9"); logo.src = LOGO_SRC; logo.alt = "Sharif Logo";
    const title = el("a","font-semibold", "AP — Slides & Timeline");
    title.href = "index.html";
    left.append(logo,title);

    const links = [
        ["Home","/index.html"],
        ["Classes","/pages/classes.html"],
        ["Exercises","/pages/exercises.html"],
        ["Workshops","/pages/workshops.html"],
        ["Projects","/pages/projects.html"],
        ["Timeline","/pages/timeline.html"],
        ["Policies","/pages/policies.html"],
        ["Team","/pages/team.html"]
    ];

    const right = el("div","ml-auto flex items-center gap-1");
    links.forEach(([label,href])=>{
        const a = el("a","btn btn-ghost btn-sm", label);
        a.href = href;
        if (active === label) a.classList.add("btn-active");
        right.append(a);
    });

    wrap.append(left,right);
    nav.append(wrap);
    return nav;
}

function renderFooter() {
    const ft = el("footer","border-t py-8 mt-10");
    const box = el("div","container mx-auto px-4 text-xs opacity-70");
    box.innerHTML = `© ${new Date().getFullYear()} AP — Sharif University.`;
    ft.append(box);
    return ft;
}

function injectBaseLayout(active) {
    document.body.prepend(renderNavbar(active));
    document.body.append(renderFooter());
}

function linkBtn(label, href) {
    const a = el("a","btn btn-sm", label);
    a.href = href; a.target = "_blank"; a.rel = "noreferrer";
    return a;
}
