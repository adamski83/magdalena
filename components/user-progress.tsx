import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import heart from "./../public/heart.svg";
import point from "./../public/points.svg";
import { courses } from "@/db/schema";
import { Button } from "./ui/button";
import { log } from "console";

type Props = {
	activeCourse: typeof courses.$inferSelect;
	hearts: number;
	points: number;
	hasActiveSubscription: boolean;
};
export const UserProgress = ({
	activeCourse,
	points,
	hearts,
	hasActiveSubscription,
}: Props) => {
	return (
		<div className='flex items-center justify-between gap-x-2 w-full'>
			<Link href='/courses'>
				<Button variant='ghost'>
					<Image
						src={activeCourse.imageSrc}
						alt={activeCourse.title}
						width={32}
						height={32}
						className='rounded-md border'
					/>
				</Button>
			</Link>
			<Link href='/shop'>
				<Button variant='ghost' className='text-orange-500'>
					<Image
						src={point}
						height={28}
						width={28}
						alt='Points'
						className='mr-2'
					/>
					{points}
				</Button>
			</Link>
			<Link href='/shop'>
				<Button variant='ghost' className='text-rose-500'>
					<Image
						src={heart}
						height={28}
						width={28}
						alt='Hearts'
						className='mr-2'
					/>
					{!activeCourse ? (
						<InfinityIcon className='h-4 w-4 stroke-[3]' />
					) : (
						hearts
					)}
				</Button>
			</Link>
		</div>
	);
};
