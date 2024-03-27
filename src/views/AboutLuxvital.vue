<template>
	<div class="full-screen-container scroll-container">
		<img class="head-img" src="../assets/luxxvital.svg" alt="Fullscreen Background" />

	
		<div class="info-section">
			<div class="info-content">
				<div class="flex-container">
					<div class="description-side">
                <div class="categories">
                    <span>Visual Identity</span>
                    <span>Content Creation</span>
                </div>
                <h1>Luxvital, is a premier brand dedicated to enhancing health and vitality through our comprehensive range of high-quality vitamins and nutritional supplements. Based in the heart of health-conscious communities, Luxvital prides itself on sourcing the finest ingredients to support a balanced diet and promote optimal well-being for every individual.</h1>
            </div>  <main class="main-content">

					<div class="team-info-container">
						<p class="description">Luxvital is also at the forefront of nutritional research, continuously exploring innovative formulations that deliver tangible health benefits.</p>

						<div class="team-info">
							<p>Alexander Jakub Moravcik | Back-end development</p>
							<hr />
							<p>Tomas Takacs | Front-end development</p>
							<hr />
							<p>Vladyslav Titarenko | UI/UX Design</p>
						</div>
					</div>
					</main>
				</div>
			</div>
		</div>
		<img class="head-img" src="../assets/luxvital.svg" alt="Fullscreen Background" />

		<ContactVue></ContactVue>
	</div>
	<div class="bottom-nav">
		<div class="blur-bg"></div>
		<div v-for="link in links" :key="link.id" class="nav-item" :class="{ active: activeLink === link.id }" @click="handleNavClick(link)">
			{{ link.label }}
		</div>
	</div>
</template>
<script>
import ContactVue from "../components/Contact.vue"
import LocomotiveScroll from "locomotive-scroll"

export default {
	components: {
		ContactVue,
	},
	mounted() {
		this.$nextTick(() => {
			const scrollContainer = document.querySelector(".scroll-container")
			if (scrollContainer) {
				this.initLocomotiveScroll()
			} else {
				console.error("Scroll container not found")
			}
		})
	},

	data() {
		return {
			activeLink: null,
			links: [
				{ id: 1, label: "Visit site", url: "https://luxvital.sk/" },
				{ id: 2, label: "Close" },
			],
		}
	},
	methods: {
		initLocomotiveScroll() {
			this.scroll = new LocomotiveScroll({
				el: document.querySelector(".scroll-container"),
				smooth: true,
			})
		},
		handleNavClick(link) {
			if (link.label === "Visit site" && link.url) {
				window.open(link.url, "_blank") // Opens the link in a new tab
			} else if (link.label === "Close") {
				window.history.back() // Takes the user back in their browser history
			}
		},
	},
	beforeDestroy() {
		if (this.scroll) this.scroll.destroy()
	},
}
</script>

<style scoped>
* {
	font-family: PP Neue Montreal;
}
::selection {
	background-color: none; /* Set the background color when text is selected */
	color: white; /* Set the text color when text is selected */
}
.bottom-nav {
	border-radius: 69px;
}.team-info-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Adjust as needed */
}

@media (max-width: 1000px) {
  .main-content {
  }
 

  .team-info-container {
    flex-direction: column; /* Stack the children vertically */
	font-size: 20px;

  }
.team-info{
	margin-left: 30px;
	font-size: 20px;
}
  .team-info-container span {
    margin-bottom: 10px; /* Add space between the team info items */
  }
}

