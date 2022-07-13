import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  /*========TELAINICIAL======== */
  fundoinicial: {
    flex: 1,
    backgroundColor: '#D9F8C4',
    justifyContent: 'center',
    alignItems: 'center'
  },

  boxinicial: {
    width: 350,
    height: 500,
    backgroundColor: '#FAD9A1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tituloinicial: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  paragrafoinicial: {
    fontSize: 20,
    marginBottom: 10
  },

  telainicialimg: {
    width: 300,
    height: 300,
    marginBottom: 10
  },
  buttons: {
    marginBottom: 10
  },
  /*========TELAS======== */
  fundorestaurates: {
    flex: 1,
    backgroundColor: '#FF2442',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fundopasseio: {
    flex: 1,
    backgroundColor: '#90C8AC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fundohospedagem: {
    flex: 1,
    backgroundColor: '#FF5D5D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tituloinicialrestaurantes: {
    fontSize: 30,

    fontWeight: 'bold',
    marginBottom: 10
  },
  paragrafoinicialrestaurantes: {
    fontSize: 17,

    textAlign: 'justify',
    margin: 10
  },
  titulorestaurantes: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    marginLeft: 10
  },
  paragraforestaurantes: {
    fontSize: 15,
    marginLeft: 10,
    lineHeight: 20
  },
  boxrestaurantes: {
    backgroundColor: '#fff',
    width: 400,
    height: 200,
    alignItems: 'start',
    justifyContent: 'end',
    marginBottom: 10
  },
  restauranteimg: {
    width: 400,
    height: 110
  }
})
export default estilos
