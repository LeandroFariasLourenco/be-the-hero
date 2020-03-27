import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { default as s } from './styles';

const Incidents = () => {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('detail');
  }

  return (
    <View style={s.container}>
      <View style={s.containerHeader}>
        <Image source={logoImg} />
        <Text style={s.containerHeaderText}>
          Total de <Text style={s.containerHeaderTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={s.containerTitle}>Bem-Vindo</Text>
      <Text style={s.containerDescription}>Escolha um dos casos abaixo e salve o dia!</Text>

      <FlatList
        style={s.containerIncidents}
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={s.containerIncidentsWrapper}>
            <Text style={s.containerIncidentsTopic}>ONG:</Text>
            <Text style={s.containerIncidentsContent}>APAD</Text>

            <Text style={s.containerIncidentsTopic}>CASO:</Text>
            <Text style={s.containerIncidentsContent}>AAA</Text>

            <Text style={s.containerIncidentsTopic}>VALOR:</Text>
            <Text style={s.containerIncidentsContent}>R$190</Text>
            <TouchableOpacity
              style={s.containerIncidentsBtn}
              onPress={navigateToDetail}>
              <Text style={s.containerIncidentsBtnText}>
                Ver mais detalhes
            </Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  )
}

export default Incidents;