const $addEventButton = document.querySelector('.add-new-event');
const $newEventModal = document.querySelector('#new-event-modal');
const $tBody = document.querySelector('tbody');
$addEventButton.addEventListener('click', handleNewEvent);
const $trElementsArray = document.querySelectorAll('tr');

function handleNewEvent(event) {
  $newEventModal.setAttribute('class', '');

}

$newEventModal.addEventListener('click', handleModalButton);

function handleModalButton(event) {
  event.preventDefault();
  if (event.target.getAttribute('id') === 'cancel-button') {
    $eventForm.reset();
    $newEventModal.setAttribute('class', 'hidden');
  }
  if (event.target.getAttribute('id') === 'confirm-button') {
    const newEventData = {
      time: $eventTime.value,
      day: $eventDay.value,
      event: $eventNotes.value,
      entryId:data.entryId
    };
    data.entryId++;
    console.log('value of newEventData', newEventData);
    console.dir(newEventData.event);
    for (let i = 0; i < $trElementsArray.length; i++){
      const currentEvent = $trElementsArray[i].getAttribute('data-entry-id');
      if (Number(currentEvent) === newEventData.entryId){

      }
    }
    $tBody.appendChild(renderEntry(newEventData));
    $newEventModal.setAttribute('class', 'hidden');
  }
}

const data = {
  storedEvents: [],
  entryId: 1
};

const $eventTime = document.querySelector('#time-of-event');
const $eventDay = document.querySelector('#day-of-event');
const $eventNotes = document.querySelector('#event-information');
const $eventForm = document.querySelector('#new-event-form');

function renderEntry(newEventData) {
  const $trEntry = document.createElement('tr');
  const $tdTime = document.createElement('td');
  const $tdDay = document.createElement('td');
  const $tdInfo = document.createElement('td');

  $trEntry.appendChild($tdTime);
  $trEntry.appendChild($tdDay);
  $trEntry.appendChild($tdInfo);

  $tdTime.textContent = newEventData.time;
  $tdDay.textContent = newEventData.day;
  $tdInfo.textContent = newEventData.event;

  console.log('value of $trEntry', $trEntry);
  return $trEntry;
}
