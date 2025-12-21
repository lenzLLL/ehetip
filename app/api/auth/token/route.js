// Interface-only stub: do not perform auth token resolution
export async function GET() {
  return new Response(JSON.stringify({ jwt: null, user: null }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
