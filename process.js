// Workflow page interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to workflow steps
    const stepBoxes = document.querySelectorAll('.step-box');
    
    stepBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateX(5px)';
            box.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateX(0)';
            box.style.boxShadow = '';
        });
    });

    // Add hover effects to summary cards
    const summaryCards = document.querySelectorAll('.summary-card');
    
    summaryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.borderColor = '#667eea';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'transparent';
        });
    });

    // Add subtle animations to phone frames
    const phoneFrames = document.querySelectorAll('.phone-frame');
    
    phoneFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            frame.style.transform = 'scale(1.02)';
            frame.style.transition = 'transform 0.3s ease';
        });
        
        frame.addEventListener('mouseleave', () => {
            frame.style.transform = 'scale(1)';
        });
    });

    // Add hover effects to dashboard frames
    const dashboardFrames = document.querySelectorAll('.dashboard-frame');
    
    dashboardFrames.forEach(frame => {
        frame.addEventListener('mouseenter', () => {
            frame.style.transform = 'translateY(-2px)';
            frame.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            frame.style.transition = 'all 0.3s ease';
        });
        
        frame.addEventListener('mouseleave', () => {
            frame.style.transform = 'translateY(0)';
            frame.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add interactive effects to table rows
    const tableRows = document.querySelectorAll('.table-row');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = '#f1f5f9';
            row.style.transform = 'scale(1.01)';
            row.style.transition = 'all 0.2s ease';
        });
        
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
            row.style.transform = 'scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-1px)';
            button.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-1px)';
        });
    });

    // Smooth scroll animation for workflow steps
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe workflow steps for animation
    const workflowSteps = document.querySelectorAll('.workflow-step');
    workflowSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(step);
    });

    // Observe UI screens for animation
    const uiScreens = document.querySelectorAll('.ui-screen');
    uiScreens.forEach((screen, index) => {
        screen.style.opacity = '0';
        screen.style.transform = 'translateY(20px)';
        screen.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(screen);
    });

    // Add typing effect to the header (optional enhancement)
    const headerTitle = document.querySelector('.header-text h1');
    if (headerTitle) {
        const text = headerTitle.textContent;
        headerTitle.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                headerTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Simple fade-in effect for the page
    document.body.style.opacity = '1';
    
    console.log('AttendX Workflow page loaded successfully!');
});

// Add smooth transitions on page load
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.3s ease';
});

// Initialize page
document.body.style.opacity = '0';