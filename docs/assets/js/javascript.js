document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.collapsible-section');
            section.classList.toggle('expanded');
        });
    });
});
