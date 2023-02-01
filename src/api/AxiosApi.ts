import axios, { type AxiosInstance } from "axios";

const hirContigoPRDApi: AxiosInstance = axios.create({
  baseURL: "https://api-crosssell-qualitas-main.qa.hircasa.com",
  headers: {
    "Content-type": "application/json",
  },
});

export const getMarcas = async () => {
  const { data } = await hirContigoPRDApi.get("/Marcas");
  return data;
};
