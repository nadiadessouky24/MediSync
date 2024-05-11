// import { specialities } from "./data/specialitiesData";
import { doctors } from "./data/doctors";

export async function getSpecialities() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const specialities=doctors.map((doctor) => doctor.speciality);
      // console.log("SPECI", specialities);
      resolve(specialities);
    }, 1000);
  });
}

