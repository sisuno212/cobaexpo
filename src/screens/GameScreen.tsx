import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { Play, Gamepad2, Trophy } from 'lucide-react-native';

export const GameScreen: React.FC = () => {
  const gradientColors = [...Gradients.primary];

  const [games] = useState<Game[]>([
    {
      // Game data goes here
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Game Center</Text>
          <Text style={styles.subtitle}>Ready to play?</Text>
        </View>

        {/* Game Launch Card */}
        <Card gradient gradientColors={gradientColors} style={styles.gameCard}>
          <View style={styles.gameHeader}>
            <Gamepad2 color={Colors.text} size={32} />
            <Text style={styles.gameTitle}>HTML5 Casino</Text>
          </View>
          <Text style={styles.gameDescription}>
            Experience the thrill of our premium casino games with real-time multiplayer action.
          </Text>
          <Button
            title="Launch Game"
            onPress={() => {}}
            style={styles.launchButton}
            gradient
          />
        </Card>

        {/* Game Stats */}
        <Card style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <Trophy color={Colors.gold} size={24} />
            <Text style={styles.cardTitle}>Your Stats</Text>
          </View>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>73%</Text>
              <Text style={styles.statLabel}>Win Rate</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$2,450</Text>
              <Text style={styles.statLabel}>Total Winnings</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>Games Played</Text>
            </View>
          </View>
        </Card>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <Button
            title="View History"
            onPress={() => {}}
            variant="outline"
            style={styles.actionButton}
          />
          <Button
            title="Leaderboard"
            onPress={() => {}}
            variant="secondary"
            style={styles.actionButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
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
  gameCard: {
    marginBottom: 24,
    padding: 24,
    alignItems: 'center',
  },
  gameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  gameTitle: {
    ...TextStyles.h2,
    color: Colors.text,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  gameDescription: {
    ...TextStyles.body,
    color: Colors.text,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 24,
    lineHeight: 24,
  },
  launchButton: {
    paddingHorizontal: 40,
  },
  statsCard: {
    marginBottom: 24,
  },
  statsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
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
    ...TextStyles.h3,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
  },
});