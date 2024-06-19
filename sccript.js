document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggle-mode');
    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Toggle class for all nav links
        document.querySelectorAll('.nav-button').forEach(button => {
            button.classList.toggle('dark-mode');
        });
        
        // Toggle class for all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.toggle('dark-mode');
        });
        
        // Toggle class for all heading
            document.querySelectorAll('h1, h2, h3').forEach(heading => {
                heading.classList.toggle('dark-mode');
            });
            
            // Toggle class for the footer
            document.querySelector('footer').classList.toggle('dark-mode');
        });
    });
    // JavaScript untuk memicu animasi mengetik
    const typewriterText = document.getElementById('typewriter');
    const text = typewriterText.innerHTML.trim(); // ambil teks dari elemen

    // kosongkan konten dalam elemen untuk menyiapkan animasi
    typewriterText.innerHTML = '';

    // fungsi untuk menampilkan teks dengan efek mengetik
    function typeWriter() {
        let i = 0;
        let typingInterval = setInterval(function() {
            typewriterText.innerHTML += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typingInterval);
            }
        }, 100); // kecepatan ketik (milidetik)
    }

    // panggil fungsi untuk memulai efek mengetik
    typeWriter();