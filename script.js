// Get the editor and preview elements
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Function to update the preview
function updatePreview() {
  const markdownText = editor.value;
  // Convert Markdown to HTML using marked.js
  preview.innerHTML = marked(markdownText);
}

// Event listener for the textarea input
editor.addEventListener('input', updatePreview);

// Initial call to update preview if there's any default text in the editor
updatePreview();
