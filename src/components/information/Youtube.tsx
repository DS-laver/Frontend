import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import he from 'he';

export default function Youtube({navigation}: {navigation: any}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);

  const API_KEY = 'AIzaSyCAodGjjT3j6tWkYi67fCMORArqhwMHd4g'; // API 키를 넣어주세요.

  const handleSearch = () => {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        type: 'video',
        maxResults: 30,
        key: API_KEY,
      }
    })
    .then((response) => {
      setVideos(response.data.items);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <View>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchBox}
          placeholder="키워드를 입력해주세요."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)} />
        <TouchableOpacity style={styles.magnifierIcon} onPress={handleSearch}>
          <Image source={require('../../assets/icons/magnifier.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('YoutubeDetail', { videoId: item.id.videoId, title: item.snippet.title })}
            style={styles.videoView}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: item.snippet.thumbnails.default.url }}
                style={{ width: 120, height: 90, margin: 10 }}/>
              <Text style={styles.videoTitle}>{he.decode(item.snippet.title)}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.videoId}
        contentContainerStyle={{ paddingBottom: 40 }}
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
  videoView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#C3C3C3',
    borderWidth: 1,
  },
  videoTitle: {
    flex: 1,
    fontFamily: 'SCDream4',
    color: 'black',
  },
})