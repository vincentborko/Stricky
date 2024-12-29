class MonthlyPack {
    constructor(data) {
        this.data = data;
        this.isUnlocked = false;
    }

    createSampleCard(sample) {
        return `
            <div class="sample-card">
                <div class="sample-card-header">
                    <span class="sample-icon">${sample.icon}</span>
                    <span class="sample-type">${sample.type}</span>
                </div>
                <h3>${sample.name}</h3>
                <button class="btn btn-primary btn-download" onclick="handleDownload('${sample.name}')">
                    <svg class="icon"><!-- Download icon path --></svg>
                    Download
                </button>
            </div>
        `;
    }

    render() {
        const element = document.createElement('div');
        element.className = 'sample-pack';
        element.innerHTML = `
            <div class="sample-pack-header">
                <div class="pack-title">
                    <svg class="icon"><!-- Calendar icon path --></svg>
                    <h2>${this.data.month}</h2>
                </div>
                <span class="sample-count">${this.data.sampleCount} Samples</span>
            </div>
            ${this.isUnlocked 
                ? this.renderSamples() 
                : this.renderPasswordForm()}
        `;
        return element;
    }

    renderPasswordForm() {
        return `
            <div class="password-form">
                <input type="password" 
                       placeholder="Enter password" 
                       class="password-input">
                <button class="btn btn-primary btn-unlock">
                    <svg class="icon"><!-- Lock icon path --></svg>
                    Unlock
                </button>
            </div>
        `;
    }

    renderSamples() {
        return `
            <div class="samples-grid">
                ${this.data.samples.map(sample => 
                    this.createSampleCard(sample)
                ).join('')}
            </div>
        `;
    }
} 