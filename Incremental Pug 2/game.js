window.addEventListener('DOMContentLoaded', () => {
    // Initialize the particle system first
    window.initGame();
    
    let calories = 0;
    const caloriesDisplay = document.getElementById('calories');
    const pug = document.getElementById('pug');

    pug.addEventListener('click', () => {
        console.log('Pug clicked');
        
        calories++;
        caloriesDisplay.textContent = calories;
        
        // Add click animation
        pug.classList.add('clicked');
        setTimeout(() => {
            pug.classList.remove('clicked');
        }, 100);
        
        // Now particleSystem should definitely exist
        window.particleSystem.spawn();
    });
});
