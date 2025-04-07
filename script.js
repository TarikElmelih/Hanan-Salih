// Language Toggle Functionality
let isEnglish = false;

function toggleLanguage() {
    isEnglish = !isEnglish;
    const langBtn = document.querySelector('.lang-btn');
    const arabicElements = document.querySelectorAll('.arabic');
    const englishElements = document.querySelectorAll('.english');
    const html = document.documentElement;

    if (isEnglish) {
        langBtn.textContent = 'عربي';
        arabicElements.forEach(el => el.style.display = 'none');
        englishElements.forEach(el => el.style.display = 'block');
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    } else {
        langBtn.textContent = 'EN';
        arabicElements.forEach(el => el.style.display = 'block');
        englishElements.forEach(el => el.style.display = 'none');
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    }
}

// Portfolio Items Data
const portfolioItems = [
    {
        title: {
            arabic: 'تصميم هوية بصرية',
            english: 'Brand Identity Design'
        },
        description: {
            arabic: 'تصميم هوية بصرية متكاملة لشركة ناشئة تعمل في مجال التكنولوجيا، شاملة الشعار والألوان والخطوط وجميع عناصر الهوية.',
            english: 'Complete brand identity design for a tech startup, including logo, colors, typography, and all identity elements.'
        },
        detailedDescription: {
            arabic: 'قمت بتصميم هوية بصرية متكاملة لشركة ناشئة في مجال التكنولوجيا. تضمن المشروع تصميم شعار مميز وفريد يعكس قيم الشركة ورؤيتها، واختيار مجموعة ألوان متناسقة تعبر عن روح العلامة التجارية، بالإضافة إلى تحديد الخطوط المناسبة واستخدامها في جميع العناصر. كما شمل المشروع تصميم قرطاسية الشركة من بطاقات عمل وأوراق رسمية ومغلفات وغيرها من المواد المطبوعة.',
            english: 'I designed a comprehensive brand identity for a tech startup. The project included creating a unique logo that reflects the company\'s values and vision, selecting a harmonious color palette that expresses the brand spirit, as well as defining appropriate typography and using it across all elements. The project also included designing company stationery from business cards, letterheads, envelopes, and other printed materials.'
        },
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
        images: [
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3'
        ],
        category: 'branding',
        tools: [
            { name: 'Adobe Illustrator', icon: 'fa-adobe' },
            { name: 'Adobe Photoshop', icon: 'fa-adobe' },
            { name: 'Adobe InDesign', icon: 'fa-adobe' }
        ],
        colors: ['#FF6B6B', '#4ECDC4', '#2C3E50', '#F7F9FC']
    },
    {
        title: {
            arabic: 'تصميم موقع إلكتروني',
            english: 'Website UI Design'
        },
        description: {
            arabic: 'تصميم واجهة مستخدم لموقع تجارة إلكترونية متخصص في بيع المنتجات الحرفية والتراثية.',
            english: 'User interface design for an e-commerce website specializing in selling handcrafted and heritage products.'
        },
        detailedDescription: {
            arabic: 'قمت بتصميم واجهة مستخدم كاملة لموقع تجارة إلكترونية متخصص في بيع المنتجات الحرفية والتراثية. ركزت في التصميم على إبراز جمال المنتجات اليدوية مع الحفاظ على سهولة الاستخدام وتجربة مستخدم سلسة. استخدمت عناصر بصرية مستوحاة من التراث لإضفاء طابع أصيل على الموقع، مع الحفاظ على مظهر عصري وجذاب. تضمن المشروع تصميم الصفحة الرئيسية وصفحات المنتجات وعربة التسوق وصفحة الدفع.',
            english: 'I designed a complete user interface for an e-commerce website specializing in selling handcrafted and heritage products. In the design, I focused on highlighting the beauty of handmade products while maintaining ease of use and a smooth user experience. I used visual elements inspired by heritage to add an authentic character to the site, while maintaining a modern and attractive appearance. The project included designing the homepage, product pages, shopping cart, and checkout page.'
        },
        image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3',
        images: [
            'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3'
        ],
        category: 'web',
        tools: [
            { name: 'Figma', icon: 'fa-figma' },
            { name: 'Adobe XD', icon: 'fa-adobe' },
            { name: 'Adobe Photoshop', icon: 'fa-adobe' }
        ],
        colors: ['#FF6B6B', '#4ECDC4', '#2C3E50', '#F7F9FC']
    },
    {
        title: {
            arabic: 'تصميم مواد تسويقية',
            english: 'Marketing Campaign Design'
        },
        description: {
            arabic: 'تصميم مجموعة متكاملة من المواد التسويقية لمهرجان فني وثقافي سنوي.',
            english: 'Design of a comprehensive set of marketing materials for an annual arts and cultural festival.'
        },
        detailedDescription: {
            arabic: 'قمت بتصميم مجموعة متكاملة من المواد التسويقية لمهرجان فني وثقافي سنوي. تضمنت المواد تصميم الملصقات الإعلانية بأحجام مختلفة، والكتيبات التعريفية، وبطاقات الدعوة، والشعارات الخاصة بالفعالية، والافتات الإعلانية، بالإضافة إلى مواد التسويق الرقمي للنشر على منصات التواصل الاجتماعي. قمت بتطوير هوية بصرية متميزة للمهرجان تعكس تنوع الفعاليات الثقافية والفنية المقدمة، مع الحفاظ على تناسق جميع العناصر البصرية.',
            english: 'I designed an integrated set of marketing materials for an annual arts and cultural festival. The materials included designing advertising posters in different sizes, introductory brochures, invitation cards, event logos, advertising banners, as well as digital marketing materials for publishing on social media platforms. I developed a distinctive visual identity for the festival that reflects the diversity of cultural and artistic events presented, while maintaining consistency of all visual elements.'
        },
        image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3',
        images: [
            'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3'
        ],
        category: 'marketing',
        tools: [
            { name: 'Adobe Illustrator', icon: 'fa-adobe' },
            { name: 'Adobe Photoshop', icon: 'fa-adobe' },
            { name: 'Canva', icon: 'fa-palette' }
        ],
        colors: ['#FF6B6B', '#4ECDC4', '#2C3E50', '#F7F9FC']
    },
    {
        title: {
            arabic: 'تصميم التغليف',
            english: 'Packaging Design'
        },
        description: {
            arabic: 'تصميم عبوات وتغليف لمنتجات مستحضرات تجميل طبيعية.',
            english: 'Packaging design for natural cosmetic products.'
        },
        detailedDescription: {
            arabic: 'قمت بتصميم سلسلة متكاملة من عبوات وتغليف منتجات مستحضرات التجميل الطبيعية لعلامة تجارية محلية. استوحيت التصميم من العناصر الطبيعية المستخدمة في المنتجات، واعتمدت على ألوان هادئة تعكس نقاء المكونات وطبيعتها العضوية. قمت بتصميم الملصقات والصناديق والعبوات بأحجام مختلفة، مع الحفاظ على هوية موحدة تساعد في التعرف على المنتجات بسهولة على رفوف المتاجر.',
            english: 'I designed an integrated series of packaging for natural cosmetic products for a local brand. I drew inspiration from the natural elements used in the products, and relied on calm colors that reflect the purity of the ingredients and their organic nature. I designed labels, boxes and containers in different sizes, while maintaining a unified identity that helps in easily identifying products on store shelves.'
        },
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3',
        images: [
            'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3'
        ],
        category: 'branding',
        tools: [
            { name: 'Adobe Illustrator', icon: 'fa-adobe' },
            { name: 'Adobe Photoshop', icon: 'fa-adobe' },
            { name: 'Adobe Dimension', icon: 'fa-adobe' }
        ],
        colors: ['#FF6B6B', '#4ECDC4', '#2C3E50', '#F7F9FC']
    },
    {
        title: {
            arabic: 'تصميم تطبيق جوال',
            english: 'Mobile App Design'
        },
        description: {
            arabic: 'تصميم واجهة مستخدم لتطبيق جوال للياقة البدنية والصحة.',
            english: 'User interface design for a fitness and health mobile application.'
        },
        detailedDescription: {
            arabic: 'قمت بتصميم واجهة مستخدم كاملة لتطبيق جوال مخصص للياقة البدنية والصحة. تضمن المشروع تصميم جميع شاشات التطبيق بدءًا من شاشات التسجيل وإنشاء الحساب، والشاشة الرئيسية، وشاشات متابعة التمارين والنظام الغذائي، وشاشات التقارير الإحصائية. ركزت في التصميم على سهولة الاستخدام وتجربة مستخدم سلسة مع واجهة جذابة وحديثة تشجع المستخدمين على الاستمرار في استخدام التطبيق.',
            english: 'I designed a complete user interface for a mobile application dedicated to fitness and health. The project included designing all application screens, starting from registration and account creation screens, the main screen, exercise and diet tracking screens, and statistical report screens. In the design, I focused on ease of use and a smooth user experience with an attractive and modern interface that encourages users to continue using the application.'
        },
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3',
        images: [
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3'
        ],
        category: 'web',
        tools: [
            { name: 'Figma', icon: 'fa-figma' },
            { name: 'Adobe XD', icon: 'fa-adobe' },
            { name: 'Sketch', icon: 'fa-pencil-alt' }
        ],
        colors: ['#FF6B6B', '#4ECDC4', '#2C3E50', '#F7F9FC']
    },
    {
        title: {
            arabic: 'تصميم منشورات سوشيال ميديا',
            english: 'Social Media Design'
        },
        description: {
            arabic: 'تصميم منشورات وقوالب لمنصات التواصل الاجتماعي لشركة عقارية.',
            english: 'Design of posts and templates for social media platforms for a real estate company.'
        },
        detailedDescription: {
            arabic: 'قمت بتصميم مجموعة متنوعة من منشورات وقوالب وسائل التواصل الاجتماعي لشركة عقارية. تضمن المشروع تصميم منشورات للمشاريع العقارية، والعروض الترويجية، والمحتوى التعليمي، بالإضافة إلى تصميم صور الغلاف وصور الملف الشخصي للحسابات على مختلف المنصات. طورت أسلوبًا بصريًا موحدًا يعكس احترافية الشركة ومكانتها في السوق العقاري، مع مراعاة معايير وأبعاد كل منصة من منصات التواصل الاجتماعي.',
            english: 'I designed a variety of social media posts and templates for a real estate company. The project included designing posts for real estate projects, promotional offers, and educational content, in addition to designing cover photos and profile pictures for accounts on various platforms. I developed a unified visual style that reflects the company\'s professionalism and position in the real estate market, taking into account the standards and dimensions of each social media platform.'
        },
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3',
        images: [
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3'
        ],
        category: 'marketing',
        tools: [
            { name: 'Adobe Photoshop', icon: 'fa-adobe' },
            { name: 'Canva', icon: 'fa-palette' },
            { name: 'Adobe Illustrator', icon: 'fa-adobe' }
        ],
        colors: ['#FF6B6B', '#4ECDC4', '#2C3E50', '#F7F9FC']
    }
];

