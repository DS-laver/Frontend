import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';


export default function AddEatMedicine({navigation}: {navigation: any}) {
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  var todyaDate =
    today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

  const imagePickerOptions = {
    mediaType: 'photo',
    maxHeight: 512,
    maxWidth: 512,
    includeBase64: Platform.OS === 'android',
  };

  const [gallery, setGallery] = useState(null);
  const [camera, setCamera] = useState(null);

  const onPickGallery= (res) => {
    if (res.didCancel || !res.assets) {
      return;
    }
    setGallery(res);
  };

  const onPickCamera = (res) => {
    if (res.didCancel || !res.assets) {
      return;
    }
    setCamera(res);
  };

  const onLaunchCamera = async () => {
    if (Platform.OS === 'android') {
      const permissionStatus = await request(PERMISSIONS.ANDROID.CAMERA);
      if (permissionStatus !== 'granted') {
        console.log('Camera permission denied');
        return;
      }
    }
    launchCamera(imagePickerOptions, onPickCamera);
  };

  const onSelectImage = () => {
    launchImageLibrary(imagePickerOptions, onPickGallery);
  };

    
  const [medicineList, changeMedicineList] = useState([
    {
      idx: '1',
      name: '타이레놀',
    },
    {
      idx: '2',
      name: '비타민A',
    },
    {
      idx: '3',
      name: '비타민B',
    },
    {
      idx: '3',
      name: '비타민C',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.todayDateContainer}>
        <Text style={styles.todayDate}>
          {todayYear}.{todayMonth}.{todyaDate}
        </Text>
      </View>

      <View style={styles.medicineAddContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>약 이름</Text>
        </View>
        <FlatList
          keyExtractor={item => item.idx}
          data={medicineList}
          renderItem={({item}) => <CheckEatMedicine medicineName={item.name} />}
          numColumns={2}
        />
      </View>

      <View style={styles.medicineAddContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>약 사진 첨부</Text>
        </View>
        <View style={styles.addImageContainer}>
          <TouchableOpacity
            onPress={onLaunchCamera}
            style={styles.addImageIcon}>
            <Image
              style={styles.addImageImage}
              source={
                camera && camera.assets[0]
                  ? {uri: camera?.assets[0]?.uri}
                  : require('../../assets/HealthCareIcon/PhotoIcon.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSelectImage} style={styles.addImageIcon}>
            <Image
              style={styles.addImageImage}
              source={
                gallery && gallery.assets[0]
                  ? {uri: gallery?.assets[0]?.uri}
                  : require('../../assets/HealthCareIcon/GalleryIcon.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.submitButtonContaner}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigation.navigate('HealthCarePage');
          }}>
          <Text style={styles.submitButtonText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigation.navigate('HealthCarePage');
          }}>
          <Text style={styles.submitButtonText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CheckEatMedicine({medicineName}: {medicineName: string}) {
  const [medicineAllEat, setMedicineAllEat] = useState(false);

  return (
    <View style={styles.checkMedicineContainer}>
      <TouchableOpacity
        onPress={() => {
          setMedicineAllEat(!medicineAllEat);
        }}>
        {medicineAllEat ? (
          <Image
            style={styles.checkBoxImage}
            source={require('../../assets/HealthCareIcon/CheckBoxIcon.png')}
          />
        ) : (
          <Image
            style={styles.checkBoxImage}
            source={require('../../assets/HealthCareIcon/UncheckBoxIcon.png')}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.checkMedicineText}>{medicineName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: '#FFF3F1',
  },

  todayDateContainer: {
    marginTop: 55,
    marginBottom: 35,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  todayDate: {
    fontSize: 38,
    fontFamily: 'SCDream6',
    color: '#000000',
  },

  titleContainer: {
    margin: 15,
    marginBottom: 25,
    padding: 8,
    width: 250,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEC0C1',
    borderRadius: 20,
  },
  titleText: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontFamily: 'SCDream6',
    color: '#000000',
    textAlign: 'center',
  },

  medicineAddContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },

  checkMedicineContainer: {
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxImage: {
    width: 35,
    height: 35,
  },
  checkMedicineText: {
    marginLeft: 10,
    fontSize: 22,
    fontFamily: 'SCDream5',
    color: '#000000',
    textAlign: 'center',
  },

  addImageContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  addImageIcon: {
    flexDirection: 'row',
    margin: 15,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD9D9',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.85,
    shadowRadius: 3.84,
    elevation: 7,
  },
  addImageImage: {
    width: 80,
    height: 80,
  },

  submitButtonContaner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
    marginTop: -10,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
    width: 80,
    fontFamily: 'SCDream6',
    color: '#000000',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 8,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
});
