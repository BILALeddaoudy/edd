import { useState, useEffect } from 'react';
import { AuthOptions } from './components/AuthOptions';
import { LanguageSelection } from './components/LanguageSelection';
import { InterestSelection } from './components/InterestSelection';
import { ProfileSuccess } from './components/ProfileSuccess';
import { MainApp } from './components/MainApp';
import { ThemeProvider } from './components/ThemeContext';
import { PWAInstaller } from './components/PWAInstaller';
import { MobileOptimized } from './components/MobileOptimized';

type AppState = 'auth' | 'language' | 'interests' | 'profile-success' | 'main';

function AppContent() {
  const [currentState, setCurrentState] = useState<AppState>('auth');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // PWA Installation and Service Worker Registration
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/public/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleStateChange = (newState: AppState) => {
    setCurrentState(newState);
    
    // Save setup completion status
    if (newState === 'main') {
      localStorage.setItem('app-setup-completed', 'true');
      localStorage.setItem('user-language', selectedLanguage);
      localStorage.setItem('user-interests', JSON.stringify(selectedInterests));
    }
  };

  const handleLanguageSelect = (language: 'en' | 'ar') => {
    setSelectedLanguage(language);
    localStorage.setItem('preferred-language', language);
    setCurrentState('interests');
  };

  const handleInterestsSelect = (interests: string[]) => {
    setSelectedInterests(interests);
    localStorage.setItem('user-interests', JSON.stringify(interests));
    setCurrentState('profile-success');
  };

  const handleLanguageChange = (language: 'en' | 'ar') => {
    setSelectedLanguage(language);
    localStorage.setItem('preferred-language', language);
    // Update document direction for RTL/LTR
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  };

  // Load saved language preference on app start (but don't skip auth)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as 'en' | 'ar';

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    }

    // Handle URL parameters for deep linking (only if user is already authenticated)
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    
    if (action === 'search' || action === 'messages') {
      // Check if user is authenticated and setup is completed
      const hasCompletedSetup = localStorage.getItem('app-setup-completed');
      const userType = localStorage.getItem('user-type');
      
      if (hasCompletedSetup && userType) {
        // Load saved data and go to main app
        const savedInterests = localStorage.getItem('user-interests');
        if (savedInterests) {
          try {
            setSelectedInterests(JSON.parse(savedInterests));
          } catch (e) {
            console.error('Failed to parse saved interests');
          }
        }
        setCurrentState('main');
      }
    }
  }, []);

  // Handle back button for navigation
  useEffect(() => {
    const handlePopState = () => {
      // Handle browser back button
      if (currentState !== 'auth') {
        // Don't allow going back past auth
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentState]);

  return (
    <MobileOptimized language={selectedLanguage}>
      {/* Offline indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-destructive text-destructive-foreground text-center py-2 text-sm z-50">
          {selectedLanguage === 'en' ? 'You are offline' : 'أنت غير متصل'}
        </div>
      )}

      {currentState === 'auth' && (
        <AuthOptions 
          onNext={() => handleStateChange('language')}
          language={selectedLanguage}
        />
      )}
      {currentState === 'language' && (
        <LanguageSelection 
          onLanguageSelect={handleLanguageSelect}
          selectedLanguage={selectedLanguage}
        />
      )}
      {currentState === 'interests' && (
        <InterestSelection 
          language={selectedLanguage}
          onInterestsSelect={handleInterestsSelect}
          onBack={() => setCurrentState('language')}
        />
      )}
      {currentState === 'profile-success' && (
        <ProfileSuccess 
          onNext={() => handleStateChange('main')}
          language={selectedLanguage}
          interests={selectedInterests}
        />
      )}
      {currentState === 'main' && (
        <MainApp 
          language={selectedLanguage} 
          interests={selectedInterests}
          onLanguageChange={handleLanguageChange}
          isOnline={isOnline}
        />
      )}

      {/* PWA Install prompt */}
      <PWAInstaller language={selectedLanguage} />
    </MobileOptimized>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}