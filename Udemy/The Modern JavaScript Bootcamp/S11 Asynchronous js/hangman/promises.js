const getDataPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('This is promise value');
      reject('This is an error');
    }, 2000);
  });

const myPromise = getDataPromise();
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
