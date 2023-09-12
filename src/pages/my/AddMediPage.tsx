import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CONTAINER_STYLE = {
  borderRadius: 20,
  width: '100%',
  paddingTop: 30,
  paddingBottom: 30,
  backgroundColor: '#FFFFFF',
  shadowColor: '#000',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 0.85,
  shadowRadius: 3.84,
  elevation: 7,
};

export default function AddMediPage({navigation}: {navigation: any}) {
  const [everyDay, setEveryDay] = useState(false);
  const [sunDayEat, setSunDayEat] = useState(false);
  const [monDayEat, setMonDayEat] = useState(false);
  const [tueDayEat, setTueDayEat] = useState(false);
  const [wedDayEat, setWedDayEat] = useState(false);
  const [thuDayEat, setThuDayEat] = useState(false);
  const [friDayEat, setFriDayEat] = useState(false);
  const [satDayEat, setSatDayEat] = useState(false);
  const [eatMediName, setEatMediName] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const toggleSwitch = () => {
    setEveryDay(everyDay => !everyDay);
    everyDayEat();
  };

  function everyDayEat() {
    if (!everyDay) {
      setSunDayEat(true);
      setMonDayEat(true);
      setTueDayEat(true);
      setWedDayEat(true);
      setThuDayEat(true);
      setFriDayEat(true);
      setSatDayEat(true);
    } else {
      setSunDayEat(false);
      setMonDayEat(false);
      setTueDayEat(false);
      setWedDayEat(false);
      setThuDayEat(false);
      setFriDayEat(false);
      setSatDayEat(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.addMedicineContainer}>
        <View style={[styles.mediTimeContainer, CONTAINER_STYLE]}>
          <View style={styles.mediTitleContianer}>
            <Image
              style={styles.mediTitleIcon}
              source={require('../../assets/MyPageIcon/clock.png')}
            />
            <Text style={styles.mediTitleText}>몇 시에 드시는 약인가요?</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.timeSelectContainer}
              onPress={showDatePicker}>
              <Text style={styles.timeSelectBtn}>시간 선택</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>

        <View style={[styles.mediDayContainer, CONTAINER_STYLE]}>
          <View style={styles.mediTitleContianer}>
            <Image
              style={styles.mediTitleIcon}
              source={require('../../assets/MyPageIcon/sevenDay.png')}
            />
            <Text style={styles.mediTitleText}>요일을 선택해주세요</Text>
          </View>

          <View style={styles.mediEveryDayContainer}>
            <Text style={styles.mediTimeTime}>매일</Text>
            <Switch
              trackColor={{false: '#767577', true: '#cecece'}}
              thumbColor={everyDay ? '#FEB2B4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={everyDay}
            />
          </View>

          <View style={styles.mediDayBtnContainer}>
            <TouchableOpacity
              onPress={() => setSunDayEat(!sunDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: sunDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>일</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMonDayEat(!monDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: monDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>월</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTueDayEat(!tueDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: tueDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>화</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setWedDayEat(!wedDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: wedDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>수</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setThuDayEat(!thuDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: thuDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>목</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFriDayEat(!friDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: friDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>금</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSatDayEat(!satDayEat)}
              style={[
                styles.mediDayBtn,
                {backgroundColor: satDayEat ? '#FEB2B4' : '#ECECEC'},
              ]}>
              <Text style={styles.mediDayBtnText}>토</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.mediNameContainer, CONTAINER_STYLE]}>
          <View style={styles.mediTitleContianer}>
            <Image
              style={styles.mediTitleIcon}
              source={require('../../assets/MyPageIcon/medicine.png')}
            />
            <Text style={styles.mediTitleText}>어떤 약을 드시나요?</Text>
          </View>

          <TouchableOpacity
            style={styles.mediNameBtn}
            onPress={() => navigation.navigate('JoinMediNamePage')}>
            <TextInput
              style={styles.mediNameInput}
              onChangeText={setEatMediName}
              value={eatMediName}
              placeholder="약 이름을 입력해주세요"
              placeholderTextColor="#C4C4C4"
            />
            <Text style={styles.mediAddBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.saveBtnContainer}>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => navigation.navigate('MyPage')}>
            <Text style={styles.saveBtnText}>추가하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },

  titleContainer: {
    marginTop: 40,
    marginLeft: 30,
  },
  titleText: {
    fontSize: 33,
    fontFamily: 'SCDream7',
    color: '#000000',
    marginBottom: 20,
  },
  congHighText: {
    fontSize: 22,
    fontFamily: 'SCDream5',
    color: '#000000',
    marginBottom: 5,
  },

  timeSelectContainer: {
    marginTop: 5,
    marginBottom: -10,
  },
  timeSelectBtn: {
    fontSize: 15,
    fontFamily: 'SCDream5',
    color: '#000000',
    backgroundColor: '#FEB2B4',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },

  btnsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  btnContainer: {
    borderRadius: 10,
    backgroundColor: '#FFE7E8',
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    padding: 12,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  addMedicineContainer: {
    margin: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40,
  },
  mediTitleContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  mediTitleIcon: {
    width: 30,
    height: 30,
  },
  mediTitleText: {
    fontSize: 25,
    fontFamily: 'SCDream5',
    color: '#000000',
    marginLeft: 10,
  },

  mediTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediTimeTime: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  mediDayContainer: {
    marginTop: 40,
  },
  mediEveryDayContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  mediDayBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediDayBtn: {
    width: 37,
    height: 37,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  mediDayBtnText: {
    fontSize: 14,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  mediNameContainer: {
    marginTop: 40,
    alignItems: 'center',
    padding: 30,
  },
  mediNameBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#ECECEC',
    borderWidth: 1,
  },
  mediNameInput: {
    width: '90%',
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#000000',
    paddingLeft: 20,
  },
  mediAddBtnText: {
    fontSize: 30,
    fontFamily: 'SCDream5',
    color: '#000000',
    paddingRight: 20,
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#989898',
  },

  saveBtnContainer: {
    marginTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    padding: 10,
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtnText: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000',
    textAlign: 'center',
  },
});
