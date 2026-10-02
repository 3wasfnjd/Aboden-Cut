"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const STORAGE_KEY = "aboden-cut-mobile-acknowledged";

interface MobileGateProps {
	children: React.ReactNode;
}

export function MobileGate({ children }: MobileGateProps) {
	const [show, setShow] = useState<boolean | null>(null);

	useEffect(() => {
		const isMobile = window.innerWidth < 1024;
		const acknowledged = localStorage.getItem(STORAGE_KEY) === "true";
		setShow(isMobile && !acknowledged);
	}, []);

	if (show === null) return null;
	if (!show) return <>{children}</>;

	const handleContinue = () => {
		localStorage.setItem(STORAGE_KEY, "true");
		setShow(false);
	};

	return (
		<div dir="rtl" className="bg-background flex h-screen w-screen items-center justify-center p-6">
			<div className="border-border bg-card w-full max-w-md rounded-2xl border p-6 shadow-xl">
				<div className="mb-5 space-y-3">
					<div className="bg-primary/10 text-primary inline-flex rounded-full px-3 py-1 text-xs font-bold">
						نسخة الهاتف تجريبية
					</div>
					<h1 className="text-2xl font-black">عبودين كت على الجوال</h1>
					<p className="text-muted-foreground text-sm leading-7">
						المحرر يعمل من المتصفح، لكن بعض أدوات الخط الزمني صُممت أساسًا
						للشاشات الكبيرة وقد تحتاج تحسينات إضافية على الآيفون. يمكنك
						المتابعة وتجربة النسخة الحالية.
					</p>
				</div>
				<Button onClick={handleContinue} className="w-full">
					متابعة إلى المحرر
				</Button>
			</div>
		</div>
	);
}
