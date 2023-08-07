import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, TouchableHighlight } from 'react-native'
import Youtube from '../../components/information/Youtube'

export default function InformationPage({navigation}: {navigation: any}) {
  const [keyword, setKeyword] = useState('')
  const [nutritionBtn, setNutritionBtn] = useState('#FEC0C1')
  const [foodBtn, setFoodBtn] = useState('#FEC0C1')
  const [exerciseBtn, setExerciseBtn] = useState('#FEC0C1')
  const [videoBtn, setVideoBtn] = useState('#FEC0C1')
  const [articleBtn, setArticleBtn] = useState('#FEC0C1')

  const nutritionBtnPress = () => {
    setNutritionBtn('#FF686E')
    setFoodBtn('#FEC0C1')
    setExerciseBtn('#FEC0C1')
    setKeyword('영양제')
  }

  const foodBtnPress = () => {
    setNutritionBtn('#FEC0C1')
    setFoodBtn('#FF686E')
    setExerciseBtn('#FEC0C1')
    setKeyword('음식')
  }

  const exerciseBtnPress = () => {
    setNutritionBtn('#FEC0C1')
    setFoodBtn('#FEC0C1')
    setExerciseBtn('#FF686E')
    setKeyword('운동')
  }

  const videoBtnPress = () => {
    setVideoBtn('#FF686E')
    setArticleBtn('#FEC0C1')
  }

  const articleBtnPress = () => {
    setVideoBtn('#FEC0C1')
    setArticleBtn('#FF686E')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>정보 알리미</Text>
        {/* <View style={styles.listView}>
          <TouchableOpacity
            style={[styles.listBtn, {backgroundColor: nutritionBtn}]}
            onPress={nutritionBtnPress}>
            <Text style={styles.listText}>영양제</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.listBtn, {backgroundColor: foodBtn}]} onPress={foodBtnPress}>
            <Text style={styles.listText}>음식</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.listBtn, {backgroundColor: exerciseBtn}]} onPress={exerciseBtnPress}>
            <Text style={styles.listText}>운동</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.recommendView}>
          <TouchableOpacity style={[styles.recommendBtn, {backgroundColor: videoBtn}]} onPress={videoBtnPress}><Text style={styles.recommend}>추천 영상</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.recommendBtn, {backgroundColor: articleBtn}]} onPress={articleBtnPress}><Text style={styles.recommend}>기사 및 칼럼</Text></TouchableOpacity>
        </View>
        {/* <View style={styles.searchView}> */}
          {/* <TextInput
            style={styles.searchBox}
            placeholder="키워드를 입력해주세요."
          />
          <TouchableOpacity style={styles.magnifierIcon}>
            <Image source={require('../../assets/icons/magnifier.png')} />
          </TouchableOpacity> */}
        {/* </View> */}
      </View>
      <View><Youtube navigation={navigation} /></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },
  topView: {
    borderColor: '#C3C3C3',
    borderWidth: 1,
  },
  title: {
    fontFamily: 'SCDream6',
    fontSize: 36,
    color: 'black',
    alignSelf: 'center',
    marginTop: 28,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 5,
  },
  listBtn: {
    backgroundColor: '#FEC0C1',
    padding: 10,
    borderRadius: 30,
    width: 120,
  },
  listText: {
    fontFamily: 'SCDream5',
    fontSize: 28,
    color: 'black',
    alignSelf: 'center',
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBox: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderColor: '#C3C3C3',
    borderWidth: 1.5,
    width: '85%',
    height: '80%',
    padding: 10,
    fontFamily: 'SCDream4',
    alignSelf: 'center',
  },
  magnifierIcon: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  recommendView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  recommendBtn: {
    backgroundColor: '#FEC0C1',
    padding: 5,
    borderRadius: 5,
    width: 130,
    margin: 15,
  },
  recommend: {
    fontFamily: 'SCDream5',
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
  },
})