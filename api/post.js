const fs = require("fs");
const { get } = require("http");
const PATH = "./data.json";

class Posts {
    readData(){
        try {
        return JSON.parse(fs.readFileSync(PATH,'utf8'))
    } catch(e){
        console.log(e);
        return false;
    }
    }
    get() {
        return this.readData();
    }

    add(newPost) {
        const data = this.readData();
        data.results.unshift(newPost);
        this.storeData(data);
    }

    storeData(data) {
        try {
            fs.writeFileSync(PATH, JSON.stringify(data));

        }catch (e) {
            console.log(e);
        }

    }
}



module.exports = Posts;