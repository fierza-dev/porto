document.addEventListener('DOMContentLoaded', () => {
            const confettiTrigger = document.querySelector('#hs-run-on-click-run-confetti');

            if (!confettiTrigger) return;

            // Configuration object for easy customization
            const config = {
                duration: 15000, // 15 seconds in milliseconds
                defaults: {
                    startVelocity: 30,
                    spread: 360,
                    ticks: 60,
                    zIndex: 0,
                    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'] // Added colors
                },
                interval: 250, // milliseconds between bursts
                particleMultiplier: 50
            };

            // Cache start time and calculate end time
            let animationEnd;
            let intervalId;
            let isRunning = false;

            // Improved random number generator
            const randomInRange = (min, max) => Math.random() * (max - min) + min;

            const startConfetti = () => {
                if (isRunning) return;

                isRunning = true;
                animationEnd = Date.now() + config.duration;

                intervalId = setInterval(() => {
                    const timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        stopConfetti();
                        return;
                    }

                    // Calculate particle count based on time left
                    const particleCount = config.particleMultiplier * (timeLeft / config.duration);

                    // Left side confetti
                    confetti({
                        ...config.defaults,
                        particleCount,
                        origin: {
                            x: randomInRange(0.1, 0.3),
                            y: Math.random() - 0.2
                        }
                    });

                    // Right side confetti
                    confetti({
                        ...config.defaults,
                        particleCount,
                        origin: {
                            x: randomInRange(0.7, 0.9),
                            y: Math.random() - 0.2
                        }
                    });
                }, config.interval);
            };

            const stopConfetti = () => {
                clearInterval(intervalId);
                isRunning = false;
                // Optional: Clear all confetti particles immediately
                confetti.reset();
            };

            // Add event listener with cleanup
            confettiTrigger.addEventListener('click', startConfetti);

            // Cleanup function if needed
            window.cleanupConfetti = stopConfetti;
        });
