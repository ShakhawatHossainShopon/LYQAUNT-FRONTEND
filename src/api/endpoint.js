const API_BASE_URL = "http://127.0.0.1:5000";

export const API = {
  account: {
    base: `${API_BASE_URL}/api/account`,
    summary: `${API_BASE_URL}/api/account/summary`,
    currency: `${API_BASE_URL}/api/account/currency`,
  },
};

export default API;
