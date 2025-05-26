
import React, { useState } from 'react';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { ForgotPasswordScreen } from './ForgotPasswordScreen';
import { OTPScreen } from './OTPScreen';

type AuthScreen = 'login' | 'register' | 'forgotPassword' | 'otp';

interface AuthNavigatorProps {
  onAuthSuccess?: () => void;
  initialScreen?: AuthScreen;
}

export const AuthNavigator: React.FC<AuthNavigatorProps> = ({ 
  onAuthSuccess,
  initialScreen = 'login'
}) => {
  const [currentScreen, setCurrentScreen] = useState<AuthScreen>(initialScreen);

  const handleAuthSuccess = () => {
    if (onAuthSuccess) {
      onAuthSuccess();
    }
  };

  switch (currentScreen) {
    case 'login':
      return (
        <LoginScreen
          onLoginSuccess={handleAuthSuccess}
          onNavigateToRegister={() => setCurrentScreen('register')}
          onNavigateToForgotPassword={() => setCurrentScreen('forgotPassword')}
        />
      );
    
    case 'register':
      return (
        <RegisterScreen
          onRegisterSuccess={handleAuthSuccess}
          onNavigateToLogin={() => setCurrentScreen('login')}
        />
      );
    
    case 'forgotPassword':
      return (
        <ForgotPasswordScreen
          onBackToLogin={() => setCurrentScreen('login')}
          onNavigateToOTP={() => setCurrentScreen('otp')}
        />
      );
    
    case 'otp':
      return (
        <OTPScreen
          onVerificationSuccess={handleAuthSuccess}
          onBackToForgotPassword={() => setCurrentScreen('forgotPassword')}
        />
      );
    
    default:
      return (
        <LoginScreen
          onLoginSuccess={handleAuthSuccess}
          onNavigateToRegister={() => setCurrentScreen('register')}
          onNavigateToForgotPassword={() => setCurrentScreen('forgotPassword')}
        />
      );
  }
};
