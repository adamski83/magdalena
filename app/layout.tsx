import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistNunito = Nunito({
	variable: "--font-geist-nunito",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Magdalena",
	description: "Serbian language course",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider afterSignOutUrl='/'>
			<html lang='en'>
				<body className={`${geistNunito.variable} antialiased`}>
					<Toaster />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
