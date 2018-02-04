import React,{Component} from "react";
import {Text,View,TextInput,Button} from "react-native";
import {reduxForm,Field} from "redux-form";
// define validation
const validate = values =>{
  const errors = {};
  if(!values.fname){
    errors.fname= "please fill the fname"
  }
  else if(values.fname.length >7){
    errors.fname = "we need first name maximum 7"
  }

  if(!values.phonenumber){
    errors.phonenumber = "please phone number"
  }else if(values.phonenumber.length !=10){
    errors.phonenumber = "must be 10 digit"
  }

  if(!values.age){
    errors.age="please fill age"
  }else if(Number(values.age) <18){
    errors.age ="need above 18"
  }


  return errors;
}
// render your fields
const myFields =({label, meta:{error,touched}, input:{onChange}}) =>{
  return(
    <View>
    <Text>{label}</Text>
    <TextInput style={{borderWidth:1,width:200,marginBottom:10}}
    onChangeText={onChange}/>
    {touched && (error && (<Text style={{color:'red'}}>{error}</Text>))}
    </View>

  );
}
// values in  button
const myBtn = values =>{
  alert(values);
}
const myFormCom = props =>{

  const {handleSubmit} = props;
  return(
    <View>
      <Field
      name="fname"
      component={myFields}
      label="First name"/>

      <Field
      name="phonenumber"
      component={myFields}
      label="Phone Number"/>

      <Field
      name="age"
      component={myFields}
      label="Age"/>

      <Button title="submit"
      onPress={handleSubmit(myBtn)}/>



    </View>
  );
}

const ourform = reduxForm({
  form: 'something',
    //for unique id
    validate

})(myFormCom);

export default ourform;
