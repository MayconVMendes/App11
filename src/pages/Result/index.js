import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Result({ route }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ marginTop: '5%', fontSize: 25 }}>Dados informados:</Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Nome:{" " + route.params?.nome}
        </Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Idade:{" " + route.params?.idade}
        </Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Sexo:{" " + route.params?.sexo}
        </Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Escolaridade:{" " + route.params?.escolaridade}
        </Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Limite:{" " + route.params?.limite}
        </Text>
        <Text style={{ marginTop: '5%', fontSize: 20 }}>
          Brasileiro:{" " + route.params?.br}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
