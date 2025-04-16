import Link from "next/link";
import Image from "next/image";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { SidebarItem } from "./siedbar-item";
import { Loader } from "lucide-react";
import snake from "../public/snake.svg";
import learn from "../public/learn.svg";
import quests from "../public/quests.svg";
import shop from "../public/shop.svg";
import leaderboard from "../public/leaderboard.svg";
import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

export const Sidebar = ({ className }: Props) => {
	return (
		<div
			className={cn(
				"flex  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
				className
			)}>
			<Link href='/learn'>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					<Image src={snake} width={40} height={40} alt='mascot' />
					<h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
						Magdalena
					</h1>
				</div>
			</Link>
			<div className='flex flex-col gap-y-2 flex-1'>
				<SidebarItem label='learn' href='/learn' iconSrc={learn} />
				<SidebarItem label='quests' href='/quests' iconSrc={quests} />
				<SidebarItem label='shop' href='/shop' iconSrc={shop} />
				<SidebarItem
					label='leaderborad'
					href='/leaderborad'
					iconSrc={leaderboard}
				/>
			</div>
			<div className='p-4'>
				<ClerkLoading>
					<Loader className='h-5 w-5 text-muted-foreground animate-spin' />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton afterSignOutUrl='/' />
				</ClerkLoaded>
			</div>
		</div>
	);
};
