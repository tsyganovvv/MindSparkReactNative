import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  ActivityIndicator 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/LoginStyle';
import { useState } from 'react';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Fill in all fields');
            return;
        }

        setLoading(true);
        
        try {
            const response = await fetch('http://192.168.0.161:8000/v1/sessions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            if (response.ok) {
                const token = response.headers.get('X-Auth-Token') || 
                             response.headers.get('Authorization')?.replace('Bearer ', '') ||
                             data.token;
                if (token) {
                    await AsyncStorage.setItem('auth_token', token);
                    await AsyncStorage.setItem('user_email', email);
                    navigation.navigate('Main');
                } else {
                    Alert.alert('Error', 'Token not found');
                }
            } else {
                Alert.alert('Error', data.detail || 'Incorrect login or password');
            }
        } catch (error) {
            Alert.alert('Error', 'Serverserver is unavailable');
        } finally {
            setLoading(false);
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mind-Spark</Text>
            
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                editable={!loading}
            />
            
            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                editable={!loading}
            />
            
            <TouchableOpacity 
                style={[styles.button, loading && { opacity: 0.7 }]} 
                onPress={handleLogin}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={{ color: 'white', fontSize: 16 }}>Войти</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}