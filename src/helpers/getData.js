import { useEffect, useState } from "react";
import data from "../data/MOCK_DATA.json";

export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export const getDataById = (id) => {
  try {
    return new Promise((resolve, reject) => {
      // console.log("getelementbyid", data);
      const product = data.find((prod) => {
        return prod.id === Number(id);
      });
      resolve(product);
      // console.log("this is product", product.id);
    });
  } catch (error) {
    console.log("hubo un error en getdatabyid", error);
  }
};
