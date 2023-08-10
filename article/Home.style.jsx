import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container:{
        padding: 10,
        height: '100%'
    },
    titleInput:{
        flexDirection: 'row',
        marginBottom: 10,
        width: 590,
    },
    title:{
        fontSize: 40
    },
    input:{
        fontSize: 30,
        marginHorizontal: 10,
        width: "77%",
    },
    body:{
        fontSize: 40
    },
    bodyContainer:{
        marginHorizontal: 5,
        marginVertical: 5
    },
    bodyInput:{
        height:510, 
        top: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        textAlignVertical: 'top',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowOffset: {width: 2, height: 2},  
        shadowColor: '#171717',  
        shadowOpacity: 1,  
        shadowRadius: 10,  
    },
    buttonContainer:{
        marginVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '50%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    button:{
        backgroundColor: 'white',
        padding: 5,
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        shadowOffset: {width: 2, height: 2},  
        shadowColor: '#171717',  
        shadowOpacity: 1,  
        shadowRadius: 10, 
        flexDirection: 'column',
    },
    buttonText:{
        fontSize: 30
    },
    titleContainer:{
        height:200,
        borderRadius: 8,
        marginBottom: 6
    },
    titleDisplay:{
        padding: 5,
        marginVertical: 5,
        marginHorizontal:5,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        shadowOffset: {width: 4, height: -4},  
        shadowColor: '#171717',  
        shadowOpacity: 1,  
        shadowRadius: 10, 
    },
    titleText:{
        fontSize: 20,
    }
})

export default styles;