import React from 'react';
import logoImg from './../../assets/logo.png';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { default as s } from './styles';

const Details = () => {
  const navigation = useNavigation(),
    route = useRoute(),
    incident = route.params.incident,
    message = `Olá ${incident.DS_NOME}, estou entrando em contato porque gostaria de ajudar no caso ${incident.DS_TITULO} com o valor de `;

  function handleBackButton() {
    navigation.navigate('incident');
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${'5511983732412'}&text=${message}`);
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.DS_TITULO}`,
      recipients: [incident.DS_EMAIL],
      body: message
    })
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
        <Text style={[s.containerIncidentTopic, { marginTop: 0 }]}>ONG:</Text>
        <Text style={s.containerIncidentContent}>{incident.DS_NOME}</Text>

        <Text style={s.containerIncidentTopic}>LOCAL:</Text>
        <Text style={s.containerIncidentContent}>{incident.DS_CIDADE}-{incident.DS_UF}</Text>

        <Text style={s.containerIncidentTopic}>CASO:</Text>
        <Text style={s.containerIncidentContent}>{incident.DS_DESCRICAO}</Text>

        <Text style={s.containerIncidentTopic}>VALOR:</Text>
        <Text style={s.containerIncidentContent}>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(incident.VL_CUSTO)}</Text>
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
              onPress={sendWhatsapp}>
              <Text style={s.contactBoxActionsText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={s.contactBoxActionsWrapperButton}
              onPress={sendEmail}>
              <Text style={s.contactBoxActionsText}>Email</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}

export default Details;