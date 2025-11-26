import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//POST /api/links Create link (409 if code exists)
export const createUrlAPI = async(reqBody)=>{
 return await commonAPI("POST",`${SERVERURL}/api/links`,reqBody)
}
//GET /api/links List all links
export const getAllLinksAPI = async()=>{
 return await commonAPI("GET",`${SERVERURL}/api/links`,"")
}

//GET /api/links/:code Stats for one code
export const viewSingleLinksAPI = async(code)=>{
 return await commonAPI("GET",`${SERVERURL}/api/links/${code}`)
}

//DELETE /api/links/:code Delete link
export const deleteUrlAPI = async (code) => {
  return await commonAPI("DELETE", `${SERVERURL}/api/links/${code}`);
};