// Function to create portfolio items
function createPortfolioItems(items, viewType = 'grid') {
    const portfolioShowcase = document.querySelector('.portfolio-showcase');
    portfolioShowcase.innerHTML = '';
    
    // Set the appropriate class for the view type
    portfolioShowcase.className = 'portfolio-showcase ' + viewType + '-view';
    
    items.forEach(item => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', item.category);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${item.image}" alt="${isEnglish ? item.title.english : item.title.arabic}">
            </div>
            <div class="project-overlay">
                <div class="project-info">
                    <h3 class="project-title arabic">${item.title.arabic}</h3>
                    <h3 class="project-title english">${item.title.english}</h3>
                    <div class="project-category">
                        <span class="arabic">${getCategoryName(item.category, 'arabic')}</span>
                        <span class="english">${getCategoryName(item.category, 'english')}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add click event to open modal
        projectCard.addEventListener('click', () => {
            openProjectModal(item);
        });
        
        portfolioShowcase.appendChild(projectCard);
    });
}

// Helper function to get category name in selected language
function getCategoryName(category, language) {
    const categories = {
        'branding': {
            'arabic': 'الهوية البصرية',
            'english': 'Branding'
        },
        'web': {
            'arabic': 'تصميم الويب',
            'english': 'Web Design'
        },
        'marketing': {
            'arabic': 'التسويق',
            'english': 'Marketing'
        }
    };
    
    return categories[category] ? categories[category][language] : category;
}

