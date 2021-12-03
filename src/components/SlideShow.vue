<template>
	<div class="slideshow">
		<div class="slideshow__buttons">
			<button @click="previousImage" class="slideshow__button">
				<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M27.814 9.41882L9.33424 20.8521L27.5182 32.7503L27.814 9.41882Z" fill="black"/>
				</svg>
			</button>

			<button @click="nextImage" class="slideshow__button">
				<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.3333 31.6667L31.6667 20L13.3333 8.33333V31.6667Z" fill="black"/>
				</svg>
			</button>
		</div>

		<div class="slideshow__slides">
			<figure class="slideshow__slide">
				<img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption v-if="showCaption" class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				showCaption: false,
				slides: [
					{ title: 'House', caption: 'House', file: '/src/assets/images/housingloan.jpg' },
					{ title: 'Boat', caption: 'Boat', file: '/src/assets/images/boatloan.jpg' },
					{ title: 'Car', caption: 'Car', file: '/src/assets/images/carloan.jpg' },
					{ title: 'Vacation house', caption: 'Vacation house', file: '/src/assets/images/vacation.jpg' },
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
	@media screen and (min-width:786px) {
		.slideshow {
			position: relative;
			height: 80%;
			width: 80%;
			margin: 20px;
		}
	}
	.slideshow:hover .slideshow__caption {
		opacity: 1;
	}

	.slideshow__slides {
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.slideshow__slide {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.slideshow__img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.slideshow__caption {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 0.75em;
		padding: 0.5em;
	}

	.slideshow__extra {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.slideshow__button-caption {
		padding: 0.5em;
	}

	.slideshow__buttons {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		display: flex;
		justify-content: space-between;
	}

	.slideshow__button {
		border: 0;
		padding: 0.5em;
		text-transform: uppercase;
		background: none;
		align-self: center;
	}	
</style>
