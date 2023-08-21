import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import axios from 'axios';
import he from 'he';

export default function NaverArticle() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
        headers: {
          'X-Naver-Client-Id': 'ga4QAqJOvh7OGql61SoJ',
          'X-Naver-Client-Secret': 'FxvWFbHOdO',
        },
        params: {
          query: searchKeyword,
          display: 30,
          start: 1,
        },
      });

      const newsData = response.data.items;
      setArticles(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchBox}
          placeholder="키워드를 입력해주세요."
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)} />
        <TouchableOpacity style={styles.magnifierIcon} onPress={fetchNews}>
          <Image source={require('../../assets/icons/magnifier.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
            <View style={styles.articleView}>
              <Text style={styles.articleTitle}>{he.decode(item.title)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
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
    marginLeft: 8,
  },
  articleView: {
    borderColor: '#C3C3C3',
    borderWidth: 1,
    padding: 5,
  },
  articleTitle: {
    fontFamily: 'SCDream4',
    color: 'black',
  },
})