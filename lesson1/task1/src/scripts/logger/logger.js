export const createLogger = (name) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errorMessage) {
      logs.push(`error - ${name} - ${errorMessage}`);
    },
    getLogs() {
      return logs;
    },
  };
};
