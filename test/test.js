const { PaymentsApi } = require('../src/index');

global.window = {
    GxSuperAppApi : function (p) {
        if (p[0] == 2023){
            return Promise.resolve("123456789");
        } else {
            return Promise.reject("Rejected error.");
        }
    }
};

(async function() {
    
    console.log("Successful payment example.");

    var reference = await PaymentsApi.payWithUI(2023);
    console.log("Reference",reference);
    console.log("Error Code",PaymentsApi.ErrorCode());
    console.log("Error Desc",PaymentsApi.ErrorDesc());

    console.log("===========================");
    console.log("Rejected payment example.");

    var reference = await PaymentsApi.payWithoutUI(22);
    console.log("Reference",reference);
    console.log("Error Code",PaymentsApi.ErrorCode());
    console.log("Error Desc",PaymentsApi.ErrorDesc());

})();
