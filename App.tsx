import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const API_URL = 'http://results.justhost.ly/auth/signin';
  const [RegNo, setRegNo] = useState('112181502');
  const [Password, setPassword] = useState('6504104');
  const [Token, setToken] = useState(null || '');

  useEffect(() => {
    const fetchData = async () => {
       try {
         const response = await axios.post(API_URL, {
           RegNo,
           Password,
         });
         setToken(response.data.data.access_token);
       } catch (error) {
         console.warn(error);
       }
    };
   
    fetchData();
   }, []);
   

  return (
    <View style={styles.container}>
      <Text>Access Token: {Token}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
