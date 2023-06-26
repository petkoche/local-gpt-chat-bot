
# local-gpt-chat-bot
Your own private JavaScript chat GPT with API.

# Prereq

- Node <= v18
- Python >= v3.10

# Install

Download and create an executable for the model from here [Alpaca 7B](https://github.com/antimatter15/alpaca.cpp) 

After you finish with the instructions from antimatter go into the repo folder and do: `npm i`

Depending on what model you download you might have to go into the `node_modules folder > dalai > index.js` and change this line:

 `let e = await exists(path.resolve(modelsPath, modelFolder, 'ggml-model-q4_0.bin'))`

**Go wild.**

![enter image description here](https://raw.githubusercontent.com/petkoche/local-gpt-chat-bot/main/preview.gif)

