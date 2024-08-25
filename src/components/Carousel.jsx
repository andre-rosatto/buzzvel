import { useEffect, useRef, useState } from 'react';
import '../css/Carousel.css';

export default function Carousel({
	children = [],
	step = 10,
	previousButtonClass = '',
	previousButtonDisabledClass = '',
	nextButtonClass = '',
	nextButtonDisabledClass = '',
	pipClass = '',
	pipCurrentClass = '',
	pipGap = 10,
	allowSwipe = true
}) {
	const [position, setPosition] = useState(0);
	const [isSwipping, setIsSwipping] = useState(false);
	const [lastX, setLastX] = useState(0);
	const [pipsCount, setPipsCount] = useState(1);
	const contentWrapper = useRef();
	const childrenWrapper = useRef();

	useEffect(() => {
		const handleResize = window.addEventListener('resize', () => {
			setPosition(0);
			setPipsCount(Math.round((childrenWrapper.current?.offsetWidth ?? 1) / (contentWrapper.current?.offsetWidth ?? 1)));
		});
		setPipsCount(Math.round((childrenWrapper.current?.offsetWidth ?? 1) / (contentWrapper.current?.offsetWidth ?? 1)));
		return () => window.removeEventListener('resize', handleResize);
	}, [pipsCount]);

	const getMinPosition = () => {
		// gets the maximum the carousel can slide to the left
		return (childrenWrapper.current && contentWrapper.current) ? -childrenWrapper.current.offsetWidth + contentWrapper.current.offsetWidth : 0;
	}

	const slide = offset => {
		const newPosition = Math.max(Math.min(0, position + offset), getMinPosition());
		setPosition(newPosition);
	};

	const startSwipe = e => {
		if (!allowSwipe) return;
		setIsSwipping(true);
		setLastX(e.touches[0].clientX);
	}

	const stopSwipe = () => {
		setIsSwipping(false);
	}

	const swipe = e => {
		if (!isSwipping) return;
		const delta = e.touches[0].clientX - lastX;
		slide(delta);
		setLastX(e.touches[0].clientX);
	}

	const childrenWrapperStyle = {
		transform: `translateX(${position}px)`,
		transition: `${isSwipping ? 'none' : 'transform 1s'}`
	};

	const handleStepClick = direction => {
		// direction: -1 -> slide left; 1 -> slide right
		slide(step * direction);
	}

	const handlePipClick = idx => {
		const newPosition = Math.round(childrenWrapper.current.offsetWidth / pipsCount) * idx;
		setPosition(Math.max(-newPosition, getMinPosition()));
	}

	const currentPip = (contentWrapper.current && childrenWrapper.current) ? Math.round(-position / contentWrapper.current.offsetWidth) : 1;

	return (
		<div className="Carousel">
			<div
				className="Carousel__content-wrapper"
				ref={contentWrapper}
				onTouchStart={startSwipe}
				onTouchEnd={stopSwipe}
				onTouchMove={swipe}
			>
				<div
					className="Carousel__children-wrapper" ref={childrenWrapper}
					style={childrenWrapperStyle}
				>
					{children}
				</div>
			</div>
			<span className={`${previousButtonClass} ${position >= 0 ? previousButtonDisabledClass : ''}`} onClick={() => handleStepClick(1)}></span>
			<span className={`${nextButtonClass} ${position <= getMinPosition() ? nextButtonDisabledClass : ''}`} onClick={() => handleStepClick(-1)}></span>
			<div className="Carousel__pip-wrapper" style={{ gap: `${pipGap}px` }}>
				{[...Array(pipsCount)].map((_, idx) =>
					<span className={`${pipClass} ${idx === currentPip ? pipCurrentClass : ''}`} key={idx} onClick={() => handlePipClick(idx)}></span>
				)}
			</div>
		</div>
	);
}