import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCw, CreditCard, Building2, Smartphone } from 'lucide-react-native';

interface Transaction {
}

export const WalletScreen: React.FC = () => {
  const gradientColors = [...Gradients.primary];

  const [balance] = useState(1250.50);
  const [transactions] = useState<Transaction[]>([])

  // Modal states
  const [depositModalVisible, setDepositModalVisible] = useState(false);
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);

  // Deposit form data
  const [depositAmount, setDepositAmount] = useState('');
  const [depositDescription, setDepositDescription] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit_card');

  // Withdraw form data
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [transferDestination, setTransferDestination] = useState('');
  const [withdrawDescription, setWithdrawDescription] = useState('');

  const paymentMethods = [
    { id: 'credit_card', name: 'Credit Card', icon: CreditCard },
    { id: 'bank_transfer', name: 'Bank Transfer', icon: Building2 },
    { id: 'digital_wallet', name: 'Digital Wallet', icon: Smartphone },
  ];

  const handleDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    Alert.alert(
      'Deposit Submitted',
      `Your deposit of $${depositAmount} has been submitted and will be processed shortly.`,
      [{ text: 'OK', onPress: () => setDepositModalVisible(false) }]
    );

    // Reset form
    setDepositAmount('');
    setDepositDescription('');
    setSelectedPaymentMethod('credit_card');
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    if (!transferDestination.trim()) {
      Alert.alert('Error', 'Please enter a transfer destination');
      return;
    }

    Alert.alert(
      'Withdrawal Request Submitted',
      `Your withdrawal request for $${withdrawAmount} has been submitted. The withdrawal will be processed within 2x24 hours maximum.`,
      [{ text: 'OK', onPress: () => setWithdrawModalVisible(false) }]
    );

    // Reset form
    setWithdrawAmount('');
    setTransferDestination('');
    setWithdrawDescription('');
  };

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
            onPress={() => setDepositModalVisible(true)}
            style={styles.actionButton}
            gradient
          />
          <Button
            title="Withdraw"
            onPress={() => setWithdrawModalVisible(true)}
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

      {/* Deposit Modal */}
      <Modal
        visible={depositModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDepositModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deposit Funds</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Amount ($)</Text>
              <TextInput
                style={styles.textInput}
                value={depositAmount}
                onChangeText={setDepositAmount}
                placeholder="Enter amount"
                keyboardType="numeric"
                placeholderTextColor={Colors.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Description (Optional)</Text>
              <TextInput
                style={styles.textInput}
                value={depositDescription}
                onChangeText={setDepositDescription}
                placeholder="Enter description"
                placeholderTextColor={Colors.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Payment Method</Text>
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentMethodItem,
                    selectedPaymentMethod === method.id && styles.paymentMethodSelected
                  ]}
                  onPress={() => setSelectedPaymentMethod(method.id)}
                >
                  <method.icon 
                    color={selectedPaymentMethod === method.id ? Colors.primary : Colors.textSecondary} 
                    size={20} 
                  />
                  <Text style={[
                    styles.paymentMethodText,
                    selectedPaymentMethod === method.id && styles.paymentMethodTextSelected
                  ]}>
                    {method.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                onPress={() => setDepositModalVisible(false)}
                variant="outline"
                style={styles.modalButton}
              />
              <Button
                title="Deposit"
                onPress={handleDeposit}
                gradient
                style={styles.modalButton}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Withdraw Modal */}
      <Modal
        visible={withdrawModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setWithdrawModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Withdraw Funds</Text>
            
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Amount ($)</Text>
              <TextInput
                style={styles.textInput}
                value={withdrawAmount}
                onChangeText={setWithdrawAmount}
                placeholder="Enter amount"
                keyboardType="numeric"
                placeholderTextColor={Colors.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Transfer Destination</Text>
              <TextInput
                style={styles.textInput}
                value={transferDestination}
                onChangeText={setTransferDestination}
                placeholder="Bank account, wallet address, etc."
                placeholderTextColor={Colors.textMuted}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>Description (Optional)</Text>
              <TextInput
                style={styles.textInput}
                value={withdrawDescription}
                onChangeText={setWithdrawDescription}
                placeholder="Enter description"
                placeholderTextColor={Colors.textMuted}
              />
            </View>

            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                onPress={() => setWithdrawModalVisible(false)}
                variant="outline"
                style={styles.modalButton}
              />
              <Button
                title="Send Request"
                onPress={handleWithdraw}
                gradient
                style={styles.modalButton}
              />
            </View>
          </View>
        </View>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    ...TextStyles.h3,
    color: Colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 16,
  },
  formLabel: {
    ...TextStyles.body,
    color: Colors.text,
    marginBottom: 8,
    fontWeight: '500',
  },
  textInput: {
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 8,
    padding: 12,
    color: Colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  paymentMethodSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.backgroundSecondary,
  },
  paymentMethodText: {
    ...TextStyles.body,
    color: Colors.textSecondary,
    marginLeft: 12,
  },
  paymentMethodTextSelected: {
    color: Colors.primary,
    fontWeight: '500',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
  },
});