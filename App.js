import React from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import {AppLoading, Asset, Font} from 'expo'
import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  state = {
    assetsAreLoaded: false
  }

  componentWillMount () {
    this._loadAssetsAsync()
  }

  render () {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />
    } else {
      return (
        <View style={styles.container}>
          <HomeScreen />
        </View>
      )
    }
  }

  async _loadAssetsAsync () {
    try {
      // TODO: Populate with sounds.
      await Promise.all([Asset.loadAsync([])])
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      )
      console.log(e)
    } finally {
      this.setState({assetsAreLoaded: true})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})
