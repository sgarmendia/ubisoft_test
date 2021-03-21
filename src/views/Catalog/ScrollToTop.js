import React, { useEffect, useState } from "react";

export default () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
		top: 0,
		behavior: "smooth"
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
		if (window.pageYOffset > 200) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		isVisible && (
			<a
				className="scrolltotop_button"
				onClick={scrollToTop}
			>
				{/* <span>^</span> */}
			</a>
		)
	);
}