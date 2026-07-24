function toggleMenu(){
    document.getElementById('sideMenu').classList.toggle('active')
    document.getElementById('menuOverlay').classList.toggle('active')
}






function scrollRow(rowId, direction) {
    const row = document.getElementById(rowId);
    if (!row) return;
    const scrollAmount = row.clientWidth * 0.8;
    row.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
    });
}

const bannerData = [
    {
        img: "img/logo.jpg",
        title: "Fight Club",
        genres: ["Drama", "Tam ly"],
        desc: "Fight Club (1999) là một bộ phim tâm lý ly kỳ giật gân, đan xen yếu tố châm biếm đen tối do David Fincher đạo diễn, dựa trên tiểu thuyết cùng tên của Chuck Palahniuk."
    },
    {
        img: "img/logo.jpg",
        title: "The Boys",
        genres: ["Hài đen", "Hành động"],
        desc: "Mo ta phim thu hai"
    },
    {
        img: "img/logo.jpg",
        title: "Phim Thu Ba",
        genres: ["Hai", "Lang man"],
        desc: "Mo ta phim thu ba"
    }
];
let bannerIndex = 0;

function changeBanner(direction) {
    bannerIndex = direction === 'next'
        ? (bannerIndex + 1) % bannerData.length
        : (bannerIndex - 1 + bannerData.length) % bannerData.length;

    const data = bannerData[bannerIndex];
    document.getElementById('bannerTitle').textContent = data.title;
    document.getElementById('bannerDesc').textContent = data.desc;
    document.getElementById('bannerImg').src = data.img;
    document.getElementById('bannerGenres').innerHTML =
        data.genres.map(g => `<span>${g}</span>`).join('');
}




const moviesData = [
    { id: 1, img: "img/logo.jpg", title: "Kẻ Cắp Mặt Trăng 4: Sự Trỗi Dậy Của Gru", titleEn: "Minions: The Rise Of Gru", quality: "4K", dub: false, age: "P", year: "2024", duration: "1h 34m" },
    { id: 2, img: "img/logo.jpg", title: "Doraemon: Nobita Và Cuộc Chiến...", titleEn: "Doraemon: Nobita no Little Wars", dub: true, age: "P", year: "2021", duration: "1h 51m" },
    { id: 3, img: "img/logo.jpg", title: "Cô Hầu Gái", titleEn: "The Housemaid", dub: true, age: "T18", year: "2025", duration: "1h 33m" },
    { id: 4, img: "img/logo.jpg", title: "M3GAN", titleEn: "M3GAN", dub: false, age: "T16", year: "2023", duration: "1h 42m" },
    { id: 5, img: "img/logo.jpg", title: "Hành Tinh Cát: Phần Hai", titleEn: "Dune: Part Two", quality: "4K", dub: false, age: "T13", year: "2024", duration: "2h 46m" },
    { id: 6, img: "img/logo.jpg", title: "Điện Thoại Đen", titleEn: "The Black Phone", dub: false, age: "T18", year: "2022", duration: "1h 42m" },
    { id: 7, img: "img/logo.jpg", title: "Giao Hàng Cho Ma", titleEn: "Rider: Ghost Delivery", dub: false, age: "T13", year: "2024", duration: "1h 40m" },
    { id: 8, img: "img/logo.jpg", title: "Yêu Lại Vợ Ngầu", titleEn: "Love Reset", dub: false, age: "T16", year: "2023", duration: "1h 59m" },
    { id: 9, img: "img/logo.jpg", title: "28 Năm Sau: Hậu Tận Thế", titleEn: "28 Years Later", dub: false, age: "T16", year: "2025", duration: "1h 55m" },
    { id: 10, img: "img/logo.jpg", title: "Khắc Tinh Của Quỷ", titleEn: "The Pope's Exorcist", dub: false, age: "T16", year: "2023", duration: "1h 43m" }
];

const searchInput = document.getElementById("searchbar");
const searchSuggest = document.getElementById("searchSuggest");

searchInput.addEventListener('input', function() {

    var key = searchInput.value.toLowerCase().trim();

    if (key === '') {
        searchSuggest.classList.remove('active');
        searchSuggest.innerHTML = '';
        return;
    }

    var res = [];
    for (var i = 0; i < moviesData.length; i++) {
        var movie = moviesData[i];
        var title = movie.title.toLowerCase();
        var titleEn = movie.titleEn.toLowerCase();

        if (title.indexOf(key) !== -1 || titleEn.indexOf(key) !== -1) {
            res.push(movie);
        }
    }

    if (res.length === 0) {
        searchSuggest.innerHTML = `<p style="padding:14px;color:#9d9ba7;">Không tìm thấy phim nào</p>`;
    } else {
        searchSuggest.innerHTML = res.map(movie => `
            <a href="#" class="suggest-item">
                <img src="${movie.img}" alt="${movie.title}">
                <div>
                    <div class="suggest-title">${movie.title}</div>
                    <div class="suggest-title-en">${movie.titleEn}</div>
                    <div class="suggest-meta">${movie.age} • ${movie.year} • ${movie.duration || ''}</div>
                </div>
            </a>
        `).join('');
    }

    searchSuggest.classList.add('active');
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.search')) {
        searchSuggest.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggleBtn.innerHTML = 'Chế độ Tối '; 
    } else {
        themeToggleBtn.innerHTML = 'Chế độ Sáng '; 
    }
    themeToggleBtn.addEventListener('click', (e) => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            themeToggleBtn.innerHTML = 'Chế độ Tối '; 
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleBtn.innerHTML = 'Chế độ Sáng '; 
            localStorage.setItem('theme', 'dark');
        }
    });
});