
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors, Gradients } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';
import { 
  Play, 
  Trophy, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Calendar,
  Clock,
  HelpCircle,
  FileText,
  Shield
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface Game {
  id: string;
  name: string;
  image: string;
  players: number;
  minBet: number;
}

interface Winner {
  id: string;
  username: string;
  amount: number;
  game: string;
  avatar: string;
}

interface SliderImage {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export const HomeScreen: React.FC = () => {
  const gradientColors = [...Gradients.primary];
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages: SliderImage[] = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=200&fit=crop',
      title: 'Welcome to Casino Paradise',
      subtitle: 'Experience the thrill of premium gaming'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=200&fit=crop',
      title: 'Win Big Today',
      subtitle: 'Join thousands of players winning daily'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
      title: 'New Player Bonus',
      subtitle: 'Get 100% match on your first deposit'
    }
  ];

  const popularGames: Game[] = [
    { id: '1', name: 'Blackjack', image: '🃏', players: 1234, minBet: 5 },
    { id: '2', name: 'Poker', image: '♠️', players: 892, minBet: 10 },
    { id: '3', name: 'Roulette', image: '🎰', players: 567, minBet: 1 },
    { id: '4', name: 'Slots', image: '🎲', players: 2341, minBet: 0.5 },
  ];

  const dailyWinners: Winner[] = [
    { id: '1', username: 'Player123', amount: 2500, game: 'Blackjack', avatar: 'P' },
    { id: '2', username: 'LuckyWin', amount: 1850, game: 'Poker', avatar: 'L' },
    { id: '3', username: 'BigBet', amount: 1200, game: 'Roulette', avatar: 'B' },
  ];

  const weeklyWinners: Winner[] = [
    { id: '1', username: 'MegaWin', amount: 15000, game: 'Slots', avatar: 'M' },
    { id: '2', username: 'CardShark', amount: 12500, game: 'Poker', avatar: 'C' },
    { id: '3', username: 'SpinMaster', amount: 8900, game: 'Roulette', avatar: 'S' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    const next = (currentSlide + 1) % sliderImages.length;
    setCurrentSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);
  };

  const renderWinnerItem = (winner: Winner, index: number) => (
    <View key={winner.id} style={styles.winnerItem}>
      <View style={styles.winnerRank}>
        <Text style={styles.rankNumber}>{index + 1}</Text>
      </View>
      <View style={styles.winnerAvatar}>
        <Text style={styles.avatarText}>{winner.avatar}</Text>
      </View>
      <View style={styles.winnerInfo}>
        <Text style={styles.winnerName}>{winner.username}</Text>
        <Text style={styles.winnerGame}>{winner.game}</Text>
      </View>
      <Text style={styles.winnerAmount}>${winner.amount.toLocaleString()}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Casino Paradise</Text>
          <Text style={styles.subtitle}>Your gaming adventure starts here</Text>
        </View>

        {/* Image Slider */}
        <View style={styles.sliderContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
              setCurrentSlide(slideIndex);
            }}
            contentOffset={{ x: currentSlide * (width - 40), y: 0 }}
          >
            {sliderImages.map((slide) => (
              <View key={slide.id} style={[styles.slide, { width: width - 40 }]}>
                <Image source={{ uri: slide.image }} style={styles.slideImage} />
                <View style={styles.slideOverlay}>
                  <Text style={styles.slideTitle}>{slide.title}</Text>
                  <Text style={styles.slideSubtitle}>{slide.subtitle}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          
          <TouchableOpacity style={styles.sliderButton} onPress={prevSlide}>
            <ChevronLeft color={Colors.text} size={20} />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.sliderButton, styles.sliderButtonRight]} onPress={nextSlide}>
            <ChevronRight color={Colors.text} size={20} />
          </TouchableOpacity>

          <View style={styles.pagination}>
            {sliderImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  currentSlide === index && styles.paginationDotActive
                ]}
              />
            ))}
          </View>
        </View>

        {/* Popular Games */}
        <Card style={styles.gamesCard}>
          <View style={styles.cardHeader}>
            <Play color={Colors.primary} size={24} />
            <Text style={styles.cardTitle}>Popular Games</Text>
          </View>
          <View style={styles.gamesList}>
            {popularGames.map((game) => (
              <TouchableOpacity key={game.id} style={styles.gameItem}>
                <Text style={styles.gameIcon}>{game.image}</Text>
                <View style={styles.gameInfo}>
                  <Text style={styles.gameName}>{game.name}</Text>
                  <Text style={styles.gameDetails}>
                    {game.players} players • Min bet ${game.minBet}
                  </Text>
                </View>
                <Play color={Colors.primary} size={16} />
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        {/* Winners Section */}
        <View style={styles.winnersContainer}>
          {/* Daily Winners */}
          <Card style={styles.winnersCard}>
            <View style={styles.cardHeader}>
              <Clock color={Colors.gold} size={24} />
              <Text style={styles.cardTitle}>Daily Top Winners</Text>
            </View>
            <View style={styles.winnersList}>
              {dailyWinners.map((winner, index) => renderWinnerItem(winner, index))}
            </View>
          </Card>

          {/* Weekly Winners */}
          <Card style={styles.winnersCard}>
            <View style={styles.cardHeader}>
              <Calendar color={Colors.gold} size={24} />
              <Text style={styles.cardTitle}>Weekly Top Winners</Text>
            </View>
            <View style={styles.winnersList}>
              {weeklyWinners.map((winner, index) => renderWinnerItem(winner, index))}
            </View>
          </Card>
        </View>

        {/* Quick Stats */}
        <Card gradient gradientColors={gradientColors} style={styles.statsCard}>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Users color={Colors.text} size={20} />
              <Text style={styles.statValue}>25,432</Text>
              <Text style={styles.statLabel}>Active Players</Text>
            </View>
            <View style={styles.statItem}>
              <Trophy color={Colors.text} size={20} />
              <Text style={styles.statValue}>$2.4M</Text>
              <Text style={styles.statLabel}>Won Today</Text>
            </View>
            <View style={styles.statItem}>
              <Star color={Colors.text} size={20} />
              <Text style={styles.statValue}>4.8</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </Card>

        {/* Information Links */}
        <Card style={styles.infoCard}>
          <Text style={styles.cardTitle}>Information & Support</Text>
          <View style={styles.infoList}>
            <TouchableOpacity style={styles.infoItem}>
              <HelpCircle color={Colors.primary} size={20} />
              <Text style={styles.infoText}>Frequently Asked Questions</Text>
              <ChevronRight color={Colors.textMuted} size={16} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.infoItem}>
              <FileText color={Colors.primary} size={20} />
              <Text style={styles.infoText}>Terms of Service</Text>
              <ChevronRight color={Colors.textMuted} size={16} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.infoItem}>
              <Shield color={Colors.primary} size={20} />
              <Text style={styles.infoText}>Privacy Policy</Text>
              <ChevronRight color={Colors.textMuted} size={16} />
            </TouchableOpacity>
          </View>
        </Card>

        {/* Get Started Button */}
        <Button
          title="Start Playing Now"
          onPress={() => {}}
          gradient
          style={styles.startButton}
        />
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
    alignItems: 'center',
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
  sliderContainer: {
    height: 200,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  slide: {
    position: 'relative',
  },
  slideImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  slideOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  slideTitle: {
    ...TextStyles.h3,
    color: Colors.text,
    marginBottom: 4,
  },
  slideSubtitle: {
    ...TextStyles.body,
    color: Colors.textSecondary,
  },
  sliderButton: {
    position: 'absolute',
    top: '50%',
    left: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  sliderButtonRight: {
    left: undefined,
    right: 10,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  paginationDotActive: {
    backgroundColor: Colors.primary,
  },
  gamesCard: {
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    ...TextStyles.h4,
    color: Colors.text,
    marginLeft: 12,
  },
  gamesList: {
    gap: 12,
  },
  gameItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 12,
  },
  gameIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  gameInfo: {
    flex: 1,
  },
  gameName: {
    ...TextStyles.body,
    color: Colors.text,
    fontWeight: '600',
    marginBottom: 2,
  },
  gameDetails: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  winnersContainer: {
    gap: 16,
    marginBottom: 24,
  },
  winnersCard: {
    flex: 1,
  },
  winnersList: {
    gap: 12,
  },
  winnerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  winnerRank: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankNumber: {
    ...TextStyles.caption,
    color: Colors.background,
    fontWeight: 'bold',
  },
  winnerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
  winnerInfo: {
    flex: 1,
  },
  winnerName: {
    ...TextStyles.body,
    color: Colors.text,
    fontWeight: '600',
    marginBottom: 2,
  },
  winnerGame: {
    ...TextStyles.caption,
    color: Colors.textSecondary,
  },
  winnerAmount: {
    ...TextStyles.body,
    color: Colors.success,
    fontWeight: 'bold',
  },
  statsCard: {
    marginBottom: 24,
    padding: 24,
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
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    ...TextStyles.caption,
    color: Colors.text,
    opacity: 0.8,
  },
  infoCard: {
    marginBottom: 24,
  },
  infoList: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  infoText: {
    ...TextStyles.body,
    color: Colors.text,
    flex: 1,
    marginLeft: 12,
  },
  startButton: {
    marginBottom: 24,
    paddingVertical: 16,
  },
});
