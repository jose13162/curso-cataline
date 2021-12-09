const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      reject("not ok");
    }, 2000);
  });

const exec = async () => {
  try {
    const response = await myPromise();

    console.log(response);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("Promise terminada");
  }
};
