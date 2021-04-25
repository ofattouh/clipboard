/**
 * CopyPasteApp React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Button from 'react-native-button';

export default class App extends Component {
  state = {
    clipboardContent: null,
  };

  copyToClipboard = () => {
    Clipboard.setString('Tap and Hold to copy text to clipboard');
    Alert.alert('Copied to clipboard!');
  };

  getClipboardContent = async () => {
    const clipboardContent = await Clipboard.getString();
    this.setState({
      clipboardContent,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions} onLongPress={this.copyToClipboard}>
          Tap and Hold to copy text to clipboard
        </Text>

        <View style={styles.row}>
          <Text style={styles.content}>{this.state.clipboardContent}</Text>
        </View>

        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.getClipboardContent}>
          Paste Clipboard
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6CCEFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonContainer: {
    width: 200,
    padding: 10,
    margin: 15,
    height: 50,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#333333',
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
  },
});

// npx react-native init CopyPasteApp
// npm install --save react-native-button
// npm install --save @react-native-community/clipboard
// cd ios // pod install OR // npx pod-install
