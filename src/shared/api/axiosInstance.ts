import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://staging-api.bloobloom.com/user/v1/sales_channels/website/",
});
