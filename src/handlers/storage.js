const handleCheckLocalStorage = key => {
    if(localStorage.getItem(key) || localStorage.getItem(key) !== null){
      return true
    }
    else{
      return false
    }
  }

const handleGetData = key =>  JSON.parse(localStorage.getItem(key));

const getCurrentTime = () => new Date().getTime();

export { handleCheckLocalStorage, handleGetData, getCurrentTime }

