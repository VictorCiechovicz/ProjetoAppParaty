import React from 'react'
import { View, Text, Image } from 'react-native'
import estilos from './estilos'

import Hospedagem1 from '../assets/hospedagens/hospedagem01.png'
import Hospedagem2 from '../assets/hospedagens/hospedagem02.png'
import Hospedagem3 from '../assets/hospedagens/hospedagem03.png'

export default function TelaHospedagem() {
  return (
    <View style={estilos.fundohospedagem}>
      <Text style={estilos.tituloinicialrestaurantes}>
        Pousadas e Hotéis em Paraty
      </Text>
      <Text style={estilos.paragrafoinicialrestaurantes}>
        Paraty conta com excelentes hoteis e pousadas cujos preços podem variar
        de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
      </Text>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Hospedagem1} />
        <Text style={estilos.titulorestaurantes}>Pousada Missanga</Text>
        <Text style={estilos.paragraforestaurantes}>
          Valor médio: R$ 350,00
        </Text>
        <Text style={estilos.paragraforestaurantes}>
          Localização: Próx. à Av. Roberto Silveira
        </Text>
      </View>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Hospedagem2} />
        <Text style={estilos.titulorestaurantes}>Pousada Morro do Forte</Text>
        <Text style={estilos.paragraforestaurantes}>
          Valor médio: R$ 450,00
        </Text>
        <Text style={estilos.paragraforestaurantes}>
          Localização: Próximo à Praia - Pontal
        </Text>
      </View>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Hospedagem3} />
        <Text style={estilos.titulorestaurantes}>Pousada Porto Imperial</Text>
        <Text style={estilos.paragraforestaurantes}>
          Valor médio: R$ 550,00
        </Text>
        <Text style={estilos.paragraforestaurantes}>
          Localização: Centro Histórico
        </Text>
      </View>
    </View>
  )
}
