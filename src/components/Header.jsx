import React from "react";
import Instagram from "./Icons/Instagram";

function Header() {
	return (
		<header className="relative z-10">
			<div className="bg-[#34d6ff] px-5 py-3">
				<div className="max-w-6xl mx-auto">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3 text-xs text-neutral-600">
							<span>Mon-Fri: 9AM - 5PM</span>
							<a href="mailto:yourbusiness@business.com">
								yourbusiness@business.com
							</a>
						</div>
						<div className="flex items-center gap-1">
							<a href="#">
								<Instagram />
							</a>
							<a href="#">
								<Instagram />
							</a>
							<a href="#">
								<Instagram />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="px-5">
				<div className="max-w-6xl py-2 mx-auto text-white">
					<div className="flex items-center justify-between">
						<div className="">
							<a href="#" className="text-4xl font-medium">
								Business Logo
							</a>
						</div>
						<nav>
							<ul className="flex items-center gap-4 font-medium">
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Projects</a>
								</li>
								<li>
									<a href="#">Services</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
