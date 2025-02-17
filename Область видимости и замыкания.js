function createLogger() {
  const logs = [];

  return {
    log: (message) => {
      if (typeof message === 'string' || typeof message === 'number') {
        logs.push(message);
      } else {
        console.error("Ошибка: Сообщение должно быть строкой или числом.");
      }
    },

    getLogs: () => {
      console.log(logs);
      return logs;
    },
  };
}

function createRandomGenerator(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number' || min >= max) {
    throw new Error('Некорректные входные данные: min и max должны быть числами, и min < max');
  }

  return function() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}
