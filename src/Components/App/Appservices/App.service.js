import Axios from "axios";

import API_URL from "./API_URL";
import authHeader from "./auth-header";

const getAll = (e) => {
  return Axios.get(`${API_URL}/${e}`, {
    /** Checks if users logged in, in case it is nessecery */
    headers: authHeader(),
  });
};

const get = (e, id) => {
  /** appservice.get("artist", 25) */
  return Axios.get(`${API_URL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const create = (e, data) => {
  return Axios.post(`${API_URL}/${e}`, data, {
    headers: authHeader(),
  });
};

const Login = async (username, password) => {
  return await Axios.post(`https://api.mediehuset.net/token`, { username, password });
};

const Logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

const Update = (e, id, data) => {
  return Axios.put(`${API_URL}/${e}/${id}`, data, {
    headers: authHeader(),
  });
};

const Remove = (e, id) => {
  /** remove ( "artist" , 23) */
  return Axios.delete(`${API_URL}/${e}/${id}`, {
    headers: authHeader(),
  });
};

const appService = {
  getAll,
  get,
  create,
  Update,
  Remove,
  Login,
  Logout,
};

export default appService;
