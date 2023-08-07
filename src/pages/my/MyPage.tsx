import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

type Medication = {
  idx: number;
  name: string;
  time: string;
};

type MedicationByTimezone = {
  [key: string]: Medication[];
};

export default function MyPage({navigation}: {navigation: any}) {
  const userInfromation = {
    name: '홍가윤',
    age: '56',
    height: '165',
    weight: '60',
    intro: '파주사는 10살 딸 엄마에요~^^',
  };
  const eatMedicinInformation = [
    {
      idx: 1,
      name: '타이레놀',
      time: '10:00',
    },
    {
      idx: 2,
      name: '비타민 C',
      time: '13:00',
    },
    {
      idx: 3,
      name: '아르기닌',
      time: '19:00',
    },
    {
      idx: 4,
      name: '비타민 D',
      time: '20:00',
    },
  ];
  function setTiming(hour: number): string {
    if (hour >= 4 && hour < 12) {
      return '아침';
    } else if (hour >= 12 && hour < 18) {
      return '점심';
    } else {
      return '저녁';
    }
  }
  function groupMedicationByTimezone(
    medications: Medication[],
  ): MedicationByTimezone {
    const medicationByTimezone: MedicationByTimezone = {};

    medications.forEach(medication => {
      const timeParts = medication.time.split(':');
      const hour = parseInt(timeParts[0], 10);
      const timezone = setTiming(hour);

      if (!medicationByTimezone[timezone]) {
        medicationByTimezone[timezone] = [];
      }

      medicationByTimezone[timezone].push(medication);
    });

    return medicationByTimezone;
  }
  const medicationByTimezone: MedicationByTimezone = groupMedicationByTimezone(
    eatMedicinInformation,
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.settingIcon}></View>
          <Text style={styles.pageTitle}>마이페이지</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SettingPage')}>
            <Image
              style={styles.settingIcon}
              source={require('../../assets/MyPageIcon/setting.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profileView}>
          <Image
            source={require('../../assets/icons/settingProfile.png')}
            style={styles.bigProfile}
          />
          <Text style={styles.userInfoNameText}>{userInfromation.name}</Text>
          <Text style={styles.userInfoText}>
            {userInfromation.age}세 / {userInfromation.height}cm /{' '}
            {userInfromation.weight}kg
          </Text>
          <Text style={styles.userInfoIntroText}>{userInfromation.intro}</Text>
        </View>

        <View style={styles.eatMedicineContainer}>
          <View style={styles.mediHeader}>
            <Text style={styles.eatMediTitle}>복용 중인 약</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddMediPage')}>
              <Text style={styles.eatMediTitle}>+</Text>
            </TouchableOpacity>
          </View>
          {eatMedicinInformation.map((item, index) => {
            return (
              <MediListContent
                name={item.name}
                navigation={navigation}
                key={index}
              />
            );
          })}
        </View>

        <View style={styles.timeMediContainer}>
          {Object.keys(medicationByTimezone).map((timezone, index) => (
            <MediTimeContent
              key={index}
              timezone={timezone}
              medications={medicationByTimezone[timezone]}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

function MediListContent({name, navigation}: {name: string; navigation: any}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ModifyMediPage')}
      style={styles.mediListContainer}>
      <Image
        source={require('../../assets/MyPageIcon/pill.png')}
        style={styles.mediListIcon}
      />
      <Text style={styles.mediListName}>{name}</Text>
    </TouchableOpacity>
  );
}

function MediTimeContent({timezone, medications} : {timezone: string; medications: Medication[]}) {
  return (
    <View style={styles.mediTimeContainer}>
      <Text style={styles.mediTimeTitle}>{timezone} 복용 약</Text>
      {medications.map((medication, index) => (
        <Text key={index} style={styles.mediTimeName}>
          {medication.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },

  headerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent: 'center',
    margin: 20,
    marginBottom: 0,
  },
  pageTitle: {
    fontSize: 36,
    fontFamily: 'SCDream6',
    color: '#000000',
  },
  settingIcon: {
    width: 30,
    height: 30,
  },

  profileView: {
    alignItems: 'center',
    padding: 36,
  },
  bigProfile: {
    borderRadius: 100,
  },
  userInfoText: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#848484',
    marginTop: 14,
  },
  userInfoNameText: {
    fontSize: 28,
    fontFamily: 'SCDream5',
    color: '#000000',
    marginTop: 20,
  },
  userInfoIntroText: {
    fontSize: 20,
    fontFamily: 'SCDream4',
    color: '#000000',
    marginTop: 20,
  },

  eatMedicineContainer: {
    // marginTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 25,
  },
  mediHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eatMediTitle: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  mediListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  mediListIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  mediListName: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  timeMediContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  mediTimeContainer: {
    padding: 15,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#BDBDBD',
    borderWidth: 1,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  mediTimeTitle: {
    fontSize: 14,
    fontFamily: 'SCDream6',
    color: '#000000',
  },
  mediTimeName: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'SCDream4',
    color: '#000000',
  }
});
