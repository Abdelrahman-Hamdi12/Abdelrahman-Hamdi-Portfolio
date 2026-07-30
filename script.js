/* Abdo Hamdy Portfolio - script.js
   Each section below is self-contained and fails gracefully on its own. */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TRANSLATIONS = {
  "en": {
    "nav_home": "Home",
    "nav_about": "About",
    "nav_skills": "Skills",
    "nav_projects": "Projects",
    "nav_services": "Services",
    "nav_contact": "Contact",
    "hero_greeting": "Hi, I'm",
    "hero_roles": [
      "Frontend Developer",
      "Full-Stack Developer",
      "IT Student"
    ],
    "hero_intro": "Passionate IT student with hands-on experience in web development, networking, and cybersecurity. Building clean, modern interfaces and solving real-world problems.",
    "hero_btn_cv": "Download CV",
    "hero_btn_projects": "View Projects",
    "stats_projects": "Projects",
    "stats_certs": "Certificates",
    "stats_languages": "Languages",
    "about_title": "About Me",
    "about_subtitle": "Who I Am",
    "about_p1": "I'm Abdelrahman Hamdi, a 19-year-old IT student at the Integrated Technical Education Complex (Italian School) in Fayoum. I'm passionate about programming, web development, networking, and cybersecurity.",
    "about_p2": "I speak Arabic natively, English (B1), and Italian (B2.1), which lets me collaborate with international clients. Always eager to learn and grow professionally.",
    "about_fact_location": "Fayoum, Egypt",
    "about_fact_student": "IT Student",
    "about_fact_lang": "Arabic · English · Italian",
    "about_btn_contact": "Contact Me",
    "skills_title": "Skills",
    "skill_networking": "Networking (CCNA)",
    "skill_cybersecurity": "Cybersecurity",
    "skill_databases": "Databases",
    "skill_datastructures": "Data Structures",
    "skill_iot": "IoT (Internet of Things)",
    "certs_title": "Certificates",
    "certs_group_networking": "Networking & Cisco",
    "certs_group_it": "IT & Cybersecurity",
    "certs_group_languages": "Languages",
    "journey_title": "My Journey",
    "j1_title": "Started IT Studies",
    "j1_desc": "Began the Information Technology track at the Integrated Technical Education Complex (Italian School), Fayoum.",
    "j2_title": "Italian Language - Level 6",
    "j2_desc": "Completed a 40-hour course at the Istituto Italiano di Cultura, Cairo.",
    "j3_title": "CCNA Track (3 courses)",
    "j3_desc": "Introduction to Networks, Switching/Routing/Wireless Essentials, and Enterprise Networking/Security/Automation - Cisco Networking Academy.",
    "j4_title": "7 More Cisco Certificates",
    "j4_desc": "Networking Basics, Introduction to Cybersecurity, IoT, Modern AI, Network Technician Career Path, Industrial Networking Essentials, and Digital Safety & Security Awareness.",
    "j5_title": "Building & Applying",
    "j5_desc": "Growing a full-stack portfolio (PHP/MySQL, JavaScript) while looking for a first frontend/full-stack internship.",
    "projects_title": "My Projects",
    "p1_desc": "A Coffee Shop project built in two versions: a front-end UI/UX experience with a shopping cart, and a full-stack system adding authentication, OTP verification, checkout, order management, and an admin dashboard.",
    "p2_desc": "This portfolio itself: a responsive personal website built with HTML, CSS, and JavaScript, featuring an interactive 3D hero, animated skill bars, and smooth navigation.",
    "p3_desc": "A simulated network topology using Cisco Packet Tracer. Configured routers, switches, and VLANs as part of CCNA training to demonstrate real networking.",
    "p4_desc": "A collection of Python scripts covering automation, algorithms, and data processing — built to strengthen core programming fundamentals.",
    "p5_desc": "A CSS/JavaScript animation of the sun moving across the sky, creating a smooth sunrise-to-sunset effect with natural, attractive motion.",
    "p6_desc": "A CSS/JavaScript animation of a pair of eyes that blink and look naturally in different directions for a smooth, realistic effect.",
    "p7_desc": "A restaurant website with a welcoming design, menu highlights, and a modern, inviting layout for a pleasant dining experience.",
    "p8_desc": "A cozy café/bakery website with a warm atmosphere, menu highlights, and a modern layout designed for a relaxing customer experience.",
    "p9_desc": "A product catalog that fetches and displays live data from the DummyJSON API using JavaScript, demonstrating dynamic requests and real-time UI updates.",
    "p10_desc": "A responsive landing page built with HTML, CSS, and JavaScript, presenting repair and maintenance services across Home, About, Services, and Contact sections.",
    "p11_desc": "A simple to-do list app for adding, checking off, and deleting daily tasks, with a clean and lightweight interface.",
    "btn_live": "Live Demo",
    "btn_code": "Code",
    "btn_frontend": "Front-End",
    "btn_pending_fullstack": "Full-Stack coming soon",
    "btn_pending_files": "Files coming soon",
    "btn_pending_code": "Code coming soon",
    "btn_pending_live": "Live demo coming soon",
    "github_title": "GitHub Activity",
    "github_repos": "Public Repos",
    "github_stars": "Total Stars",
    "services_title": "Services",
    "s1_title": "Web Development",
    "s1_desc": "Building modern, responsive websites with clean code tailored to each client's vision.",
    "s2_title": "Programming Training",
    "s2_desc": "Teaching programming to beginners in a simple, practical, and enjoyable way.",
    "s3_title": "Multilingual Freelancing",
    "s3_desc": "Web services for Arabic, English, and Italian-speaking clients. Italian voice-over available.",
    "contact_title": "Contact Me",
    "form_name": "Name",
    "form_email": "Email",
    "form_message": "Message",
    "form_submit": "Send Message",
    "footer_html": "&copy; 2025–2026 Developed by <strong>Eng. Abdo Hamdy Roubi</strong>",
    "toast_script_error": "Contact form script did not load - please email me directly.",
    "toast_not_connected": "Form not connected yet - add your EmailJS IDs in index.html.",
    "toast_success": "Message sent - thank you! I will get back to you soon.",
    "toast_generic_error": "Something went wrong. Please try again or email me directly."
  },
  "ar": {
    "nav_home": "الرئيسية",
    "nav_about": "نبذة عني",
    "nav_skills": "المهارات",
    "nav_projects": "المشاريع",
    "nav_services": "الخدمات",
    "nav_contact": "تواصل",
    "hero_greeting": "أهلاً، أنا",
    "hero_roles": [
      "مطوّر واجهات أمامية",
      "مطوّر Full-Stack",
      "طالب تكنولوجيا معلومات"
    ],
    "hero_intro": "طالب تكنولوجيا معلومات شغوف، بخبرة عملية في تطوير الويب والشبكات والأمن السيبراني. يبني واجهات نظيفة وعصرية ويحل مشكلات واقعية.",
    "hero_btn_cv": "تحميل السيرة الذاتية",
    "hero_btn_projects": "عرض المشاريع",
    "stats_projects": "مشاريع",
    "stats_certs": "شهادات",
    "stats_languages": "لغات",
    "about_title": "نبذة عني",
    "about_subtitle": "من أنا",
    "about_p1": "أنا عبدالرحمن حمدي، طالب تكنولوجيا معلومات عمري 19 عامًا بمجمع التعليم الفني المتكامل (المدرسة الإيطالية) في الفيوم. شغوف بالبرمجة وتطوير الويب والشبكات والأمن السيبراني.",
    "about_p2": "أتحدث العربية كلغة أم، والإنجليزية (B1)، والإيطالية (B2.1)، ما يتيح لي التعاون مع عملاء دوليين. دائم الرغبة في التعلم والتطور المهني.",
    "about_fact_location": "الفيوم، مصر",
    "about_fact_student": "طالب تكنولوجيا معلومات",
    "about_fact_lang": "عربي · إنجليزي · إيطالي",
    "about_btn_contact": "تواصل معي",
    "skills_title": "المهارات",
    "skill_networking": "الشبكات (CCNA)",
    "skill_cybersecurity": "الأمن السيبراني",
    "skill_databases": "قواعد البيانات",
    "skill_datastructures": "هياكل البيانات",
    "skill_iot": "إنترنت الأشياء (IoT)",
    "certs_title": "الشهادات",
    "certs_group_networking": "الشبكات وسيسكو",
    "certs_group_it": "تكنولوجيا المعلومات والأمن السيبراني",
    "certs_group_languages": "اللغات",
    "journey_title": "مسيرتي",
    "j1_title": "بداية دراسة تكنولوجيا المعلومات",
    "j1_desc": "بدأت مسار تكنولوجيا المعلومات في مجمع التعليم الفني المتكامل (المدرسة الإيطالية)، الفيوم.",
    "j2_title": "اللغة الإيطالية - المستوى 6",
    "j2_desc": "أكملت دورة 40 ساعة في المعهد الثقافي الإيطالي بالقاهرة.",
    "j3_title": "مسار CCNA (3 دورات)",
    "j3_desc": "مقدمة إلى الشبكات، وأساسيات التحويل والتوجيه والاتصال اللاسلكي، وشبكات المؤسسات والأمن والأتمتة - أكاديمية سيسكو للشبكات.",
    "j4_title": "7 شهادات إضافية من سيسكو",
    "j4_desc": "أساسيات الشبكات، مقدمة في الأمن السيبراني، إنترنت الأشياء، الذكاء الاصطناعي الحديث، مسار فني الشبكات المهني، أساسيات شبكات المصانع، والوعي بالسلامة والأمان الرقمي.",
    "j5_title": "بناء وتقديم الطلبات",
    "j5_desc": "أطوّر بورتفوليو full-stack (PHP/MySQL وJavaScript) وأبحث عن أول فرصة تدريب في تطوير الواجهات الأمامية أو full-stack.",
    "projects_title": "مشاريعي",
    "p1_desc": "مشروع كافيه بنسختين: تجربة واجهة أمامية بسلة شراء تفاعلية، ونظام full-stack كامل بتسجيل دخول، وتحقق OTP، ودفع، وإدارة طلبات، ولوحة تحكم للإدارة.",
    "p2_desc": "هذا البورتفوليو نفسه: موقع شخصي متجاوب مبني بـ HTML وCSS وJavaScript، بمشهد ترحيبي ثلاثي الأبعاد، وأشرطة مهارات متحركة، وتنقل سلس.",
    "p3_desc": "محاكاة لطوبولوجيا شبكة باستخدام Cisco Packet Tracer، بإعداد أجهزة توجيه ومحولات وشبكات VLAN كجزء من تدريب CCNA لتوضيح شبكات حقيقية.",
    "p4_desc": "مجموعة سكربتات Python تغطي الأتمتة والخوارزميات ومعالجة البيانات - لتقوية أساسيات البرمجة.",
    "p5_desc": "تحريك بـ CSS وJavaScript للشمس وهي تتحرك عبر السماء، بتأثير سلس من الشروق إلى الغروب بحركة طبيعية وجذابة.",
    "p6_desc": "تحريك بـ CSS وJavaScript لعينين ترمشان وتنظران بشكل طبيعي في اتجاهات مختلفة، بتأثير سلس وواقعي.",
    "p7_desc": "موقع مطعم بتصميم ترحيبي، وعرض لأبرز أطباق المنيو، وتخطيط عصري لتجربة تناول ممتعة.",
    "p8_desc": "موقع كافيه/مخبز بأجواء دافئة، وعرض لأبرز المنيو، وتخطيط عصري مصمم لتجربة عملاء مريحة.",
    "p9_desc": "كتالوج منتجات يجلب ويعرض بيانات حية من واجهة DummyJSON API باستخدام JavaScript، لتوضيح الطلبات الديناميكية والتحديث اللحظي للواجهة.",
    "p10_desc": "صفحة هبوط متجاوبة مبنية بـ HTML وCSS وJavaScript، تعرض خدمات الصيانة والإصلاح عبر أقسام الرئيسية ونبذة عنا والخدمات والتواصل.",
    "p11_desc": "تطبيق قائمة مهام بسيط لإضافة المهام اليومية وتحديدها كمكتملة وحذفها، بواجهة نظيفة وخفيفة.",
    "btn_live": "معاينة مباشرة",
    "btn_code": "الكود",
    "btn_frontend": "الواجهة الأمامية",
    "btn_pending_fullstack": "نسخة Full-Stack قريبًا",
    "btn_pending_files": "الملفات قريبًا",
    "btn_pending_code": "الكود قريبًا",
    "btn_pending_live": "المعاينة المباشرة قريبًا",
    "github_title": "نشاط GitHub",
    "github_repos": "المستودعات العامة",
    "github_stars": "إجمالي النجوم",
    "services_title": "الخدمات",
    "s1_title": "تطوير الويب",
    "s1_desc": "بناء مواقع عصرية ومتجاوبة بكود نظيف يتماشى مع رؤية كل عميل.",
    "s2_title": "تدريب على البرمجة",
    "s2_desc": "تعليم البرمجة للمبتدئين بطريقة بسيطة وعملية وممتعة.",
    "s3_title": "عمل حر متعدد اللغات",
    "s3_desc": "خدمات ويب للعملاء الناطقين بالعربية والإنجليزية والإيطالية، مع توفر تعليق صوتي بالإيطالية.",
    "contact_title": "تواصل معي",
    "form_name": "الاسم",
    "form_email": "البريد الإلكتروني",
    "form_message": "الرسالة",
    "form_submit": "إرسال الرسالة",
    "footer_html": "&copy; 2025–2026 تطوير <strong>المهندس عبده حمدي روبي</strong>",
    "toast_script_error": "سكربت نموذج التواصل لم يتم تحميله - من فضلك راسلني على الإيميل مباشرة.",
    "toast_not_connected": "النموذج غير متصل بعد - أضف بيانات EmailJS في index.html.",
    "toast_success": "تم إرسال الرسالة - شكرًا لك! سأتواصل معك قريبًا.",
    "toast_generic_error": "حدث خطأ ما. من فضلك حاول مرة أخرى أو راسلني على الإيميل مباشرة."
  },
  "it": {
    "nav_home": "Home",
    "nav_about": "Chi sono",
    "nav_skills": "Competenze",
    "nav_projects": "Progetti",
    "nav_services": "Servizi",
    "nav_contact": "Contatti",
    "hero_greeting": "Ciao, sono",
    "hero_roles": [
      "Sviluppatore Frontend",
      "Sviluppatore Full-Stack",
      "Studente IT"
    ],
    "hero_intro": "Studente di informatica appassionato, con esperienza pratica nello sviluppo web, nel networking e nella cybersecurity. Costruisco interfacce pulite e moderne e risolvo problemi reali.",
    "hero_btn_cv": "Scarica CV",
    "hero_btn_projects": "Vedi Progetti",
    "stats_projects": "Progetti",
    "stats_certs": "Certificati",
    "stats_languages": "Lingue",
    "about_title": "Chi sono",
    "about_subtitle": "La mia storia",
    "about_p1": "Sono Abdelrahman Hamdi, uno studente di informatica di 19 anni presso l'Integrated Technical Education Complex (Scuola Italiana) di Fayoum. Sono appassionato di programmazione, sviluppo web, networking e cybersecurity.",
    "about_p2": "Parlo arabo madrelingua, inglese (B1) e italiano (B2.1), il che mi permette di collaborare con clienti internazionali. Sempre desideroso di imparare e crescere professionalmente.",
    "about_fact_location": "Fayoum, Egitto",
    "about_fact_student": "Studente IT",
    "about_fact_lang": "Arabo · Inglese · Italiano",
    "about_btn_contact": "Contattami",
    "skills_title": "Competenze",
    "skill_networking": "Networking (CCNA)",
    "skill_cybersecurity": "Cybersecurity",
    "skill_databases": "Database",
    "skill_datastructures": "Strutture Dati",
    "skill_iot": "IoT (Internet delle Cose)",
    "certs_title": "Certificati",
    "certs_group_networking": "Networking e Cisco",
    "certs_group_it": "IT e Cybersecurity",
    "certs_group_languages": "Lingue",
    "journey_title": "Il Mio Percorso",
    "j1_title": "Inizio degli studi IT",
    "j1_desc": "Ho iniziato il percorso di Tecnologia dell'Informazione presso l'Integrated Technical Education Complex (Scuola Italiana), Fayoum.",
    "j2_title": "Lingua Italiana - Livello 6",
    "j2_desc": "Completato un corso di 40 ore presso l'Istituto Italiano di Cultura del Cairo.",
    "j3_title": "Percorso CCNA (3 corsi)",
    "j3_desc": "Introduction to Networks, Switching/Routing/Wireless Essentials ed Enterprise Networking/Security/Automation - Cisco Networking Academy.",
    "j4_title": "7 nuovi certificati Cisco",
    "j4_desc": "Networking Basics, Introduction to Cybersecurity, IoT, Modern AI, Network Technician Career Path, Industrial Networking Essentials e Digital Safety & Security Awareness.",
    "j5_title": "Costruire e Candidarmi",
    "j5_desc": "Sto sviluppando un portfolio full-stack (PHP/MySQL, JavaScript) mentre cerco il mio primo tirocinio da frontend/full-stack.",
    "projects_title": "I Miei Progetti",
    "p1_desc": "Un progetto per una caffetteria in due versioni: un'esperienza front-end con carrello acquisti, e un sistema full-stack con autenticazione, verifica OTP, checkout, gestione ordini e pannello di amministrazione.",
    "p2_desc": "Questo stesso portfolio: un sito personale responsive costruito con HTML, CSS e JavaScript, con una hero 3D interattiva, barre di competenza animate e una navigazione fluida.",
    "p3_desc": "Una topologia di rete simulata con Cisco Packet Tracer. Router, switch e VLAN configurati come parte della formazione CCNA per dimostrare un networking reale.",
    "p4_desc": "Una raccolta di script Python su automazione, algoritmi ed elaborazione dati, per rafforzare le basi della programmazione.",
    "p5_desc": "Un'animazione CSS/JavaScript del sole che attraversa il cielo, con un effetto fluido dall'alba al tramonto e un movimento naturale e piacevole.",
    "p6_desc": "Un'animazione CSS/JavaScript di due occhi che sbattono le palpebre e guardano naturalmente in direzioni diverse, con un effetto fluido e realistico.",
    "p7_desc": "Un sito per un ristorante con un design accogliente, piatti del menu in evidenza e un layout moderno per un'esperienza piacevole.",
    "p8_desc": "Un sito per una caffetteria/panetteria con un'atmosfera calda, il menu in evidenza e un layout moderno pensato per un'esperienza rilassante.",
    "p9_desc": "Un catalogo prodotti che recupera e mostra dati in tempo reale dalle API DummyJSON con JavaScript, per dimostrare richieste dinamiche e aggiornamenti dell'interfaccia in tempo reale.",
    "p10_desc": "Una landing page responsive costruita con HTML, CSS e JavaScript, che presenta servizi di riparazione e manutenzione nelle sezioni Home, Chi Siamo, Servizi e Contatti.",
    "p11_desc": "Una semplice app di lista attività per aggiungere, completare ed eliminare le attività quotidiane, con un'interfaccia pulita ed essenziale.",
    "btn_live": "Demo Live",
    "btn_code": "Codice",
    "btn_frontend": "Front-End",
    "btn_pending_fullstack": "Full-Stack in arrivo",
    "btn_pending_files": "File in arrivo",
    "btn_pending_code": "Codice in arrivo",
    "btn_pending_live": "Demo live in arrivo",
    "github_title": "Attività GitHub",
    "github_repos": "Repository Pubbliche",
    "github_stars": "Stelle Totali",
    "services_title": "Servizi",
    "s1_title": "Sviluppo Web",
    "s1_desc": "Costruisco siti web moderni e responsive con codice pulito, su misura per la visione di ogni cliente.",
    "s2_title": "Formazione alla Programmazione",
    "s2_desc": "Insegno programmazione ai principianti in modo semplice, pratico e piacevole.",
    "s3_title": "Freelance Multilingue",
    "s3_desc": "Servizi web per clienti di lingua araba, inglese e italiana. Disponibile voice-over in italiano.",
    "contact_title": "Contattami",
    "form_name": "Nome",
    "form_email": "Email",
    "form_message": "Messaggio",
    "form_submit": "Invia Messaggio",
    "footer_html": "&copy; 2025–2026 Sviluppato da <strong>Ing. Abdo Hamdy Roubi</strong>",
    "toast_script_error": "Lo script del modulo di contatto non si è caricato - scrivimi direttamente via email.",
    "toast_not_connected": "Modulo non ancora collegato - aggiungi i tuoi ID EmailJS in index.html.",
    "toast_success": "Messaggio inviato - grazie! Ti risponderò presto.",
    "toast_generic_error": "Qualcosa è andato storto. Riprova o scrivimi direttamente via email."
  }
};

