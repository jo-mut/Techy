export class Activity {
    private id: number;
    private title: string;
    private image: string;
    private description: string;
    private time: number;

    constructor(
        private _id?: number,
        private _title?: string,
        private _image?: string,
        private _description?: string,
        private _time?: number) {

    }

    get getId(): number {
        return this.id;
    }

    set setId(_id: number) {
        this.id = _id;
    }

    get getTitle(): string {
        return this.title;
    }

    set setTitle(_title: string) {
        this.title = _title;
    }

    get getImage(): string {
        return this.image;
    }

    set setImage(_image: string) {
        this.image = _image;
    }

    get getDescription(): string {
        return this.description;
    }

    set setDescription(_description: string) {
        this.description = _description;
    }

    get getTime(): number {
        return this.time;
    }

    set setTime(_time: number) {
        this.time = _time;
    }
}