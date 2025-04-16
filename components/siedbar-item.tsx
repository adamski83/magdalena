"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
type Props = {
	label: string;
	iconSrc: string;
	href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
	const pathname = usePathname();
	const active = pathname === href;
	return (
		<Button
			variant={active ? "secondaryOutline" : "sidebar"}
			className='justify-start h-[52px]'>
			<Link href={href}>
				<Image
					src={iconSrc}
					alt={label}
					width={32}
					height={32}
					className='mr-5'
				/>
				{label}
			</Link>
		</Button>
	);
};
