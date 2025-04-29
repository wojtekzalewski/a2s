export class Pilot {
    firstName: string;
    lastName: string;
    imageUrl: string;
}

get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
}

set fullName(value: string) {
    const vlaues = value.split(' ');
    this.firstName = values[0] || '';
    this.lastName = values[1] || '';
}

static defaultImage = '/assets/unknown-pilot.png';

constructor(fullName string = '', imageUrl: string = Pilot.defaultImageUrl) {
    this.firstName = '';
    this.lastName = '';
    this.imageUrl = imageUrl;
    if(fullName){
        this.fullName = fullName;
    }
}