// Portfolio filters functionality
function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const viewButtons = document.querySelectorAll('.view-btn');
    let currentView = 'grid';
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter portfolio items
            if (filter === 'all') {
                createPortfolioItems(portfolioItems, currentView);
            } else {
                const filteredItems = portfolioItems.filter(item => item.category === filter);
                createPortfolioItems(filteredItems, currentView);
            }
        });
    });
    
    // View toggle functionality
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            currentView = button.getAttribute('data-view');
            
            // Get current filter
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            
            // Apply the new view with current filter
            if (activeFilter === 'all') {
                createPortfolioItems(portfolioItems, currentView);
            } else {
                const filteredItems = portfolioItems.filter(item => item.category === activeFilter);
                createPortfolioItems(filteredItems, currentView);
            }
        });
    });
}

// Project modal functionality
function openProjectModal(item) {
    const modal = document.querySelector('.project-modal');
    const modalImage = modal.querySelector('.gallery-main img');
    const modalArabicTitle = modal.querySelector('.modal-info h3.arabic');
    const modalEnglishTitle = modal.querySelector('.modal-info h3.english');
    const modalArabicDesc = modal.querySelector('.project-description p.arabic');
    const modalEnglishDesc = modal.querySelector('.project-description p.english');
    const modalCategoryArabic = modal.querySelector('.project-category span.arabic');
    const modalCategoryEnglish = modal.querySelector('.project-category span.english');
    const toolsList = modal.querySelector('.tools-list');
    const colorPalette = modal.querySelector('.color-palette');
    const galleryThumbs = modal.querySelector('.gallery-thumbs');
    
    // Set modal content
    modalImage.src = item.image;
    modalImage.alt = isEnglish ? item.title.english : item.title.arabic;
    modalArabicTitle.textContent = item.title.arabic;
    modalEnglishTitle.textContent = item.title.english;
    modalArabicDesc.textContent = item.detailedDescription.arabic;
    modalEnglishDesc.textContent = item.detailedDescription.english;
    modalCategoryArabic.textContent = getCategoryName(item.category, 'arabic');
    modalCategoryEnglish.textContent = getCategoryName(item.category, 'english');
    
    // Set tools used
    toolsList.innerHTML = item.tools.map(tool => `
        <div class="tool-item">
            <i class="fas ${tool.icon}"></i>
            <span>${tool.name}</span>
        </div>
    `).join('');
    
    // Set color palette
    colorPalette.innerHTML = item.colors.map(color => `
        <div class="color-dot" style="background-color: ${color};" title="${color}"></div>
    `).join('');
    
    // Set gallery thumbnails
    galleryThumbs.innerHTML = item.images.map((img, index) => `
        <div class="thumb-item ${index === 0 ? 'active' : ''}" data-index="${index}">
            <img src="${img}" alt="Thumbnail ${index + 1}">
        </div>
    `).join('');
    
    // Add click events to thumbnails
    galleryThumbs.querySelectorAll('.thumb-item').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const index = thumb.getAttribute('data-index');
            modalImage.src = item.images[index];
            
            // Update active thumbnail
            galleryThumbs.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scrolling
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore body scrolling
}

