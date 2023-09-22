const $addEventButton = document.querySelector('.add-new-event');
const $newEventModal = document.querySelector('#new-event-modal');
$addEventButton.addEventListener('click', handleNewEvent);

function handleNewEvent(event) {
  $newEventModal.setAttribute('class', '');

}

$newEventModal.addEventListener('click', handleModalButton);

function handleModalButton(event) {
  if (event.target.getAttribute('id') === 'cancel-button') {
    $newEventModal.setAttribute('class', 'hidden');
  }
  if (event.target.getAttribute('id') === 'confirm-button') {
    $newEventModal.setAttribute('class', 'hidden');
  }
}

// const newEventData = {}