/* Language switcher (EN / AR / IT) - reads TRANSLATIONS above */
(function initI18n() {
    const supported = ['en', 'ar', 'it'];
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
    let currentLang = supported.includes(saved) ? saved : 'en';

    function t(key) {
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
        return (key in dict) ? dict[key] : (TRANSLATIONS.en[key] || '');
    }

    let isFirstApply = true;

    function updateContent(lang) {
        currentLang = supported.includes(lang) ? lang : 'en';

        document.documentElement.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const value = t(el.getAttribute('data-i18n'));
            if (value) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const value = t(el.getAttribute('data-i18n-html'));
            if (value) el.innerHTML = value;
        });

        const heroGreeting = document.getElementById('heroGreeting');
        if (heroGreeting) {
            heroGreeting.innerHTML = t('hero_greeting') + ' <span>Abdo</span>';
        }

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });

        try { localStorage.setItem('lang', currentLang); } catch (e) { /* ignore */ }

        window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: currentLang } }));
    }

    function applyLanguage(lang) {
        if (isFirstApply || prefersReducedMotion) {
            isFirstApply = false;
            updateContent(lang);
            return;
        }

        document.body.classList.add('lang-fade');
        setTimeout(() => {
            updateContent(lang);
            requestAnimationFrame(() => document.body.classList.remove('lang-fade'));
        }, 180);
    }

    window.t = t;
    window.getCurrentLang = () => currentLang;

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.dataset.lang !== currentLang) applyLanguage(btn.dataset.lang);
        });
    });

    applyLanguage(currentLang);
})();


