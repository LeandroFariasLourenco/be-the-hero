import React , { useEffect , useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import api from './../../services/api';
import { default as s } from './styles';

const Incidents = () => {
  const navigation = useNavigation(),
    [page , setPage] = useState(1),
    [loading , setLoading] = useState(false),
    [incidents , setIncidents] = useState([]),
    [total , setTotal] = useState(0);

  async function loadIncidents() {
    if(loading) {
      return;
    }
  
    if(total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);
  
    const response = await api.get('/incidents' , {
      params: { page }
    });
  
    setIncidents([...incidents , ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  } 

  useEffect(() => {
    loadIncidents();
  }, [])

  function navigateToDetail(incident) {
    navigation.navigate('detail' , { incident });
  }

  return (
    <View style={s.container}>
      <View style={s.containerHeader}>
        <Image source={logoImg} />
        <Text style={s.containerHeaderText}>
          Total de <Text style={s.containerHeaderTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={s.containerTitle}>Bem-Vindo</Text>
      <Text style={s.containerDescription}>Escolha um dos casos abaixo e salve o dia!</Text>

      <FlatList
        style={s.containerIncidents}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        // showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item:incident }) => (
          <View style={s.containerIncidentsWrapper}>  
            <Text style={s.containerIncidentsTopic}>ONG:</Text>
            <Text style={s.containerIncidentsContent}>{incident.DS_NOME}</Text>

            <Text style={s.containerIncidentsTopic}>CASO:</Text>
            <Text style={s.containerIncidentsContent}>{incident.DS_TITULO}</Text>

            <Text style={s.containerIncidentsTopic}>VALOR:</Text>
            <Text style={s.containerIncidentsContent}>{Intl.NumberFormat('pt-BR' , { 
              style: 'currency' , 
              currency: 'BRL' 
            }).format(incident.VL_CUSTO)}
            </Text>
            <TouchableOpacity
              style={s.containerIncidentsBtn}
              onPress={() => navigateToDetail(incident)}>
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