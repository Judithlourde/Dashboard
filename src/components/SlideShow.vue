<template>
	<div class="slideshow" :class="{slideShowView:slideShowView}">
		<button @click="previousImage" class="slideshow__button">
			<img src="/svg/left_arrow.svg" alt="left-arrow">	
		</button>

		<div class="slideshow__slides">
			<figure class="slideshow__slide">
				<img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption v-if="showCaption" class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
		</div>
		

		<button @click="nextImage" class="slideshow__button">
			<img src="/svg/right_arrow.svg" alt="right-arrow">
		</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				slideShowView: false,
				index: 0,
				showCaption: true,
				slides: [
					{ title: 'House', caption: 'Housing Loan', file: '/images/housingloan.jpg' },
					{ title: 'Boat', caption: 'Boat Loan', file: '/images/boatloan.jpg' },
					{ title: 'Car', caption: 'Car Loan', file: '/images/carloan.jpg' },
					{ title: 'Vacation house', caption: 'Vacation house Loan', file: '/images/vacation.jpg' },
				],
			};
		},

		computed: {
			currentSlide() {
				return this.slides[this.index];
			},

			stylingslideShowView() {
				return this.slideShowView
			}
		},

		methods: {
			previousImage() {
				this.index = (this.index === 0) ? this.slides.length - 1 : this.index - 1;
			},

			nextImage() {
				this.index = (this.index === this.slides.length - 1) ? 0 : this.index + 1;
			},

			goToIndex(index) {
				this.index = index;
			}
		}
	};
</script>

<style>
	.slideshow {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}

	.slideshow__button {
		border: 0;
		text-transform: uppercase;
		background: none;
	}

	.slideshow:hover {
		opacity: 1;
	}

	.slideshow__slides {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slideshow__slide {
		width: 100%;
		height: 100%;
	}

	.slideshow__img {
		padding: 0;
		width: 100%;
		max-height: 60vh;
		object-fit: contain;
	}

	.slideshow__caption {
		width: 100%;
		text-align: center;
		font-size: 0.85em;
		padding: 0.5em;
		color: #6429D5;
	}

	.slideshow__button-caption {
		padding: 0.5em;
	}
	
	/* styling slideshow in view */
	/* small devices (mobiles, 768px and down) */
    @media screen and (max-width: 768px) {
		.slideShowView { 
			font-size: 1rem; 
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
		.slideShowView {
			position: absolute;
			z-index: 10;
			max-width: calc(786px + 14%); 
			padding-right: 5%;
			padding-left: 5%;   
			font-size: 1rem; 
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
