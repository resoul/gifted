import { cn } from "@/lib/utils";

export function CustomTitle({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<h2 className={cn("leading-6 text-3xl md:text-5xl font-bold text-foreground", className)}>
			{children}
		</h2>
	);
}