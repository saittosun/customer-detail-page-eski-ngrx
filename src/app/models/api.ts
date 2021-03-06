import { of } from "rxjs";
import { Customer } from "./customer";

export class Api {
  get customers() {
    return of(
      [...this._customers]
    );
  }

  private _customers: Customer[] = [
    {
      id: 0,
      customerName: 'Antwerpen',
      projectName: 'lijn',
      status: 'offer',
      date: 'june',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'test@test.com',
      phonenumber: 11111111,
      vat: 11,
      address: {
        addressline: 'kouterbaan',
        city: 'denderleeuw',
        state: 'oost-vlanderen',
        country: 'belgie',
        zip: 9470
      }
    },
    {
      id: 1,
      customerName: 'Antwerpen',
      projectName: 'Nova',
      status: 'offer',
      date: 'june',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'test@test.com',
      phonenumber: 22222222,
      vat: 11,
      address: {
        addressline: 'kouterbaan',
        city: 'denderleeuw',
        state: 'oost-vlanderen',
        country: 'belgie',
        zip: 9470
      }
    },
    {
      id: 2,
      customerName: 'Brussel',
      projectName: 'Nova',
      status: 'pitch',
      date: 'september',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'test@test.com',
      phonenumber: 11111111,
      vat: 11,
      address: {
        addressline: 'kouterbaan',
        city: 'denderleeuw',
        state: 'oost-vlanderen',
        country: 'belgie',
        zip: 9470
      }
    },
    {
      id: 3,
      customerName: 'Gent',
      projectName: 'johnson',
      status: 'BAFO',
      date: 'november',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'test@test.com',
      phonenumber: 11111111,
      vat: 11,
      address: {
        addressline: 'kouterbaan',
        city: 'denderleeuw',
        state: 'oost-vlanderen',
        country: 'belgie',
        zip: 9470
      }
    },
    {
      id: 4,
      customerName: 'Brugge',
      projectName: 'presales',
      status: 'offer',
      date: 'june',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'test@test.com',
      phonenumber: 11111111,
      vat: 11,
      address: {
        addressline: 'kouterbaan',
        city: 'denderleeuw',
        state: 'oost-vlanderen',
        country: 'belgie',
        zip: 9470
      }
    },
  ];
}

// import { of } from "rxjs";
// import { Customer } from "./customer";

// export class Api {
//   get customers() {
//     return of(
//       [...this._customers]
//     );
//   }

//   private _customers: Customer[] = [
//     {
//       id: 1,
//       customerName: 'Antwerpen',
//       projectName: 'Nova',
//       status: 'offer',
//       date: 'end of june'
//     },
//     {
//       id: 2,
//       customerName: 'Brussel',
//       projectName: 'Digipolis',
//       status: 'pitch',
//       date: 'end of february'
//     },
//     {
//       id: 3,
//       customerName: 'Gent',
//       projectName: 'Nova',
//       status: 'Bafo',
//       date: 'end of march'
//     },
//     {
//       id: 4,
//       customerName: 'Studio',
//       projectName: 'presales',
//       status: 'offer',
//       date: 'end of april'
//     },
//     {
//       id: 5,
//       customerName: 'Cronos',
//       projectName: 'Nova',
//       status: 'offer',
//       date: 'end of may'
//     },
//     {
//       id: 6,
//       customerName: 'Catcoon',
//       projectName: 'renson',
//       status: 'pitch',
//       date: 'end of april'
//     },
//     {
//       id: 7,
//       customerName: 'Engie',
//       projectName: 'polis',
//       status: 'pitch',
//       date: 'end of march'
//     },
//     {
//       id: 8,
//       customerName: 'ahovoks',
//       projectName: 'search',
//       status: 'Bafo',
//       date: 'end of may'
//     },
//     {
//       id: 9,
//       customerName: 'ecom',
//       projectName: 'firstfloor',
//       status: 'offer',
//       date: 'end of april'
//     },
//     {
//       id: 10,
//       customerName: 'eucobat',
//       projectName: 'boulevart',
//       status: 'bafo',
//       date: 'end of february'
//     },
//   ];
// }
