function sidebarLeftToggle(elementId) {
    var titles = document.querySelectorAll('.sidebar-left-title');
    var contents = document.querySelectorAll('.tab-content');
    var titleToShow = document.getElementById(elementId + '-title');
    var contentToShow = document.getElementById(elementId + '-tab-content');

    titles.forEach(function(element) {
        element.style.display = 'none';
    });

    contents.forEach(function(element){
        element.style.display = 'none';
    });


    contentToShow.style.display = 'grid';
    titleToShow.style.display = 'flex';

}



function postThis(clickedDiv){
  // Find the first <p> element within the clicked div
  const paragraph = clickedDiv.querySelector('p');

  if (paragraph) {
    // Get the text content of the <p> element
    const text = paragraph.textContent;

    // Create a new <div> element
    const outputDiv = document.createElement('div');

    // Create a <p> element for the text and set its content
    const textParagraph = document.createElement('p');
    textParagraph.textContent = text;

    // Append the <p> element to the new <div> element
    outputDiv.appendChild(textParagraph);

    // Display the new <div> element (replace "output" with the desired location)
    const outputContainer = document.getElementById('action-log');
    outputContainer.prepend(outputDiv);

    // Check if there are more than ten children in the container
    if (outputContainer.children.length > 10) {
        // Remove the oldest child (the last one)
        outputContainer.lastChild.remove();

  }
}

}
