module.exports = {
    /**
     * Scroll to element to view and click
     * @param {ElementFinder} $element
     * @param {number} timeout
     * @returns {string}
     */
    scrollAndClick: async ($element, timeout = 20000) => {
      try {
      await $element.scrollIntoView();
      await $element.waitForClickable({ timeout: timeout });
      await $element.click();
      }
      catch(error){
        throw new Error('Failed to execute scrollAndClick on the target element');
      }
    },

    getText: async ($element, timeout = 20000) => {
      try {
      await $element.scrollIntoView();
      await $element.waitForDisplayed({ timeout: timeout });
      const text = await $element.getText();
      return text;
      }
      catch(error){
        throw new Error(`Failed to retrieve text from the target element`);
      }
    }
    
  };