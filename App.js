import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Dados from './componentes/Dados';

export default function App() {
const [nome, setNome] = useState("");
const [nomeParam, setNomeParam] = useState("");
const [idade, setIdade] = useState("");
const [idadeParam, setIdadeParam] = useState("");
function gravar(){
	setNomeParam(nome);
	setIdadeParam(idade);
}
  return (
    	<View style={styles.container}>
    	<View style={styles.bloco}>
			<Text style={styles.label}>Nome:</Text>
			<TextInput s
				style={styles.input} 
				value={nome} 
				onChangeText={(value)=>setNome(value)}>
			</TextInput>
        </View>
		  
		  <View style={styles.bloco}>
		  	<Text style={styles.label}>Ano de Nascimento:</Text>
			<TextInput
				style={styles.input}
				value ={idade}
				onChangeText={(value)=>setIdade(value)}
			/>
		  </View>

<View style={styles.bloco}>
 <TouchableOpacity style={styles.botao} onPress={gravar}>
 <Text style={styles.textoBotao}>Mostrar</Text>
 </TouchableOpacity>
</View>
 
<View style={styles.bloco}>
	<Dados nome={nomeParam}  idade={idadeParam}/>

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
	
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:20,
		margin:'5px'
	},
	
   label:{
		textAlign:'center',
		fontSize: 25,
	    margin:'5px'
	},
	
   containerprinc:{
		marginTop:'30%'
	},
	
    botao:{
		backgroundColor:'#32CD32',
		borderRadius:20,
		width:'35%',
	    marginLeft:'100px',
		margin:'15px'
	},
	
		textoBotao:{
		color:'#FFF',
		textAlign:'center',
		fontsize:20
	},
});
