
console.log("Typing JS is loaded and running!");
// Heading 1 Typing Script
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector('.banner-wrapper .author-wrapper h1');

  if (typingElement) {
    const originalText = typingElement.textContent;
    typingElement.setAttribute('data-text', originalText);
    typingElement.textContent = '';

    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const fullText = typingElement.getAttribute('data-text');

      if (!isDeleting) {
        typingElement.textContent = fullText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === fullText.length) {
          setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, 2000); // Wait before deleting
          return;
        }
      } else {
        typingElement.textContent = fullText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeEffect, isDeleting ? 50 : 80); // speed
    }

    typeEffect();
  }
});

// Role Typing Script
document.addEventListener("DOMContentLoaded", function () {
    var listItems = document.querySelectorAll('#typing-list li');
    var current = 0;

    function showNextItem() {
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.display = 'none';
        }

        var currentItem = listItems[current];
        currentItem.style.display = 'block';

        var text = currentItem.getAttribute('data-text');
        currentItem.textContent = '';
        var charIndex = 0;

        function typeChar() {
            if (charIndex < text.length) {
                currentItem.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 50);
            } else {
                setTimeout(function () {
                    current = (current + 1) % listItems.length;
                    showNextItem();
                }, 1000);
            }
        }

        typeChar();
    }

    for (var i = 0; i < listItems.length; i++) {
        listItems[i].setAttribute('data-text', listItems[i].textContent);
    }

    showNextItem();
});

document.getElementById('download-pdf').addEventListener('click', function () {
    const element = document.body; 
    html2pdf().from(element).save('alvens-portfolio.pdf');
});

// document.getElementById('download-pdf').addEventListener('click', function () {
//     const element = document.getElementById('main-content'); // Replace with what you want to export

//     const opt = {
//         margin:       0,
//         filename:     'my-portfolio.pdf',
//         image:        { type: 'jpeg', quality: 0.98 },
//         html2canvas:  { scale: 2, windowWidth: 1920 },
//         jsPDF:        { unit: 'px', format: [1920, element.scrollHeight], orientation: 'portrait' }
//     };

//     html2pdf().set(opt).from(element).save();
// });

/* ---- particles.js config ---- */

// Background Particles Start

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    }
  }
});

// Background Particles End
