import axios, { AxiosError, AxiosInstance } from "axios";

class ApiService {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    // Set the base URL for the API
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  // GET method
  async get(endpoint: string, params = {}) {
    try {
        console.log(endpoint)
      const response = await this.api.get(endpoint, { params });
      return response.data;
    } catch (error: any) {
      console.error('GET Request Error:', error.message);
      throw error;
    }
  }

  // POST method
  async post(endpoint: string, data = {}) {
    try {
      const response = await this.api.post(endpoint, data);
      return response.data;
    } catch (error: any) {
      console.error('POST Request Error:', error.message);
      throw error;
    }
  }
}

// Example usage:
export const APIService = new ApiService('http://localhost:3000/api');

