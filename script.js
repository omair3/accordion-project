const titles = document.querySelectorAll('.accordion-title');


titles.forEach(title => {
  title.addEventListener('click', (event) => {
    console.log("open"); 
    console.log(event.target.textContent); 

    const allContents = document.querySelectorAll('.accordion-content');

    allContents.forEach(content => {
      // Hide all content sections
      if (content.style.display === 'block') {
        content.style.display = 'none';
      }
    });

    const clickedContent = title.nextElementSibling;

    
    if (clickedContent.style.display === 'block') {
      clickedContent.style.display = 'none';  // Already open? Then hide
    } else {
      clickedContent.style.display = 'block'; // Not open? Then show
    }
  });
});
