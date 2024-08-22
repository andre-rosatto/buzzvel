import { useEffect, useRef, useState } from 'react';
import '../css/SlidingText.css';

export default function SlidingText({ children, ghostClass }) {
	const ghost = useRef();
	const [viewportY, setViewportY] = useState(window.innerHeight);

	useEffect(() => {
		const onScroll = window.addEventListener('scroll', () => {
			setViewportY(ghost.current ? ghost.current.getBoundingClientRect().top : window.innerHeight);
		});
		setViewportY(ghost.current ? ghost.current.getBoundingClientRect().top : window.innerHeight);
		return () => window.removeEventListener('scroll', onScroll);
	});

	const getGhostStyle = () => {
		const y = Math.min(window.innerHeight, Math.max(viewportY + 100, 1));
		const x = y / window.innerHeight * 200 / 3;
		return {
			filter: `blur(${Math.min(4, window.innerHeight / y + 1)}px)`,
			transform: `translateX(${Math.max(5, x - 15)}%)`,
			opacity: `${Math.min(1, 1 - (y - 150) / (window.innerHeight - 200))}`
		};
	}

	return (
		<div className="SlidingText">
			<h2>{children}</h2>
			<span className={`${ghostClass ?? ''}`} style={getGhostStyle()} ref={ghost}>{children}</span>
		</div>
	);
}