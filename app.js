document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionContent = this.nextElementSibling;

            // Close any open accordion content
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== accordionContent) {
                    content.style.display = 'none';
                }
            });

            // Toggle the current accordion content
            if (accordionContent.style.display === 'block') {
                accordionContent.style.display = 'none';
            } else {
                accordionContent.style.display = 'block';
            }
        });
    });
});