@media (max-width: 1000px) {
	.bottom-nav {
		position: fixed;
		bottom: 0.5cm;
		left: 50%;

		transform: translateX(-50%);
		display: flex;
		justify-content: space-between;
		width: auto;
		border-radius: 30px;
		padding: 10px;
		background: rgba(0, 0, 0, 0.13);
		backdrop-filter: blur(17.5px);
	}
	.nav-item:hover {
		border: solid 1px rgb(255, 255, 255);
		border-radius: 69px;
		background-color: transparent;
		transition: transform 0.3s;
		transform: scale(1.05); /* Scale up effect on hover */
		border-color: rgb(255, 255, 255);
	}
	.nav-item {
		cursor: pointer;
		padding: 14px 10px;

		background: transparent;
		font-family: "PP Neue Montreal";
		font-size: 13px;

		color: white;

		border: solid 1px transparent;
		transition: all 0.3s ease; /* Transition for all properties */
	}

	.nav-item:hover {
		transform: scale(1.05); /* Scale up effect on hover */
		border-color: rgb(255, 255, 255);
		background-color: transparent;
	}

	.nav-item:active {
		transform: scale(0.95); /* Scale down effect on active */
		background-color: rgba(255, 255, 255, 0.2); /* Subtle color change on active */
	}

	.nav-item.active {
		border-color: rgb(255, 255, 255);
		border-radius: 69px;
		transition: background-color 0.5s, transform 0.3s; /* Longer transition for background-color */
	}

	.blur-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		backdrop-filter: blur(100px);
	}
}
@media (max-width: 1000px) {

.description{

	display: flex;
	align-content: space-between;
	align-items: space-between;
	width: 100%;

	padding-left: 30px;
	padding-right: 30px;}
.team-info-container {
	display: flex;
	align-content: space-between;
	align-items: space-between;
	width: 100%;
	margin-left: -10px;
}}
@media (min-width: 1000px) {

.description{

	display: flex;
	align-content: space-between;
	align-items: space-between;
	width: 100%;

	padding-left: 30px;
	padding-right: 30px;}
.team-info-container {
	display: flex;
	align-content: space-between;
	align-items: space-between;
	width: 100%;
	margin-left: -10px;
}}
@media (min-width: 1000px) {
	.bottom-nav {
		position: fixed;
		bottom: 1cm;
		left: 50%;

		transform: translateX(-50%);
		display: flex;
		justify-content: space-between;
		width: 200px;
		border-radius: 30px;
		padding: 10px;
		background: rgba(0, 0, 0, 0.13);
		backdrop-filter: blur(17.5px);
	}
	.nav-item:hover {
		border: solid 1px rgb(255, 255, 255);
		border-radius: 69px;
		background-color: transparent;
		transition: transform 0.3s;
		transform: scale(1.05); /* Scale up effect on hover */
		border-color: rgb(255, 255, 255);
	}
	.nav-item {
		cursor: pointer;
		padding: 8px 12px;
		background: transparent;
		font-family: "PP Neue Montreal";
		font-size: 20px;
		color: white;

		border: solid 1px transparent;
		transition: all 0.3s ease; /* Transition for all properties */
	}

	.nav-item:hover {
		transform: scale(1.05); /* Scale up effect on hover */
		border-color: rgb(255, 255, 255);
		background-color: transparent;
	}

	.nav-item:active {
		transform: scale(0.95); /* Scale down effect on active */
		background-color: rgba(255, 255, 255, 0.2); /* Subtle color change on active */
	}

	.nav-item.active {
		border-color: rgb(255, 255, 255);
		border-radius: 69px;
		transition: background-color 0.5s, transform 0.3s; /* Longer transition for background-color */
	}

	.blur-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		backdrop-filter: blur(100px);
	}
}

.head-img {
	width: 100%; /* Cover the full viewport width */
	height: 100vh; /* Cover the full viewport height */
	object-fit: cover; /* Ensure the image covers the area without losing its aspect ratio */
	position: relative; /* Position it absolutely within its relative container */
	z-index: -1; /* Ensure it stays behind the content */
}

.full-screen-container {
	position: relative; /* Needed to position the .head-img absolutely within it */
	min-height: 100vh; /* Ensure container covers the full viewport height */
	display: flex;
	flex-direction: column;
}


.categories {
	display: flex;
	gap: 10px;
	margin-bottom: 20px; /* Space below categories */
}

.categories span {
	background: transparent; /* Transparent background for the category labels */
	color: #ffffff; /* White text color for the category labels */
	border: 1px solid #ffffff; /* White border */
	padding: 10px 20px; /* Padding inside the category labels */
	border-radius: 25px; /* Rounded corners for the category labels */
}



h1 {
	font-size: 45px; /* Large text for the main title */
	margin-bottom: 30px; /* Space below the main title */
	line-height: 1.2;
	font-weight: 400;
	width: 100%;
}

p {
	font-size: 30px; /* Adjust font size for paragraph */
	margin-bottom: 30px; /* Space below paragraph */
}
.info-section {
    display: flex;	background: #121212;
color: white;
    align-items: center; /* Center the content vertically */
    justify-content: center; /* Center the content horizontally */
    min-height: 100vh; /* Take at least full height of the viewport */
}

.info-content {
    display: flex;
    align-items: center; /* Align items vertically */
    width: 100%;
    margin: 0 auto; /* Center the content */
    padding: 0 30px; /* Padding on the sides */
}

.description-side, .team-info-side {
    flex: 1; /* Each side takes up half the space */
    padding: 20px; /* Padding inside each side */
}

.team-info p {
    margin: 10px 0; /* Space between team info paragraphs */
	font-size: 20px;
}

.team-info hr {
    border: 0;
	font-size: 20px;

    height: 1px;
    background-color: white; /* White horizontal divider */
    margin: 20px 0; /* Space around the divider */
}

/* Add media queries as needed to ensure responsiveness */
@media (max-width: 768px) {
	.info-section {
		padding: 40px 5%;
	}

	h1 {
		font-size: 30px; /* Smaller text for the main title on mobile */
	}

	.team-info p {
		font-size: 20px; /* Smaller font size for team info on mobile */
	}
}
</style>
