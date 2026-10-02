"use client";

import { ArrowLeft, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Handlebars } from "./handlebars";

export function Hero() {
	return (
		<main dir="rtl" className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center">
			<Image className="absolute inset-0 -z-20 size-full object-cover opacity-75 invert dark:invert-0" src="/landing-page-dark.png" height={1903.5} width={1269} alt="واجهة محرر عبودين كت" priority />
			<div className="bg-background/55 absolute inset-0 -z-10 backdrop-blur-[2px]" />
			<div className="mx-auto flex w-full max-w-4xl flex-col items-center">
				<div className="border-border bg-background/80 text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur">
					<ShieldCheck className="size-4" /><span>خصوصيتك أولًا — مشاريعك تبقى على جهازك قدر الإمكان</span>
				</div>
				<div className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
					<h1>مونتاج الفيديو</h1>
					<Handlebars>بطريقة عبودين</Handlebars>
				</div>
				<p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-base leading-8 sm:text-xl">
					عبودين كت محرر فيديو عربي مبني للبساطة والسرعة. ارفع مقاطعك، رتبها على الخط الزمني، أضف النصوص والمؤثرات ثم صدّر الفيديو من المتصفح.
				</p>
				<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
					<Link href="/projects"><Button size="lg" className="h-12 min-w-44 gap-2 text-base">ابدأ مشروعك<ArrowLeft className="size-4" /></Button></Link>
					<span className="text-muted-foreground text-xs">ABODEN CUT • نسخة تطويرية مفتوحة المصدر</span>
				</div>
			</div>
		</main>
	);
}
