document.addEventListener('DOMContentLoaded', () => {

    // --- TYPING EFFECT ---
    const textElement = document.querySelector('.typing-text');
    const textToType = "I'm Kushal Khadka"; 
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!textElement) return;

        const currentText = textToType;
        
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, index--);
        } else {
            textElement.textContent = currentText.substring(0, index++);
        }

        let typeSpeed = isDeleting ? 100 : 150; 

        if (!isDeleting && index === currentText.length) {
            typeSpeed = 2000; // Pause at end before deleting
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            typeSpeed = 500; // Pause before restarting
        }

        setTimeout(typeEffect, typeSpeed);
    }
    // Start the typing loop
    typeEffect();
    v<script>
    function toggleDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn') && !e.target.matches('.dropbtn *')) {
            var d = document.getElementsByClassName("dropdown-content");
            for (var i=0; i<d.length; i++) {
                if (d[i].classList.contains('show')) d[i].classList.remove('show');
            }
        }
    }
});