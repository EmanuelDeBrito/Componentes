import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';

export default function Dados(props) {
  return (
    <View style={styles.container}>
 <View>
  <Text style={styles.text}>
		Nome: {props.nome}
   </Text>
	 <Text style={styles.text}>
		Idade: {props.idade != "" ? 2022 - props.idade : ""}
   </Text>

 </View>
    </View>
 
  );
}
const styles = StyleSheet.create({
  container: {
    	marginTop:10,
		width:'80%',
		marginLeft:'10%'
	},
	text: {
		color:'#00BFFF',
		fontSize: 20
		
	}
});
