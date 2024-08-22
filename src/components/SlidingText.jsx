import '../css/SlidingText.css';

export default function SlidingText({ children }) {
	return (
		<div className="SlidingText">
			<h2>{children}</h2>
		</div>
	);
}