import { Button } from '@rneui/base'
import { Text } from '@rneui/themed'
import { View } from 'react-native-ui-lib'
import styled from 'styled-components'
import { colors } from './colors'

export interface IContainer {
  justifyContent?: string
}

export interface IAppButton {
  variant?: string
}

const Container = styled(View)(({ justifyContent }: IContainer) => ({
  flex: 1,
  padding: 20,
  justifyContent: justifyContent ? justifyContent : 'space-between'
}))

const AppButton = styled(Button)(({ variant }: IAppButton) => ({
  paddingTop: 4,
  paddingBottom: 4,
  overflow: 'hidden',
  borderRadius: 10,
  background: variant === 'secoundary' ? colors.secoundary : colors.primary
}))

const SecoundaryButton = styled(Button)(({}) => ({
  paddingTop: 4,
  paddingBottom: 4,
  borderRadius: 10,
  background: 'black'
}))

export { Container, AppButton, SecoundaryButton }
