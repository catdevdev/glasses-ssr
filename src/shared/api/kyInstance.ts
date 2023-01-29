import ky from "ky";

export const kyInstance = ky.create({
  prefixUrl:
    "https://staging-api.bloobloom.com/user/v1/sales_channels/website/",
});
