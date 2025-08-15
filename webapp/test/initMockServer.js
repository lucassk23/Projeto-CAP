sap.ui.define([
    "../localService/mockServer"
], function (mockserver) {
    "use strict";

    console.log("MockServer initialized!");
    mockserver.init(); // inicia imediatamente, sem esperar nada

    // nada de chamar ComponentSupport aqui
});
