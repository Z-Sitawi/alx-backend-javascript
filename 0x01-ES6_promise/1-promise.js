export default function getFullResponseFromAPI(success) {
  return (success)? Promise.resolve({ status: 200, body: 'Success' }): reject(new Error("The fake API is not working currently"));
}
