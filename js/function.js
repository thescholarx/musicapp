document.addEventListener('DOMContentLoaded', function () {
    const radioInputs = document.querySelectorAll('.options input[type="radio"]');
    const sections = document.querySelectorAll('.main .section');
    // Hide all sections except the default one
    sections.forEach(section => {
        if (section.getAttribute('data-section') !== 'home') {
            section.style.display = 'none';
        }
        const load=document.createElement('div');
        load.classList.add("loader-container");
        load.innerHTML='<div class="loader"></div>';
        section.appendChild(load);
    });

    radioInputs.forEach(input => {
        input.addEventListener('change', function () {
            const target = this.getAttribute('data-target');
            sections.forEach(section => {
                const sectionData = section.getAttribute('data-section');
                if (sectionData === target) {
                    section.style.display = 'block';
                    var loaderContainer = section.querySelector('.loader-container');
                    loaderContainer.style.display = 'flex'; // Show loader container

                    setTimeout(function () {
                        loaderContainer.style.display = 'none'; // Hide loader container after 2 seconds
                    }, 2000);
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});



