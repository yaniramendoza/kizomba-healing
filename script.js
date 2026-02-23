// --- MOBIL MENU LOGIK ---
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Lukker mobilmenuen automatisk, når man klikker på et link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// --- VIDEO MODAL LOGIK ---
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('vlogVideoPlayer');
const videoContainer = document.getElementById('videoContainer');
const closeModalBtn = document.getElementById('closeModalBtn');

// Funktion til at åbne videoen
function openVideoModal(videoSrc) {
    // 1. Sæt stien til videoen fra din 'videos' mappe
    videoPlayer.src = videoSrc;
    
    // 2. Vis modalen på skærmen
    videoModal.classList.remove('hidden');
    
    // 3. Lille forsinkelse for at skabe en blød "fade-in" og "zoom" effekt
    setTimeout(() => {
        videoModal.classList.remove('opacity-0');
        videoContainer.classList.remove('scale-95');
    }, 10);
    
    // 4. Start videoen automatisk
    videoPlayer.play();
}

// Funktion til at lukke videoen
function closeVideoModal() {
    // 1. Start "fade-out" animation
    videoModal.classList.add('opacity-0');
    videoContainer.classList.add('scale-95');
    
    // 2. Vent på animationen er færdig, skjul derefter modalen og stop videoen
    setTimeout(() => {
        videoModal.classList.add('hidden');
        videoPlayer.pause();
        videoPlayer.currentTime = 0; // Spol tilbage til start
        videoPlayer.src = ''; // Ryd kilden for at spare data
    }, 300);
}

// Luk når man klikker på (X) knappen
closeModalBtn.addEventListener('click', closeVideoModal);

// Luk hvis man klikker uden for videoen (på den sorte baggrund)
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});