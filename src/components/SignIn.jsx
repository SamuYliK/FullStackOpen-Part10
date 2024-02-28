import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from "./Text";
import theme from '../theme';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.backgroundColors.signInView,
  },
  inputViews: {
    borderWidth: 1,
    borderRadius: 3,
    marginLeft: '5%',
    marginTop: '3%',
    marginRight: '5%',
  },
  inputFields: {
    marginLeft: '3%',
  },
  inputFieldsError: {
    borderColor: theme.colors.textError,
  },
  errorText: {
    marginLeft: '5%',
  },
  signInView: {
    flexDirection: 'column',
    marginLeft: '5%',
    marginTop: '3%',
    marginRight: '5%',
    marginBottom: '3%',
  },
  signInButton: {
    borderRadius: 3,
    padding: 7,
    flexGrow: 1,
    textAlign: 'center',
  }
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.inputViews,
          formik.touched.username && formik.errors.username ? styles.inputFieldsError : styles.inputViews
        ]}
      >
        <TextInput
          style={styles.inputFields}
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
      </View>
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText} color='errorColor'>
          {formik.errors.username}
        </Text>
      )}
      <View
        style={[
          styles.inputViews,
          formik.touched.password && formik.errors.password ? styles.inputFieldsError : styles.inputViews
        ]}
      >
        <TextInput
          style={styles.inputFields}
          placeholder='Password'
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText} color='errorColor'>
          {formik.errors.password}
        </Text>
      )}
      <View style={styles.signInView}>
        <Pressable
          onPress={formik.handleSubmit}
        >
          <Text
            style={styles.signInButton}
            color="textTertiary" 
            fontWeight='bold'
            backgroundColor='backgroundPrimary'
          >
            Sign in
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    console.log('Username: ', values.username)
    console.log('Password: ', values.password)
  }
  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;