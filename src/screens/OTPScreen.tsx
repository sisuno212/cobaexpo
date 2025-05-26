
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Colors } from '@/constants/Colors';
import { TextStyles } from '@/constants/Typography';

interface OTPScreenProps {
  navigation?: any;
  onVerificationSuccess?: () => void;
  onBackToForgotPassword?: () => void;
}

export const OTPScreen: React.FC<OTPScreenProps> = ({ 
  navigation, 
  onVerificationSuccess,
  onBackToForgotPassword
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(120); // 2 minutes
  const inputRefs = useRef<TextInput[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      Alert.alert('Error', 'Please enter the complete 6-digit verification code');
      return;
    }

    setLoading(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Verification Successful',
        'Your email has been verified successfully!',
        [{ 
          text: 'OK', 
          onPress: () => {
            if (onVerificationSuccess) {
              onVerificationSuccess();
            } else if (navigation) {
              navigation.navigate('Home');
            }
          }
        }]
      );
    }, 1500);
  };

  const handleResendOTP = () => {
    if (countdown > 0) return;
    
    setCountdown(120);
    setOtp(['', '', '', '', '', '']);
    Alert.alert('OTP Resent', 'A new verification code has been sent to your email.');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>
            We've sent a 6-digit verification code to your email address.
          </Text>
        </View>

        <Card style={styles.formCard}>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                style={[
                  styles.otpInput,
                  digit ? styles.otpInputFilled : null
                ]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                textAlign="center"
              />
            ))}
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
              {countdown > 0 ? `Resend code in ${formatTime(countdown)}` : 'Didn\'t receive the code?'}
            </Text>
            <TouchableOpacity 
              onPress={handleResendOTP}
              disabled={countdown > 0}
              style={styles.resendButton}
            >
              <Text style={[
                styles.resendButtonText,
                countdown > 0 ? styles.resendButtonDisabled : null
              ]}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title={loading ? "Verifying..." : "Verify Code"}
            onPress={handleVerifyOTP}
            gradient
            style={styles.verifyButton}
            disabled={loading}
          />
        </Card>

        <Button
          title="Back"
          onPress={onBackToForgotPassword}
          variant="ghost"
          style={styles.backButton}
        />
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
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    ...TextStyles.h1,
    color: Colors.text,
    marginBottom: 12,
  },
  subtitle: {
    ...TextStyles.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  formCard: {
    padding: 24,
    marginBottom: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  otpInput: {
    width: 48,
    height: 56,
    backgroundColor: Colors.backgroundTertiary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  otpInputFilled: {
    borderColor: Colors.primary,
    backgroundColor: Colors.backgroundSecondary,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  resendText: {
    ...TextStyles.bodySmall,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  resendButton: {
    padding: 4,
  },
  resendButtonText: {
    ...TextStyles.bodySmall,
    color: Colors.primary,
    fontWeight: '600',
  },
  resendButtonDisabled: {
    color: Colors.textMuted,
  },
  verifyButton: {
    height: 56,
  },
  backButton: {
    alignSelf: 'center',
  },
});
