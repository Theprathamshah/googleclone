import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Google Clone with Next.js 13",
	description: "Google clone using next js 13 by Pratham Shah",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/* <link rel="icon" href="./favicon.ico" /> */}
			<body className={inter.className}>{children}</body>
		</html>
	);
}