/* Mobile navigation (hamburger menu) */
(function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (!hamburger || !navLinks) return;

    function closeMenu() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // close menu after tapping a link
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
})();

/* Navbar scrolled state */
(function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;
    function update() {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    });
    update();
})();

/* Scroll-reveal animations */
(function initReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach((el) => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
})();

/* Animated skill bars (with a synced percentage count-up) */
(function initSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');
    if (!bars.length) return;

    function countUp(bar) {
        const item = bar.closest('.skill-item');
        const numEl = item && item.querySelector('.skill-header small');
        if (!numEl) return;
        const target = parseInt(bar.dataset.width, 10) || 0;
        const duration = 1000;
        const start = performance.now();

        function frame(now) {
            const progress = Math.min((now - start) / duration, 1);
            numEl.textContent = Math.round(progress * target) + '%';
            if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        bars.forEach((bar) => { bar.style.width = bar.dataset.width; });
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.dataset.width;
                    countUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    bars.forEach((bar) => observer.observe(bar));
})();

/* Typed hero title - re-reads titles from the active language on languagechange */
(function initTypedText() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    function getTitles() {
        const fromDict = window.t && window.t('hero_roles');
        return Array.isArray(fromDict) && fromDict.length
            ? fromDict
            : ['Frontend Developer', 'Full-Stack Developer', 'IT Student'];
    }

    let titles = getTitles();
    let titleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    if (prefersReducedMotion) {
        el.textContent = titles[0];
        window.addEventListener('languagechange', () => {
            titles = getTitles();
            el.textContent = titles[0];
        });
        return;
    }

    function tick() {
        const current = titles[titleIndex % titles.length];

        if (!deleting) {
            charIndex++;
            el.textContent = current.slice(0, charIndex);
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(tick, 1800);
                return;
            }
        } else {
            charIndex--;
            el.textContent = current.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
            }
        }
        setTimeout(tick, deleting ? 40 : 75);
    }

    window.addEventListener('languagechange', () => {
        titles = getTitles();
        titleIndex = 0;
        charIndex = 0;
        deleting = false;
    });

    tick();
})();

