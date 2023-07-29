/**
 * sendData to ls
 */

const sendDataLs = (key,data) =>{
    localStorage.setItem(key, JSON.stringify(data))
}
/**
 * getData for ls
 */

const getDataLs = (key) =>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }else{
        return [];
    }
}
// alert 
const createAlert = (msg,type="danger") =>{
    return  `<p class="alert alert-${type} d-flex justify-content-between"> ${msg}
    <button class="btn-close" data-bs-dismiss="alert"></button>
  </p>`
}
const timeAgo = (timestamp) =>{

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year= 365 * day;
    const timeElepsed = Date.now() - timestamp;
    
    if(timeElepsed < minute){
        return `${Math.floor(timeElepsed/second)} seconds ago`;
    }else if(timeElepsed < hour){
        return `${Math.floor(timeElepsed/minute)} minutes ago`;
    }else if(timeElepsed < day){
        return `${Math.floor(timeElepsed/hour)} hours ago`;
    }else if(timeElepsed < week){
        return `${Math.floor(timeElepsed/day)} day ago`;
    }else if(timeElepsed < month){
        return `${Math.floor(timeElepsed/week)} weeks ago`;
    }else if(timeElepsed < year){
        return `${Math.floor(timeElepsed/month)} month ago`;
    }else {
        return `${Math.floor(timeElepsed/year)} years ago`;
    }
}
