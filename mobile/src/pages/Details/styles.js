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

  containerIncident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 32
  },

  containerIncidentTopic: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  containerIncidentContent: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  contactBoxTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },

  contactBoxDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  contactBoxActionsWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contactBoxActionsWrapperButton: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 60,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  contactBoxActionsText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
})