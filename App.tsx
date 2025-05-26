
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { HomeScreen } from '@/screens/HomeScreen';
import { DashboardScreen } from '@/screens/DashboardScreen';
import { WalletScreen } from '@/screens/WalletScreen';
import { GameScreen } from '@/screens/GameScreen';
import { BonusesScreen } from '@/screens/BonusesScreen';
import { ReferralsScreen } from '@/screens/ReferralsScreen';
import { ProfileScreen } from '@/screens/ProfileScreen';
import { AuthNavigator } from '@/screens/AuthNavigator';
import { 
  Home,
  LayoutDashboard, 
  Wallet, 
  Gamepad2, 
  Gift, 
  Users, 
  User 
} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const AppContent: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.backgroundSecondary,
              borderTopColor: Colors.border,
              borderTopWidth: 1,
              height: 80,
              paddingBottom: 20,
              paddingTop: 10,
            },
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.textMuted,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            },
            tabBarIcon: ({ focused, color, size }) => {
              let IconComponent;

              switch (route.name) {
                case 'Home':
                  IconComponent = Home;
                  break;
                case 'Dashboard':
                  IconComponent = LayoutDashboard;
                  break;
                case 'Wallet':
                  IconComponent = Wallet;
                  break;
                case 'Game':
                  IconComponent = Gamepad2;
                  break;
                case 'Bonuses':
                  IconComponent = Gift;
                  break;
                case 'Referrals':
                  IconComponent = Users;
                  break;
                case 'Profile':
                  IconComponent = User;
                  break;
                default:
                  IconComponent = Home;
              }

              return <IconComponent color={color} size={size} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Wallet" component={WalletScreen} />
          <Tab.Screen name="Game" component={GameScreen} />
          <Tab.Screen name="Bonuses" component={BonusesScreen} />
          <Tab.Screen name="Referrals" component={ReferralsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: 'none' },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="light" backgroundColor={Colors.background} />
      <AppContent />
    </AuthProvider>
  );
}
