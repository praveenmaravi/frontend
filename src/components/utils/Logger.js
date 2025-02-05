// src/components/utils/Logger.js

class Logger {
    static log(message) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`%c[LOG]: ${message}`, 'color: blue;');
      }
    }
  
    static info(message) {
      if (process.env.NODE_ENV !== 'production') {
        console.info(`%c[INFO]: ${message}`, 'color: green;');
      }
    }
  
    static warn(message) {
      console.warn(`%c[WARNING]: ${message}`, 'color: orange;');
    }
  
    static error(message) {
      console.error(`%c[ERROR]: ${message}`, 'color: red;');
    }
  
    static debug(message) {
      if (process.env.NODE_ENV !== 'production') {
        console.debug(`%c[DEBUG]: ${message}`, 'color: purple;');
      }
    }
  
    static trackEvent(eventName, data) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`%c[TRACK]: Event: ${eventName}`, 'color: darkviolet;');
        console.log('Data:', data);
      }
    }
  }
  
  export default Logger;
  