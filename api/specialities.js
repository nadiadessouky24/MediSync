import { specialities } from "./data/specialitiesData";

export async function getSpecialities() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("SPECI", specialities);
      resolve(specialities);
    }, 1000);
  });
}

export async function addSpeciality(speciality) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      specialities.push(speciality);
      resolve(specialities);
    }, 1000);
  });
}
