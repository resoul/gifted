import { cn } from "@/lib/utils";

export function CustomSubtitle({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<p className={cn("text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", className)}>
			{children}
		</p>
	);
}