const $addEventButton = document.querySelector('.add-new-event');
const $newEventModal = document.querySelector('#new-event-modal');
$addEventButton.addEventListener('click', handleNewEvent);

function handleNewEvent(event) {
  $newEventModal.setAttribute('class', '');

}
