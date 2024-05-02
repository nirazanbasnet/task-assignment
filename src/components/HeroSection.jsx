import React from "react";
import ImageSlider from "./ImageSlider";
import Image from "next/image";

function HeroSection() {
	return (
		<section className="mb-4">
			<div className="relative bg-gradient-to-t from-[#3a4cb0] to-[#192650] pt-20  text-white h-[calc(100vh-224px)] -mt-[56px] flex items-center justify-center">
				<div className="relative z-10 px-5">
					<div className="flex-1 max-w-6xl mx-auto">
						<div className="relative grid grid-cols-2">
							<div>
								<span className="block mb-5 text-lg">
									Building with Confidence
								</span>
								<h1 className="capitalize text-[80px] leading-[96px] font-bold mb-5">
									<span className="text-[#34d6ff]">Building</span> and{" "}
									<span className="text-[#34d6ff]">Maintaining</span> your
									dreams
								</h1>
								<p className="text-lg">
									Fast, friendly home repair service done right the first time
									!!
								</p>
								<div className="mt-8">
									<a
										href="#"
										className="bg-white text-[#4273c1] px-[60px] py-5 inline-block text-lg font-medium"
									>
										Explore More
									</a>
								</div>
							</div>
							<ImageSlider />
						</div>
					</div>
				</div>
				<div className="absolute inset-0 opacity-10">
					<Image
						src="/hero-banner.jpg"
						layout="fill"
						className="object-cover size-full"
						alt=""
					/>
				</div>
			</div>
			<div className="bg-[#34d6ff] text-white py-14 px-5">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-[48px] font-bold">20+ Years of Experience</h2>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
