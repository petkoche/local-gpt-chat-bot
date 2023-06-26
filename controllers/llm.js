
import Dalai from 'dalai'
import memory from './memory.js'
const dalai = new Dalai()

export default({
  callChatBot(message, res) {
    try{
      let responseMessage = '';

      dalai.request({
        model: "alpaca.7B",
        prompt: message,
        temp: 0,
      }, (token) => {
        if(token == '\n\n<end>')
        {
          memory.save(message, responseMessage);
          res.end('');
        } else {
          responseMessage = responseMessage + token;
          res.write(token)
          process.stdout.write(token)
        }
      })

    } catch(e) {
      // if error throw an error
      console.log(e);
      throw(e);
    }
  }
})