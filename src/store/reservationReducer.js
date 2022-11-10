import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1';
const ALL_RESERVATIONS = 'ALL_RESERVATIONS';
const CREATE_RESERVATION = 'CREATE_RESERVATION';

// Initial state

const initialState = {
  reservations: [],
};

const fetchReservations = async (userid) => {
  const response = await axios.get(`${BASE_URL}/${userid}/my_reservations`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

export const fetchAllReservations = (userid) => (async (dispatch) => {
  const reservations = await fetchReservations(userid);
  dispatch({
    type: ALL_RESERVATIONS,
    payload: reservations,
  });
});

const createReservation = async (dataReservation) => {
  const {
    userid, carId, date, city,
  } = dataReservation;
  try {
    await axios.post(`${BASE_URL}/add_reservation`, {
      user_id: userid,
      car_id: carId,
      reservation_date: date,
      location: city,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const createNewReservation = (data) => async (dispatch) => {
  const response = await createReservation(data);
  dispatch({
    type: CREATE_RESERVATION,
    payload: response,
  });
};

const reservationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_RESERVATIONS:
      return {
        ...state,
        reservations: payload,
      };

    case CREATE_RESERVATION:
      return { ...state, payload };

    default:
      return state;
  }
};

export default reservationsReducer;
