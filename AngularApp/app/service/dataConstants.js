﻿
(function () {
    "use strict";
     //window.baseAPIUrl = 'http://localhost:3450/';

     angular.module("Demo").constant("dataConstants", {
         STUDENT_URL: "http://localhost:3450/api/students/",
         ADDRESS_URL: "http://localhost:3450/api/address/"
      
        //DOCUMENT_URL: baseAPIUrl + "/api/documents/",
        //CUSTOMER_URL: "http://www.example.com/api/customers/"
    });
})();