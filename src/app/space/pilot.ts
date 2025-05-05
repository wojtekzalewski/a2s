export interface PilotAttrs {
  id?: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  fullName?: string;
}

export class Pilot {
  static defaultImageUrl = '/assets/unknown-pilot.png';

  id?: number;

  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName || '';
    this.lastName = attrs.lastName || '';
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
    
    if (attrs.fullName) {
      this.fullName = attrs.fullName;
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
