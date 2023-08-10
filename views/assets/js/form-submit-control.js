//Prevents multiple submissions of http requests

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', stopMultiple);
  });
  
  function stopMultiple(event) {
    const button = event.target
    button.disabled = true
    setTimeout(() => {
      button.disabled = false
    }, 4000);
  }