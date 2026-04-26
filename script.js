document.addEventListener('DOMContentLoaded', () => {
    const tabRules = document.getElementById('tab-rules');
    const tabPrep = document.getElementById('tab-prep');
    const tabContent = document.getElementById('tab-content');

    const rulesData = [
        { title: 'Original Work Only', desc: 'All poems must be original and written by the participant.' },
        { title: 'Time Limit', desc: 'Each performance should be between 2-5 minutes in duration.' },
        { title: 'Respectful Content', desc: 'Poems should be appropriate and respectful to all audiences.' },
        { title: 'Pre-Registration Required', desc: 'Participants must register through the form before the event.' },
        { title: 'Arrive Early', desc: 'Please arrive 15 minutes before the scheduled time.' },
        { title: 'Any Language Welcome', desc: 'Poetry can be in English, Hindi, Punjabi, or any language of your choice.' }
    ];

    const prepData = [
        { title: 'Practice Your Delivery', desc: 'Focus on your tone, pace, and emotional expression.' },
        { title: 'Memorize Your Poem', desc: 'While reading is allowed, memorization helps in better connection.' },
        { title: 'Check Your Mic', desc: 'If performing online, ensure your audio setup is working perfectly.' }
    ];

    function renderContent(data) {
        tabContent.innerHTML = data.map(item => `
            <div class="flex gap-3">
                <svg class="w-5 h-5 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <div>
                    <p class="font-bold text-gray-900">${item.title}</p>
                    <p class="text-gray-700">${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    tabRules.addEventListener('click', () => {
        tabRules.classList.add('text-red-600', 'border-b-2', 'border-red-600');
        tabRules.classList.remove('text-gray-600', 'hover:text-gray-900');
        tabPrep.classList.remove('text-red-600', 'border-b-2', 'border-red-600');
        tabPrep.classList.add('text-gray-600', 'hover:text-gray-900');
        renderContent(rulesData);
    });

    tabPrep.addEventListener('click', () => {
        tabPrep.classList.add('text-red-600', 'border-b-2', 'border-red-600');
        tabPrep.classList.remove('text-gray-600', 'hover:text-gray-900');
        tabRules.classList.remove('text-red-600', 'border-b-2', 'border-red-600');
        tabRules.classList.add('text-gray-600', 'hover:text-gray-900');
        renderContent(prepData);
    });

    // Initial render
    renderContent(rulesData);
});
