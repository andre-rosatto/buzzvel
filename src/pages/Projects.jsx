import Navbar from '../components/Navbar.jsx';
import BlockFade from '../components/BlockFade.jsx';
import SlidingText from '../components/SlidingText.jsx';
import Carousel from '../components/Carousel.jsx';
import '../css/Projects.css';

export default function Projects() {
	return (
		<>
			<Navbar index={2} />
			<main className='Projects container pad-lg col gap-lg'>
				<BlockFade
					index={0}
				>
					<SlidingText ghostClass='ghost'>
						Buzzvel Key Projects
					</SlidingText>
					<div className='col gap-sm center'>
						<section className='carousel-wrapper pad-sm'>
							<Carousel
								step={800}
								previousButtonClass='previous-button'
								previousButtonDisabledClass='carousel-button-disabled'
								nextButtonClass='next-button'
								nextButtonDisabledClass='carousel-button-disabled'
								pipClass='pip'
								pipCurrentClass='current'
							>
								<ul className='row'>
									{/* Viplant */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/viplant' target='_blank' rel="noreferrer" title='Viplant' >
											<img className='carousel-card-img' src='../assets/img/viplant.webp' alt='Viplant' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>Viplant<span className='carousel-card-category text-highlight'>E-commerce</span></h3>
												<p className='line-height-md pad-sm'>We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.</p>
											</div>
										</a>
									</li>
									{/* Traquinices */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/traquinices' target='_blank' rel="noreferrer" title='Traquinices' >
											<img className='carousel-card-img' src='../assets/img/traquinices.webp' alt='Traquinices' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>Traquinices<span className='carousel-card-category text-highlight'>Retail</span></h3>
												<p className='line-height-md pad-sm'>Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.</p>
											</div>
										</a>
									</li>
									{/* DBS */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/dbs' target='_blank' rel="noreferrer" title='DBS' >
											<img className='carousel-card-img' src='../assets/img/dbs.webp' alt='DBS' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>DBS<span className='carousel-card-category text-highlight'>Health</span></h3>
												<p className='carousel-card-text pad-sm'>We built this platform and APP that allowed primary users to track medical tests.</p>
											</div>
										</a>
									</li>
									{/* Miss Can */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/miss-can' target='_blank' rel="noreferrer" title='Miss Can' >
											<img className='carousel-card-img' src='../assets/img/miss_can.webp' alt='Miss Can' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>Miss Can<span className='carousel-card-category text-highlight'>Ecommerce</span></h3>
												<p className='carousel-card-text pad-sm'>A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.</p>
											</div>
										</a>
									</li>
									{/* ThinkFeridas */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/thinkferidas' target='_blank' rel="noreferrer" title='ThinkFeridas' >
											<img className='carousel-card-img' src='../assets/img/thinkferidas.webp' alt='ThinkFeridas' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>ThinkFeridas<span className='carousel-card-category text-highlight'>Health Wound App</span></h3>
												<p className='carousel-card-text pad-sm'>ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.</p>
											</div>
										</a>
									</li>
									{/* Vigias da Arriba */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/vigias-da-arriba' target='_blank' rel="noreferrer" title='Vigias da Arriba' >
											<img className='carousel-card-img' src='../assets/img/vigias_da_arriba.webp' alt='Vigias da Arriba' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>Vigias da Arriba<span className='carousel-card-category text-highlight'>Luxury Real State Microsite</span></h3>
												<p className='carousel-card-text pad-sm'>Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.</p>
											</div>
										</a>
									</li>
									{/* Portugual Advanced Club */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/portugal-advanced-health' target='_blank' rel="noreferrer" title='Portugual Advanced Health' >
											<img className='carousel-card-img' src='../assets/img/portugal_advanced_health.webp' alt='Portugual Advanced Health' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>Portugual Advanced Health<span className='carousel-card-category text-highlight'>Health CRM & Website & Call Center System</span></h3>
												<p className='carousel-card-text pad-sm'>Portugal Advanced Health or PAH is an innovative and pioneering project in the area of health in Portugal, specializing in hyperbaric treatments at 1.4atm (atmosphere).</p>
											</div>
										</a>
									</li>
									{/* Hotspotty */}
									<li className='carousel-card'>
										<a className='col center' href='https://buzzvel.com/portfolio/hotspotty' target='_blank' rel="noreferrer" title='Hotspotty' >
											<img className='carousel-card-img' src='../assets/img/hotspotty.webp' alt='Hotspotty' />
											<div className='col gap-sm pad-md carousel-card-text'>
												<h3 className='carousel-card-title'>Hotspotty<span className='carousel-card-category text-highlight'>SaaS Software in Helium Network</span></h3>
												<p className='carousel-card-text pad-sm'>An innovative "All-in-One" platform to plan, manage and optimize decentralized networks such as the global Helium network for the Internet of Things.</p>
											</div>
										</a>
									</li>
								</ul>
							</Carousel>
						</section>
					</div>
				</BlockFade>
			</main>
		</>
	);
}