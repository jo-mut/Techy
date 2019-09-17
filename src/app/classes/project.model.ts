export class Project {
    private id: number;
    private name: string;
    private image: string;
    private deadline: number;
    private type: string;

    constructor(
        private _id?: string,
        private _name?: string,
        private _image?: string,
        private _deadline?: number,
        private _type?: string) {

    }

    get getId(): number {
        return this.id;
    }

    set setId(_id: number) {
        this.id = _id;
    }

    get getName(): string {
        return this.name;
    }

    set setName(_name: string) {
        this.name = _name;
    } 
    

    get getImage(): string {
        return this.image;
    }

    set setImage(_image: string) {
        this.image = _image;
    }

    get getDeadline(): number {
        return this.deadline;
    }

    set setDeadline(_deadline: number) {
        this.deadline = this._deadline
    }

    get getType(): string {
        return this.type;
    }

    set setType(_type: string) {
        this.type = _type;
    }
    
} 