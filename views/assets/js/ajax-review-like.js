async function toggleLike(reviewIndex) {
    const button = document.querySelector(`#like_${reviewIndex}`).parentElement;
    const actionUrl = button.closest('form').getAttribute('data-action');

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.liked) {
          button.classList.remove('border-gray', 'text-black');
          button.classList.add('border-gray', 'text-gray-400');
        } else {
          button.classList.remove('border-gray', 'text-gray-400');
          button.classList.add('border-gray', 'text-black');
        }

        document.querySelector(`#like_${reviewIndex}`).textContent = responseData.likes;
      } else {
        console.error('Error toggling like:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
}