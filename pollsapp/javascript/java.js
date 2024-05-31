function showPollResults() {
    // Get the poll container element
    const pollContainer = document.getElementById('poll-container');
  
    // Get the poll results element
    const pollResults = document.getElementById('poll-results');
  
    // Toggle the display of the poll container and poll results
    pollContainer.style.display = 'none';
    pollResults.style.display = 'block';
  }