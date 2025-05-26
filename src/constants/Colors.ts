export const Colors = {
  // Primary gaming theme colors
  primary: '#6366F1', // Indigo
  primaryDark: '#4F46E5',
  secondary: '#8B5CF6', // Purple
  secondaryDark: '#7C3AED',
  accent: '#F59E0B', // Amber
  accentDark: '#D97706',
  
  // Success/Error colors
  success: '#10B981', // Emerald
  successDark: '#059669',
  error: '#EF4444', // Red
  errorDark: '#DC2626',
  warning: '#F59E0B', // Amber
  warningDark: '#D97706',
  
  // Background colors (dark theme)
  background: '#0F0F23', // Very dark blue
  backgroundSecondary: '#1A1A3A', // Dark blue
  backgroundTertiary: '#252547', // Medium dark blue
  
  // Surface colors
  surface: '#1E1E3F',
  surfaceSecondary: '#2A2A5A',
  
  // Text colors
  text: '#FFFFFF',
  textSecondary: '#B8BCC8',
  textMuted: '#9CA3AF',
  
  // Border colors
  border: '#374151',
  borderLight: '#4B5563',
  
  // Special colors
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
  
  // Transparent overlays
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
};

export const Gradients = {
  primary: ['#6366F1', '#8B5CF6'] as const,
  secondary: ['#8B5CF6', '#EC4899'] as const,
  accent: ['#F59E0B', '#EF4444'] as const,
  success: ['#10B981', '#059669'] as const,
  background: ['#0F0F23', '#1A1A3A'] as const,
  card: ['#1E1E3F', '#2A2A5A'] as const,
};