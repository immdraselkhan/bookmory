// Local storage management
let readingTrack = {}
const getStoredData = () => {
  const storedData = localStorage.getItem('bookmory');
  if(storedData) {
    readingTrack = JSON.parse(storedData);
  }
  return readingTrack;
}

const handleLocalStorage = (id, time) => {
  getStoredData();
  const propertyValue = readingTrack[id];
  if (propertyValue) {
    if (id == 'break-time') {
      readingTrack[id] = time;
    }
    else {
      readingTrack[id] = +propertyValue + time;
    }
  }
  else {
    readingTrack[id] = time;
  }

  localStorage.setItem('bookmory', JSON.stringify(readingTrack));
}

export {handleLocalStorage, getStoredData};