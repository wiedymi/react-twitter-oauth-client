const getCurrentTime = () => new Date().getTime();

const getHours = (num = 0) =>  num * 60 * 60 * 1000;

export { getCurrentTime, getHours }