const utils = {
    createAnimatedBackground() {
        const container = document.querySelector('.animated-background');
        for (let i = 0; i < 20; i++) {
            const blob = document.createElement('div');
            blob.className = 'animate-pulse';
            blob.style.left = `${Math.random() * 100}%`;
            blob.style.top = `${Math.random() * 100}%`;
            blob.style.width = `${Math.random() * 50 + 20}px`;
            blob.style.height = `${Math.random() * 50 + 20}px`;
            blob.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            blob.style.borderRadius = '50%';
            blob.style.filter = 'blur(20px)';
            blob.style.position = 'absolute';
            container.appendChild(blob);
        }
    },

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            year: 'numeric'
        }).format(date);
    }
}; 