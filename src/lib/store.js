let logs = [];

export function addLog(entry) {
  logs.push({
    date: new Date().toISOString(),
    message: entry
  });
}

export function getLogs() {
  return logs;
}
