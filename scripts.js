// Application State Management
class InterestExplorerApp {
    constructor() {
        this.state = {
            currentScreen: 'auth',
            currentAuthStep: 'choice',
            selectedLanguage: 'en',
            selectedInterests: [],
            userType: null,
            userName: '',
            userEmail: '',
            isOnline: navigator.onLine,
            isDarkMode: false,
            sidebarOpen: false
        };

        this.interests = [
            {
                id: 'philosophy',
                icon: 'brain',
                nameEn: 'Philosophy',
                nameAr: 'الفلسفة',
                descEn: 'Ethics, logic, metaphysics, and deep thinking',
                descAr: 'الأخلاق والمنطق والميتافيزيقا والتفكير العميق',
                bgColor: 'bg-purple-50',
                textColor: 'text-purple-600'
            },
            {
                id: 'science',
                icon: 'beaker',
                nameEn: 'Science',
                nameAr: 'العلوم',
                descEn: 'Physics, chemistry, biology, and research',
                descAr: 'الفيزياء والكيمياء والأحياء والبحوث',
                bgColor: 'bg-blue-50',
                textColor: 'text-blue-600'
            },
            {
                id: 'arts',
                icon: 'palette',
                nameEn: 'Arts',
                nameAr: 'الفنون',
                descEn: 'Visual arts, music, literature, and creativity',
                descAr: 'الفنون البصرية والموسيقى والأدب والإبداع',
                bgColor: 'bg-pink-50',
                textColor: 'text-pink-600'
            },
            {
                id: 'technology',
                icon: 'laptop',
                nameEn: 'Technology',
                nameAr: 'التكنولوجيا',
                descEn: 'Programming, AI, gadgets, and innovation',
                descAr: 'البرمجة والذكاء الاصطناعي والأجهزة والابتكار',
                bgColor: 'bg-green-50',
                textColor: 'text-green-600'
            },
            {
                id: 'culture-society',
                icon: 'users',
                nameEn: 'Culture & Society',
                nameAr: 'الثقافة والمجتمع',
                descEn: 'Anthropology, sociology, and human behavior',
                descAr: 'الأنثروبولوجيا وعلم الاجتماع والسلوك البشري',
                bgColor: 'bg-orange-50',
                textColor: 'text-orange-600'
            },
            {
                id: 'medicine-health',
                icon: 'heart',
                nameEn: 'Medicine & Health',
                nameAr: 'الطب والصحة',
                descEn: 'Healthcare, wellness, and medical research',
                descAr: 'الرعاية الصحية والعافية والبحوث الطبية',
                bgColor: 'bg-red-50',
                textColor: 'text-red-600'
            },
            {
                id: 'environment-nature',
                icon: 'leaf',
                nameEn: 'Environment & Nature',
                nameAr: 'البيئة والطبيعة',
                descEn: 'Ecology, sustainability, and natural sciences',
                descAr: 'علم البيئة والاستدامة والعلوم الطبيعية',
                bgColor: 'bg-emerald-50',
                textColor: 'text-emerald-600'
            },
            {
                id: 'language-communication',
                icon: 'message-square',
                nameEn: 'Language & Communication',
                nameAr: 'اللغة والتواصل',
                descEn: 'Linguistics, writing, and human expression',
                descAr: 'اللسانيات والكتابة والتعبير البشري',
                bgColor: 'bg-violet-50',
                textColor: 'text-violet-600'
            }
        ];

        this.texts = {
            en: {
                // Auth texts
                welcome: 'Welcome',
                getStarted: 'Get Started',
                chooseJourney: 'Choose how you\'d like to begin your journey',
                signIn: 'Sign In',
                alreadyAccount: 'Already have an account? Welcome back!',
                createAccount: 'Create Account',
                newHere: 'New here? Join our community of explorers',
                continueGuest: 'Continue as Guest',
                exploreWithout: 'Explore without creating an account',
                welcomeBack: 'Welcome Back',
                signInAccount: 'Sign in to your account to continue',
                createNewAccount: 'Create New Account',
                createAccountDesc: 'Join our community of interest explorers',
                fullName: 'Full Name',
                enterName: 'Enter your full name',
                email: 'Email Address',
                enterEmail: 'Enter your email address',
                password: 'Password',
                enterPassword: 'Enter your password',
                back: 'Back',
                welcomeGuest: 'Welcome, Guest!',
                settingUp: 'Setting up your experience...',
                signingIn: 'Signing in...',
                creatingAccount: 'Creating account...',
                
                // Language texts
                languageTitle: 'Choose Your Language',
                languageSubtitle: 'Select your preferred language to personalize your experience',
                changeLater: 'You can change this later in settings',
                
                // Interest texts
                interestsTitle: 'What interests you?',
                interestsSubtitle: 'Select the areas that fascinate you. This helps us personalize your experience and connect you with like-minded people.',
                selected: 'selected',
                continue: 'Continue',
                selectAtLeast: 'Please select at least one area of interest',
                
                // Success texts
                profileComplete: 'Profile Complete!',
                successMessage: 'Great! We\'ve set up your personalized experience based on your interests. You\'re ready to start exploring!',
                yourInterests: 'Your Selected Interests',
                more: 'more',
                featureFeed: 'Personalized content feed',
                featureConnect: 'Connect with like-minded people',
                featureDiscover: 'Discover new interests',
                continueNow: 'Continue Now',
                
                // Main app texts
                interestExplorer: 'Interest Explorer',
                welcomeMessage: 'Welcome to Interest Explorer!',
                exploreMessage: 'Start exploring your interests and connect with like-minded people.',
                search: 'Search',
                profile: 'Profile',
                friends: 'Friends',
                messages: 'Messages',
                new: 'New',
                menu: 'Menu',
                home: 'Home',
                notifications: 'Notifications',
                favorites: 'Favorites',
                saved: 'Saved',
                settings: 'Settings',
                help: 'Help',
                
                // PWA texts
                installApp: 'Install App',
                pwaDesc: 'Add to home screen for a better experience',
                notNow: 'Not now',
                install: 'Install',
                
                // Offline text
                offline: 'You are offline'
            },
            ar: {
                // Auth texts
                welcome: 'مرحباً',
                getStarted: 'ابدأ الآن',
                chooseJourney: 'اختر كيف تريد أن تبدأ رحلتك',
                signIn: 'تسجيل الدخول',
                alreadyAccount: 'لديك حساب بالفعل؟ مرحباً بعودتك!',
                createAccount: 'إنشاء حساب',
                newHere: 'جديد هنا؟ انضم إلى مجتمع المستكشفين',
                continueGuest: 'متابعة كضيف',
                exploreWithout: 'استكشف دون إنشاء حساب',
                welcomeBack: 'مرحباً بعودتك',
                signInAccount: 'سجل دخولك إلى حسابك للمتابعة',
                createNewAccount: 'إنشاء حساب جديد',
                createAccountDesc: 'انضم إلى مجتمع مستكشفي الاهتمامات',
                fullName: 'الاسم الكامل',
                enterName: 'أدخل اسمك الكامل',
                email: 'البريد الإلكتروني',
                enterEmail: 'أدخل عنوان بريدك الإلكتروني',
                password: 'كلمة المرور',
                enterPassword: 'أدخل كلمة المرور',
                back: 'رجوع',
                welcomeGuest: 'مرحباً، ضيف!',
                settingUp: 'جاري إعداد تجربتك...',
                signingIn: 'جاري تسجيل الدخول...',
                creatingAccount: 'جاري إنشاء الحساب...',
                
                // Language texts
                languageTitle: 'اختر لغتك',
                languageSubtitle: 'اختر لغتك المفضلة لتخصيص تجربتك',
                changeLater: 'يمكنك تغيير هذا لاحقاً في الإعدادات',
                
                // Interest texts
                interestsTitle: 'ما الذي يثير اهتمامك؟',
                interestsSubtitle: 'اختر المجالات التي تثير اهتمامك. هذا يساعدنا في تخصيص تجربتك وربطك بأشخاص متشابهين في التفكير.',
                selected: 'مختار',
                continue: 'متابعة',
                selectAtLeast: 'يرجى اختيار مجال اهتمام واحد على الأقل',
                
                // Success texts
                profileComplete: 'اكتمل الملف الشخصي!',
                successMessage: 'رائع! لقد قمنا بإعداد تجربتك المخصصة بناءً على اهتماماتك. أنت مستعد لبدء الاستكشاف!',
                yourInterests: 'اهتماماتك المختارة',
                more: 'أخرى',
                featureFeed: 'موجز محتوى مخصص',
                featureConnect: 'تواصل مع أشخاص متشابهين في التفكير',
                featureDiscover: 'اكتشف اهتمامات جديدة',
                continueNow: 'المتابعة الآن',
                
                // Main app texts
                interestExplorer: 'مستكشف الاهتمامات',
                welcomeMessage: 'مرحباً بك في مستكشف الاهتمامات!',
                exploreMessage: 'ابدأ في استكشاف اهتماماتك وتواصل مع أشخاص متشابهين في التفكير.',
                search: 'البحث',
                profile: 'الملف الشخصي',
                friends: 'الأصدقاء',
                messages: 'الرسائل',
                new: 'جديد',
                menu: 'القائمة',
                home: 'الرئيسية',
                notifications: 'الإشعارات',
                favorites: 'المفضلة',
                saved: 'المحفوظة',
                settings: 'الإعدادات',
                help: 'المساعدة',
                
                // PWA texts
                installApp: 'تثبيت التطبيق',
                pwaDesc: 'أضف إلى الشاشة الرئيسية للحصول على تجربة أفضل',
                notNow: 'ليس الآن',
                install: 'تثبيت',
                
                // Offline text
                offline: 'أنت غير متصل'
            }
        };

        this.init();
    }