// Setup pagination
function setupPagination() {
    const paginationContainer = document.querySelector('.portfolio-pagination');
    const itemsPerPage = 6;
    const pageCount = Math.ceil(portfolioItems.length / itemsPerPage);
    
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn prev-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    paginationContainer.appendChild(prevBtn);
    
    // Page buttons
    for (let i = 0; i < pageCount; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'pagination-btn';
        if (i === 0) pageBtn.classList.add('active');
        pageBtn.textContent = i + 1;
        
        pageBtn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.pagination-btn').forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            pageBtn.classList.add('active');
            
            // Show items for selected page
            const start = i * itemsPerPage;
            const end = start + itemsPerPage;
            const pageItems = portfolioItems.slice(start, end);
            createPortfolioItems(pageItems, 'grid');
        });
        
        paginationContainer.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn next-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    paginationContainer.appendChild(nextBtn);
    
    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.pagination-btn.active:not(.prev-btn):not(.next-btn)');
        if (activeBtn && parseInt(activeBtn.textContent) > 1) {
            const prevPageBtn = activeBtn.previousElementSibling;
            prevPageBtn.click();
        }
    });
    
    // Next button functionality
    nextBtn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.pagination-btn.active:not(.prev-btn):not(.next-btn)');
        if (activeBtn && parseInt(activeBtn.textContent) < pageCount) {
            const nextPageBtn = activeBtn.nextElementSibling;
            nextPageBtn.click();
        }
    });
}

// Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert(isEnglish ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!');
        
        // Reset form
        contactForm.reset();
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create initial portfolio items (first page)
    const firstPageItems = portfolioItems.slice(0, 6);
    createPortfolioItems(firstPageItems, 'grid');
    
    // Setup portfolio filters
    setupPortfolioFilters();
    
    // Setup pagination
    setupPagination();
    
    // Setup modal close button
    document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside of content
    document.querySelector('.modal-overlay').addEventListener('click', closeProjectModal);
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize parallax effect
    initParallaxEffect();
    
    // Initialize typing effect for hero section
    initTypingEffect();
    
    // Create particles background for hero section
    createParticles();
    
    // Setup skill bars animation
    setupSkillBarsAnimation();
    
    // Initialize color mixer
    initColorMixer();
    
    // Setup design elements interaction
    setupDesignElements();
    
    // Initialize tool boxes interaction
    initToolBoxes();
});

// Custom cursor effect
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.position = 'fixed';
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.width = '100%';
    cursor.style.height = '100%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorDot.style.position = 'fixed';
    cursorDot.style.width = '8px';
    cursorDot.style.height = '8px';
    cursorDot.style.backgroundColor = 'var(--primary-color)';
    cursorDot.style.borderRadius = '50%';
    cursorDot.style.transform = 'translate(-50%, -50%)';
    cursorDot.style.transition = 'width 0.2s, height 0.2s';
    cursorDot.style.pointerEvents = 'none';
    
    const cursorCircle = document.createElement('div');
    cursorCircle.className = 'cursor-circle';
    cursorCircle.style.position = 'fixed';
    cursorCircle.style.width = '40px';
    cursorCircle.style.height = '40px';
    cursorCircle.style.border = '2px solid var(--primary-color)';
    cursorCircle.style.borderRadius = '50%';
    cursorCircle.style.transform = 'translate(-50%, -50%)';
    cursorCircle.style.transition = 'width 0.3s, height 0.3s, border-color 0.3s';
    cursorCircle.style.pointerEvents = 'none';
    
    cursor.appendChild(cursorDot);
    cursor.appendChild(cursorCircle);
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        // Dot follows cursor exactly
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        // Circle follows with a slight delay for a nice effect
        setTimeout(() => {
            cursorCircle.style.left = e.clientX + 'px';
            cursorCircle.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Cursor grows on clickable elements
    const clickables = document.querySelectorAll('a, button, .portfolio-item, .service-card, .social-link');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-grow');
            cursorCircle.style.width = '60px';
            cursorCircle.style.height = '60px';
            cursorCircle.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-grow');
            cursorCircle.style.width = '40px';
            cursorCircle.style.height = '40px';
            cursorCircle.style.backgroundColor = 'transparent';
        });
    });
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Hide on touch devices
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    }
}

// Parallax effect for background elements
function initParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX / window.innerWidth) - 0.5;
        const moveY = (e.clientY / window.innerHeight) - 0.5;
        
        // Apply parallax to hero section background
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundPosition = `${50 + (moveX * 20)}% ${50 + (moveY * 20)}%`;
        }
        
        // Apply to portfolio items for a subtle effect
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            const depth = 10; // Depth of movement
            item.style.transform = `translateX(${moveX * depth}px) translateY(${moveY * depth}px)`;
        });
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const heroTitleArabic = document.querySelector('.hero h1.arabic');
    const heroTitleEnglish = document.querySelector('.hero h1.english');
    
    if (heroTitleArabic && heroTitleEnglish) {
        const originalTextArabic = heroTitleArabic.textContent;
        const originalTextEnglish = heroTitleEnglish.textContent;
        
        // Reset text
        heroTitleArabic.textContent = '';
        heroTitleEnglish.textContent = '';
        
        // Typing animation function
        function typeText(element, text, i = 0) {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                setTimeout(() => typeText(element, text, i + 1), 100);
            } else {
                // Add blinking cursor effect when done
                element.classList.add('typing-done');
            }
        }
        
        // Start typing after a short delay
        setTimeout(() => {
            typeText(heroTitleArabic, originalTextArabic);
            typeText(heroTitleEnglish, originalTextEnglish);
        }, 500);
    }
}