/* 3D network-node hero scene (Three.js) */
(function initHero3D() {
    const container = document.getElementById('hero3d');
    if (!container) return;

    // falls back to the static hero background if WebGL/Three.js isn't available
    if (typeof THREE === 'undefined') return;
    if (prefersReducedMotion) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    if (!width || !height) return;

    const isSmallScreen = window.innerWidth < 700;
    const nodeCount = isSmallScreen ? 26 : 55;
    const maxLinkDistance = 15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 42;

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (e) {
        return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // scatter nodes, then link nearby ones to read as a "network"
    const nodePositions = [];
    for (let i = 0; i < nodeCount; i++) {
        nodePositions.push(new THREE.Vector3(
            (Math.random() - 0.5) * 64,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 50
        ));
    }

    const pointsGeometry = new THREE.BufferGeometry().setFromPoints(nodePositions);
    const pointsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2.1,
        transparent: true,
        opacity: 0.85,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);

    const linePositions = [];
    for (let i = 0; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
            if (nodePositions[i].distanceTo(nodePositions[j]) < maxLinkDistance) {
                linePositions.push(
                    nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
                    nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
                );
            }
        }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x9d7bff, transparent: true, opacity: 0.3 });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    scene.add(group);

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
    });

    // pause rendering when off-screen or tab hidden, to save battery
    let isVisible = true;
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            isVisible = entries[0].isIntersecting;
        }, { threshold: 0 });
        io.observe(container);
    }

    function animate() {
        requestAnimationFrame(animate);
        if (!isVisible || document.hidden) return;

        group.rotation.y += 0.0015;
        group.rotation.x += 0.0004;
        camera.position.x += (mouseX * 8 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 8 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        width = container.clientWidth;
        height = container.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
})();

