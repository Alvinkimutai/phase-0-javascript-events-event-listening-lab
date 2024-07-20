const main = document.querySelector('#button')

function addingEventListener() {
  return main.addEventListener('click', () => alert('Event listener'));
}

addingEventListener()