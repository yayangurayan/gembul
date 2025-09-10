document.addEventListener('DOMContentLoaded', () => {

    // --- DATA KONTEN ---
    const memoriesData = [
        { id: 1, title: "Kencan Pertama", image: "https://placehold.co/600x800/c4b5fd/333333?text=Momen+1", description: "Hari di mana semuanya terasa canggung sekaligus mendebarkan. Ingat? Kita sama-sama bingung mau pesan apa, hehe.", photos: ["https://placehold.co/400x300/c4b5fd/333", "https://placehold.co/400x300/a78bfa/333", "https://placehold.co/400x300/8b5cf6/333"], video: "https://placehold.co/400x225/333/FFF?text=Video+1" },
        { id: 2, title: "Main ke Danau", image: "https://placehold.co/600x800/a5b4fc/333333?text=Momen+2", description: "Di sini kita berbagi cerita tentang mimpi dan ketakutan. Anginnya sejuk, sama seperti caramu menenangkan.", photos: ["https://placehold.co/400x300/a5b4fc/333"], video: null },
        { id: 3, title: "Nonton Konser", image: "https://placehold.co/600x800/d8b4fe/333333?text=Momen+3", description: "Nyanyi sekencang-kencangnya sampai suara habis, tapi energinya nggak pernah habis. Salah satu malam terbaik!", photos: ["https://placehold.co/400x300/d8b4fe/333"], video: "https://placehold.co/400x225/333/FFF?text=Video+3" },
        { id: 4, title: "Masak Bareng", image: "https://placehold.co/600x800/fde68a/333333?text=Momen+4", description: "Dapurnya berantakan, rasanya... ya sudahlah ya, yang penting prosesnya seru dan penuh tawa.", photos: ["https://placehold.co/400x300/fde68a/333"], video: null },
        { id: 5, title: "Hujan-hujanan", image: "https://placehold.co/600x800/93c5fd/333333?text=Momen+5", description: "Awalnya panik cari tempat berteduh, akhirnya malah nekat lari sambil ketawa. Momen sederhana yang paling bahagia.", photos: ["https://placehold.co/400x300/93c5fd/333"], video: null },
    ];
    const timelineData = [ { date: "27 Jul 2024", title: "Awal Mula Kisah Kita", icon: "💖" }, { date: "15 Agu 2024", title: "Nonton Film Pertama Kali", icon: "🎬" }, { date: "25 Des 2024", title: "Liburan Akhir Tahun", icon: "✈️" }, { date: "14 Feb 2025", title: "Valentine's Day Dinner", icon: "🥂" }, { date: "01 Mei 2025", title: "Trip ke Puncak", icon: "⛰️" }, { date: "Sekarang", title: "Membuat Kenangan Baru...", icon: "✨" }, ];
    const quotes = [ "Cinta bukan tentang saling memandang, tapi melihat ke arah yang sama.", "Di pelukmu, dunia jadi tenang.", "Setiap hari bersamamu adalah halaman favorit dalam buku hidupku.", "Kamu adalah bagian terbaik dari hariku.", "Terima kasih sudah memilih untuk berjalan beriringan." ];

    // --- INISIALISASI & FUNGSI UTAMA ---
    const body = document.body;
    body.style.opacity = '1';

    setupTheme();
    setupMusic();
    setupNavigation();
    setupGallery();
    setupTimeline();
    setupModal();
    setupParticles();
    
    document.getElementById('random-quote').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    
    // Fungsi untuk Tema Gelap/Terang
    function setupTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;
        const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
        
        const isDarkMode = localStorage.getItem('theme') === 'dark';

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            themeToggle.innerHTML = sunIcon;
        } else {
            themeToggle.innerHTML = moonIcon;
        }

        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = sunIcon;
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = moonIcon;
            }
        });
    }

    // Fungsi untuk Kontrol Musik
    function setupMusic() {
        const musicToggle = document.getElementById('music-toggle');
        const audio = document.getElementById('background-music');
        const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
        
        musicToggle.innerHTML = playIcon;

        musicToggle.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                musicToggle.innerHTML = pauseIcon;
            } else {
                audio.pause();
                musicToggle.innerHTML = playIcon;
            }
        });
    }

    // Fungsi untuk Navigasi Halaman
    function setupNavigation() {
        const navContainer = document.querySelector('nav');
        let currentPageId = 'main-menu-page';
        const navItems = [
            { id: 'main-menu-page', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mb-1" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>', label: 'Main Menu' },
            { id: 'kisah-page', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mb-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>', label: 'Kisah' },
            { id: 'timeline-page', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mb-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>', label: 'Timeline' }
        ];
        navItems.forEach((item, index) => {
            const button = document.createElement('button');
            button.dataset.page = item.id;
            button.className = 'nav-button flex-1 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300';
            button.innerHTML = `${item.icon}<span class="text-xs font-semibold">${item.label}</span>`;
            if (index === 0) button.classList.add('active-nav');
            button.addEventListener('click', () => { /* ... logika navigasi ... */ });
            navContainer.appendChild(button);
        });
    }

    // Fungsi untuk Galeri Geser
    function setupGallery() {
        const galleryWrapper = document.getElementById('gallery-wrapper');
        memoriesData.forEach(memory => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `<div class="gallery-card" data-id="${memory.id}"><img src="${memory.image}" alt="${memory.title}"><div class="overlay"><h4>${memory.title}</h4></div></div>`;
            galleryWrapper.appendChild(slide);
        });
        new Swiper('.swiper-container', { effect: 'coverflow', grabCursor: true, centeredSlides: true, slidesPerView: 'auto', coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, loop: true });
    }

    // Fungsi untuk Halaman Timeline & Kalkulator Hari
    function setupTimeline() {
        const startDate = new Date('2024-07-27');
        const endDate = new Date('2025-09-10'); // Sesuai permintaan
        const diffDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
        const dayCounter = document.getElementById('day-counter');
        
        let currentDay = 0;
        const counterInterval = setInterval(() => {
            currentDay += Math.ceil(diffDays / 100);
            if (currentDay >= diffDays) {
                currentDay = diffDays;
                clearInterval(counterInterval);
            }
            dayCounter.textContent = currentDay;
        }, 20);

        const timelineContainer = document.getElementById('timeline-container');
        timelineData.forEach(item => { /* ... logika render timeline ... */ });
    }

    // Fungsi untuk Modal Detail
    function setupModal() { /* ... logika modal tidak berubah signifikan ... */ }

    // Fungsi BARU untuk Animasi Partikel
    function setupParticles() {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray;

        class Particle {
            constructor(x, y, size, color, speedX, speedY) { this.x = x; this.y = y; this.size = size; this.color = color; this.speedX = speedX; this.speedY = speedY; }
            update() { this.x += this.speedX; this.y += this.speedY; if (this.size > 0.2) this.size -= 0.02; }
            draw() { ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
        }

        function init() {
            particlesArray = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const speedX = Math.random() * 1 - 0.5;
                const speedY = Math.random() * 1 - 0.5;
                const color = 'rgba(255, 255, 255, 0.5)';
                particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
                if (particlesArray[i].size <= 0.3) {
                    particlesArray.splice(i, 1);
                    i--;
                    // Tambah partikel baru untuk menjaga jumlah
                    const size = Math.random() * 2 + 1;
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    const speedX = Math.random() * 1 - 0.5;
                    const speedY = Math.random() * 1 - 0.5;
                    particlesArray.push(new Particle(x, y, size, 'rgba(255, 255, 255, 0.5)', speedX, speedY));
                }
            }
            requestAnimationFrame(animate);
        }
        
        init();
        animate();
        
        window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); });
    }
});
