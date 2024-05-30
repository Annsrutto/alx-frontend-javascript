export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // const success = true;
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
