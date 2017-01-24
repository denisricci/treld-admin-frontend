export const objectToFormData = (object) => {
  const formData = new FormData();
  for (const key of Object.keys(object)) {
    formData.append(key, object[key]);
  }
  return formData;
};
