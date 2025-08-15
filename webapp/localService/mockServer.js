sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function (MockServer, UriParameters) {
    "use strict";

    return {
        init: function () {
            // Regex para interceptar qualquer URL que contenha /V2/Northwind/Northwind.svc/
            var oMockServer = new MockServer({
                rootUri: "/V2/Northwind/Northwind.svc/"
            });

            var oUriParameters = new UriParameters(window.location.href);

            // Configuração de resposta automática
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            });

            // Caminho para metadata e mockdata
            var sPath = sap.ui.require.toUrl("sap/ui/demo/walkthrough/localService");
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            console.log("sPath:", sPath);

            // Logar todas as requisições interceptadas
           oMockServer.setRequests(oMockServer.getRequests().map(function (req) {
    var originalResponse = req.response;
    req.response = function (oXhr) {
        console.log("[MockServer]", req.method, oXhr.url);
        originalResponse.apply(this, arguments);
    };
    return req;
}));



            // Iniciar servidor
            oMockServer.start();

            // Mostrar todas as rotas criadas
            console.log("Rotas criadas pelo MockServer:", oMockServer.getRequests());
        }
    };
});
