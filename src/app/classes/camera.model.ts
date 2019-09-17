export class Camera {
    private id: number;
    private image: string;
    private time: number;

    constructor(
        private _id?: number,
        private _image?: string,
        private _time?: number) {

    }

    get getId(): number {
        return this.id;
    }

    set setId(_id: number) {
        this.id = _id;
    }

    get getImage(): string {
        return this.image;
    }

    set setImage(_image: string) {
        this.image = _image;
    }

    get getTime(): number {
        return this.time;
    }

    set setTime(_time: number) {
        this.time = _time;
    }
}