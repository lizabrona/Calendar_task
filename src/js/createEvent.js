let meeting;
let itemKey;

window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('createButton').addEventListener('click', function(e) {
    
        let d = document.getElementById('inputDay');
        let selectedDay = d.options[d.selectedIndex].text;
        let t = document.getElementById('inputTime');
        let selectedTime = t.options[t.selectedIndex].text;
        let p = document.getElementById('inputParticipants');
        let selectedParticipants = [];
        let n = document.getElementById('eventName');
        let meetingName = n.value;
        let a = document.getElementById('errorAlert');
        let s = document.querySelector('#errorAlert span');
        let b = document.querySelector('#errorAlert button');
    
        e.preventDefault();
    
        b.addEventListener('click', function() {
            window.location.reload();
        });
    
       if(selectedDay && selectedTime && meetingName && p.options.length>0) {
        
        itemKey = selectedDay + selectedTime;   
    
        if (localStorage.getItem(itemKey) === null) {
            
            for (let i = 0; i < p.options.length; i++) {
                if (p.options[i].selected) {
                    selectedParticipants.push(p.options[i].value);
                }
            }
        
            meeting = {'name': meetingName, 'day' : selectedDay,
             'time' : selectedTime, 'participant' : selectedParticipants};
            localStorage.setItem(itemKey, JSON.stringify(meeting));
            location.href = 'index.html';
        } else {
        
            s.innerText = 'Failed to create an event. Time slot is already booked.'
            a.style.visibility = 'visible';
        }
        } else {
    
            s.innerText = 'Failed to create an event. Please fill out all fields.'
            a.style.visibility = 'visible';
        }
    
    });
});
