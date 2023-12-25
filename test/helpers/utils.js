class Utils {

    static updatePageNoAndPageSize(originalQueryString, newPageNo, newPageSize) {
        const params = new URLSearchParams(originalQueryString);
        const queryParams = {};
    
        // Parse the existing query parameters into an object
        for (const [key, value] of params.entries()) {
          queryParams[key] = value;
        }
    
        // Update the values
        queryParams.pageNo = newPageNo;
        queryParams.pageSize = newPageSize;
    
        // Create a new query string with the updated values
        const updatedQueryString = '?' + Object.entries(queryParams)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
    
        return updatedQueryString;
      }


}

module.exports = Utils;