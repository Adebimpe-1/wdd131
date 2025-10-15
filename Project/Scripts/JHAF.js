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
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true
    };
    const localDateTimeString = now.toLocaleString(undefined, options);
    if (dateTimeElement) {
        dateTimeElement.textContent = ` ${localDateTimeString}`;
    }
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
        // Add more projects as needed
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
        // Add more testimonials as needed
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

    // Projects Gallery with hover overlay and click for details
    const gallery = document.getElementById('gallery');
    projectsData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'gallery-item';
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', p.title);

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

        gallery.appendChild(card);
    });

    // Testimonials Section with hover and click for details
    const testimonialsContainer = document.getElementById('testimonials');
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

    // Ongoing Courses News Updater (cycling news items)
    let newsIndex = 0;
    const updater = document.getElementById('news-updater');
    function renderNewsItem() {
        const item = newsItems[newsIndex % newsItems.length];
        updater.innerHTML = `<strong>${item.title}</strong> — ${item.summary}`;
        newsIndex++;
    }
    renderNewsItem();
    setInterval(renderNewsItem, 60000);

    // Donation and Contact forms behavior unchanged
    // ... keep as is from your original file

});

// Detail modal overlay for projects and testimonials
function showDetailPage(item, type) {
    // Remove existing detail panel if any
    const existing = document.getElementById('detail-panel');
    if (existing) existing.remove();

    const panel = document.createElement('section');
    panel.id = 'detail-panel';
    panel.className = 'section detail-panel';
    panel.setAttribute('aria-label', `${type === 'project' ? 'Project' : 'Testimonial'} detail`);

    if (type === 'project') {
        panel.innerHTML = `
      <button aria-label="Close detail" class="close-detail" onclick="closeDetailPage()">×</button>
      <h3>${item.title}</h3>
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <p><em>${item.date}</em></p>
      <p>${item.details}</p>
    `;
    } else if (type === 'testimonial') {
        panel.innerHTML = `
      <button aria-label="Close detail" class="close-detail" onclick="closeDetailPage()">×</button>
      <h3>${item.name} - ${item.role}</h3>
      <img src="${item.image}" alt="${item.name}'s photo" loading="lazy" />
      <blockquote>"${item.text}"</blockquote>
    `;
    }

    document.body.appendChild(panel);
    panel.scrollIntoView({ behavior: 'smooth' });

    // Optional: trap focus inside panel for accessibility if needed
}

function closeDetailPage() {
    const panel = document.getElementById('detail-panel');
    if (panel) panel.remove();
}


// Donation button click event with alert
document.addEventListener('DOMContentLoaded', () => {
    const donateBtn = document.getElementById('donateBtn');
    if (donateBtn) {
        donateBtn.addEventListener('click', () => {
            alert('Thank you for your generosity!');
        });
    }

    // Toggle volunteer form visibility
    const volunteerBtn = document.getElementById('volunteerBtn');
    const volunteerFormSection = document.getElementById('volunteerFormSection');
    if (volunteerBtn && volunteerFormSection) {
        volunteerBtn.addEventListener('click', () => {
            if (volunteerFormSection.hasAttribute('hidden')) {
                volunteerFormSection.removeAttribute('hidden');
                volunteerBtn.textContent = 'Hide Volunteer Form';
            } else {
                volunteerFormSection.setAttribute('hidden', '');
                volunteerBtn.textContent = 'Register to Volunteer';
            }
        });
    }

    // Volunteer form submission
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = volunteerForm.volName.value.trim();
            const email = volunteerForm.volEmail.value.trim();
            const interest = volunteerForm.volInterests.value;

            if (name === '' || email === '' || interest === '') {
                alert('Please fill out all fields.');
                return;
            }

            alert(`Thank you for volunteering, ${name}! We will contact you at ${email}.`);
            volunteerForm.reset();
            volunteerFormSection.setAttribute('hidden', '');
            volunteerBtn.textContent = 'Register to Volunteer';
        });
    }

    // Contact form submission with validation and localStorage
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            // Basic validation with conditional branching
            if (!name || !email || !message) {
                formResponse.textContent = 'Please fill in all fields.';
                formResponse.style.color = 'red';
                return;
            }
            if (!validateEmail(email)) {
                formResponse.textContent = 'Please enter a valid email address.';
                formResponse.style.color = 'red';
                return;
            }

            // Save messages in localStorage array
            let messages = JSON.parse(localStorage.getItem('messages')) || [];

            const newMessage = {
                id: Date.now(),
                name,
                email,
                message,
                date: new Date().toLocaleString()
            };

            messages.push(newMessage);
            localStorage.setItem('messages', JSON.stringify(messages));

            formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
            formResponse.style.color = 'green';
            contactForm.reset();
        });
    }
});

// Utility: Validate email pattern
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Example JavaScript object, array, and array method usage

const foundationPrograms = [
    { id: 1, name: 'Health Outreach', active: true },
    { id: 2, name: 'Education for All', active: true },
    { id: 3, name: 'Community Development', active: false }
];

// Filter active programs, then output names using template literals
const activePrograms = foundationPrograms.filter(prog => prog.active);
const activeNames = activePrograms.map(prog => `${prog.name}`).join(', ');
console.log(`Active Programs are: ${activeNames}`);

