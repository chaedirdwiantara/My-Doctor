import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" type="primary" />
        <View style={{height: 16}} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 91,
  },
});