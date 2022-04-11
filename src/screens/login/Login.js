import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';
import authenticationService from '../../repositories/authentication';

const validationSchema = yup.object({
  email: yup.string().required('Enter your email!'),
  password: yup.string().required('Enter your password!'),
});

function LoginScreen({ navigation }) {
  const handleLoginSubmit = async (values) => {
    await authenticationService.loginAPI(values);
    navigation.navigate('Your programs');
  };

  return (
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
          <View style={styles.inputView}>
            <TextInput
              name="email"
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
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
              placeholderTextColor="#003f5c"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
          </View>
          {(errors.password && touched.password)
         && <Text style={styles.errorText}>{errors.password}</Text>}
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

export default LoginScreen;
