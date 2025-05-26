import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { User, Settings, CreditCard, Shield, LogOut, Edit } from 'lucide-react-native';
import { AuthNavigator } from './AuthNavigator';

interface UserProfile {
}

export const ProfileScreen: React.FC = () => {
  const gradientColors = [...Gradients.primary];

  const [user] = useState<UserProfile>({
    username: 'Player123',
  });

  // Auth modal states
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [authInitialScreen, setAuthInitialScreen] = useState<'login' | 'register' | 'forgotPassword' | 'otp'>('login');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.subtitle}>Manage your account</Text>
        </View>

        {/* Profile Overview */}
        <Card gradient gradientColors={gradientColors} style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              {user?.avatar ? (
                <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
              ) : (
                <User color={Colors.text} size={40} />
              )}
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.username}>{user?.fullName || 'Guest User'}</Text>
              <Text style={styles.joinDate}>@{user?.username || 'guest'}</Text>
              <Text style={styles.joinDate}>
                Member since {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </Text>
            </View>
            <Button
              title="Edit"
              onPress={() => {}}
              variant="ghost"
              style={styles.editButton}
            />
          </View>
        </Card>

        {/* Account Stats */}
        <Card style={styles.statsCard}>
          <Text style={styles.cardTitle}>Account Overview</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>Games Played</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>73%</Text>
              <Text style={styles.statLabel}>Win Rate</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>Gold</Text>
              <Text style={styles.statLabel}>Tier</Text>
            </View>
          </View>
        </Card>

        {/* Menu Options */}
        <View style={styles.menuSection}>
          <Card style={styles.menuCard}>
            <View style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <CreditCard color={Colors.primary} size={20} />
              </View>
              <Text style={styles.menuText}>Payment Methods</Text>
              <Text style={styles.menuArrow}>›</Text>
            </View>
          </Card>

          <Card style={styles.menuCard}>
            <View style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Shield color={Colors.primary} size={20} />
              </View>
              <Text style={styles.menuText}>Security Settings</Text>
              <Text style={styles.menuArrow}>›</Text>
            </View>
          </Card>

          <Card style={styles.menuCard}>
            <View 
              style={styles.menuItem}
              onTouchEnd={() => setOtpModalVisible(true)}
            >
              <View style={styles.menuIcon}>
                <Settings color={Colors.primary} size={20} />
              </View>
              <Text style={styles.menuText}>App Settings</Text>
              <Text style={styles.menuArrow}>›</Text>
            </View>
          </Card>
        </View>

        {/* Account Actions */}
        <View style={styles.actionsSection}>
          <Button
            title="Change Password"
            onPress={() => {}}
            variant="outline"
            style={styles.actionButton}
          />
          <Button
            title="Delete Account"
            onPress={() => {}}
            variant="outline"
            style={[styles.actionButton, styles.dangerButton]}
          />
          <Button
            title="Sign Out"
            onPress={() => {
              setAuthInitialScreen('login');
              setAuthModalVisible(true);
            }}
            variant="ghost"
            style={styles.signOutButton}
          />
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>Version 1.0.0</Text>
          <Text style={styles.appInfoText}>© 2024 Gaming Platform</Text>
        </View>
      </ScrollView>

      {/* Auth Modal */}
      <Modal
        visible={authModalVisible}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setAuthModalVisible(false)}
      >
        <AuthNavigator
          initialScreen={authInitialScreen}
          onAuthSuccess={() => setAuthModalVisible(false)}
        />
      </Modal>

      {/* OTP Modal */}
      <Modal
        visible={otpModalVisible}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setOtpModalVisible(false)}
      >
        <AuthNavigator
          initialScreen="otp"
          onAuthSuccess={() => setOtpModalVisible(false)}
        />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 24,
  },
  title: {
    ...TextStyles.h1,
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    ...TextStyles.body,
    color: Colors.textSecondary,
  },
  profileCard: {
    marginBottom: 24,
    padding: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    ...TextStyles.h3,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileEmail: {
    ...TextStyles.body,
    color: Colors.text,
    opacity: 0.8,
    marginBottom: 2,
  },
  profilePhone: {
    ...TextStyles.bodySmall,
    color: Colors.text,
    opacity: 0.7,
  },
  editButton: {
    paddingHorizontal: 16,
  },
  statsCard: {
    marginBottom: 24,
  },
  cardTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    ...TextStyles.h3,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  menuSection: {
    marginBottom: 24,
  },
  menuCard: {
    marginBottom: 8,
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuText: {
    ...TextStyles.body,
    color: Colors.text,
    flex: 1,
  },
  menuArrow: {
    ...TextStyles.h3,
    color: Colors.textMuted,
  },
  actionsSection: {
    marginBottom: 32,
    gap: 12,
  },
  actionButton: {
    marginBottom: 8,
  },
  dangerButton: {
    borderColor: Colors.error,
  },
  signOutButton: {
    marginTop: 8,
  },
  appInfo: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  appInfoText: {
    ...TextStyles.caption,
    color: Colors.textMuted,
    marginBottom: 4,
  },
});