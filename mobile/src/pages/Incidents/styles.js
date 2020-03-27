import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerHeaderText: {
    fontSize: 15,
    color: '#737380',
  },

  containerHeaderTextBold: {
    fontWeight: 'bold'
  },

  containerTitle: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  containerDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  containerIncidents: {
    marginTop: 32
  }, 

  containerIncidentsWrapper: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16   
  },

  containerIncidentsTopic : {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  }, 

  containerIncidentsContent: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  containerIncidentsBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  containerIncidentsBtnText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  }
})