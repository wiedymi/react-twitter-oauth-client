const handleCheckLocalStorage = key => {
    if(typeof localStorage.getItem(key) === 'string'){
      return true
    }
    else{
      return false
    }
  }

const handleGetData = key =>  JSON.parse(localStorage.getItem(key));

export { handleCheckLocalStorage, handleGetData }

