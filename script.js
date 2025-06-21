document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');
    const closeNav = document.querySelector('.close-nav');
    
    menuToggle.addEventListener('click', function() {
        sideNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeNav.addEventListener('click', function() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Simulate loading data
    function loadDashboardData() {
        // In a real app, this would fetch from an API
        console.log('Loading dashboard data...');
        
        // Simulate network delay
        setTimeout(() => {
            // Update any dynamic content here
        }, 1000);
    }
    
    // Initialize the app
    function initApp() {
        loadDashboardData();
        
        // Add click handlers for download buttons
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const materialCard = this.closest('.material-card');
                const materialName = materialCard.querySelector('h4').textContent;
                alert(`Downloading: ${materialName}`);
                
                // In a real app, this would trigger the download
                // or open the video player
            });
        });
        
        // Add click handler for join class button
        const joinButtons = document.querySelectorAll('.class-status.active');
        joinButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const classCard = this.closest('.class-card');
                const className = classCard.querySelector('h4').textContent;
                alert(`Joining: ${className}`);
                
                // In a real app, this would launch the video meeting
            });
        });
    }
    
    // Initialize the application
    initApp();
    
    // Service Worker Registration for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('ServiceWorker registration successful');
            }).catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
    
    // Detect if app is running as PWA
    window.addEventListener('appinstalled', () => {
        console.log('App was installed as PWA');
    });
    
    // Handle offline status
    window.addEventListener('online', () => {
        console.log('Connection restored');
        // Could show a "back online" notification
    });
    
    window.addEventListener('offline', () => {
        console.log('Connection lost');
        // Could show an "offline" warning
    });
});