/* Hero photo mouse-tilt (hover-capable devices only) */
(function initHeroTilt() {
    const wrap = document.getElementById('heroImgWrap');
    const tilt = document.getElementById('heroImgTilt');
    if (!wrap || !tilt) return;
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        tilt.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
    });

    wrap.addEventListener('mouseleave', () => {
        tilt.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
})();

/* Animated stats counters */
(function initStatsCounters() {
    const nums = document.querySelectorAll('.stat-num');
    if (!nums.length) return;

    function runCount(el) {
        const target = parseInt(el.dataset.count, 10) || 0;
        if (prefersReducedMotion) {
            el.textContent = target;
            return;
        }
        const duration = 1200;
        const start = performance.now();
        function frame(now) {
            const progress = Math.min((now - start) / duration, 1);
            el.textContent = Math.round(progress * target);
            if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    if (!('IntersectionObserver' in window)) {
        nums.forEach(runCount);
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                runCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    nums.forEach((el) => observer.observe(el));
})();

/* Toast notifications - used by the contact form */
function showToast(message, type) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4500);
}

/* Contact form (EmailJS) - sends straight from the browser, no backend */
(function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('formSubmitBtn');
    if (!form || !submitBtn) return;

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        input.addEventListener('blur', () => input.classList.add('touched'));
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            inputs.forEach((input) => input.classList.add('touched'));
            form.reportValidity();
            return;
        }

        const serviceId = form.dataset.serviceId;
        const templateId = form.dataset.templateId;

        if (typeof emailjs === 'undefined') {
            showToast((window.t && window.t('toast_script_error')) || 'Contact form script did not load - please email me directly.', 'error');
            return;
        }
        if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID') {
            showToast((window.t && window.t('toast_not_connected')) || 'Form not connected yet - add your EmailJS IDs in index.html.', 'error');
            return;
        }

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        try {
            await emailjs.sendForm(serviceId, templateId, form);
            showToast((window.t && window.t('toast_success')) || 'Message sent - thank you! I will get back to you soon.', 'success');
            form.reset();
            inputs.forEach((input) => input.classList.remove('touched'));
        } catch (err) {
            showToast((window.t && window.t('toast_generic_error')) || 'Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
})();

