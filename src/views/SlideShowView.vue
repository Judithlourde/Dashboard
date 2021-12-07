<template>
	<section class="slideshow-view">
		<button @click="previousImage" class="slideshow-view__button">
			<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M27.814 9.41882L9.33424 20.8521L27.5182 32.7503L27.814 9.41882Z" fill="black"/>
			</svg>
		</button>

		<div class="slideshow-view__slides">
			<figure class="slideshow-view__slide">
				<img class="slideshow-view__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption v-if="showCaption" class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
		</div>
		

		<button @click="nextImage" class="slideshow-view__button">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.3333 31.6667L31.6667 20L13.3333 8.33333V31.6667Z" fill="black"/>
			</svg>
		</button>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				showCaption: false,
				slides: [
					{ title: 'House', caption: 'House', file: '/images/housingloan.jpg' },
					{ title: 'Boat', caption: 'Boat', file: '/images/boatloan.jpg' },
					{ title: 'Car', caption: 'Car', file: '/images/carloan.jpg' },
					{ title: 'Vacation house', caption: 'Vacation house', file: '/images/vacation.jpg' },
				],
			};
		},

		computed: {
			currentSlide() {
				return this.slides[this.index];
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
	.slideshow-view {
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
        max-width: calc(486px + 14%);
        max-width: calc(786px + 14%);
        margin-right: auto;
        margin-left: auto;
        padding-right: 5%;
        padding-left: 5%;  
        padding-top: 10vh; 
        font-size: 1rem; 
	}

	.slideshow-view__button {
		border: 0;
		text-transform: uppercase;
		background: none;
	}

	.slideshow:hover .slideshow__caption {
		opacity: 1;
	}

	.slideshow__slides {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slideshow-view__slide {
		width: 100%;
		height: 100%;
	}

	.slideshow-view__img {
		padding: 0;
		width: 100%;
		max-height: 60vh;
		object-fit: contain;
	}

	.slideshow-view__caption {
		/* position: absolute; */
		/* left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 0.75em; */
		/* padding: 0.5em; */
	}

	.slideshow-view__button-caption {
		padding: 0.5em;
	}	
</style>
