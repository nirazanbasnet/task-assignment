import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Header />

			<HeroSection />

			<main>
				<img src="./img.png" alt="..." />
			</main>
		</>
	);
}