// Create particles background effect
function createParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const canvas = document.createElement('canvas');
    canvas.className = 'particles-canvas';
    heroSection.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create particles
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            color: `hsla(${Math.random() * 60 + 330}, 100%, 75%, ${Math.random() * 0.5 + 0.3})`
        };
    }
    
    // Initialize particles
    for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Draw particle
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Move particle
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Animate skill bars on scroll
function setupSkillBarsAnimation() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the width based on the percentage
                const targetWidth = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = targetWidth;
                }, 200);
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillLevels.forEach(skill => {
        observer.observe(skill);
    });
}

// Initialize color mixer
function initColorMixer() {
    const colorSliders = document.querySelectorAll('.color-slider');
    const colorPreview = document.querySelector('.color-preview');
    const colorCode = document.querySelector('.color-code span');
    
    if (!colorSliders.length || !colorPreview || !colorCode) return;
    
    let rgbValues = {
        r: 255,
        g: 107,
        b: 107
    };
    
    // Initial color update
    updateColor();
    
    // Add event listeners to sliders
    colorSliders.forEach(slider => {
        slider.addEventListener('input', function() {
            const color = this.getAttribute('data-color');
            rgbValues[color] = parseInt(this.value);
            updateColor();
        });
    });
    
    // Function to update color preview and code
    function updateColor() {
        const hexColor = rgbToHex(rgbValues.r, rgbValues.g, rgbValues.b);
        colorPreview.style.backgroundColor = hexColor;
        colorCode.textContent = hexColor;
        
        // Update CSS variable for primary color
        document.documentElement.style.setProperty('--primary-color', hexColor);
    }
    
    // Function to convert RGB to HEX
    function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    }
}

// Setup design elements interaction
function setupDesignElements() {
    const designElements = document.querySelectorAll('.design-element');
    if (!designElements.length) return;
    
    designElements.forEach(element => {
        element.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            // Reset all portfolio items
            portfolioItems.forEach(item => {
                item.style.transform = '';
                item.style.transition = 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)';
            });
            
            // Apply effect based on design principle
            switch(type) {
                case 'contrast':
                    // Increase contrast in the portfolio section
                    document.querySelector('.portfolio').style.background = '#111';
                    document.querySelectorAll('.portfolio-category').forEach(cat => {
                        cat.style.backgroundColor = 'var(--primary-color)';
                        cat.style.color = 'white';
                    });
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        document.querySelector('.portfolio').style.background = '';
                        document.querySelectorAll('.portfolio-category').forEach(cat => {
                            cat.style.backgroundColor = '';
                            cat.style.color = '';
                        });
                    }, 2000);
                    break;
                    
                case 'balance':
                    // Create a balanced layout effect
                    portfolioItems.forEach((item, index) => {
                        if (index % 2 === 0) {
                            item.style.transform = 'scale(1.05)';
                        } else {
                            item.style.transform = 'scale(0.95)';
                        }
                    });
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        portfolioItems.forEach(item => {
                            item.style.transform = '';
                        });
                    }, 2000);
                    break;
                    
                case 'rhythm':
                    // Create a rhythmic animation
                    portfolioItems.forEach((item, index) => {
                        item.style.transition = 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)';
                        setTimeout(() => {
                            item.style.transform = 'translateY(-20px)';
                            
                            setTimeout(() => {
                                item.style.transform = '';
                            }, 600);
                        }, index * 200);
                    });
                    break;
                    
                case 'proportion':
                    // Demonstrate golden ratio effect
                    portfolioItems.forEach((item, index) => {
                        if (index === 0) {
                            item.style.transform = 'scale(1.618)';
                            item.style.zIndex = '10';
                        } else {
                            item.style.transform = 'scale(1)';
                            item.style.zIndex = '1';
                        }
                    });
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        portfolioItems.forEach(item => {
                            item.style.transform = '';
                            item.style.zIndex = '';
                        });
                    }, 2000);
                    break;
            }
        });
    });
}

