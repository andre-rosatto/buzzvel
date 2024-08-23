import BlockFade from '../components/BlockFade.jsx';
import SlidingText from '../components/SlidingText.jsx';
import '../css/Career.css';

export default function Career() {
	return (
		<main className='Career container pad-lg col gap-lg'>
			<BlockFade
				index={0}
			>
				<SlidingText ghostClass='ghost'>
					Envisioning my career at Buzzvel
				</SlidingText>
			</BlockFade>
		</main>
	)
}