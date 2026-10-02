"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, GithubIcon, Menu02Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { SOCIAL_LINKS } from "@/site/social";

function Brand() {
	return (
		<span className="inline-flex items-center gap-2" dir="rtl">
			<span className="bg-foreground text-background flex size-8 items-center justify-center rounded-xl text-base font-black">ع</span>
			<span className="flex flex-col items-start leading-none">
				<span className="text-sm font-black">عبودين كت</span>
				<span className="text-muted-foreground mt-1 text-[0.58rem] font-bold tracking-[0.18em]">ABODEN CUT</span>
			</span>
		</span>
	);
}

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header dir="rtl" className="bg-background/90 sticky top-0 z-30 border-b backdrop-blur-xl">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
				<Link href="/" aria-label="عبودين كت"><Brand /></Link>
				<nav className="hidden items-center gap-2 md:flex">
					<Link href="/projects"><Button variant="text">مشاريعي</Button></Link>
					<Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
						<Button variant="outline" size="icon" aria-label="GitHub"><HugeiconsIcon icon={GithubIcon} className="size-4" /></Button>
					</Link>
					<Link href="/projects"><Button className="gap-2">ابدأ المونتاج<ArrowLeft className="size-4" /></Button></Link>
					<ThemeToggle />
				</nav>
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<Button variant="ghost" size="icon" onClick={() => setIsMenuOpen((v) => !v)} aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}>
						<HugeiconsIcon icon={isMenuOpen ? Cancel01Icon : Menu02Icon} className="size-5" />
					</Button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="bg-background border-t px-4 py-4 md:hidden">
					<div className="mx-auto flex max-w-6xl flex-col gap-2">
						<Link href="/projects" onClick={() => setIsMenuOpen(false)}>
							<Button className="w-full justify-between">مشاريعي<ArrowLeft className="size-4" /></Button>
						</Link>
						<Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" className="w-full justify-between">المستودع على GitHub<HugeiconsIcon icon={GithubIcon} className="size-4" /></Button>
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
