import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Share } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { Users, Share2, Gift, Copy } from 'lucide-react-native';

interface ReferralStats {
}

export const ReferralsScreen: React.FC = () => {
  const gradientColors = [...Gradients.secondary];

  const referralCode = 'PLAYER123';
  const referralLink = `https://yourgame.com/ref/${referralCode}`;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Join me on this amazing gaming platform! Use my referral code ${referralCode} and get bonus coins. ${referralLink}`,
        title: 'Join the Game!',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Referrals</Text>
          <Text style={styles.subtitle}>Invite friends and earn rewards</Text>
        </View>

        {/* Referral Stats */}
        <Card gradient gradientColors={gradientColors} style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <Users color={Colors.text} size={28} />
            <Text style={styles.statsTitle}>Your Referral Stats</Text>
          </View>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Friends Invited</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$240</Text>
              <Text style={styles.statLabel}>Total Earned</Text>
            </View>
          </View>
        </Card>

        {/* Referral Code */}
        <Card style={styles.codeCard}>
          <View style={styles.codeHeader}>
            <Share2 color={Colors.primary} size={24} />
            <Text style={styles.cardTitle}>Your Referral Code</Text>
          </View>
          <View style={styles.codeContainer}>
            <Text style={styles.referralCode}>{referralCode}</Text>
            <Button
              title="Copy"
              onPress={() => {}}
              size="small"
              variant="outline"
              style={styles.copyButton}
            />
          </View>
          <Text style={styles.codeDescription}>
            Share this code with friends to earn 20% of their first deposit as bonus!
          </Text>
          <Button
            title="Share Referral Link"
            onPress={handleShare}
            style={styles.shareButton}
            gradient
          />
        </Card>

        {/* Referral Rewards */}
        <Card style={styles.rewardsCard}>
          <View style={styles.rewardsHeader}>
            <Gift color={Colors.accent} size={24} />
            <Text style={styles.cardTitle}>How It Works</Text>
          </View>
          <View style={styles.rewardsList}>
            <View style={styles.rewardItem}>
              <View style={styles.rewardStep}>
                <Text style={styles.stepNumber}>1</Text>
              </View>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardTitle}>Share Your Code</Text>
                <Text style={styles.rewardDescription}>Send your referral code to friends</Text>
              </View>
            </View>
            
            <View style={styles.rewardItem}>
              <View style={styles.rewardStep}>
                <Text style={styles.stepNumber}>2</Text>
              </View>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardTitle}>Friend Signs Up</Text>
                <Text style={styles.rewardDescription}>They create an account using your code</Text>
              </View>
            </View>
            
            <View style={styles.rewardItem}>
              <View style={styles.rewardStep}>
                <Text style={styles.stepNumber}>3</Text>
              </View>
              <View style={styles.rewardContent}>
                <Text style={styles.rewardTitle}>Both Get Rewards</Text>
                <Text style={styles.rewardDescription}>You get 20% of their deposit, they get bonus coins</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Recent Referrals */}
        <Card style={styles.historyCard}>
          <Text style={styles.cardTitle}>Recent Referrals</Text>
          <View style={styles.referralsList}>
            <View style={styles.referralItem}>
              <View style={styles.referralAvatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
              <View style={styles.referralContent}>
                <Text style={styles.referralName}>John Doe</Text>
                <Text style={styles.referralDate}>Joined 2 days ago</Text>
              </View>
              <View style={styles.referralReward}>
                <Text style={styles.rewardAmount}>+$20.00</Text>
                <Text style={styles.rewardStatus}>Earned</Text>
              </View>
            </View>

            <View style={styles.referralItem}>
              <View style={styles.referralAvatar}>
                <Text style={styles.avatarText}>SM</Text>
              </View>
              <View style={styles.referralContent}>
                <Text style={styles.referralName}>Sarah Miller</Text>
                <Text style={styles.referralDate}>Joined 1 week ago</Text>
              </View>
              <View style={styles.referralReward}>
                <Text style={styles.rewardAmount}>+$50.00</Text>
                <Text style={styles.rewardStatus}>Earned</Text>
              </View>
            </View>

            <View style={styles.referralItem}>
              <View style={styles.referralAvatar}>
                <Text style={styles.avatarText}>MJ</Text>
              </View>
              <View style={styles.referralContent}>
                <Text style={styles.referralName}>Mike Johnson</Text>
                <Text style={styles.referralDate}>Joined 2 weeks ago</Text>
              </View>
              <View style={styles.referralReward}>
                <Text style={styles.rewardAmount}>+$30.00</Text>
                <Text style={styles.rewardStatus}>Earned</Text>
              </View>
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
  statsCard: {
    marginBottom: 24,
    padding: 24,
  },
  statsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statsTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginLeft: 12,
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
    ...TextStyles.h2,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    ...TextStyles.caption,
    color: Colors.text,
    opacity: 0.8,
  },
  codeCard: {
    marginBottom: 24,
  },
  codeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginLeft: 12,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  referralCode: {
    ...TextStyles.h3,
    color: Colors.text,
    fontWeight: 'bold',
    flex: 1,
  },
  copyButton: {
    marginLeft: 12,
  },
  codeDescription: {
    ...TextStyles.bodySmall,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  shareButton: {
    marginTop: 8,
  },
  rewardsCard: {
    marginBottom: 24,
  },
  rewardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rewardsList: {
    gap: 16,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rewardStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  stepNumber: {
    ...TextStyles.body,
    color: Colors.text,
    fontWeight: 'bold',
  },
  rewardContent: {
    flex: 1,
  },
  rewardTitle: {
    ...TextStyles.body,
    color: Colors.text,
    fontWeight: '600',
    marginBottom: 4,
  },
  rewardDescription: {
    ...TextStyles.bodySmall,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  historyCard: {
    marginBottom: 24,
  },
  referralsList: {
    gap: 16,
    marginTop: 16,
  },
  referralItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  referralAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    ...TextStyles.body,
    color: Colors.text,
    fontWeight: 'bold',
  },
  referralContent: {
    flex: 1,
  },
  referralName: {
    ...TextStyles.body,
    color: Colors.text,
    marginBottom: 2,
  },
  referralDate: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  referralReward: {
    alignItems: 'flex-end',
  },
  rewardAmount: {
    ...TextStyles.body,
    color: Colors.success,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  rewardStatus: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
});