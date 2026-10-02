import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/site/social";

export function Footer() {
	return (
		<footer dir="rtl" className="bg-background border-t">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-end md:justify-between">
				<div className="max-w-xl">
					<div className="inline-flex items-center gap-2">
						<span className="bg-foreground text-background flex size-8 items-center justify-center rounded-xl font-black">ع</span>
						<div><div className="font-black">عبودين كت</div><div className="text-muted-foreground text-[0.65rem] tracking-[0.18em]">ABODEN CUT</div></div>
					</div>
					<p className="text-muted-foreground mt-4 text-sm leading-7">محرر فيديو عربي مفتوح المصدر بهوية عبودين، مبني اعتمادًا على OpenCut Legacy مع الحفاظ على ترخيص MIT ونسبة المصدر.</p>
				</div>
				<div className="flex flex-wrap items-center gap-4">
					<Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm"><FaGithub className="size-4" />GitHub</Link>
					<Link href="https://github.com/OpenCut-app/opencut-classic" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm">المشروع الأصلي</Link>
				</div>
				<div className="text-muted-foreground text-xs">© {new Date().getFullYear()} عبودين كت</div>
			</div>
		</footer>
	);
}
