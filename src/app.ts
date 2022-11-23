import express from "express"

 export default class App {
    public app : express.Aplication; //tipo
    public port : number;

    constructor () {
        this.app = express();
        this.port = 3000;
    }

    public listen() {
        this.app.listen(this.port, () => {
          console.log(`=================================`);
          console.log(`🚀 App listening on the port ${this.port}`);
        });
      }
}


