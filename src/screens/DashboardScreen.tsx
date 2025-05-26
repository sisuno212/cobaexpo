import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { Wallet, DollarSign, TrendingUp, Gift } from 'lucide-react-native';

interface GameStats {
}

export const DashboardScreen: React.FC = () => {
  const primaryGradient = [...Gradients.primary];
  const [user] = useState({
    username: 'Player123',
    balance: 1250.50,
    level: 15,
  });
  
  const secondaryGradient = [...Gradients.secondary];
  
  const [gameStats] = useState<GameStats[]>([
    {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.subtitle}>Welcome back, Player!</Text>
        </View>

        {/* Balance Cards */}
        <View style={styles.balanceContainer}>
          <Card gradient gradientColors={primaryGradient} style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
              <Wallet color={Colors.text} size={24} />
              <Text style={styles.balanceLabel}>Real Money</Text>
            </View>
            <Text style={styles.balanceAmount}>$1,250.00</Text>
          </Card>

          <Card gradient gradientColors={secondaryGradient} style={styles.balanceCard}>
            <View style={styles.balanceHeader}>
              <DollarSign color={Colors.text} size={24} />
              <Text style={styles.balanceLabel}>Coins</Text>
            </View>
            <Text style={styles.balanceAmount}>12,500</Text>
          </Card>
        </View>

        {/* Quick Stats */}
        <Card style={styles.statsCard}>
          <Text style={styles.cardTitle}>Today's Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <TrendingUp color={Colors.success} size={20} />
              <Text style={styles.statLabel}>Wins</Text>
              <Text style={styles.statValue}>8</Text>
            </View>
            <View style={styles.statItem}>
              <TrendingUp color={Colors.error} size={20} style={{ transform: [{ rotate: '180deg' }] }} />
              <Text style={styles.statLabel}>Losses</Text>
              <Text style={styles.statValue}>3</Text>
            </View>
            <View style={styles.statItem}>
              <Gift color={Colors.accent} size={20} />
              <Text style={styles.statLabel}>Bonuses</Text>
              <Text style={styles.statValue}>2</Text>
            </View>
          </View>
        </Card>

        {/* Recent Activity */}
        <Card style={styles.activityCard}>
          <Text style={styles.cardTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <TrendingUp color={Colors.success} size={16} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Game Win</Text>
                <Text style={styles.activitySubtitle}>Blackjack • 2 minutes ago</Text>
              </View>
              <Text style={styles.activityAmount}>+$50.00</Text>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Gift color={Colors.accent} size={16} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Daily Bonus</Text>
                <Text style={styles.activitySubtitle}>Login reward • 1 hour ago</Text>
              </View>
              <Text style={styles.activityAmount}>+100 coins</Text>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <DollarSign color={Colors.primary} size={16} />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Deposit</Text>
                <Text style={styles.activitySubtitle}>Credit Card • 3 hours ago</Text>
              </View>
              <Text style={styles.activityAmount}>+$100.00</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
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
  balanceContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  balanceCard: {
    flex: 1,
    padding: 20,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  balanceLabel: {
    ...TextStyles.bodySmall,
    color: Colors.text,
    marginLeft: 8,
    opacity: 0.9,
  },
  balanceAmount: {
    ...TextStyles.h2,
    color: Colors.text,
    fontWeight: 'bold',
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
  statLabel: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
    marginTop: 8,
    marginBottom: 4,
  },
  statValue: {
    ...TextStyles.h3,
    color: Colors.text,
    fontWeight: 'bold',
  },
  activityCard: {
    marginBottom: 24,
  },
  activityList: {
    gap: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    ...TextStyles.body,
    color: Colors.text,
    marginBottom: 2,
  },
  activitySubtitle: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  activityAmount: {
    ...TextStyles.body,
    color: Colors.success,
    fontWeight: '600',
  },
});