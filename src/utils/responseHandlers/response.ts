// failed response format
function failed(errorCode: string, statusCode: number = 400) {
    return {
      success: false,
      errorCode: errorCode,
      statusCode: statusCode,
    };
  }
  
  // success response format
  function success(message: string) {
    return {
      success: true,
      message: message,
    };
  }
  
  // success response format
  function successWithPayload(message: string, data : Object) {
    return {
      success: true,
      data,
      message: message,
    };
  }
  
  export { failed, success, successWithPayload };
  