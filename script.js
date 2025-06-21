document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileNavToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                mobileNavToggle.querySelector('i').classList.remove('fa-times');
                mobileNavToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Simulate loading materials (in a real app, this would be an API call)
    function loadMaterials() {
        // This would be replaced with actual API fetch
        console.log('Loading study materials...');
    }

    // Simulate loading classes (in a real app, this would be an API call)
    function loadClasses() {
        // This would be replaced with actual API fetch
        console.log('Loading class data...');
    }

    // Initialize the dashboard
    function initDashboard() {
        loadMaterials();
        loadClasses();
        
        // Add click event to all download buttons
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const materialTitle = this.closest('.material-card').querySelector('h3').textContent;
                alert(`Downloading: ${materialTitle}`);
                // In a real app, this would trigger the download
            });
        });
        
        // Add click event to all view buttons
        const viewButtons = document.querySelectorAll('.view-btn');
        viewButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const className = this.closest('.class-card').querySelector('h3').textContent;
                alert(`Viewing details for: ${className}`);
                // In a real app, this would navigate to class details
            });
        });
    }

    // Initialize the dashboard when the page loads
    initDashboard();

    // User dropdown functionality (would be more complex in a real app)
    const userProfile = document.querySelector('.user-profile');
    userProfile.addEventListener('click', function() {
        alert('User menu would open here');
        // In a real app, this would show a dropdown menu
    });

    // Responsive adjustments
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            mobileNavToggle.querySelector('i').classList.remove('fa-times');
            mobileNavToggle.querySelector('i').classList.add('fa-bars');
        }
    });

    // Simulate notification count
    function updateNotificationCount() {
        // In a real app, this would check for new messages/notifications
        const notificationCount = Math.floor(Math.random() * 5);
        if (notificationCount > 0) {
            const messagesLink = document.querySelector('.main-nav a[href="#"]:nth-child(5)');
            messagesLink.innerHTML += `<span class="notification-badge">${notificationCount}</span>`;
        }
    }

    updateNotificationCount();
});