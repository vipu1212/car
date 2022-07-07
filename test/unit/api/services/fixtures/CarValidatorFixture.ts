export const VALID_CAR = {
  'id': 1,
  'licensePlateNumber': 'DIV1235',
  'price': 12,
  'mileage': 100002,
  'description': '123',
  'registration': {
    'number': 6,
    'stateCode': 'ON',
    'expiration': '2023-07-04T18:43:56.144Z',
    'registeredName': 'Div'
  },
  'vin': {
    'id': 'WBA3A5C57CF256651',
    'year': 2012,
    'make': 'BMW',
    'model': '328i'
  },
  'color': {
    'id': 1,
    'name': 'Yellow',
    'imageUrl': 'https://img.com/yellow'
  }
};

export const EXPIRED_REG_CAR_REQUEST = {
  'id': 1,
  'licensePlateNumber': 'DIV1235',
  'price': 12,
  'mileage': 100002,
  'description': '123',
  'registration': {
    'number': 6,
    'stateCode': 'ON',
    'expiration': '2021-07-04T18:43:56.144Z',
    'registeredName': 'Div'
  },
  'vin': {
    'id': 'WBA3A5C57CF256651',
  },
  'color': {
    'id': 1,
  }
};
