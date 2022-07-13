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
    height: 600,
    backgroundColor: '#FAD9A1',
    justifyContent: 'start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius:5
    
  },
  tituloinicial: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:10
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
  boxbutton: {
    width:300,
    height:50,
    color:'#fff',
    backgroundColor:'#A35709',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius:5
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
