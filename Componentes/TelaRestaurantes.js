import React from 'react'
import { View, Text, Image } from 'react-native'
import estilos from './estilos'

import Restaurante1 from '../assets/restaurantes/restaurante01.png'
import Restaurante2 from '../assets/restaurantes/restaurante02.png'
import Restaurante3 from '../assets/restaurantes/restaurante03.png'

export default function TelaRestaurantes() {
  return (
    <View style={estilos.fundorestaurates}>
      <Text style={estilos.tituloinicialrestaurantes}>
        Bares e Restaurantes
      </Text>
      <Text style={estilos.paragrafoinicialrestaurantes}>
        O prazer da boa comida você encontra em Paraty. Com inúmeras opções de
        restaurantes, a cidade oferece o melhor da culinária internacional,
        juntamente à saborosa cozinha caiçara. Confira alguns bares e
        restaurantes famosos.
      </Text>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Restaurante1} />
        <Text style={estilos.titulorestaurantes}>Armazén Mar</Text>
        <Text style={estilos.paragraforestaurantes}>
          Localização: Rod Rio-Santos
        </Text>
      </View>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Restaurante2} />
        <Text style={estilos.titulorestaurantes}>Bendita's Restaurante</Text>
        <Text style={estilos.paragraforestaurantes}>
          Localização: Centro Histórico
        </Text>
      </View>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Restaurante3} />
        <Text style={estilos.titulorestaurantes}>Sereia do Mar Pizza-Bar</Text>
        <Text style={estilos.paragraforestaurantes}>
          Localização: Praia do Jabaquara
        </Text>
      </View>
    </View>
  )
}
