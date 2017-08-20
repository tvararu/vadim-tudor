import React from 'react'
import {Alert, Button, FlatList, Platform, StyleSheet, View} from 'react-native'
import {Audio} from 'expo'

export default class HomeScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Marian', sound: require('../assets/sounds/marian.mp3')},
            {key: 'Il bag', sound: require('../assets/sounds/il-bag.mp3')},
            {
              key: 'Adu telefonul',
              sound: require('../assets/sounds/adu-telefonul.mp3')
            },
            {
              key: 'Hai sictir',
              sound: require('../assets/sounds/hai-sictir.mp3')
            },
            {
              key: 'Peste Vadim Tudor',
              sound: require('../assets/sounds/peste-vadim.mp3')
            }
          ]}
          renderItem={({item}) =>
            <Button
              style={styles.item}
              onPress={async () => {
                const soundObject = new Audio.Sound()
                try {
                  await soundObject.loadAsync(item.sound)
                  await soundObject.playAsync()
                } catch (error) {
                  Alert.alert(`Eroare cu sunetul "${item.key}": ${error}`)
                }
              }}
              title={item.key}
            />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 30
  },
  item: {
    borderColor: '#d6d7da',
    borderWidth: 6,
    fontSize: 35,
    padding: 10
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
