import React from "react";
import {Text,View,TextInput,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native'


export default class App extends React.Component{
  constructor()
  {
    super()
    this.state={wordstore:[]}
  }
  componentDidUpdate(){
    console.log(this.state.wordstore)
  }
  render()
  {
    return(
      <View style={styles.container}>
        <View style={styles.tittleBar}>
        <Text style={styles.text}>
          Wheel Spin App
        </Text>
        </View>
        
        <TextInput style={styles.textbox}
        onChangeText={text=>this.setState({wordstore:text})}
       

        
        />
        
        <TouchableOpacity style={styles.submitButton}
       onPress={this.setState({wordstore:''})}
        >
          <Text style={styles.buttonText}> submit </Text>
        </TouchableOpacity>

      </View>
    )
  }
}
const styles=StyleSheet.create({
container:{
  flex:1,
 // backgroundColor:"black"


},
text:{
  color:'red',
  fontSize:30,
  


},
tittleBar:{
  flex:0.15,
  justifyContent:'center',
  alignItems:'center'

},
textbox :{
  justifyContent:'center',
  borderWidth:1,
  width:'55%',
  height:50,
  borderColor:'black',
  alignItems:'center',
  marginTop:250,
  fontSize:30,
  marginLeft:80
  

},
submitButton:{
  width:'55%',
  height:75,
  justifyContent:'center',
backgroundColor:'blue',
borderRadius:30,
marginTop:40,
marginLeft:80
},
buttonText:{
fontSize:35,
color:'white',
textAlign:'center',

}
})