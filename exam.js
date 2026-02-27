const instructionData = [
    {id: 1, text: 'Create a project folder in <b>htdocs</b> named <b>PSTS2_FullName_Class</b>.'},
    {id: 2, text: 'Download and save the <b>index.php</b> file provided by the exam committee into the project folder in htdocs.'},
    {id: 3, text: 'Create a MySQL database and build the required table.'},
    {id: 4, text: 'Test the program in a web browser and make sure the program runs well.'},
    {id: 5, text: `Before finishing, you <b>must export</b> your database so the teacher can check your work:
        <ol class="list-disc space-y-1 ms-8">
        <li>Open phpMyAdmin (<code>localhost/phpmyadmin/</code>) and select your database (db_cash_yourname).</li>
        <li>Click the "Export" tab at the top.</li>
        <li>Keep the format as SQL, then click "Export" or "Go".</li>
        <li>Move the downloaded .sql file into your project folder.</li>
        </ol>
        `},
    {id: 6, text: `<b>Final Submission:</b>
        <ol class="list-disc space-y-1 ms-8">
        <li>Ensure your folder contains: All PHP files (index, connection, process, edit, etc.) and the .sql database file.</li>
        <li>Convert your project folder into a ZIP or RAR file.</li>
        <li>Upload the .zip or .rar  file to the submission link provided by the teacher.</li>
        </ol>
        `}            
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