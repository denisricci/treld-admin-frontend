import { browserHistory } from 'react-router';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
} from '../../constants/actions/auth';
import { DEFAULT_SERVER } from '../../constants/backend';
import { objectToFormData } from '../../utils/format';

export const usernameChanged = text => ({
  type: USERNAME_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = (userInfo) => (dispatch) => {
  dispatch({type: LOGIN_USER});
  const body = objectToFormData(userInfo);
  fetch(`${DEFAULT_SERVER}/login`,{method: 'post', body, mode: 'cors'})
    .then((response) => {
      if (response.status === 200) {
        if (!localStorage.getItem('profile')) {
          localStorage.setItem('profile', JSON.stringify(userInfo));
        }
        dispatch({ type: LOGIN_USER_SUCCESS, payload: userInfo});
        browserHistory.push('/');
      }
      return dispatch({ type: LOGIN_USER_ERROR, payload: response.statusText});
    })
    .catch(() => {
      return dispatch({ type: LOGIN_USER_ERROR, payload: 'Usuário e/ou senha incorretos.'});
    });
};
