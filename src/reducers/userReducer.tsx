// reducers/userReducer.ts

const UPDATE_NAME_BIRTH = 'UPDATE_NAME_BIRTH';
const UPDATE_NAME = 'UPDATE_NAME'; 
const UPDATE_ID_PASSWORD = 'UPDATE_ID_PASSWORD';
const UPDATE_MEDICATION_INFO = 'UPDATE_MEDICATION_INFO';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

const initialState = {
  userReducer: {
    name: '',
    birth: '',
    loginId: '',
    password: '',
    checkedPassword: '',
    role: 0,
    medicationAddRequestDtoList: [],
    nickname: '',
    sentence: '',
    fcmToken: '',
    alarm: true,
  }
};

export const selectName = (state: any) => state.name;

export const updateName = (name: string) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updateNameBirth = (name: string, birth: string) => ({
  type: UPDATE_NAME_BIRTH,
  payload: { name, birth },
});

export const updateIdPassword = (id: string, password: string) => ({
  type: UPDATE_ID_PASSWORD,
  payload: { id, password },
});

export const updateMedicationInfo = (medicationInfo: any) => ({
  type: UPDATE_MEDICATION_INFO,
  payload: medicationInfo,
});

export const updateProfile = (nickname: string, profileImage: any, sentence: string) => ({
  type: UPDATE_PROFILE,
  payload: { nickname, profileImage, sentence },
});

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_NAME: 
      return { ...state, name: action.payload };
    case UPDATE_NAME_BIRTH:
      return { ...state, name: action.payload, birth: action.payload.birth };
    case UPDATE_ID_PASSWORD:
      return { ...state, id: action.payload.id, password: action.payload.password };
    case UPDATE_MEDICATION_INFO:
      return { ...state, medicationAddRequestDtoList: action.payload };
    case UPDATE_PROFILE:
      return {
        ...state,
        nickname: action.payload.nickname,
        profileImage: action.payload.profileImage,
        sentence: action.payload.sentence,
      };
    default:
      return state;
  }
};

export default userReducer;