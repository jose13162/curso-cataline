const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("ok");
    }, 2000);
  });

const exec = async () => {
  const response = await myPromise();

  console.log(response);
};

exec();
