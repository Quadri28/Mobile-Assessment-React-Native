import React from 'react'
import { View, Text, StyleSheet, Button, Pressable, TouchableOpacity } from 'react-native'

const UserType = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        What kind of user are you?
      </Text>
      <Text style={styles.header2}>
        We will adapt the app to suit your needs!
      </Text>
      <View style={styles.btnView}>
      <TouchableOpacity  style={styles.btn}> 
      <Text style={styles.btnText}>Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}> 
      <Text style={styles.btnText}>E-commerce</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        paddingTop: '3rem',
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        width: '70%',
        marginBottom: 10,
        color: '#444'
    },
    header2:{
        width: '70%',
        marginBottom: 30,
        color: '#444',
    },

    btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '3rem',
    paddingHorizontal: 32,
    borderRadius: '1rem',
    elevation: 3,
    backgroundColor: '#30A5BF',
    marginVertical: 10,
    },
    btnText:{
      color: '#fff',
      fontSize: 30,
      fontWeight: '700',
      lineHeight:25,

    }


})

export default UserType
