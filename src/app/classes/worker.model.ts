export class Worker {
    private id: number;
    private name: string;
    private image: string;
    private department: string;
    private attendance: string;
    
    constructor(
        _id?: number,
        _name?: string,
        _image?: string,
        _department?: string,
        _attendance?: string) {
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
    
    get getDepartment(): string {
        return this.department;
    }

    set setDepartment(_department: string) {
        this.department = _department;
    } 
    
    get getAttendance(): string {
        return this.attendance;
    }

    set setAttendance(_attendance: string) {
        this.attendance = _attendance;
    }
} 