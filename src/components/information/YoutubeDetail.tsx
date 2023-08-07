import { View, Text } from 'react-native'
import React from 'react'
import YouTube from 'react-native-youtube'

export default function YoutubeDetail({route}) {
  const { videoId, title } = route.params;

  return (
    <View>
      <Text>{title}</Text>
      <YouTube
        videoId={videoId} // 유튜브 비디오 ID
        play // 자동 재생
        style={{ alignSelf: 'stretch', height: 300 }}
      />
    </View>
  )
}