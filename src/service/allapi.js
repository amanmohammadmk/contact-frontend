import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";


// addcontact



export const addContact = async (body) => {
  return await commonRequest("POST", `${BASE_URL}/contacts`, body)
}

// getcontact 

export const getContact = async () => {
  return await commonRequest("GET", `${BASE_URL}/contacts`, "")
}


// delete contact

export const deleteContact = async (id) => {
  return await commonRequest("DELETE", `${BASE_URL}/contacts/${id}`, {})
}

export const contactEdit = async (id,body) => {
  return await commonRequest("PUT", `${BASE_URL}/contacts/${id}`, body)
}

// set single card details


export const singleCard=async(id)=>{
  return await commonRequest("GET",`${BASE_URL}/contacts/${id}`,"")
}
