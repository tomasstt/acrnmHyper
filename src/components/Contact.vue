<template>
	<div class="ass">
		<div class="cont">
			<div class="text" data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
				<div class="centered-text">
					<h1>Kontaktujte nás.</h1>
					<p>
						Radi spolupracujeme s ambicióznymi a inovatívnymi klientmi. Našu <br />
						prácu vedie vášeň k tomu, čo robíme, a zvedavosť voči vašim výzvam. <br />
						Vždy sme otvorení diskutovať o nových možnostiach a nápadoch. <br />
						Stačí nám napísať email alebo zavolať.
					</p>
					<!-- <p>
						Náš záväzok k inováciám a odvážnym projektom nás spája s našimi klientmi. Naša <br />
						práca je poháňaná vášňou pre tvorivosť a zvedavosť voči vašim <br />
						výzvam. Vždy sme pripravení na diskusie o nových možnostiach a nápadoch. <br />
						Stačí nás kontaktovať cez e-mail alebo telefonicky.
					</p> -->
					<button class="mail" @click="composeEmailInGmail">
						Napíšte

						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
							<path d="M7.51063 0.5L6.85582 1.15637L10.2273 4.53577H0V5.46411H10.2273L6.85582 8.84363L7.51063 9.5L12 4.99994L7.51063 0.5Z" fill="black" />
						</svg>
					</button>
					<div class="socs"><a href="">Behance</a><a href="https://www.instagram.com/acronym.sk/?hl=sk">Instagram </a></div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="left">
				<p>info@acronym.sk</p>
			</div>
			<div class="right">
				<p class="spc">Privacy Policy</p>

				<p>Terms & Conditions</p>
			</div>
		</div>
	</div>
	<div class="added"></div>
</template>

<script>
export default {
	methods: {
		composeEmailInGmail() {
			const recipient = "INFO@ACRONYM.SK"
			const subject = encodeURIComponent("Website Discussion")
			const bodyText = `
Účel webovej stránky:
- Čo je hlavným cieľom vašej webovej stránky?
- Opíšte povahu svojho podniku alebo projektu.
- Kto je vaša cieľová skupina?

Preferencie dizajnu:
- Máte na mysli nejaké farebné schémy alebo témy?
- Existujú nejaké webové stránky, ktoré obdivujete?

Funkčnosť a vlastnosti:
- Aké konkrétne funkcie potrebujete?

Rozpočet a časový plán:
- Aký je váš rozpočet na tento projekt?
- Aký je váš požadovaný časový harmonogram dokončenia webovej stránky?

Priebežná údržba a podpora:
- Budete potrebovať pomoc s priebežnou údržbou?
- Máte záujem o priebežnú podporu alebo marketingové služby po spustení?
`

			const body = encodeURIComponent(bodyText)

			const gmailComposeUrl = `https://mail.google.com/mail/u/0/?fs=1&tf=1&to=${recipient}&su=${subject}&body=${body}&view=cm`
			window.open(gmailComposeUrl, "_blank")
		},
	},
}
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pp-neue-montreal");

svg {
	margin-left: 6px;
}
body {
	overflow: hidden;
}
.socs a {
	color: #000;
	text-decoration: none;
}

@keyframes reset {
	from {
		transform: scale(1.1);
	}
	to {
		transform: scale(1);
	}
}


.mail svg {
	margin-left: 6px;
	transition: transform 0.3s ease; /* Transition for the arrow */
	transform: scale(1.2); /* Slightly larger arrow */
}

.mail:hover {
	background-color: #000; /* Example hover effect: change background color */
	color: #fff; /* Change text color */
	transform: scale(1.04); /* Slightly enlarge the button on hover */
}

.mail:hover svg {
	transform: translateX(5px) scale(1.2); /* Move the arrow to the right on hover */
	filter: invert(100%); /* Invert the colors */
}

.mail:active svg {
	filter: invert(100%); /* Invert the colors */
}

.ass {
	background: #e4ff78;
}
.cont {
	background: #e4ff78;
	width: 100%;
	min-height: 100vh;
	font-family: PP Neue Montreal;

	display: flex;
	justify-content: center; /* Centers horizontally */
	align-items: center; /* Centers vertically */
	place-content: center;
}

.centered-text {
	display: flex;
	flex-direction: column;

	align-items: center; /* Align items horizontally */
	justify-content: center; /* Align items vertically */
}
@media (min-width: 1000px) {
	.centered-text h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		place-content: center;
		height: 100%;
		width: 100%;
		color: rgb(0, 0, 0);
		margin-bottom: 20px;
		font-family: PP Neue Montreal;
		font-size: 62px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	.mail {
	padding: 15px 30px; /* Increased padding for larger button */
	font-size: 20px; /* Larger font size */
	border-radius: 69px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	display: flex;
	place-content: center;
	justify-content: center;
	margin-top: 30px;
	cursor: pointer;
	color: black;
	align-items: center;
	background: transparent;
	text-align: center;
	transition: all 0.3s ease; /* Smooth transition for hover effects */
}

	.centered-text p {
		display: flex;
		justify-content: center;
		place-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		color: #000;
		text-align: center;
		font-family: PP Neue Montreal;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.spc {
		margin-right: 24px;
	}
	.left {
		/* Styles for the left part */
		text-align: left;
		padding: 30px;
	}

	.right {
		padding: 30px; /* Styles for the right part */
		text-align: right;
		display: flex;
	}
	.footer {
		display: flex;
		align-items: flex-end;
		width: 100%;
		font-family: PP Neue Montreal;
		font-size: 20px;

		justify-content: space-between;
		align-items: center;
	}
	.socs {
		display: flex;
		justify-content: space-between;
		width: 200px;
		position: absolute;
		margin-top: 700px;
		color: #000;
		text-align: center;
		text-decoration: none;
		font-family: PP Neue Montreal;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
}
@media (max-width: 1000px) {
	.centered-text h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		place-content: center;
		height: 100%;
		width: 100%;
		color: rgb(0, 0, 0);

		margin-bottom: 20px;
		font-family: PP Neue Montreal;
		font-size: 44px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding-left: 16px;
		padding-right: 16px;
	}
	.centered-text p br {
		display: none;
	}

	.mail {
	padding: 10px 20px; /* Increased padding for larger button */
	font-size: 18px; /* Larger font size */
	border-radius: 69px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	display: flex;
	place-content: center;
	justify-content: center;
	margin-top: 30px;
	cursor: pointer;
	color: black;
	align-items: center;
	background: transparent;
	text-align: center;
	transition: all 0.3s ease; /* Smooth transition for hover effects */
}

	.centered-text p {
		display: flex;

		justify-content: center;
		place-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		padding-left: 16px;
		padding-right: 16px;
		color: #000;
		text-align: center;
		font-family: PP Neue Montreal;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.footer {
		flex-direction: column;
		text-align: center;
		font-family: PP Neue Montreal;
		margin-bottom: -220px;
		
	}

	.left,
	.right {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.left p,
	.right p {
		margin: 10px 0; /* Adds space between each line */
		
	}


	.socs {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 40px; /* Adds space above the social links */
	}

	.socs a {
		margin: 10px 0; /* Adds space between social links */
	}
}


@media (max-width: 340px) and (min-width: 40px) {
	.centered-text h1 {
	font-size: 30px;
	}

	.centered-text p {
	font-size: 16px;
	}

}
</style>
