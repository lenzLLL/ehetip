import * as React from 'react';

// Interface-only mode: no server requests. Return a mocked URL instead.
function useUpload() {
  const [loading, setLoading] = React.useState(false);
  const upload = React.useCallback(async (input) => {
    try {
      setLoading(true);
      // In interface-only mode we don't perform network requests.
      // Return a placeholder image URL for previews.
      await new Promise((r) => setTimeout(r, 300));
      return { url: 'https://via.placeholder.com/800x600.png?text=Uploaded+File', mimeType: 'image/png' };
    } catch (uploadError) {
      return { error: 'Upload disabled in interface-only mode' };
    } finally {
      setLoading(false);
    }
  }, []);

  return [upload, { loading }];
}

export { useUpload };
export default useUpload;