import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import estilos from './estilos'

import TelaInicialImg from '../assets/telainicial.png'

export default function TelaInicial(props) {
  return (
    <View style={estilos.containerinicial}>
      <View style={estilos.boxinicial}>
        <Text style={estilos.tituloinicial}>Paraty</Text>
        <Text style={estilos.paragrafoinicial}>
          Saiba o que visitar em paraty.
        </Text>
        <Image style={estilos.telainicialimg} source={TelaInicialImg} />
        <Button
          title="Ver Restaurantes"
          onPress={() => {
            props.navigation.navigate('Restaurantes')
          }}
        />
        <Button
          title="Ver Passeios"
          onPress={() => {
            props.navigation.navigate('Passeio')
          }}
        />
        <Button
          title="Ver Hospedagem"
          onPress={() => {
            props.navigation.navigate('Hospedagem')
          }}
        />
      </View>
    </View>
  )
}
