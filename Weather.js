import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Weather extends Component {
  render(){
    return (      
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
       <View style={styles.upper}>
           <Text> Icon here!</Text>
           <Text> Temp here!</Text>
       </View>
      </LinearGradient>
    );
   }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1    
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent: "center"
    }
  });
  