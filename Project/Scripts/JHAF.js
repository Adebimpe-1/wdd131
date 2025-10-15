(function () {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        const now = new Date();
        yearSpan.textContent = now.getFullYear();
    }

    const lastModifiedElem = document.getElementById('lastModified');
    if (lastModifiedElem) {
        lastModifiedElem.textContent = 'Last Modified: ' + document.lastModified;
    }
})();

function updateLocalDateTime() {
    const dateTimeElement = document.getElementById('localDateTime');
    if (!dateTimeElement) return;
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true
    };
    const localDateTimeString = now.toLocaleString(undefined, options);
    dateTimeElement.textContent = ` ${localDateTimeString}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateLocalDateTime();

    const projectsData = [
        {
            id: 'proj-1',
            title: 'Clean Water Access Project',
            date: 'April 2025',
            image: 'images/clean-water.webp',
            excerpt: 'Bringing reliable water access to rural communities with sustainable filtration.',
            details: 'Detailed information about the Clean Water Access Project, objectives, beneficiaries, partners, and impact metrics.'
        },
        {
            id: 'proj-2',
            title: 'Nutrition & School Meals',
            date: 'Jan 2025',
            image: 'images/school-meals.webp',
            excerpt: 'Providing daily meals and nutrition education to schoolchildren.',
            details: 'In-depth information about meals, distribution, sourcing, and outcomes.'
        }
    ];

    const testimonialsData = [
        {
            id: 't1',
            name: 'Amina S.',
            role: 'Community member',
            text: 'The project changed my family’s life. My children now have hope for a better future.',
            image: 'images/placeholder1.webp'
        },
        {
            id: 't2',
            name: 'Omar K.',
            role: 'Beneficiary',
            text: 'Supportive programs helped me gain skills and confidence to start my small business.',
            image: 'images/placeholder2.webp'
        }
    ];

    const newsItems = [
        {
            id: 'n1',
            title: "New Girls' Empowerment Workshop",
            date: '2025-08-20',
            summary: 'Launching a skill-building workshop for girls aged 12-16.'
        },
        {
            id: 'n2',
            title: 'Community Health Drive',
            date: '2025-09-05',
            summary: 'Free health checks and nutrition counseling in partner communities.'
        },
        {
            id: 'n3',
            title: 'Water Filtration Pilot',
            date: '2025-10-01',
            summary: 'Introducing low-cost filtration units in 3 villages.'
        }
    ];

    // Build Projects Gallery
    const gallery = document.getElementById('gallery');
    if (gallery) {
        projectsData.forEach(p => {
            const card = document.createElement('div');
            card.className = 'gallery-item';
            card.setAttribute('role', 'article');
            card.setAttribute('aria-label', p.title);
            card.tabIndex = 0;

            const img = document.createElement('img');
            img.src = p.image;
            img.alt = p.title;
            img.loading = 'lazy';

            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.textContent = `${p.excerpt} (${p.date})`;

            card.appendChild(img);
            card.appendChild(overlay);

            card.addEventListener('click', () => {
                showDetailPage(p, 'project');
            });

            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showDetailPage(p, 'project');
                }
            });

            gallery.appendChild(card);
        });
    }

    // Build Testimonials Section
    const testimonialsContainer = document.getElementById('testimonials');
    if (testimonialsContainer) {
        testimonialsData.forEach(t => {
            const card = document.createElement('div');
            card.className = 'testimonial';
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `${t.name}, ${t.role}`);

            const img = document.createElement('img');
            img.src = t.image;
            img.alt = `${t.name}'s photo`;
            img.loading = 'lazy';

            const quote = document.createElement('blockquote');
            quote.textContent = `"${t.text.slice(0, 60)}..."`;

            card.appendChild(img);
            card.appendChild(quote);

            card.addEventListener('click', () => {
                showDetailPage(t, 'testimonial');
            });

            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showDetailPage(t, 'testimonial');
                }
            });

            testimonialsContainer.appendChild(card);
        });
    }

    // Ongoing Courses News Updater
    let newsIndex = 0;
    const updater = document.getElementById('news-updater');
    function renderNewsItem() {
        if (!updater) return;
        const item = newsItems[newsIndex % newsItems.length];
        updater.textContent = `${item.title} — ${item.summary}`;
        newsIndex++;
    }
    renderNewsItem();
    setInterval(renderNewsItem, 60000);
});

// Detail modal panel
function showDetailPage(item, type) {
    // Remove existing detail panel if any
    const existing = document.getElementById('detail-panel');
    if (existing) existing.remove();

    const panel = document.createElement('section');
    panel.id = 'detail-panel';
    panel.className = 'section detail-panel';
    panel.setAttribute('aria-label', `${type === 'project' ? 'Project' : 'Testimonial'} detail`);

    // Build contents dynamically, avoid inline template syntax with ${}
    const closeButton = document.createElement('button');
    closeButton.className = 'close-detail';
    closeButton.setAttribute('aria-label', 'Close detail');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => closeDetailPage());
    panel.appendChild(closeButton);

    const heading = document.createElement('h3');
    heading.textContent = type === 'project' ? item.title : `${item.name} - ${item.role}`;
    panel.appendChild(heading);

    const img = document.createElement('img');
    img.src = item.image;
    img.loading = 'lazy';
    img.alt = type === 'project' ? item.title : `${item.name}'s photo`;
    panel.appendChild(img);

    if (type === 'project') {
        const date = document.createElement('p');
        date.innerHTML = `<em>${item.date}</em>`;
        panel.appendChild(date);

        const detailsP = document.createElement('p');
        detailsP.textContent = item.details;
        panel.appendChild(detailsP);
    } else if (type === 'testimonial') {
        const quote = document.createElement('blockquote');
        quote.textContent = `"${item.text}"`;
        panel.appendChild(quote);
    }

    document.body.appendChild(panel);
    panel.scrollIntoView({ behavior: 'smooth' });
}

function closeDetailPage() {
    const panel = document.getElementById('detail-panel');
    if (panel) panel.remove();
}
