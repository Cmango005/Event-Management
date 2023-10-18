const getStoredEvent =()=>{
    const storedEvent = localStorage.getItem('event-store');
    if(storedEvent){
        return JSON.parse(storedEvent);
    }
    return [];
}
const saveEvent =id =>{
 const storedEvents= getStoredEvent();
 const exists = storedEvents.find(eventId=> eventId===id);
 if(!exists){ 
    storedEvents.push(id);
    localStorage.setItem('event-store', JSON.stringify(storedEvents));
 }
}
export {getStoredEvent,saveEvent}