import '../css/SlidingText.css';

export default function SlidingText({ children, ghostClass }) {
	return (
		<div className="SlidingText">
			<h2>{children}</h2>
			<span className={`${ghostClass ?? ''}`}>{children}</span>
		</div>
	);
}