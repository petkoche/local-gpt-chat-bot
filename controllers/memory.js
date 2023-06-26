let memory = [];

export default({
  // you can rewrite this with reddis or a db that persists the data
  save(message, responseMessage) {
    memory.push({message: message, response: responseMessage});
  },

  load(message) {
    const document = memory.find(o => o?.message === message);
    return document;
  }
})