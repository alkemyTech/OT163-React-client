/* eslint-disable no-const-assign */
import { Get, Post } from './publicApiService';
import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';
import { alertService } from './alertService';

const urlContact = process.env.REACT_APP_API_CONTACTS;

const TYPE = 'Error';
const MESSAGE_GET = 'Lo sentimos, hubo un error al obtener el/los contactos.';
const MESSAGE_PUT = 'Lo sentimos, hubo un error al editar el contacto.';
const MESSAGE_PATCH = 'Lo sentimos, hubo un error al editar el contacto.';
const MESSAGE_POST = 'Lo sentimos, hubo un error al agregar un nuevo contacto.';
const MESSAGE_DELETE = 'Lo sentimos, hubo un error al eliminar el contacto.';

export const getContacts = async (id = null) => {
  try {
    return await GET_PRIVATE_API(urlContact, id);
  } catch (error) {
    alertService(TYPE, MESSAGE_GET);
  }
};

export const putContacts = async (id, data) => {
  try {
    return await PUT_PRIVATE_API(urlContact, id, data);
  } catch (error) {
    alertService(TYPE, MESSAGE_PUT);
  }
};

export const patchContacts = async (id, data) => {
  try {
    return await PATCH_PRIVATE_API(urlContact, id, data);
  } catch (error) {
    alertService(TYPE, MESSAGE_PATCH);
  }
};

export const postContacts = async (data) => {
  try {
    return await POST_PRIVATE_API(urlContact, data);
  } catch (error) {
    alertService(TYPE, MESSAGE_POST);
  }
};

export const deleteContacts = async (id) => {
  try {
    return await DELETE_PRIVATE_API(urlContact, id);
  } catch (error) {
    alertService(TYPE, MESSAGE_DELETE);
  }
};

// Front
export const SEND_EMAIL = async (DATA) => {
  const response = await Post(
    process.env.REACT_APP_API_CONTACTS,
    // eslint-disable-next-line comma-dangle
    DATA
  );
  return response;
};

// mirar de donde saco el email
export const ORGANIZATION_CONTACT_DATA = async () => {
  const response = await Get(process.env.REACT_APP_API_ORGANIZATION);
  // console.log(JSON.stringify(response.data));
  let contactData = {};
  if (response) {
    contactData = {
      address: response.data.address,
      phone: response.data.phone,
      cellphone: response.data.cellphone,
      facebook_url: response.data.facebook_url,
      linkedin_url: response.data.linkedin_url,
      instagram_url: response.data.instagram_url,
      twitter_url: response.data.twitter_url,
      email: 'somosfundacionmas@gmail.com',
    };
  }
  // console.log(JSON.stringify(contactData));
  return contactData;
};
