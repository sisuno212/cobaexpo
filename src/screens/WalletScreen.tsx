import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react-native';

interface Transaction {
}

export const WalletScreen: React.FC = () => {
  const gradientColors = [...Gradients.primary];
  
  const [balance] = useState(1250.50);
  const [transactions] = useState<Transaction[]>([])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Wallet</Text>
          <Text style={styles.subtitle}>Manage your funds</Text>
        </View>

        {/* Balance Overview */}
        <Card gradient gradientColors={gradientColors} style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Wallet color={Colors.text} size={28} />
            <Text style={styles.balanceTitle}>Total Balance</Text>
          </View>
          <Text style={styles.totalBalance}>$1,250.00</Text>
          <View style={styles.balanceBreakdown}>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Real Money</Text>
              <Text style={styles.balanceItemValue}>$1,250.00</Text>
            </View>
            <View style={styles.balanceItem}>
              <Text style={styles.balanceItemLabel}>Coins</Text>
              <Text style={styles.balanceItemValue}>12,500</Text>
            </View>
          </View>
        </Card>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <Button
            title="Deposit"
            onPress={() => {}}
            style={styles.actionButton}
            gradient
          />
          <Button
            title="Withdraw"
            onPress={() => {}}
            variant="outline"
            style={styles.actionButton}
          />
        </View>

        {/* Conversion */}
        <Card style={styles.conversionCard}>
          <View style={styles.conversionHeader}>
            <RefreshCw color={Colors.accent} size={24} />
            <Text style={styles.cardTitle}>Convert Money to Coins</Text>
          </View>
          <Text style={styles.conversionRate}>1 USD = 10 Coins</Text>
          <Button
            title="Convert $100 → 1,000 Coins"
            onPress={() => {}}
            variant="secondary"
            style={styles.conversionButton}
          />
        </Card>

        {/* Recent Transactions */}
        <Card style={styles.transactionsCard}>
          <Text style={styles.cardTitle}>Recent Transactions</Text>
          <View style={styles.transactionsList}>
            <View style={styles.transactionItem}>
              <View style={styles.transactionIcon}>
                <ArrowUpRight color={Colors.error} size={16} />
              </View>
              <View style={styles.transactionContent}>
                <Text style={styles.transactionTitle}>Withdrawal</Text>
                <Text style={styles.transactionSubtitle}>To Bank Account • Pending</Text>
              </View>
              <Text style={styles.transactionAmount}>-$200.00</Text>
            </View>

            <View style={styles.transactionItem}>
              <View style={styles.transactionIcon}>
                <ArrowDownLeft color={Colors.success} size={16} />
              </View>
              <View style={styles.transactionContent}>
                <Text style={styles.transactionTitle}>Deposit</Text>
                <Text style={styles.transactionSubtitle}>Credit Card • Completed</Text>
              </View>
              <Text style={styles.transactionAmount}>+$100.00</Text>
            </View>

            <View style={styles.transactionItem}>
              <View style={styles.transactionIcon}>
                <RefreshCw color={Colors.accent} size={16} />
              </View>
              <View style={styles.transactionContent}>
                <Text style={styles.transactionTitle}>Coin Conversion</Text>
                <Text style={styles.transactionSubtitle}>$50 → 500 Coins • Completed</Text>
              </View>
              <Text style={styles.transactionAmount}>+500 coins</Text>
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
  balanceCard: {
    marginBottom: 24,
    padding: 24,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginLeft: 12,
  },
  totalBalance: {
    ...TextStyles.h1,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balanceBreakdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    flex: 1,
  },
  balanceItemLabel: {
    ...TextStyles.caption,
    color: Colors.text,
    opacity: 0.8,
    marginBottom: 4,
  },
  balanceItemValue: {
    ...TextStyles.h4,
    color: Colors.text,
    fontWeight: '600',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
  },
  conversionCard: {
    marginBottom: 24,
  },
  conversionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginLeft: 12,
  },
  conversionRate: {
    ...TextStyles.body,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  conversionButton: {
    marginTop: 8,
  },
  transactionsCard: {
    marginBottom: 24,
  },
  transactionsList: {
    gap: 16,
    marginTop: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.backgroundTertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  transactionContent: {
    flex: 1,
  },
  transactionTitle: {
    ...TextStyles.body,
    color: Colors.text,
    marginBottom: 2,
  },
  transactionSubtitle: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  transactionAmount: {
    ...TextStyles.body,
    fontWeight: '600',
  },
});