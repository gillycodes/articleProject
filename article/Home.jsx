import "react-native-gesture-handler";
import { Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Home.style'
import { useNavigation } from '@react-navigation/native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const Home = () => {
    const [article, setArticle] = useState('');
    const [articles, setArticles] = useState([]);
    const [ title, setTitle ] = useState('')
    const [titles, setTitles] = useState([]);
    const [enteredTexts, setEnteredTexts] = useState([]);
    const navigation = useNavigation();

    first = title;
    second = article;
    

    const enteredText = [`${first = title} \n ${second = article}`]


    function textChange(enteredText) {
      setEnteredTexts((previousTitle) => [...previousTitle, enteredText]); // will gives you {firstText : "whatever", secondText: "firstText"}
    }
  

    const addTitle = () => {
      if (title.trim() !== '' && article.trim !== '') {
        textChange(enteredText)
        setTitle('');
        setArticle('');
      } 
    };


    const TitleArticle = () => {
      return(
        <View>
        <View>
           <View style={styles.buttonContainer}> 
            <TouchableOpacity  style={styles.button} onPress= { addTitle}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
           </View>
        </View>
        </View>
      )
    }

    

    //const Body = () => {
     // return (
       // <View>

        //</View>
      //)
    //},l 

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.titleInput}>
            <Text style={styles.title}>Title:</Text><TextInput style={styles.input} value={title} onChangeText={(userTitle)=>setTitle(userTitle)} placeholder='Write article title'/>
          </View>
            <Text style={styles.body}>Body:</Text>
           <View  style={styles.bodyContainer}>
           <TextInput
            style={styles.bodyInput}
            value={article} 
            placeholder=''
            onChangeText={(userArticle) => setArticle(userArticle)}
            multiline={true} />
           </View>
          <FlatList bounces={false} alwaysBounceVertical={false}
            data={enteredTexts}
            ListHeaderComponent = {
              <TitleArticle/>
            }
            renderItem = {(itemData) => {
              return (
                <TouchableOpacity style={styles.titleDisplay} >
                  <Text numberOfLines={1} style={styles.titleText}>{itemData.item}</Text>
                </TouchableOpacity>
              );
            }}
          />
      </View>
    </SafeAreaView>
  )
}

export default Home