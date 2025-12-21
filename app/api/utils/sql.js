// Interface-only stub for SQL access — no DB calls in UI mode.
const sql = {
  async query() {
    return [];
  },
  async transaction(fn) {
    // Call the provided function synchronously with empty client
    return fn ? fn() : null;
  },
};

export default sql;