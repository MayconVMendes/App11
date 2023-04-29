import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [isName, setIsName] = useState('');
  const [isIdade, setIsIdade] = useState('');
  const [isSexo, setIsSexo] = useState('');
  const [isEscolaridade, setIsEscolaridade] = useState('');
  const [isLimite, setIsLimite] = useState();
  const [isBrasileiro, setIsBrasileiro] = useState(false);
  const [resultBr, setResultBr] = useState('Estrangeiro');

  function calcular() {
    if (
      isName == '' ||
      isIdade == '' ||
      isSexo == '' ||
      isEscolaridade == '' ||
      isLimite == ''
    ) {
      alert('É obrigatório digitar os valores');
    } else {
      irSobre();
    }
  }

  function irSobre() {
    let value = {
      nome: isName,
      idade: isIdade,
      sexo: isSexo,
      escolaridade: isEscolaridade,
      limite: isLimite,
      br: resultBr,
    };
    navigation.navigate('Result', value);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={{ marginTop: '5%', fontSize: 30, textAlign: 'center' }}>
          Abertura de Conta
        </Text>

        <View style={styles.centerView}>
          <Text>Nome: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setIsName(name)}
          />
        </View>

        <View style={styles.centerView}>
          <Text>Idade: </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(numero) => setIsIdade(numero)}
          />
        </View>

        <View style={{ marginTop: '5%' }}>
          <Text>Sexo: </Text>
          <Picker
            selectedValue={isSexo}
            onValueChange={(itemValue, itemIndex) => setIsSexo(itemValue)}>
            <Picker.Item key={1} value={0} label="Selecione" />
            <Picker.Item key={2} value={'M'} label="Masculino" />
            <Picker.Item key={3} value={'F'} label="Femenino" />
          </Picker>
        </View>

        <View style={{ marginTop: '5%' }}>
          <Text>Escolaridade: </Text>
          <Picker
            selectedValue={isEscolaridade}
            onValueChange={(itemValue, itemIndex) =>
              setIsEscolaridade(itemValue)
            }>
            <Picker.Item key={0} value={0} label="Selecione" />
            <Picker.Item
              key={1}
              value={'E.M.C'}
              label="Ensino médio completo"
            />
            <Picker.Item
              key={2}
              value={'E.M.I'}
              label="Ensino médio incompleto"
            />
            <Picker.Item
              key={3}
              value={'E.S.C'}
              label="ensino superior completo"
            />
            <Picker.Item
              key={4}
              value={'E.S.I'}
              label="ensino superior incompleto"
            />
          </Picker>
        </View>

        <View style={{ marginTop: '5%' }}>
          <Text>Limite: </Text>

          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valorSelecionado) =>
              setIsLimite(Math.round(valorSelecionado))
            }
            value={isLimite}
          />
        </View>

        <View style={{ marginTop: '5%' }}>
          <Text>Brasileiro: </Text>
          <Switch
            value={isBrasileiro}
            onValueChange={() => {
              setIsBrasileiro(!isBrasileiro);

              if (isBrasileiro === false) {
                setResultBr('Sim');
              } else {
                setResultBr('Não');
              }
            }}
          />
        </View>

        <Pressable style={styles.btn} onPress={calcular}>
          <Text>Confirmar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  scroll: {
    width: '100%',
    height: '100%',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
    marginBottom: 50,
  },
  input: {
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  centerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
