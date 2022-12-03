import { ERROR_API_CALL } from "../components/utils/constants.js";
import { API_END_POINT, USERNAME } from "./api_constant.js";

export const request = async (url, options = {}) => {
  try {
    let finalUrl = "";

    const splitedUrl = url.split("/");
    // /documents/id일 때
    if (splitedUrl.length === 3) {
      finalUrl = `?documentId=${splitedUrl[2]}`;
    }

    //1) /api
    //2) /api?documentId=3
    const res = await fetch(`/api${finalUrl}`);

    if (res.ok) {
      return await res.json();
    }

    // throw new Error(ERROR_API_CALL);
  } catch (e) {
    // alert(e.message);
  }
};
