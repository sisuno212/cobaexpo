import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { Gift, Calendar, Trophy, Star, Clock } from 'lucide-react-native';

export const BonusesScreen: React.FC = () => {
  const gradientColors = [...Gradients.accent];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Bonuses</Text>
          <Text style={styles.subtitle}>Claim your rewards</Text>
        </View>

        {/* Daily Login Bonus */}
        <Card gradient gradientColors={gradientColors} style={styles.dailyBonusCard}>
          <View style={styles.bonusHeader}>
            <Calendar color={Colors.text} size={28} />
            <View style={styles.bonusInfo}>
              <Text style={styles.bonusTitle}>Daily Login Bonus</Text>
              <Text style={styles.bonusSubtitle}>Day 5 of 7</Text>
            </View>
          </View>
          <Text style={styles.bonusAmount}>+200 Coins</Text>
          <Button
            title="Claim Now"
            onPress={() => {}}
            style={styles.claimButton}
            gradient
          />
        </Card>

        {/* Available Bonuses */}
        <Text style={styles.sectionTitle}>Available Bonuses</Text>
        
        <Card style={styles.bonusCard}>
          <View style={styles.bonusItem}>
            <View style={styles.bonusIcon}>
              <Trophy color={Colors.gold} size={24} />
            </View>
            <View style={styles.bonusContent}>
              <Text style={styles.bonusItemTitle}>Achievement Bonus</Text>
              <Text style={styles.bonusItemDescription}>Win 10 games in a row</Text>
              <Text style={styles.bonusItemAmount}>+500 Coins</Text>
            </View>
            <Button
              title="Claim"
              onPress={() => {}}
              size="small"
              gradient
            />
          </View>
        </Card>

        <Card style={styles.bonusCard}>
          <View style={styles.bonusItem}>
            <View style={styles.bonusIcon}>
              <Star color={Colors.accent} size={24} />
            </View>
            <View style={styles.bonusContent}>
              <Text style={styles.bonusItemTitle}>First Deposit Bonus</Text>
              <Text style={styles.bonusItemDescription}>100% match up to $100</Text>
              <Text style={styles.bonusItemAmount}>+$100</Text>
            </View>
            <Button
              title="Claim"
              onPress={() => {}}
              size="small"
              gradient
            />
          </View>
        </Card>

        {/* Pending Bonuses */}
        <Text style={styles.sectionTitle}>Pending Bonuses</Text>
        
        <Card style={styles.bonusCard}>
          <View style={styles.bonusItem}>
            <View style={styles.bonusIcon}>
              <Clock color={Colors.textMuted} size={24} />
            </View>
            <View style={styles.bonusContent}>
              <Text style={styles.bonusItemTitle}>Weekly Challenge</Text>
              <Text style={styles.bonusItemDescription}>Play 50 games this week (32/50)</Text>
              <Text style={styles.bonusItemAmount}>+1,000 Coins</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '64%' }]} />
              </View>
              <Text style={styles.progressText}>64%</Text>
            </View>
          </View>
        </Card>

        {/* Bonus History */}
        <Text style={styles.sectionTitle}>Recent Claims</Text>
        
        <Card style={styles.historyCard}>
          <View style={styles.historyList}>
            <View style={styles.historyItem}>
              <View style={styles.historyIcon}>
                <Gift color={Colors.success} size={16} />
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>Daily Login Bonus</Text>
                <Text style={styles.historyDate}>Yesterday</Text>
              </View>
              <Text style={styles.historyAmount}>+150 coins</Text>
            </View>

            <View style={styles.historyItem}>
              <View style={styles.historyIcon}>
                <Trophy color={Colors.gold} size={16} />
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>Win Streak Bonus</Text>
                <Text style={styles.historyDate}>2 days ago</Text>
              </View>
              <Text style={styles.historyAmount}>+300 coins</Text>
            </View>

            <View style={styles.historyItem}>
              <View style={styles.historyIcon}>
                <Star color={Colors.accent} size={16} />
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>Welcome Bonus</Text>
                <Text style={styles.historyDate}>1 week ago</Text>
              </View>
              <Text style={styles.historyAmount}>+1,000 coins</Text>
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
  dailyBonusCard: {
    marginBottom: 32,
    padding: 24,
    alignItems: 'center',
  },
  bonusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bonusInfo: {
    marginLeft: 16,
    alignItems: 'center',
  },
  bonusTitle: {
    ...TextStyles.h3,
    color: Colors.text,
    fontWeight: 'bold',
  },
  bonusSubtitle: {
    ...TextStyles.body,
    color: Colors.text,
    opacity: 0.8,
  },
  bonusAmount: {
    ...TextStyles.h2,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  claimButton: {
    paddingHorizontal: 32,
  },
  sectionTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginBottom: 16,
    marginTop: 8,
  },
  bonusCard: {
    marginBottom: 12,
  },
  bonusItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bonusIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  bonusContent: {
    flex: 1,
  },
  bonusItemTitle: {
    ...TextStyles.body,
    color: Colors.text,
    fontWeight: '600',
    marginBottom: 4,
  },
  bonusItemDescription: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  bonusItemAmount: {
    ...TextStyles.body,
    color: Colors.accent,
    fontWeight: 'bold',
  },
  progressContainer: {
    alignItems: 'center',
    marginLeft: 12,
  },
  progressBar: {
    width: 60,
    height: 6,
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.accent,
    borderRadius: 3,
  },
  progressText: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  historyCard: {
    marginBottom: 24,
  },
  historyList: {
    gap: 16,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyTitle: {
    ...TextStyles.body,
    color: Colors.text,
    marginBottom: 2,
  },
  historyDate: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  historyAmount: {
    ...TextStyles.body,
    color: Colors.success,
    fontWeight: '600',
  },
});