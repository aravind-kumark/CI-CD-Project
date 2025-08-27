// Create animated particles in the background
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    addButtonEffects();
    addStageTooltips();
});

// Create floating particles for background animation
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties for each particle
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        const opacity = Math.random() * 0.5 + 0.1;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = opacity;
        
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Add interactive effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
        
        // Add ripple effect to buttons
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add stage descriptions on hover
function addStageTooltips() {
    const stages = document.querySelectorAll('.stage');
    const descriptions = [
        "Code: Developers commit code to version control",
        "Build: Code is compiled and built automatically",
        "Test: Automated tests verify functionality",
        "Deploy: Code is deployed to production environment",
        "Monitor: Application performance is monitored"
    ];
    
    stages.forEach((stage, index) => {
        stage.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = descriptions[index];
            tooltip.style.position = 'absolute';
            tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '8px 12px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.bottom = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.marginBottom = '10px';
            tooltip.style.whiteSpace = 'nowrap';
            tooltip.style.zIndex = '100';
            tooltip.style.fontSize = '0.9rem';
            
            stage.appendChild(tooltip);
        });
        
        stage.addEventListener('mouseleave', () => {
            const tooltip = stage.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Add animation to concept cards when they come into view
function animateOnScroll() {
    const concepts = document.querySelectorAll('.concept');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    concepts.forEach(concept => {
        concept.style.animationPlayState = 'paused';
        observer.observe(concept);
    });
}

// Initialize scroll animations when page loads
window.addEventListener('load', animateOnScroll);