
if (window.location.hostname.includes("moodle")) {
// Get all anchor (<a>) tags on the page
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
        // Get the href attribute (URL)
        let url = anchor.href;

        // Check if the URL contains "forceDownload=1"
        if (url.includes('forcedownload=1') && url.includes('.pdf')) {
            // Create a URL object to manipulate the query parameters
            let urlObj = new URL(url);

            // Remove the 'forceDownload' parameter
            urlObj.searchParams.delete('forcedownload');

            // Set the anchor's href to the updated URL
            anchor.href = urlObj.toString();
        }
    });
}