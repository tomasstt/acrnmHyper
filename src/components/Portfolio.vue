<template>
	<div >
		<!-- <div class="pt-2 z-213"></div> -->
		<!-- First Section -->

		<!-- Second Section -->
		<div class="section">
			<div class="oop"></div>
			<div>
				<section class="h-screen bg-black relative second-section">
					<!-- Parallax background -->
					<div class="parallax-bg"></div>
					<div class="h-full flex flex-col items-center md:flex-row">
						<!-- Text and button (for all screens) -->
						<div ref="textElement" data-scroll data-scroll-speed="1" data-scroll-delay="0.1" class="text-left md:absolute static md:mt-[0px] mt-[60px] pl-[16px] bottom-[100px] z-10 md:text-left w-full text-white md:pl-[80px]">
							<p class="text-xs montreal not-italic font-normal leading-[normal]">SEPTEMBER 2023</p>
							<h1 class="w-full canela md:w-[407px] mt-4 md:mt-[12px] md:text-[50px] text-[28px] not-italic font-thin leading-[normal]">
								Sagrop - Agriculture <br class="hide-on-mobile" />
								portfolio.
							</h1>
							<router-link to="/sagrop"
								><button class="button-hover-effect canela mt-6 md:mt-10 inline-flex items-center gap-1.5 border px-8 py-4 rounded-full border-[rgba(255,255,255,0.20)] text-white text-xl font-thin transition-all duration-300 hover:bg-white hover:text-black hover:border-black">
									View Project
									<img class="arrow transform transition-transform duration-300" src="../assets/arrow.svg" alt="" />
								</button>
							</router-link>
						</div>
						<!-- Image on the right (for all screens) -->
						<img class="w-full h-auto md:w-auto md:h-full absolute right-0 bottom-0 object-cover" src="@/assets/macbook.png" alt="" />
					</div>
				</section>
			</div>
		</div>

		<!-- Second Section -->
		<div>
			<section class="h-screen bg-black relative second-section">
				<div class="h-full flex flex-col items-center md:flex-row">
					<!-- Text and button (for all screens) -->
					<div ref="textElement" data-scroll data-scroll-speed="1" data-scroll-delay="0.1" class="text-left absolute  bottom-[100px] pl-[16px] z-10 md:text-left w-full md:mt-0 mt-[60px] text-white md:pl-[80px]">
						<p class="text-xs montreal not-italic font-normal leading-[normal]">WIP 2024</p>
						<h1 class="w-full canela md:w-[467px] mt-4 md:mt-[12px] md:text-[50px] text-[28px] not-italic font-thin leading-[normal]">
							Luxvital - Supplements<br class="hide-on-mobile" />
							eCommerce.
						</h1>
						<router-link to="/luxvital">
							<button class="button-hover-effect canela mt-6 md:mt-10 inline-flex items-center gap-1.5 border px-8 py-4 rounded-full border-[rgba(255,255,255,0.20)] text-white text-xl font-thin transition-all duration-300 hover:bg-white hover:text-black hover:border-black">
								View Project
								<img class="arrow transform transition-transform duration-300" src="../assets/arrow.svg" alt="" />
							</button>
						</router-link>
					</div>
					<!-- Image on the right (for all screens) -->
					<img class="w-auto h-full md:w-full md:h-full absolute md:right-0 z-1 object-cover" src="@/assets/phone.png" alt="" />
				</div>
			</section>
		</div>
	</div>
</template>
<script>

</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Sintony";
.arrow {
	margin-left: 6px;
	filter: invert(1);
}
.button-hover-effect:hover .arrow {
	transform: translateX(5px); /* Move arrow to the right on hover */
	filter: invert(0);
}
button:hover {
	background: white;
}
</style>
