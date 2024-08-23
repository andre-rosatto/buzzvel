import BlockFade from "../components/BlockFade.jsx";
import SlidingText from "../components/SlidingText.jsx";

export default function Error() {
	return (
		<main className='Career container pad-lg col gap-lg'>
			<BlockFade index={0}>
				<SlidingText ghostClass='ghost'>
					Something is wrong...
				</SlidingText>
				<section className='col gap-sm pad-left-md'>
					<p className='line-height-sm'>Unfortunately, something has gone terribly wrong...</p>
					<a href='/' className='line-height-sm text-highlight bold'>Take me back to somewhere nice, please.</a>
				</section>
			</BlockFade>
		</main>
	);
}