// Initialize tool boxes interaction
function initToolBoxes() {
    const toolBoxes = document.querySelectorAll('.tool-box');
    if (!toolBoxes.length) return;
    
    toolBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            
            // Create a floating icon animation
            const icon = document.createElement('i');
            icon.className = this.querySelector('i').className;
            icon.style.position = 'fixed';
            icon.style.fontSize = '3rem';
            icon.style.color = this.querySelector('i').style.color || getComputedStyle(this.querySelector('i')).color;
            icon.style.zIndex = '9999';
            icon.style.pointerEvents = 'none';
            icon.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
            
            // Get position of the tool box
            const rect = this.getBoundingClientRect();
            icon.style.top = `${rect.top + rect.height/2}px`;
            icon.style.left = `${rect.left + rect.width/2}px`;
            icon.style.transform = 'translate(-50%, -50%)';
            
            document.body.appendChild(icon);
            
            // Animate the icon to a random position on screen
            setTimeout(() => {
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                
                icon.style.top = `${randomY}px`;
                icon.style.left = `${randomX}px`;
                icon.style.opacity = '0';
                
                // Remove the icon after animation completes
                setTimeout(() => {
                    document.body.removeChild(icon);
                }, 1000);
            }, 100);
            
            // Create a little splash on the portfolio items based on the tool
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            switch(tool) {
                case 'Photoshop':
                    // Photo effect
                    portfolioItems.forEach(item => {
                        const img = item.querySelector('img');
                        if (img) {
                            img.style.filter = 'saturate(1.5) contrast(1.2)';
                            setTimeout(() => {
                                img.style.filter = '';
                            }, 2000);
                        }
                    });
                    break;
                    
                case 'Illustrator':
                    // Vector effect
                    portfolioItems.forEach(item => {
                        item.style.outline = '3px solid var(--primary-color)';
                        item.style.outlineOffset = '3px';
                        setTimeout(() => {
                            item.style.outline = '';
                            item.style.outlineOffset = '';
                        }, 2000);
                    });
                    break;
                    
                case 'InDesign':
                    // Layout effect
                    portfolioItems.forEach((item, index) => {
                        const originalPosition = item.style.transform;
                        if (index % 2 === 0) {
                            item.style.transform = 'translateX(-20px)';
                        } else {
                            item.style.transform = 'translateX(20px)';
                        }
                        setTimeout(() => {
                            item.style.transform = originalPosition;
                        }, 2000);
                    });
                    break;
                    
                case 'XD':
                    // Prototype effect
                    portfolioItems.forEach((item, index) => {
                        // Create connection lines between items
                        if (index < portfolioItems.length - 1) {
                            const rect1 = item.getBoundingClientRect();
                            const rect2 = portfolioItems[index + 1].getBoundingClientRect();
                            
                            const line = document.createElement('div');
                            line.style.position = 'absolute';
                            line.style.height = '2px';
                            line.style.background = 'var(--primary-color)';
                            line.style.zIndex = '1';
                            line.style.opacity = '0';
                            line.classList.add('xd-line');
                            
                            const x1 = rect1.left + rect1.width / 2;
                            const y1 = rect1.top + rect1.height / 2;
                            const x2 = rect2.left + rect2.width / 2;
                            const y2 = rect2.top + rect2.height / 2;
                            
                            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                            
                            line.style.width = `${length}px`;
                            line.style.top = `${y1}px`;
                            line.style.left = `${x1}px`;
                            line.style.transform = `rotate(${angle}deg) translateX(0) translateY(-50%)`;
                            line.style.transformOrigin = '0 0';
                            
                            document.body.appendChild(line);
                            
                            setTimeout(() => {
                                line.style.opacity = '1';
                            }, 10);
                            
                            setTimeout(() => {
                                line.style.opacity = '0';
                                setTimeout(() => {
                                    document.body.removeChild(line);
                                }, 1000);
                            }, 2000);
                        }
                    });
                    break;
                    
                case 'Figma':
                    // Component effect
                    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#FF6B6B'];
                    portfolioItems.forEach((item, index) => {
                        const color = colors[index % colors.length];
                        item.style.boxShadow = `0 0 0 4px ${color}`;
                        
                        setTimeout(() => {
                            item.style.boxShadow = '';
                        }, 2000);
                    });
                    break;
            }
        });
    });
} 