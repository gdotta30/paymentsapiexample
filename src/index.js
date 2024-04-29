class PaymentsApi {

    static internal_errorCode = 0;

    static ErrorCode = function() { 
        return PaymentsApi.internal_errorCode;
    };
    
    static internal_errorDesc = "";

    static ErrorDesc = function() { 
        return PaymentsApi.internal_errorDesc;
    };
    
    static async payWithUI(params) {
        var parmsArray = [];
        parmsArray.push(params);
        let reference = "";
        try {
            reference = window.GxSuperAppApi.call("PayWithUI",parmsArray).then(
                function (value) {
                    return value;
                },
                function (error) {
                    PaymentsApi.internal_errorCode = 1;
                    PaymentsApi.internal_errorDesc = error;
                    return "";
                }
            );
        } catch (error) {
            PaymentsApi.internal_errorCode = 999;
            PaymentsApi.internal_errorDesc = error.message;
        }
        return reference;
    };

    static async payWithoutUI(params) {
        var parmsArray = [];
        parmsArray.push(params);
        let reference = "";
        try {
            reference = window.GxSuperAppApi.call("PayWithoutUI",parmsArray).then(
                function (value) {
                    return value;
                },
                function (error) {
                    PaymentsApi.internal_errorCode = 1;
                    PaymentsApi.internal_errorDesc = error;
                    return "";
                }
            );
        } catch (error) {
            PaymentsApi.internal_errorCode = 999;
            PaymentsApi.internal_errorDesc = error.message;
        }
        return reference;
    };

    static exit () {
        window.MiniAppAPI.Exit();
    }
}

module.exports = {
    PaymentsApi,
};