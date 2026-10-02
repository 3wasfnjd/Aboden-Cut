"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "@/services/storage/use-local-storage";
import { Button } from "../ui/button";
import { Dialog, DialogBody, DialogContent, DialogTitle } from "../ui/dialog";

export function Onboarding() {
	const [step, setStep] = useState(0);
	const [hasSeenOnboarding, setHasSeenOnboarding] = useLocalStorage({
		key: "hasSeenAbodenCutOnboarding",
		defaultValue: false,
	});

	const steps = [
		{
			title: "أهلًا بك في عبودين كت",
			description: "هذه نسختنا الخاصة من محرر الفيديو. الهدف: واجهة عربية بسيطة وسريعة تعمل من المتصفح.",
		},
		{
			title: "النسخة ما زالت تطويرية",
			description: "بعض الأدوات، خصوصًا على الجوال، تحتاج مزيدًا من التحسين. سنطورها تدريجيًا بدون كسر أساس المونتاج.",
		},
		{
			title: "ابدأ بمشروع بسيط",
			description: "ارفع فيديو أو صورة، اسحبها إلى الخط الزمني، جرّب النصوص والمؤثرات ثم استخدم زر التصدير.",
		},
	];

	const current = steps[step] ?? steps[0];
	const isLast = step === steps.length - 1;

	const handleNext = () => {
		if (isLast) {
			setHasSeenOnboarding({ value: true });
			return;
		}
		setStep((value) => value + 1);
	};

	return (
		<Dialog
			open={!hasSeenOnboarding}
			onOpenChange={(open) => {
				if (!open) setHasSeenOnboarding({ value: true });
			}}
		>
			<DialogContent dir="rtl" className="sm:max-w-[425px]">
				<DialogTitle>{current.title}</DialogTitle>
				<DialogBody>
					<div className="space-y-5">
						<p className="text-muted-foreground leading-7">{current.description}</p>
						<Button onClick={handleNext} className="w-full gap-2">
							{isLast ? "ابدأ" : "التالي"}
							<ArrowLeftIcon className="size-4" />
						</Button>
					</div>
				</DialogBody>
			</DialogContent>
		</Dialog>
	);
}
