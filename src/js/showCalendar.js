const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const time = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

let table = document.querySelectorAll('#table td');
let clickedCell;
let chooseButton;

chooseButton = document.getElementById('chooseButton');
let selectedParticipant = chooseButton.options[chooseButton.selectedIndex].text;

chooseButton.addEventListener('change', function() {
    let selectedParticipant = chooseButton.options[chooseButton.selectedIndex].text;

    calendarShow(selectedParticipant);
  }, false);

function calendarShow(participants) {
    let meetings = [];
    let cells = document.querySelectorAll('td');

    for (let i = 0; i < cells.length; i++){
        cells[i].textContent = '';
        cells[i].classList = '';
    }

    for (let i = 0; i < localStorage.length; i++){
        let m;
        let record;
        
        m = localStorage.getItem(localStorage.key(i));
        record = JSON.parse(m);

        if (participants === 'All members') {
            meetings.push(JSON.parse(m));
        } else {
            for (let j = 0; j < record.participant.length; j++) {
                if(record.participant[j] === participants || record.participant[j] === 'All members') {
                    meetings.push(JSON.parse(m));
                    break;
                }
            }
        }
    }

    for (let i = 0; i < meetings.length; i++){
        let col;
        let row;
        let deleteButton = document.createElement('a');
        let cellText = document.createElement('span');
        let icon = document.createElement('span');
        let wrap = document.createElement('div');
    
        for (let j = 0; j < days.length; j++) {
            if (meetings[i].day === days[j]) {
                col = j+1;
            }
        }
    
        for (let k = 0; k < time.length; k++) {
            if (meetings[i].time === time[k]) {
                row = k+1;
            }
        }
        
        deleteButton.setAttribute('id', meetings[i].day + meetings[i].time);
        deleteButton.addEventListener('click', openModal);
        cellText.innerText = meetings[i].name;
        deleteButton.setAttribute('href','#');
        deleteButton.classList += 'del-button float-right';
        icon.classList += 'material-icons';
        deleteButton.setAttribute('data-toggle','modal');
        deleteButton.setAttribute('data-target','#deleteModal');
        icon.innerText = 'clear';
        table[col- 1 + (row-1)*5].classList += 'selectedCell';
        table[col- 1 + (row-1)*5].appendChild(wrap);
        wrap.appendChild(cellText);
        deleteButton.appendChild(icon);
        wrap.appendChild(deleteButton);
    }
}

function openModal(event) {
    let title;
    let modalDiv;
    let deleteModalButton;

    clickedCell = event.target.parentElement.parentElement;
    title = clickedCell.firstChild.innerText;
    modalDiv = document.getElementById('modal-message');
    modalDiv.innerText = 'Are you sure you want to delete ' + '"'+ title + '"' + ' event?';
    deleteModalButton = document.getElementById('deleteModalButton');
    deleteModalButton.addEventListener('click', deleteEvent);
  }

function deleteEvent() {
    let childA = clickedCell.getElementsByTagName('a')[0];

    clickedCell.textContent = '';
    clickedCell.parentElement.classList = '';
    localStorage.removeItem(childA.id);
}

calendarShow(selectedParticipant);
