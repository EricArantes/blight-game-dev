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