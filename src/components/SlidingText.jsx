import '../css/SlidingText.css';

export default function SlidingText({ children }) {
	const getGhostStyle = () => {
		return {
		}
	}

	return (
		<div className="SlidingText">
			<h2>{children}</h2>
			<span className='text-ghost' style={getGhostStyle()}>{children}</span>
		</div>
	);
}