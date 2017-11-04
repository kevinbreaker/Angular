import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class KnowledgesService {

    emitCreatedSkill = new EventEmitter<string>(); 
    static createdNewSkill = new EventEmitter<string>();

    private Knowledges: string[] = ['Angular', 'NodeJs', 'MongoDb'];
    constructor(){
        console.log('====================================');
        console.log(KnowledgesService); //Called only one times 
        console.log('====================================');
    }
    getKnowledges(){
        return this.Knowledges;
    }

    addSkill(skill:string){
        this.Knowledges.push(skill);
        this.emitCreatedSkill.emit(skill);
        KnowledgesService.createdNewSkill.emit(skill);
    }
}