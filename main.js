const $addEventButton = document.querySelector('.add-new-event');
const $newEventModal = document.querySelector('#new-event-modal');
$addEventButton.addEventListener('click', handleNewEvent);

function handleNewEvent(event) {
  $newEventModal.setAttribute('class', '');

}

$newEventModal.addEventListener('click', handleModalButton);

function handleModalButton(event) {
  if (event.target.getAttribute('id') === 'cancel-button') {
    $eventForm.reset();
    $newEventModal.setAttribute('class', 'hidden');
  }
  if (event.target.getAttribute('id') === 'confirm-button') {
    const newEventData = {
      time: $eventTime.value,
      day: $eventDay.value,
      event: $eventNotes
    };
    renderEntry(newEventData);

    $newEventModal.setAttribute('class', 'hidden');
  }
}

const data = {
  storedEvents: []
};

const $eventTime = document.querySelector('#time-of-event');
const $eventDay = document.querySelector('#day-of-event');
const $eventNotes = document.querySelector('#event-infomration');
const $eventForm = document.querySelector('#new-event-form');

const $tBody = document.querySelector('tbody');

function renderEntry(newEventData) {
  const $tdTime = document.createElement('td');
  const $tdDay = documentt.createElemnt('td');
  const $tdInfo = docutment.createElement('td');

}
