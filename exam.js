const instructionData = [
    {id: 1, text: 'Download and open the file <b>psas-1.html</b> from the system.'},
    {id: 2, text: 'Edit and add JavaScript code according to the tasks.'},
    {id: 3, text: '<b>Do not change</b> the basic HTML structure.'},
    {id: 4, text: 'Test the program in a web browser and make sure the program runs well.'},
    {id: 5, text: 'Save your completed file using the naming convention <b>[PSAS_FullName_Class].html</b> (Example: PSAS_BudiSantoso_X1.html).'},
    {id: 6, text: 'Submit your work by clicking the collection link that corresponds to your respective unit.'}            
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
// Ambil elemen modal/overlay
var overlay = document.getElementById("imageOverlay");

// Ambil elemen gambar di dalam overlay
var overlayImg = document.getElementById("img01");

/**
 * Membuka overlay dan menampilkan gambar yang diklik.
 * @param {string} imgSrc - Sumber (source) gambar yang diklik.
 */
function openOverlay(imgSrc) {
    // Tampilkan overlay
    overlay.style.display = "block"; 
    
    // Atur sumber gambar di dalam overlay
    overlayImg.src = imgSrc; 
}

/**
 * Menutup overlay.
 */
function closeOverlay() {
    // Sembunyikan overlay
    overlay.style.display = "none";
}

// Opsional: Tutup overlay jika pengguna mengklik di luar gambar overlay
window.onclick = function(event) {
    if (event.target == overlay) {
        closeOverlay();
    }
}