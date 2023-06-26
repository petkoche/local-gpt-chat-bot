
import memory from './memory.js'
import llm from './llm.js';

export default({
  async askGPT(req, res) {
    try{
      const message = req.body.message;
      let document = memory.load(message);
      if(document){
        res.send(document.response);
        return;
      }

      llm.callChatBot(message, res);
      

    } catch(e) {
      res.status(403).send({ error: e });
    }
  }
})