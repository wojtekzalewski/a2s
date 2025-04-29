export class Pilot {
  static defaultImageUrl = '/assets/unknown-pilot.png';

  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(fullName: string = '', imageUrl: string = Pilot.defaultImageUrl) {
    this.firstName = '';
    this.lastName = '';
    this.imageUrl = imageUrl;

    if (fullName) {
      this.fullName = fullName;
    }
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0] || '';
    this.lastName = values[1] || '';
  }
}
