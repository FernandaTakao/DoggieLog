import TutorService from "../database/tutorService";

const Tutor = () => {
  const { createTutor, checkIfUserExists } = TutorService();

  const createT = async (user, password) => {
    return await createTutor(user, password);
  };

  const checkUserExists = async (user) => {
    return await checkIfUserExists(user);
  };

  const removeT = async (user) => {
    await TutorService.deleteTutor(user);
  };

  return { createT, checkUserExists, removeT };
};

export default Tutor;
