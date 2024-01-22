export const saveUserDataToLocal = (userData) => {
    const userDataObject = {};
    userData.forEach((user, index) => {
      userDataObject[`user${index + 1}`] = user;
    });
    localStorage.setItem('userData', JSON.stringify(userDataObject));
  };
  