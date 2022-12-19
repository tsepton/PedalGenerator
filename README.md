# Bikelectrity

This project aims to raise awareness on the environmental impact of streaming video, which is often perceived as harmless. 

## Getting started

### Prerequisite & development
Check first [the phidget documentation](./phidget/README.md) on how to build the bike.
Once everything is set up correctly, you can run the frontend using the following commands:

```bash
cd ./phidget
npm install 
npm run build # or npm run watch to keep tracks of changes
npm link

cd ../client
npm install 
npm link bikelectrity
npm run dev
```

Go to your [localhost](http://127.0.0.1:5173/) (default port is 5173) to access user's interface. 