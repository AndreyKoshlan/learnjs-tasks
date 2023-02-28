// Ошибка не будет обработана, чтобы это работало необходимо пробросить ошибку через reject

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);