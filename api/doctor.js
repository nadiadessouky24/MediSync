import { doctors } from "./data/doctors";

export function getDoctorsBySpeciality(speciality) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(doctors.filter((doctor) => doctor.speciality === speciality));
    }, 1000);
  });
}