/* Scroll progress bar */
(function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    function update() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = pct + '%';
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => { update(); ticking = false; });
            ticking = true;
        }
    });
    window.addEventListener('resize', update);
    update();
})();

/* Scroll-to-top button */
(function initScrollTopBtn() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    function update() {
        btn.classList.toggle('visible', window.scrollY > 500);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => { update(); ticking = false; });
            ticking = true;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });

    update();
})();

/* Dark mode toggle - syncs with the inline <head> script + localStorage */
(function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    function isDark() {
        return document.documentElement.getAttribute('data-theme') === 'dark';
    }

    function updateIcon() {
        const icon = toggle.querySelector('i');
        if (!icon) return;
        icon.classList.toggle('fa-moon', !isDark());
        icon.classList.toggle('fa-sun', isDark());
    }

    updateIcon();

    toggle.addEventListener('click', () => {
        const goingDark = !isDark();
        if (goingDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', goingDark ? 'dark' : 'light');
        updateIcon();
    });
})();

/* Project card 3D tilt + mouse glow (hover-capable devices only) */
(function initCardTilt() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.querySelectorAll('[data-tilt-card]').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            card.style.setProperty('--mx', `${x * 100}%`);
            card.style.setProperty('--my', `${y * 100}%`);
            const rotateY = (x - 0.5) * 10;
            const rotateX = (0.5 - y) * 10;
            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

/* Magnetic buttons - hero CTAs + contact submit only */
(function initMagneticButtons() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const targets = document.querySelectorAll('.hero-btns .btn, #formSubmitBtn');
    targets.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
})();

