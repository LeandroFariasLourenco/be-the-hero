import React from 'react';
import logoImg from './../../assets/logo.png';
import { View, Image, Text , TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { default as s } from './styles';

const Details = () => {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate('incident');
  }

  return (
    <View style={s.container}>
      <View style={s.containerHeader}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={handleBackButton}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={s.containerIncident}>
        <Text style={s.containerIncidentTopic, { marginTop: 0 }}>ONG:</Text>
        <Text style={s.containerIncidentContent}>APAD</Text>

        <Text style={s.containerIncidentTopic}>CASO:</Text>
        <Text style={s.containerIncidentContent}>AAA</Text>

        <Text style={s.containerIncidentTopic}>VALOR:</Text>
        <Text style={s.containerIncidentContent}>R$190</Text>
      </View>

      <View style={s.contactBox}>
        <Text style={s.contactBoxTitle}>Salve o dia!</Text>
        <Text style={s.contactBoxTitle}>Seja o herói desse caso.</Text>


        <View style={s.contactBoxActions}>
          <Text style={s.contactBoxDescription}>Entre em contato!</Text>
          <View style={s.contactBoxActionsWrapper}
          >
            <TouchableOpacity
              style={s.contactBoxActionsWrapperButton}
              onPress={() => { }}>
              <Text style={s.contactBoxActionsText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.contactBoxActionsWrapperButton}
              onPress={() => { }}>
              <Text style={s.contactBoxActionsText}>Email</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}

export default Details;