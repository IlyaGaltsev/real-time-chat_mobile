import { EdgeInsets } from './../../../types/index';
import { View } from 'react-native-ui-lib'
import styled from 'styled-components'
import { ScrollView } from 'react-native';

type TChatStyle = {
  insets: EdgeInsets
}

export const ScrollContainer = styled(ScrollView)<TChatStyle>(({ insets }) => ({
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    paddingTop: insets.top,
}))

export const ChatWrapper = styled(ScrollView)<TChatStyle>(({ insets }) => ({
    paddingBottom: insets.bottom + 40,
    backgroundColor: '#FEFDFE',
    height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20
}))