/* Ripple click effect - skips btn-pending spans (not real links) */
(function initRippleEffect() {
    document.querySelectorAll('.btn, .btn-sm, .project-btn').forEach((el) => {
        if (el.classList.contains('btn-pending')) return;

        el.addEventListener('click', (e) => {
            if (prefersReducedMotion) return;
            const rect = el.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            el.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
})();

/* Cursor glow - ambient, hover-capable devices only */
(function initCursorGlow() {
    if (prefersReducedMotion) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => glow.classList.remove('active'));

    function animate() {
        curX += (mouseX - curX) * 0.15;
        curY += (mouseY - curY) * 0.15;
        glow.style.transform = `translate(${curX}px, ${curY}px)`;
        requestAnimationFrame(animate);
    }
    animate();
})();

/* GitHub stats - fetched live from the GitHub API, falls back to "—" */
(function initGithubStats() {
    const reposEl = document.getElementById('ghRepos');
    const starsEl = document.getElementById('ghStars');
    if (!reposEl || !starsEl) return;

    const username = 'Abdelrahman-Hamdi12';

    fetch(`https://api.github.com/users/${username}`)
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((data) => { reposEl.textContent = data.public_repos ?? '—'; })
        .catch(() => { reposEl.textContent = '—'; });

    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((repos) => {
            const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
            starsEl.textContent = totalStars;
        })
        .catch(() => { starsEl.textContent = '—'; });
})();

/* Active nav-link highlighting (scrollspy) */
(function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    const linkFor = (id) => document.querySelector(`.nav-link[href="#${id}"]`);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const link = linkFor(entry.target.id);
                if (!link) return;
                navLinks.forEach((l) => l.classList.remove('active'));
                link.classList.add('active');
            });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
})();