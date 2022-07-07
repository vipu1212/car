export const AXIOS_VALID_RESPONSE = {
  data: {
    Results: [
      {
        Value: '2014',
        Variable: 'Model Year',
      },
      {
        Value: 'BMW',
        Variable: 'Make',
      },
      {
        Value: '328i',
        Variable: 'Model',
      },
    ]
  },
  status: 200
};

export const AXIOS_ERROR_RESPONSE = {
  data: {
    Results: []
  },
  status: 404
};

export const AXIOS_INCOMPLETE_VIN_RESPONSE = {
  data: {
    Results: [
      {
        Value: '2014',
        Variable: 'Model Year',
      },
      {
        Value: 'BMW',
        Variable: 'Make',
      },
    ]
  },
  status: 200
};
