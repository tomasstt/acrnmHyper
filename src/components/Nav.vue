<!-- bottomNavigation.vue -->
<template>
	<div class="bottom-nav" :class="{ 'hidden-on-mobile': !isVisible }">
		<div class="blur-bg"></div>
		<div v-for="link in links" :key="link.id" class="nav-item" :class="{ active: activeLink === link.id }" @click="setActiveLink(link.id)">
			{{ link.label }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeLink: 1,
			links: [
				{ id: 1, label: "Acronym" },
				{ id: 2, label: "Team" },
				{ id: 3, label: "Cooperation" },
				{ id: 4, label: "Projects" },
				{ id: 5, label: "Contact" },
			],
		}
	},
	computed: {
		isVisible() {
			// Mobile visibility based on scroll and window width
			if (window.innerWidth <= 1000) {
				return this.isScrolled
			}
			return true // Always visible on desktop
		},
	},

	methods: {
		setActiveLink(linkId) {
			this.activeLink = linkId
			this.$emit("navigate", linkId) // Emitting an event with the linkId
		},
		handleScroll() {
			const bottomNav = document.querySelector(".bottom-nav")
			if (window.pageYOffset > 50) {
				if (bottomNav.classList.contains("hidden-on-mobile")) {
					bottomNav.classList.remove("hidden-on-mobile")
				}
			} else {
				if (!bottomNav.classList.contains("hidden-on-mobile")) {
					bottomNav.classList.add("hidden-on-mobile")
				}
			}
		},
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.handleScroll)
	},
}
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pp-neue-montreal");

::selection {
	background-color: none; /* Set the background color when text is selected */
	color: white; /* Set the text color when text is selected */
}
div {
	border-radius: 69px;
}


@media (max-width: 1000px) {
	.bottom-nav.hidden-on-mobile {
		display: none !important; /* Ensure the nav is hidden */
	}

	.bottom-nav {
        position: fixed;
        bottom: 0; /* Align to the bottom */
        left: 10px; /* Add 16px margin to the left */
        right: 10px; /* Add 16px margin to the right */
        box-sizing: border-box; /* Ensures padding doesn't add to the width */
        width: auto; /* Auto width to respect left/right margins */
        display: flex;
        justify-content: space-between;
        align-items: center; /* Vertically center items within the nav */
        border-radius: 30px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.13);
        backdrop-filter: blur(17.5px);
        margin-bottom: 0.5cm; /* Adjust distance from the bottom if necessary */
    }

    /* Adjust nav-item styles if necessary */
	.nav-item {
		cursor: pointer;
		padding: 10px 6px; /* Adjust padding as needed */
		font-family: "PP Neue Montreal";
		font-size: 13px; /* Adjust font size as needed */
		color: white;
		background: transparent;
		border: solid 1px transparent;
		transition: all 0.3s ease;
	}

	/* Additional styles for hover, active, etc. */
	/* ... */


	.nav-item:hover {
		border: solid 1px rgb(255, 255, 255);
		border-radius: 69px;
		background-color: transparent;
		transition: transform 0.3s;
		transform: scale(1.05); /* Scale up effect on hover */
		border-color: rgb(255, 255, 255);
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

@media (min-width: 1000px) {
	.bottom-nav {
		position: fixed;
		bottom: 1cm;
		left: 50%;

		transform: translateX(-50%);
		display: flex;
		justify-content: space-between;
		width: 598px;
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
</style>
