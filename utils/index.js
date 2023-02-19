export const getDom = (className) => {
  return document.querySelector(className);
};

export const getListDom = (className) => {
  return document.querySelectorAll(className);
};

export const addClassName = (tag, className) => {
  tag.classList.add(className);
};

export const removeClassName = (tag, className) => {
  tag.classList.remove(className);
};
