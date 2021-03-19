let changeTitle = document.getElementById("change-title-button");

// When the button is clicked, inject changePageTitle into current page
changeTitle.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changePageTitle
  });
});

function changePageTitle() {
  let title = prompt("Enter a new title for the page");
  document.title = title;
}