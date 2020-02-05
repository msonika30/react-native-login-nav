import React, { Component } from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions'
import AppNavigator from '../../navigation/AppNavigator'

class Login extends Component {
  state = {
    errors: {},
    loading: false
  }

  onLoginButtonPress = () => {
    const { login } = this.props
    login({
        username: 'testuser',
        password: '123456'
    })
  }

  render() {
    const { user } = this.props
    return (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {
          user.loggedIn  ?
            <AppNavigator /> :        
            <TouchableHighlight onPress={this.onLoginButtonPress}>
              <Text style={styles.LoginText}>Log In</Text>
            </TouchableHighlight>
        }
        </View>
    );
  }
}

const mapStateToProp = state => ({
  user: state.auth.user
});

const mapDispatchToProps = {
    login
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    padding: 30
  }
})