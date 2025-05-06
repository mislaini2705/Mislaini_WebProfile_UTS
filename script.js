// Toggle visibility of sections
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sections = document.querySelectorAll('.section');
    let sectionsVisible = true;
    
    toggleBtn.addEventListener('click', function() {
        if (sectionsVisible) {
            // Hide sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
            toggleBtn.title = "Show Sections";
        } else {
            // Show sections
            sections.forEach(section => {
                section.classList.remove('hidden');
            });
            toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
            toggleBtn.title = "Hide Sections";
        }
        
        sectionsVisible = !sectionsVisible;
    });
});