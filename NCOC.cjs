({
  /*  doInitValues:function(component,event,helper){
        helper.doInitValues(component, helper);  
        
    },*/
      onchange: function (component,event,helper){
        Titlecategory.showHelpMessageIfInvalid();
        
    },
    
    
    validateAndcreate : function(component, event, helper) {
        if(helper.validateFields(component,event)){
        console.log('validateAndcreate called-->');
        var isError = false;
        //}
        var jobTitle= component.find("JobTitle");
        var lastName= component.find("Lastname");
        var Titlecategory= component.find("Titlecategory").get('v.value').toString().replace(/,/g , ";")

     //   var Source=component.find("Source");
        

      
        //console.log('accLookup-->',component.find("accLookup"));
        
        if($A.util.isUndefined(jobTitle.get("v.value")) || $A.util.isEmpty(jobTitle.get("v.value"))){ 
            
            jobTitle.showHelpMessageIfInvalid();
            isError = true;
        } 
        if($A.util.isUndefined(lastName.get("v.value")) || $A.util.isEmpty(lastName.get("v.value"))){
            
            lastName.showHelpMessageIfInvalid();
            isError = true;
        }
     /*   if($A.util.isUndefined(Titlecategory.get("v.value")) || $A.util.isEmpty(Titlecategory.get("v.value"))){
            
            Titlecategory.showHelpMessageIfInvalid();
            isError = true;
        }
         
        if($A.util.isUndefined(Source.get("v.value")) || $A.util.isEmpty(Source.get("v.value"))){
            
            Source.showHelpMessageIfInvalid();
            isError = true;
            
        }*/
        if(isError === true) {
            
            console.log('Validation pending');
        }else {
            
            console.log('Going to Save');
            helper.saveProspects(component, event, helper);
            
        }
        
        }   
    },
    validateAndcreateNew : function(component, event, helper) {
         console.log('validateAndcreateNew called-->');
        var isError = false;
        var jobTitle= component.find("JobTitle");
        var lastName= component.find("Lastname"); 
        var Titlecategory= component.find("Titlecategory");       
        
        if($A.util.isUndefined(jobTitle.get("v.value")) || $A.util.isEmpty(jobTitle.get("v.value"))){
            
            jobTitle.showHelpMessageIfInvalid();
            isError = true;
        } 
        if($A.util.isUndefined(lastName.get("v.value")) || $A.util.isEmpty(lastName.get("v.value"))){
            
            lastName.showHelpMessageIfInvalid();
            isError = true;
        }
        /*if($A.util.isUndefined(Titlecategory.get("v.value")) || $A.util.isEmpty(Titlecategory.get("v.value"))){
            
            Titlecategory.showHelpMessageIfInvalid();
            isError = true;
        }*/
        if(isError === true) {
            console.log('Validation pending');
        }else {
            console.log('Going to Save New');
            helper.saveProspectsAndNew(component, event, helper);
            
        }
        
        
    },
    showSpinner: function(component, event, helper) {
        component.set("v.Spinner", true); 
    },
    hideSpinner : function(component,event,helper){  
        component.set("v.Spinner", false);
    },
    loadPicklistValues : function(component,event,helper){
        
        helper.loadData(component,event,helper);
    },
    hidedialogue :function(component, event, helper) {
        var s = component.find("HelpText");
        $A.util.addClass(s,"slds-hide"); 
        var modalBackdrop = component.find("backdropId");
        $A.util.removeClass(modalBackdrop, 'slds-fade-in-open');
    },
    cancelmodal: function(component, event, helper) {
        var s = component.find("HelpText");
        $A.util.addClass(s,"slds-hide"); 
        var modalBackdrop = component.find("backdropId");
        $A.util.removeClass(modalBackdrop, 'slds-fade-in-open');
    },
      Basicinfodown: function(component, event, helper) {
        var Basicinfo = component.find("Basicinfo");
        $A.util.addClass(Basicinfo,"slds-hide");
        var rightarrow = component.find("rightarrow");
        $A.util.removeClass(rightarrow,"slds-hide");
        var downarrow = component.find("downarrow");
        $A.util.addClass(downarrow,"slds-hide");
    },
    Basicinforight: function(component, event, helper) {
        var Basicinfo = component.find("Basicinfo");
        $A.util.removeClass(Basicinfo,"slds-hide");
        var downarrow = component.find("downarrow");
        $A.util.removeClass(downarrow,"slds-hide");
        var rightarrow = component.find("rightarrow");
        $A.util.addClass(rightarrow,"slds-hide");
    },
    Sourceinfodown: function(component, event, helper) {
        var Sourceinfo = component.find("Sourceinfo");
        $A.util.addClass(Sourceinfo,"slds-hide");
        var rightarrow1 = component.find("rightarrow1");
        $A.util.removeClass(rightarrow1,"slds-hide");
        var downarrow1 = component.find("downarrow1");
        $A.util.addClass(downarrow1,"slds-hide");
    },
    Sourceinforight: function(component, event, helper) {
        var Sourceinfo = component.find("Sourceinfo");
        $A.util.removeClass(Sourceinfo,"slds-hide");
        var downarrow1 = component.find("downarrow1");
        $A.util.removeClass(downarrow1,"slds-hide");
        var rightarrow1 = component.find("rightarrow1");
        $A.util.addClass(rightarrow1,"slds-hide");
    },
    
    Eduinfodown: function(component, event, helper) {
        var Eduinfo = component.find("Eduinfo");
        $A.util.addClass(Eduinfo,"slds-hide");
        var rightarrow2 = component.find("rightarrow2");
        $A.util.removeClass(rightarrow2,"slds-hide");
        var downarrow2 = component.find("downarrow2");
        $A.util.addClass(downarrow2,"slds-hide");
    },
    Eduinforight: function(component, event, helper) {
        var Eduinfo = component.find("Eduinfo");
        $A.util.removeClass(Eduinfo,"slds-hide");
        var downarrow2 = component.find("downarrow2");
        $A.util.removeClass(downarrow2,"slds-hide");
        var rightarrow2 = component.find("rightarrow2");
        $A.util.addClass(rightarrow2,"slds-hide");
    },
    Resumedown: function(component, event, helper) {
        var Resume = component.find("Resume");
        $A.util.addClass(Resume,"slds-hide");
        var rightarrow3 = component.find("rightarrow3");
        $A.util.removeClass(rightarrow3,"slds-hide");
        var downarrow3 = component.find("downarrow3");
        $A.util.addClass(downarrow3,"slds-hide");
    },
    Resumeright: function(component, event, helper) {
        var Resume = component.find("Resume");
        $A.util.removeClass(Resume,"slds-hide");
        var downarrow3 = component.find("downarrow3");
        $A.util.removeClass(downarrow3,"slds-hide");
        var rightarrow3 = component.find("rightarrow3");
        $A.util.addClass(rightarrow3,"slds-hide");
    },
    Addengdown: function(component,event,helper) {
        var Addeng = component.find("Addeng");
        $A.util.addClass(Addeng,"slds-hide");
        var rightarrow4 = component.find("rightarrow4");
        $A.util.removeClass(rightarrow4,"slds-hide");
        var downarrow4 = component.find("downarrow4");
        $A.util.addClass(downarrow4,"slds-hide");
        
    },
    Addengright: function(component,event,helper) {
        var Addeng = component.find("Addeng");
        $A.util.removeClass(Addeng,"slds-hide");
        var downarrow4 = component.find("downarrow4");
        $A.util.removeClass(downarrow4, "slds-hide");
        var rightarrow4 =component.find("rightarrow4");
        $A.util.addClass(rightarrow4, "slds-hide");
    },
    stdntdtls: function(component,event,helper){
       console.log(event.getSource().get('v.checked'));
       console.log(event.getSource().get('v.value'));
        var csrntstd = component.find("csrntstd");
        if(component.get("v.stdval")== true){
            $A.util.removeClass(csrntstd, "slds-hide");
        } else{
            $A.util.addClass(csrntstd, "slds-hide"); 
        }
    },
    instHide: function(component,event,helper){
        var csrntstd = component.find("mId");
        if(component.get("v.mcheck")== true){
            $A.util.removeClass(csrntstd, "slds-hide");
        } else{
            $A.util.addClass(csrntstd, "slds-hide"); 
        }
    }
})