    init() {
        this.loadSavedPreferences();
        this.initializeEventListeners();
        this.initializePWA();
        this.updateLanguage();
        this.checkOnlineStatus();
        
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    loadSavedPreferences() {
        const savedLanguage = localStorage.getItem('preferred-language');
        const savedTheme = localStorage.getItem('theme');
        const hasCompletedSetup = localStorage.getItem('app-setup-completed');
        const userType = localStorage.getItem('user-type');

        if (savedLanguage) {
            this.state.selectedLanguage = savedLanguage;
            this.updateDocumentDirection();
        }

        if (savedTheme === 'dark') {
            this.state.isDarkMode = true;
            document.documentElement.classList.add('dark');
        }

        // Check if user should skip onboarding
        if (hasCompletedSetup && userType) {
            const savedInterests = localStorage.getItem('user-interests');
            if (savedInterests) {
                try {
                    this.state.selectedInterests = JSON.parse(savedInterests);
                } catch (e) {
                    console.error('Failed to parse saved interests');
                }
            }
            this.state.userType = userType;
            this.state.userName = localStorage.getItem('user-name') || '';
            this.state.userEmail = localStorage.getItem('user-email') || '';
            this.showScreen('main');
        }
    }

    initializeEventListeners() {
        // Online/Offline status
        window.addEventListener('online', () => {
            this.state.isOnline = true;
            this.updateOfflineIndicator();
        });

        window.addEventListener('offline', () => {
            this.state.isOnline = false;
            this.updateOfflineIndicator();
        });

        // Auth event listeners
        this.initAuthEventListeners();
        
        // Language event listeners
        this.initLanguageEventListeners();
        
        // Interest event listeners
        this.initInterestEventListeners();
        
        // Success screen event listeners
        this.initSuccessEventListeners();
        
        // Main app event listeners
        this.initMainAppEventListeners();
        
        // PWA event listeners
        this.initPWAEventListeners();
    }

    initAuthEventListeners() {
        // Auth option buttons
        document.getElementById('login-option').addEventListener('click', () => {
            this.showAuthStep('login');
        });

        document.getElementById('signup-option').addEventListener('click', () => {
            this.showAuthStep('signup');
        });

        document.getElementById('guest-option').addEventListener('click', () => {
            this.handleGuestLogin();
        });

        // Back buttons
        document.getElementById('login-back').addEventListener('click', () => {
            this.showAuthStep('choice');
        });

        document.getElementById('signup-back').addEventListener('click', () => {
            this.showAuthStep('choice');
        });

        // Forms
        document.getElementById('login-form').addEventListener('submit', (e) => {
            this.handleLogin(e);
        });

        document.getElementById('signup-form').addEventListener('submit', (e) => {
            this.handleSignup(e);
        });

        // Password toggle buttons
        document.getElementById('toggle-login-password').addEventListener('click', () => {
            this.togglePassword('login-password', 'toggle-login-password');
        });

        document.getElementById('toggle-signup-password').addEventListener('click', () => {
            this.togglePassword('signup-password', 'toggle-signup-password');
        });
    }

    initLanguageEventListeners() {
        document.getElementById('select-english').addEventListener('click', () => {
            this.selectLanguage('en');
        });

        document.getElementById('select-arabic').addEventListener('click', () => {
            this.selectLanguage('ar');
        });
    }

    initInterestEventListeners() {
        document.getElementById('interests-back').addEventListener('click', () => {
            this.showScreen('language');
        });

        document.getElementById('interests-continue').addEventListener('click', () => {
            if (this.state.selectedInterests.length > 0) {
                this.proceedFromInterests();
            }
        });

        this.renderInterests();
    }

    initSuccessEventListeners() {
        document.getElementById('success-continue').addEventListener('click', () => {
            this.completeOnboarding();
        });

        // Auto-advance after 3 seconds
        setTimeout(() => {
            if (this.state.currentScreen === 'success') {
                this.completeOnboarding();
            }
        }, 3000);
    }

    initMainAppEventListeners() {
        // Sidebar toggle
        document.getElementById('sidebar-toggle').addEventListener('click', () => {
            this.toggleSidebar();
        });

        document.getElementById('sidebar-close').addEventListener('click', () => {
            this.closeSidebar();
        });

        document.getElementById('sidebar-overlay').addEventListener('click', () => {
            this.closeSidebar();
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Bottom navigation
        document.getElementById('nav-search').addEventListener('click', () => {
            this.setActiveNav('search');
        });

        document.getElementById('nav-profile').addEventListener('click', () => {
            this.setActiveNav('profile');
        });

        document.getElementById('nav-friends').addEventListener('click', () => {
            this.setActiveNav('friends');
        });

        document.getElementById('nav-messages').addEventListener('click', () => {
            this.setActiveNav('messages');
        });

        document.getElementById('nav-new').addEventListener('click', () => {
            this.setActiveNav('new');
        });
    }

    initPWAEventListeners() {
        document.getElementById('pwa-dismiss').addEventListener('click', () => {
            this.dismissPWABanner();
        });

        document.getElementById('pwa-install').addEventListener('click', () => {
            this.installPWA();
        });
    }

    initializePWA() {
        // Register service worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./public/sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }

        // PWA install prompt
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            this.showPWABanner();
        });

        this.deferredPrompt = deferredPrompt;
    }

    showScreen(screenName) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        document.getElementById(`${screenName}-screen`).classList.add('active');
        this.state.currentScreen = screenName;

        // Update language when showing screen
        if (screenName !== 'auth') {
            this.updateLanguage();
        }
    }

