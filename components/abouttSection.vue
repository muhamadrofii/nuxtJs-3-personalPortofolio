<template>
	<section class="bg-customNavy text-white font-sfmono sm:font-normal">
		<div class="container max-w-5xl px-4 py-12 mx-auto">
			<div class="grid gap-4 lg:mx-28 sm:grid-cols-12">
				<!-- Kategori di Kiri dengan Garis Vertikal -->
				<div class="col-span-12 sm:col-span-3 pr-8">
					<div class="text-left mb-14">
						<h3 class="text-3xl font-semibold">Kategori</h3>
						<ul class="mt-4 space-y-0">
							<li
								v-for="category in categories"
								:key="category.key"
								@click="setActive(category.key)"
								:class="{'active-category': activeCategory === category.key}"
								class="relative cursor-pointer pl-6 py-2 hover:bg-violet-800 transition"
							>
								<span>{{ category.label }}</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- Detail di Kanan -->
				<div class="relative col-span-12 px-4 sm:col-span-9">
					<transition name="fade" mode="out-in">
						<div v-if="activeCategory" :key="activeCategory" class="lg:space-y-4 lg:mt-12">
							<h3 class="text-xl font-semibold tracking-wide">{{ currentContent.title }}</h3>
							<time class="text-xs tracking-wide uppercase dark:text-gray-600">{{ currentContent.date }}</time>
							<p class="lg:mt-3">>/n {{ currentContent.description }}</p>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "TimelineSection",
	data() {
		return {
			activeCategory: 'hobi',
			categories: [
				{ key: 'hobi', label: 'Hobi' },
				{ key: 'pengalaman', label: 'Pengalaman Kerja' },
				{ key: 'sekolah', label: 'Sekolah' },
				{ key: 'kompetensi', label: 'Kompetensi' }
			],
			content: {
				hobi: {
					title: 'Hobi',
					date: '2024',
					description: 'Mengkritik Pemerintah'
				},
				pengalaman: {
					title: 'Pengalaman Kerja',
					date: '2021 - 2023',
					description: 'Bekerja sebagai pengembang web di perusahaan XYZ, mengerjakan proyek front-end dan back-end.'
				},
				sekolah: {
					title: 'Sekolah',
					date: '2019 - 2023',
					description: 'Menyelesaikan gelar sarjana di Universitas ABC dengan jurusan Teknik Informatika.'
				},
				kompetensi: {
					title: 'Kompetensi',
					date: '2024',
					description: 'Mahir dalam bahasa pemrograman JavaScript, Python, dan teknologi web modern.'
				}
			}
		};
	},
	computed: {
		currentContent() {
			return this.content[this.activeCategory];
		}
	},
	methods: {
		setActive(category) {
			this.activeCategory = category;
		},
	},
};
</script>

<style scoped>
/* Styling for vertical line and active category */
li::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 4px;
	background-color: white;
	transition: background-color 0.3s;
}

.active-category {
	background-color: #7c3aed; /* Adjust this color if you prefer another */
	color: white; /* Ensure text is visible */
}

.active-category::before {
	background-color: #00d8ff; /* Color for active line */
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
/* 
.cursor-pointer:hover {
	text-decoration: underline;
} */
</style>
