// Interface-only stub: do not perform external uploads.
async function upload({ url, buffer, base64 }) {
  // Return a placeholder URL for UI previews.
  await new Promise((r) => setTimeout(r, 200));
  return { url: 'https://via.placeholder.com/800x600.png?text=Uploaded+File', mimeType: 'image/png' };
}
export { upload };
export default upload;