    showAuthStep(step) {
        // Hide all auth steps
        document.querySelectorAll('.auth-step').forEach(authStep => {
            authStep.classList.remove('active');
        });

        // Show target step
        document.getElementById(`auth-${step}`).classList.add('active');
        this.state.currentAuthStep = step;
    }

    handleGuestLogin() {
        this.showAuthStep('guest');
        
        // Animate progress bar
        setTimeout(() => {
            document.getElementById('guest-progress').style.width = '100%';
        }, 100);

        setTimeout(() => {
            this.state.userType = 'guest';
            this.state.userName = 'Guest User';
            localStorage.setItem('user-type', 'guest');
            localStorage.setItem('user-name', 'Guest User');
            this.showScreen('language');
        }, 1000);
    }

    handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) return;

        // Show loading state
        const submitBtn = document.getElementById('login-submit');
        const submitText = document.getElementById('login-submit-text');
        
        submitBtn.disabled = true;
        submitText.textContent = this.texts[this.state.selectedLanguage].signingIn;
        
        // Add loading spinner
        submitBtn.innerHTML = `
            <div style="width: 1.25rem; height: 1.25rem; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span>${this.texts[this.state.selectedLanguage].signingIn}</span>
        `;

        // Simulate authentication
        setTimeout(() => {
            this.state.userType = 'login';
            this.state.userEmail = email;
            localStorage.setItem('user-type', 'login');
            localStorage.setItem('user-email', email);
            this.showScreen('language');
        }, 1500);
    }

    handleSignup(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (!name || !email || !password) return;

        // Show loading state
        const submitBtn = document.getElementById('signup-submit');
        const submitText = document.getElementById('signup-submit-text');
        
        submitBtn.disabled = true;
        submitText.textContent = this.texts[this.state.selectedLanguage].creatingAccount;
        
        // Add loading spinner
        submitBtn.innerHTML = `
            <div style="width: 1.25rem; height: 1.25rem; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span>${this.texts[this.state.selectedLanguage].creatingAccount}</span>
        `;

        // Simulate authentication
        setTimeout(() => {
            this.state.userType = 'signup';
            this.state.userName = name;
            this.state.userEmail = email;
            localStorage.setItem('user-type', 'signup');
            localStorage.setItem('user-name', name);
            localStorage.setItem('user-email', email);
            this.showScreen('language');
        }, 1500);
    }

    togglePassword(inputId, buttonId) {
        const input = document.getElementById(inputId);
        const button = document.getElementById(buttonId);
        const icon = button.querySelector('i');

        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute('data-lucide', 'eye-off');
        } else {
            input.type = 'password';
            icon.setAttribute('data-lucide', 'eye');
        }

        // Refresh icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    selectLanguage(language) {
        this.state.selectedLanguage = language;
        localStorage.setItem('preferred-language', language);
        this.updateDocumentDirection();
        this.updateLanguage();
        
        // Update language options visual state
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        document.querySelector(`[data-lang="${language}"]`).classList.add('selected');
        
        setTimeout(() => {
            this.showScreen('interests');
        }, 300);
    }

    updateDocumentDirection() {
        const isRTL = this.state.selectedLanguage === 'ar';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = this.state.selectedLanguage;
    }

    renderInterests() {
        const grid = document.getElementById('interests-grid');
        grid.innerHTML = '';

        this.interests.forEach((interest, index) => {
            const isSelected = this.state.selectedInterests.includes(interest.id);
            const name = this.state.selectedLanguage === 'en' ? interest.nameEn : interest.nameAr;
            const desc = this.state.selectedLanguage === 'en' ? interest.descEn : interest.descAr;

            const interestElement = document.createElement('div');
            interestElement.className = `interest-item ${isSelected ? 'selected' : ''}`;
            interestElement.innerHTML = `
                <div class="interest-icon ${interest.bgColor}">
                    <i data-lucide="${interest.icon}" class="w-6 h-6 ${interest.textColor}"></i>
                </div>
                <h3 class="font-semibold text-foreground mb-2">${name}</h3>
                <p class="text-sm text-muted-foreground leading-relaxed">${desc}</p>
                <div class="interest-check">
                    ${isSelected ? '<i data-lucide="check" class="w-3 h-3 text-primary-foreground"></i>' : ''}
                </div>
            `;

            interestElement.addEventListener('click', () => {
                this.toggleInterest(interest.id);
            });

            grid.appendChild(interestElement);
        });

        // Refresh icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    toggleInterest(interestId) {
        const index = this.state.selectedInterests.indexOf(interestId);
        
        if (index > -1) {
            this.state.selectedInterests.splice(index, 1);
        } else {
            this.state.selectedInterests.push(interestId);
        }

        this.updateInterestsUI();
    }

    updateInterestsUI() {
        const count = this.state.selectedInterests.length;
        const texts = this.texts[this.state.selectedLanguage];
        
        // Update selected count
        document.getElementById('interests-selected').textContent = `${count} ${texts.selected}`;
        
        // Update continue button
        const continueBtn = document.getElementById('interests-continue');
        const continueText = document.getElementById('interests-continue-text');
        const requirement = document.getElementById('interests-requirement');
        
        if (count > 0) {
            continueBtn.disabled = false;
            continueBtn.className = 'px-8 py-4 rounded-2xl font-medium transition-all flex items-center space-x-2 mx-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl';
            continueText.textContent = `${texts.continue} (${count})`;
            requirement.classList.add('hidden');
        } else {
            continueBtn.disabled = true;
            continueBtn.className = 'px-8 py-4 rounded-2xl font-medium transition-all flex items-center space-x-2 mx-auto bg-muted text-muted-foreground cursor-not-allowed';
            continueText.textContent = texts.continue;
            requirement.classList.remove('hidden');
        }

        // Re-render interests to update selection state
        this.renderInterests();
    }

    proceedFromInterests() {
        // Save selected interests
        const selectedNames = this.interests
            .filter(interest => this.state.selectedInterests.includes(interest.id))
            .map(interest => this.state.selectedLanguage === 'en' ? interest.nameEn : interest.nameAr);
        
        localStorage.setItem('user-interests', JSON.stringify(selectedNames));
        this.showScreen('success');
        this.renderSuccessScreen();
    }

    renderSuccessScreen() {
        const texts = this.texts[this.state.selectedLanguage];
        
        // Render selected interests chips
        const chipsContainer = document.getElementById('interests-chips');
        chipsContainer.innerHTML = '';
        
        const selectedNames = this.interests
            .filter(interest => this.state.selectedInterests.includes(interest.id))
            .map(interest => this.state.selectedLanguage === 'en' ? interest.nameEn : interest.nameAr);

        selectedNames.slice(0, 4).forEach(name => {
            const chip = document.createElement('span');
            chip.className = 'interest-chip';
            chip.textContent = name;
            chipsContainer.appendChild(chip);
        });

        if (selectedNames.length > 4) {
            const moreChip = document.createElement('span');
            moreChip.className = 'px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm';
            moreChip.textContent = `+${selectedNames.length - 4} ${texts.more}`;
            chipsContainer.appendChild(moreChip);
        }

        // Animate progress bar
        setTimeout(() => {
            document.getElementById('success-progress').style.width = '100%';
        }, 1200);
    }

    completeOnboarding() {
        localStorage.setItem('app-setup-completed', 'true');
        localStorage.setItem('user-language', this.state.selectedLanguage);
        this.showScreen('main');
    }

    toggleSidebar() {
        this.state.sidebarOpen = !this.state.sidebarOpen;
        
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        if (this.state.sidebarOpen) {
            sidebar.style.transform = 'translateX(0)';
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
        } else {
            sidebar.style.transform = 'translateX(-100%)';
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
        }
    }

    closeSidebar() {
        this.state.sidebarOpen = false;
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        
        sidebar.style.transform = 'translateX(-100%)';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
    }

    toggleTheme() {
        this.state.isDarkMode = !this.state.isDarkMode;
        
        if (this.state.isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        // Update theme icon
        const themeIcon = document.querySelector('#theme-toggle i');
        themeIcon.setAttribute('data-lucide', this.state.isDarkMode ? 'moon' : 'sun');
        
        // Refresh icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setActiveNav(navItem) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to selected item
        document.getElementById(`nav-${navItem}`).classList.add('active');
        
        // Update main content based on nav selection
        this.updateMainContent(navItem);
    }

    updateMainContent(navItem) {
        const texts = this.texts[this.state.selectedLanguage];
        const content = document.getElementById('main-content');
        
        // Simple content updates - in a real app, this would load different screens
        content.innerHTML = `
            <div class="p-4">
                <div class="text-center py-12">
                    <h2 class="text-2xl mb-4">${texts[navItem] || navItem}</h2>
                    <p class="text-muted-foreground">${texts.exploreMessage}</p>
                </div>
            </div>
        `;
    }

    showPWABanner() {
        document.getElementById('pwa-banner').classList.remove('hidden');
    }

    dismissPWABanner() {
        document.getElementById('pwa-banner').classList.add('hidden');
    }

    installPWA() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the PWA install prompt');
                } else {
                    console.log('User dismissed the PWA install prompt');
                }
                this.deferredPrompt = null;
            });
        }
        this.dismissPWABanner();
    }

    checkOnlineStatus() {
        this.state.isOnline = navigator.onLine;
        this.updateOfflineIndicator();
    }

    updateOfflineIndicator() {
        const indicator = document.getElementById('offline-indicator');
        const offlineText = document.getElementById('offline-text');
        
        if (!this.state.isOnline) {
            indicator.classList.remove('hidden');
            offlineText.textContent = this.texts[this.state.selectedLanguage].offline;
        } else {
            indicator.classList.add('hidden');
        }
    }

    updateLanguage() {
        const texts = this.texts[this.state.selectedLanguage];
        
        // Update all text elements
        const textElements = {
            // Auth texts
            'auth-welcome': texts.welcome,
            'auth-get-started': texts.getStarted,
            'auth-choose-journey': texts.chooseJourney,
            'login-title': texts.signIn,
            'login-desc': texts.alreadyAccount,
            'signup-title': texts.createAccount,
            'signup-desc': texts.newHere,
            'guest-title': texts.continueGuest,
            'guest-desc': texts.exploreWithout,
            'login-welcome-back': texts.welcomeBack,
            'login-signin-desc': texts.signInAccount,
            'signup-create-account': texts.createNewAccount,
            'signup-community-desc': texts.createAccountDesc,
            'email-label': texts.email,
            'password-label': texts.password,
            'name-label': texts.fullName,
            'back-text': texts.back,
            'login-submit-text': texts.signIn,
            'signup-submit-text': texts.createAccount,
            'guest-welcome': texts.welcomeGuest,
            'guest-setting-up': texts.settingUp,
            
            // Language texts
            'language-title': texts.languageTitle,
            'language-subtitle': texts.languageSubtitle,
            'language-change-later': texts.changeLater,
            
            // Interest texts
            'interests-title': texts.interestsTitle,
            'interests-subtitle': texts.interestsSubtitle,
            'interests-continue-text': texts.continue,
            'interests-requirement': texts.selectAtLeast,
            
            // Success texts
            'success-title': texts.profileComplete,
            'success-message': texts.successMessage,
            'your-interests-title': texts.yourInterests,
            'feature-feed': texts.featureFeed,
            'feature-connect': texts.featureConnect,
            'feature-discover': texts.featureDiscover,
            'success-setting-up': texts.settingUp,
            'success-continue-text': texts.continueNow,
            
            // Main app texts
            'main-title': texts.interestExplorer,
            'welcome-message': texts.welcomeMessage,
            'explore-message': texts.exploreMessage,
            'nav-search-text': texts.search,
            'nav-profile-text': texts.profile,
            'nav-friends-text': texts.friends,
            'nav-messages-text': texts.messages,
            'nav-new-text': texts.new,
            'sidebar-title': texts.menu,
            'sidebar-home': texts.home,
            'sidebar-notifications': texts.notifications,
            'sidebar-favorites': texts.favorites,
            'sidebar-saved': texts.saved,
            'sidebar-settings': texts.settings,
            'sidebar-help': texts.help,
            
            // PWA texts
            'pwa-title': texts.installApp,
            'pwa-desc': texts.pwaDesc,
            'pwa-dismiss-text': texts.notNow,
            'pwa-install-text': texts.install
        };

        Object.keys(textElements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = textElements[id];
            }
        });

        // Update placeholders
        const placeholderElements = {
            'login-email': texts.enterEmail,
            'login-password': texts.enterPassword,
            'signup-name': texts.enterName,
            'signup-email': texts.enterEmail,
            'signup-password': texts.enterPassword
        };

        Object.keys(placeholderElements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.placeholder = placeholderElements[id];
            }
        });

        // Update interests count
        if (this.state.currentScreen === 'interests') {
            this.updateInterestsUI();
        }
    }
}

// CSS for spinner animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new InterestExplorerApp();
});