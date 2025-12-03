import { cn } from "@/lib/utils";

export function CustomBadge({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={cn("py-1 text-indigo-600 font-semibold border-b-2 border-indigo-600 mb-1.5", className)}>
			{children}
		</div>
	);
}