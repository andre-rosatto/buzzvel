import BlockFade from '../components/BlockFade.jsx';
import SlidingText from '../components/SlidingText.jsx';
import '../css/Career.css';

export default function Career() {
	return (
		<main className='Career container pad-lg col gap-lg'>
			<BlockFade index={0}>
				<SlidingText ghostClass='ghost'>
					Envisioning my career at Buzzvel
				</SlidingText>
				<section className='col pad-left-md'>
					<div className="timeline col gap-md">
						<BlockFade index={1}>
							<div className='timeline-item'>
								<div className="row center">
									<img className='timeline-icon' src="../assets/img/career_1.svg" alt="Year 1" />
									<h3 className='timeline-title bold pad-left-md'>Year 1: Foundation and integration</h3>
								</div>
								<div className="col timeline-block pad-left-md gap-sm">
									<p className='line-height-md'><span class="text-highlight bold">Onboarding</span>: I am eager to get familiar with Buzzvel's work philosophy</p>
									<p className='line-height-md'><span class="text-highlight bold">Mentorship</span>: There is so much a senior developer can teach me</p>
									<p className='line-height-md'><span class="text-highlight bold">Initial contributions</span>: I want to learn Buzzvel's coding standards and be part of the team</p>
								</div>
							</div>
						</BlockFade>

						<BlockFade index={2}>
							<div className='timeline-item'>
								<div className="row center">
									<img className='timeline-icon' src="../assets/img/career_2.svg" alt="Year 2-3" />
									<h3 className='timeline-title bold pad-left-md'>Year 2-3: Growth and increased responsibility</h3>
								</div>
								<div className="col timeline-block pad-left-md gap-sm">
									<p className='line-height-md'><span className='text-highlight bold'>Leadership role</span>: I may have enough experience to lead a team and become a senior developer</p>
									<p className='line-height-md'><span className='text-highlight bold'>Innovation</span>: I want to contribute to the future of Buzzvel by helping with the strategic direction</p>
									<p className='line-height-md'><span className='text-highlight bold'>Continuous learning</span>: Not only will keeping up-to-date with new technologies, tools, and trends beneficial for myself, but also instrumental for Buzzvel's future</p>
								</div>
							</div>
						</BlockFade>

						<BlockFade index={3}>
							<div className='timeline-item'>
								<div className="row center">
									<img className='timeline-icon' src="../assets/img/career_3.svg" alt="Year 4-5" />
									<h3 className='timeline-title bold pad-left-md'>Year 4-5: Leadership and innovation</h3>
								</div>
								<div className="col timeline-block pad-left-md gap-sm">
									<p className='line-height-md'><span className='text-highlight bold'>Leadership role</span>: I may have enough experience to lead a team and become a senior developer</p>
									<p className='line-height-md'><span className='text-highlight bold'>Innovation</span>: I want to contribute to the future of Buzzvel by helping with the strategic direction</p>
									<p className='line-height-md'><span className='text-highlight bold'>Continuous learning</span>: Not only will keeping up-to-date with new technologies, tools, and trends beneficial for myself, but also instrumental for Buzzvel's future</p>
								</div>
							</div>
						</BlockFade>
					</div>
				</section>
			</BlockFade>
		</main>
	)
}