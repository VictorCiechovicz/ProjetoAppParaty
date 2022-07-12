import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaInicial from './Componentes/TelaInicial'
import TelaRestaurantes from './Componentes/TelaRestaurantes'
import TelaPasseio from './Componentes/TelaPasseio'
import TelaHospedagem from './Componentes/TelaHospedagem'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Restaurantes" component={TelaRestaurantes} />
        <Stack.Screen name="Passeio" component={TelaPasseio} />
        <Stack.Screen name="Hospedagem" component={TelaHospedagem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
