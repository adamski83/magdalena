import { Button } from "@/components/ui/button";
import Image from "next/image";
import RS from "../../public/RS.svg";
import PL from "../../public/PL.svg";
import GE from "../../public/GE.svg";
import DE from "../../public/DE.svg";
import React from "react";

export const Footer = () => {
	return (
		<footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
			<div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
				<Button size='lg' variant='ghost'>
					<Image
						src={RS}
						alt='Serbian'
						height={32}
						width={40}
						className='mr-4 rounded-md'
					/>
					Serbian
				</Button>
				<Button size='lg' variant='ghost'>
					<Image
						src={PL}
						alt='Polish'
						height={32}
						width={40}
						className='mr-4 rounded-md'
					/>
					Polish
				</Button>
				<Button size='lg' variant='ghost'>
					<Image
						src={GE}
						alt='Georgian'
						height={32}
						width={40}
						className='mr-4 rounded-md'
					/>
					Georgian
				</Button>
				<Button size='lg' variant='ghost'>
					<Image
						src={DE}
						alt='German'
						height={32}
						width={40}
						className='mr-4 rounded-md'
					/>
					German
				</Button>
			</div>
		</footer>
	);
};
