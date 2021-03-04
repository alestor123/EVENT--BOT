ray = require('x-ray')();

async function getEvents() {
var eventss = [];
var data = await ray('https://mlh.io/events', '.event', [{title: '.event-link@title',date:'.event-date',url: '.event-link@href',date : 'meta@content' , img:'img@src'}]).then(res => res) 
data.forEach(events => {
events['isMlh']=events.url.includes('https://organize.mlh.io/participants/events/')
eventss.push(events)
})
return eventss
}
function getWeekend() {
    var date = new Date(), 
    lastday = date.getDate() - (date.getDay() - 1) + 6;
    snd = date.getDate() - (date.getDay() - 0) + 6,
    tt = date.getDate() - (date.getDay() + 1) + 6;
    
    return [new Date(date.setDate(lastday)).toISOString().split('T')[0],new Date(date.setDate(snd)).toISOString().split('T')[0],new Date(date.setDate(tt)).toISOString().split('T')[0]]
}
module.exports = {getEvents , getWeekend}