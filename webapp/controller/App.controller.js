sap.ui.define(
    ['sap/ui/core/mvc/Controller'],
    function (Controller) {
        return Controller.extend("bbs.controller.App",{
            oInit: function(){
                this.oView = this.getView()
            },

            name: "Praveen",
            onReload: function(){
                this.oView.byId("idEmpId").setValue("1234");
                this.oView.byId("idEmpName").setValue(this.name);
                this.oView.byId("idEmpSal").setValue(120000);
                this.oView.byId("idEmpCurr").setValue("INR");
            }
        })
    }
)