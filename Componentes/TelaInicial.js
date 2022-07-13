import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import estilos from './estilos'

import TelaInicialImg from '../assets/telainicial.png'

export default function TelaInicial(props) {
  return (
    <View style={estilos.fundoinicial}>
      <View style={estilos.boxinicial}>
        <Text style={estilos.tituloinicial}>Paraty</Text>
        <Text style={estilos.paragrafoinicial}>
          Saiba o que visitar em paraty.
        </Text>
        <Image style={estilos.telainicialimg} source={TelaInicialImg} />

        <Button
          style={estilos.buttons}
          title="Ver Restaurantes"
          onPress={() => {
            props.navigation.navigate('Restaurantes')
          }}
        />
        <Button
          style={estilos.buttons}
          title="Ver Passeios"
          onPress={() => {
            props.navigation.navigate('Passeio')
          }}
        />
        <Button
          style={estilos.buttons}
          title="Ver Hospedagem"
          onPress={() => {
            props.navigation.navigate('Hospedagem')
          }}
        />
      </View>
    </View>
  )
}
