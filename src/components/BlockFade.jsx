import '../css/BlockFade.css';

export default function BlockFade({ children, index }) {
	const style = {
		animationName: index % 2 === 0 ? 'slide-left-and-fadein' : 'slide-right-and-fadein',
		animationDelay: `${Math.max(0, index ?? 0) / 2}s`,
	};

	console.log(style);


	return (
		<section className='BlockFade' style={style}>{children}</section>
	);
}