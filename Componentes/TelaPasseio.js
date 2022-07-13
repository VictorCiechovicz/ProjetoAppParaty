import React from 'react'
import { View, Text, Image } from 'react-native'
import estilos from './estilos'

import Passeio1 from '../assets/passeios/passeio01.png'
import Passeio2 from '../assets/passeios/passeio02.png'
import Passeio3 from '../assets/passeios/passeio03.png'

export default function TelaPasseio() {
  return (
    <View style={estilos.fundopasseio}>
      <Text style={estilos.tituloinicialrestaurantes}>Passeios em Paraty</Text>

      <Text style={estilos.paragrafoinicialrestaurantes}>
        O município de Paraty está quase inteiro em área de parques e de
        preservação ambiental. Muitas são as opções de passeios para quem curte
        a natureza: passeios de jeep, de bike, caminhadas por trilhas entre
        outros. Veja dois exemplos:
      </Text>

      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Passeio1} />
        <Text style={estilos.titulorestaurantes}>Tirolesa</Text>
      </View>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Passeio2} />
        <Text style={estilos.titulorestaurantes}>Rafting</Text>
      </View>
      <View style={estilos.boxrestaurantes}>
        <Image style={estilos.restauranteimg} source={Passeio3} />
        <Text style={estilos.titulorestaurantes}>Canoagem no mangue</Text>
      </View>
    </View>
  )
}
