import { readFile, writeFile } from "fs/promises";


export class MessagesRepository {

    async findOne(id: string) {
        const data = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(data);
        return messages[id];
    }
    
    async findAll() {
        const data = await readFile('messages.json', 'utf8');
        return JSON.parse(data);
    }
    
    async create(content: string) {
        
        const messages = this.findAll();

        const id = Math.floor(Math.random() * 888);

        messages[id] = {id, content}
        
        await writeFile('messages.json', JSON.stringify(messages))

        return true
    }

}