const instructionData = [
    {id: 1, text: 'Download and open the file <b>psas-1.html</b> from the system.'},
    {id: 2, text: 'Edit and add JavaScript code according to the tasks.'},
    {id: 3, text: '<b>Do not change</b> the basic HTML structure.'},
    {id: 4, text: 'Use the JavaScript comment format (//) to <b>explain each important line or block of JavaScript code in your own words.</b>'},
    {id: 5, text: 'Test the program in a web browser and make sure the program runs well.'},
    {id: 6, text: 'Save your completed file using the naming convention <b>[PSAS_FullName_Class].html</b> (Example: PSAS_BudiSantoso_X1.html).'},
    {id: 7, text: 'Submit your work by clicking the collection link that corresponds to your respective unit.'}            
]

const listContainer = document.getElementById('instructionList');

function generateInstructionList() {
    listContainer.innerHTML = '';

    instructionData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = item.text;

        listContainer.appendChild(listItem);
    })
}

// Jalankan fungsi setelah DOM dimuat
window.onload = generateInstructionList;


// Overlay
// Dapatkan elemen yang dibutuhkan
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close-btn')[0];
const thumbnails = document.querySelectorAll('.thumbnail');

// 1. Tambahkan event listener untuk setiap gambar thumbnail
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
        // Ambil URL gambar besar/asli dari atribut data-large
        const originalImageURL = this.getAttribute('data-large');

        // Muat gambar asli dan tampilkan lightbox
        lightbox.style.display = 'block';
        lightboxImg.src = originalImageURL;
    });
});

// 2. Tutup lightbox saat tombol (x) diklik
closeBtn.onclick = function() {
    lightbox.style.display = 'none';
}

// 3. Opsional: Tutup lightbox saat mengklik di luar gambar
window.onclick = function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
    }
}