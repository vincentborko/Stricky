class App {
    constructor() {
        this.samplePacks = [
            {
                month: 'December 2024',
                password: 'dec2024',
                sampleCount: 10,
                samples: [
                    { name: 'Deep House Bass', icon: '🎵', type: 'Bass' },
                    { name: 'Analog Synth Lead', icon: '🎹', type: 'Synth' },
                    { name: 'Drum Loop 140BPM', icon: '🥁', type: 'Drums' },
                    { name: 'Ambient Pad', icon: '🌟', type: 'Pad' },
                ]
            },
            {
                month: 'November 2024',
                password: 'nov2024',
                sampleCount: 8,
                samples: [
                    { name: 'Tech House Percussion', icon: '🥁', type: 'Percussion' },
                    { name: 'FM Bass Shot', icon: '🎵', type: 'Bass' },
                    { name: 'Atmospheric FX', icon: '✨', type: 'FX' },
                ]
            }
        ];
    }

    initialize() {
        utils.createAnimatedBackground();
        this.renderSamplePacks();
        this.setupEventListeners();
    }

    renderSamplePacks() {
        const container = document.getElementById('sample-packs-container');
        this.samplePacks.forEach(packData => {
            const pack = new MonthlyPack(packData);
            container.appendChild(pack.render());
        });
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn-unlock')) {
                this.handleUnlock(e);
            } else if (e.target.matches('.btn-download')) {
                this.handleDownload(e);
            }
        });
    }

    handleUnlock(event) {
        const packElement = event.target.closest('.sample-pack');
        const input = packElement.querySelector('.password-input');
        const packData = this.samplePacks.find(pack => 
            pack.month === packElement.querySelector('h2').textContent
        );

        if (input.value === packData.password) {
            const pack = new MonthlyPack(packData);
            pack.isUnlocked = true;
            packElement.innerHTML = pack.render().innerHTML;
        } else {
            input.classList.add('animate-shake');
            setTimeout(() => input.classList.remove('animate-shake'), 500);
        }
    }

    handleDownload(event) {
        const sampleName = event.target.closest('.sample-card').querySelector('h3').textContent;
        alert(`Downloading ${sampleName}...`);
        // Implement actual download logic here
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.initialize();
}); 