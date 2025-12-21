// Interface-only stub: just return a simple HTML that notifies parent no-op
export async function GET() {
  const message = { type: 'AUTH_DISABLED' };
  return new Response(
    `
    <html>
      <body>
        <script>
          window.parent.postMessage(${JSON.stringify(message)}, '*');
        </script>
      </body>
    </html>
    `,
    {
      headers: { 'Content-Type': 'text/html' },
    }
  );
}
