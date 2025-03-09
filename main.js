// Function to modify URLs containing .pdf?forcedownload=1
function modifyPdfLinks() {
  // Find all anchor tags on the page
  const anchors = document.querySelectorAll("a");

  anchors.forEach((anchor) => {
    // Check if the href contains .pdf?forcedownload=1
    if (anchor.href.includes(".pdf?forcedownload=1")) {
      // Remove ?forcedownload=1 from the URL
      const newUrl = anchor.href.replace("?forcedownload=1", "");

      // Update the anchor's href attribute
      anchor.href = newUrl;

      // Optional: Add a click event listener to open the link in a new tab
      anchor.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior
        window.open(newUrl, "_blank"); // Open the modified URL in a new tab
      });
    }
  });
}

// Wait for the page to fully load before running the function
window.addEventListener("load", () => {
  console.log("Page fully loaded. Modifying PDF links...");
  modifyPdfLinks();
});

// Also run the function when new content is dynamically added to the page
const observer = new MutationObserver(modifyPdfLinks);
observer.observe(document.body, { childList: true, subtree: true });
