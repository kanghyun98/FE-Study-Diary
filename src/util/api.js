// fetch()를 이용해 json data 가져오기
async function loadData() {
  try {
    const url = './src/data/Data.json';
    const json = await fetch(url).then((response) => response.json());
    return json.data;
  } catch (error) {
    throw {
      message: error.message,
      status: error.message,
    };
  }
}

const studyData = await loadData();

async function loadModalData() {
  try {
    const url = './src/data/ModalData.json';
    const json = await fetch(url).then((response) => response.json());
    return json.data;
  } catch (error) {
    throw {
      message: error.message,
      status: error.message,
    };
  }
}

const modalData = await loadModalData();

export { studyData, modalData };
