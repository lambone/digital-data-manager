import deleteProperty from './deleteProperty';
import each from './each';

export default function cleanObject(object) {
  each(object, (key) => {
    const value = object[key];
    if (value === undefined) {
      deleteProperty(object, key);
    }

    if (typeof value === 'object' && !(value instanceof Date)) {
      cleanObject(object[key]);

      if (value === null) {
        deleteProperty(object, key);
      } else if (!Array.isArray(value) && !Object.keys(value).length) {
        deleteProperty(object, key);
      }
    }
  });

  return object;
}
