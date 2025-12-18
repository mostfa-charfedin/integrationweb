// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add any common JavaScript functionality here
    console.log('EspritFit platform loaded');
    
    // Mobile menu toggle (if needed in future)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});