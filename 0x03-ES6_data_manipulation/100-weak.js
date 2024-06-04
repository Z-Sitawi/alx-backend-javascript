#!/usr/bin/node
const apiRequests = new WeakMap();
const queryAPI = (endpoint) => {
  const counter = (apiRequests.get(endpoint) || 0) + 1;
  if (counter >= 5) throw new Error('Endpoint load is high');
  apiRequests.set(endpoint, counter);
};
export { apiRequests, queryAPI };
