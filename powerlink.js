//   const example = await createQueryPayload({
//     fields: "pcfsystemfield246,name,pcfsystemfield364,customobject1009id",
//     objectType: 1009,
//     sortDirection: "desc",
//     pageSize:150, -- default is 50
//     query:"(pcfsystemfield246 = 2)", //conditional data..
//     pageNum:2, --default is 1
//   });
const POWERLINK_RECORD_URL = "/api/record";
const createQueryPayload = async ({
  objectType,
  fields,
  query,
  pageNum = 1,
  pageSize = 500,
  sortDirection = "desc",
} = {}) => {
  try {
    if (!objectType || !fields) {
      throw new Error("Missing critical fields in reuqest");
    }
    const payload = {
      objecttype: objectType,
      sort_type: sortDirection,
      fields,
      query: query,
      page_size: pageSize,
      page_number: pageNum,
    };

    return new Promise((resolve, reject) => setTimeout(() => resolve(payload)));
  } catch (err) {
    throw new Error("Error in creating payload object.");
  }
};

/* send request to the api/query route which*/
//need to have a mathing payload that you can see documented above
const makeQueryRequest = async (payload) => {
  try {
    const data = JSON.stringify(payload);
    const headers = {
      "Content-Type": "application/json",
    };
    const request = await axios({
      method: "POST",
      url: "/api/query",
      data,
      headers,
    }).catch((err) => {
      //handle error
      console.log(err.message);
      return;
    });
    if (request) {
      if (request.data) {
        const currentData = request.data.data.Data;
        if (currentData.length > 0) {
          return currentData;
        }
      }
    }
    return [];
  } catch (err) {
    console.log(err);
    return null;
  }
};

//this function is to be used when the information will contain more then 500 records
//
const getAllRecords = async ({ page = 1, sData = [], payload } = {}) => {
  payload["page_number"] = page;
  let res = await makeQueryRequest(payload);
  if (res) {
    sData = sData.concat(res);
    if (res.length == 500) {
      page++;
      return await getAllRecords({
        page,
        sData,
        payload,
      });
    } else {
      return sData;
    }
  }
};

const updateSingleField = async ({ newValue, objecID, fieldName, objectNumber }) => {
  var objectToSubmit = {};
  objectToSubmit[fieldName] = newValue;

  var jsoned = JSON.stringify(objectToSubmit);

  console.log("objectToSubmit", jsoned); //1002

  const response = await axios.put("/api/record" + `/${objectNumber}/${objecID}`, jsoned, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response;
};

const createObject = async ({ payload, objectNumber }) => {
  var jsoned = JSON.stringify(payload);

  const response = await axios.post("/api/record" + `/${objectNumber}`, jsoned, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response;
};
const getRecord = async ({ objecID, objectNumber }) => {
  var jsoned = JSON.stringify(payload);

  const response = await axios.get("/api/record" + `/${objectNumber}/${objecID}`, jsoned, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response;
};

module.exports = {
  updateSingleField,
  createQueryPayload,
  getAllRecords,
  makeQueryRequest,
  createObject,
  createObject,
  getRecord,
};


