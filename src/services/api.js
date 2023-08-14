import axios from 'axios'

const URL = process.env.REACT_APP_API_URL

export const fetchAllData = (query) => axios.get(`${URL}?launch_year=${query.year}&launch_success=${query.success}&rocket_name=${query.rname}`);