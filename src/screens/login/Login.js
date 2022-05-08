import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, Image, ImageBackground,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';
import authenticationService from '../../repositories/authentication';
import logo from '../../assets/images/sp.png';

const validationSchema = yup.object({
  email: yup.string().required('Enter your email!'),
  password: yup.string().required('Enter your password!'),
});

function LoginScreen({ navigation }) {
  const [error, setError] = useState();
  const handleLoginSubmit = async (values) => {
    try {
      await authenticationService.loginAPI(values);
      navigation.replace('Your programs');
    } catch (error) {
      if (error.response.data.status === 401) {
        setError('Wrong login credentials');
      }
    }
  };

  return (
    <ImageBackground source={require('../../assets/images/phone_background.png')} style={styles.image}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleLoginSubmit(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="email"
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#fff"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </View>
            {(errors.email && touched.email)
         && <Text style={styles.errorText}>{errors.email}</Text>}
            <View style={styles.inputView}>
              <TextInput
                name="password"
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#fff"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            {(errors.password && touched.password)
         && <Text style={styles.errorText}>{errors.password}</Text>}
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
}

export default LoginScreen;
