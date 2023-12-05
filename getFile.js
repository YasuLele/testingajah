document.addEventListener("DOMContentLoaded", function () {
    // Get the file input element
    const fileInput = document.getElementById("fileInput");

    // Add an event listener for when a file is selected
    fileInput.addEventListener("change", function () {
        // Get the selected file
        const selectedFile = fileInput.files[0];

        // Display the selected file name
        const fileNameDisplay = document.getElementById("fileNameDisplay");
        fileNameDisplay.textContent = selectedFile ? selectedFile.name : "No file selected";

        // Check if a file is selected
        if (selectedFile) {
            // You can implement your logic to download the file here
            // For demonstration purposes, let's create a download link
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(selectedFile);
            downloadLink.download = selectedFile.name;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    });
});