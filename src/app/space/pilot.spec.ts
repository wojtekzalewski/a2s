import { Pilot } from './pilot';

describe('Pilot', () => {
  it('should create an instance', () => {
    expect(new Pilot()).toBeTruthy();
  });

  describe('imageUrl', () => {
    it('should apply default image url when not provided', () => {
      const pilot = new Pilot();

      expect(pilot.imageUrl).toEqual(Pilot.defaultImageUrl);
    });

    it('should not apply default image url when provided', () => {
      const pilot = new Pilot({imageUrl: '/example.jpg'});

      expect(pilot.imageUrl).toEqual('/example.jpg')
    });
  });

  describe('fullName', () => {
    it('should clear first name and last name when empty string provided', () => {
      const pilot = new Pilot();
      pilot.fullName = '';

      expect(pilot.firstName).toEqual('');
      expect(pilot.lastName).toEqual('');
      expect(pilot.fullName).toEqual('');
    });

    it('should set first name when single word provided', () => {
      const pilot = new Pilot();
      pilot.fullName = 'Jan';

      expect(pilot.firstName).toEqual('Jan');
      expect(pilot.lastName).toEqual('');
      expect(pilot.fullName).toEqual('Jan');
    });

    it('should set first name and last name when two words provided', () => {
      const pilot = new Pilot();
      pilot.fullName = 'Jan Kowalski';

      expect(pilot.firstName).toEqual('Jan');
      expect(pilot.lastName).toEqual('Kowalski');
      expect(pilot.fullName).toEqual('Jan Kowalski');
    });

    it('should set first name and last name when three words provided', () => {
      const pilot = new Pilot();
      pilot.fullName = 'Jan Kowalski Nowak';

      expect(pilot.firstName).toEqual('Jan');
      expect(pilot.lastName).toEqual('Kowalski Nowak');
      expect(pilot.fullName).toEqual('Jan Kowalski Nowak');
    });
  });
});
