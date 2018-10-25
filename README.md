# Newoverride
<aura:component implements="lightning:actionOverride,flexipage:availableForRecordHome,force:hasRecordId" 
                access="global" 
                controller="customLookup" >
    <aura:attribute name="stdval" type="boolean" default="false" />
    <aura:attribute name="mcheck" type="boolean" default="false" /> 
    <aura:attribute name="myVal" type="String" />
    <aura:attribute name="titleCategoryValues" type="List[]"/>
    <aura:attribute name="sourceValues" type="List[]"/>
    <aura:attribute name="IdentifiableInformationSourceValues" type="List[]"/>
    <aura:attribute name="UndergradPostSecondaryDegreeValues" type="List[]"/>
    <aura:attribute name="MastersProfessionalDegreeValues" type="List[]"/>
    <aura:attribute name="AdvancedDoctoralDegreeValues" type="List[]"/>
    <aura:attribute name="StartingStageValues" type="List[]"/>
    <aura:attribute name="EngagementSourceValues" type="List[]"/>
    <aura:attribute name="cnt" type="Contact" default="{'sObjectType': 'Contact'}" />
    <aura:attribute name="recType" type="RecordType"/>
    <aura:attribute name="myDate" type="Date" />
	<aura:attribute name="selectedLookUpRecord" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpGeoRecord" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpGeoRecord2" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpGeoRecord3" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpSchoolRecord" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpSchoolRecord2" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpSchoolRecord3" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpProjectRecord" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpUserRecord" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpUserRecord2" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpUserRecord3" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpUserRecord4" type="sObject" default="{}"/>
    <aura:attribute name="selectedLookUpUserRecord5" type="sObject" default="{}"/>
    <aura:attribute name="Spinner" type="boolean" default="false"/>
    
    <aura:handler name="init" value="{!this}" action="{!c.loadPicklistValues}"/>
    <aura:handler event="aura:waiting" action="{!c.showSpinner}"/>
    <aura:handler event="aura:doneWaiting" action="{!c.hideSpinner}"/>
    <!--loading spinner start... style=Brand Medium (blue dots)-->
    <aura:if isTrue="{!v.Spinner}">
        <div class="slds-spinner--brand  slds-spinner slds-spinner--large slds-is-relative" role="alert">
            <span class="slds-assistive-text">Loading</span>
            <div class="slds-spinner__dot-a"></div>
            <div class="slds-spinner__dot-b"></div>
        </div>
    </aura:if>
    <!-- Loading spinner end--> 
    <aura:iteration items="{!v.recType}" var="recordType" />
    <aura:if isTrue="{!v.recordType.Name=='External_Prospect'}"/>
    
    
    <!-- Header -->
    <div role="dialog" aura:id="HelpText" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
        <div class="slds-modal__container">
            <div class="slds-modal__header slds-modal__header">
                <div class="slds-col">
                    <h1 class="slds-page-header__title slds-truncate" >New Prospect Candidate: External Prospect</h1>
                    <button class="slds-button slds-modal__close slds-button--icon-inverse" title="Close">
                        <lightning:buttonIcon iconName="utility:close" variant="border" onclick="{!c.hidedialogue}" alternativeText="Close window."/>
                        <span class="slds-assistive-text">Close</span>
                    </button>
            </div>
        </div>
            <!-- Sections starts here -->
            <div class="slds-modal__content slds-p-vertical_large slds-scrollable" id="modal-content-id-1" aura:id="modalData">
                <!-- Section 1 starts here -->
                <div class="section1 slds-p-bottom_small">
                	<h3 class="slds-section__title slds-theme--shade primaryPaletteBorder test-id__section-header-container">
                    <div class="test-id__section-header-title section-header-title slds-p-horizontal--small slds-truncate" >Basic Information
                        <lightning:icon iconName="utility:chevrondown" aura:id="downarrow" size="x-small" onclick="{!c.Basicinfodown}"/>
                        <lightning:icon class="slds-hide" aura:id="rightarrow" iconName="utility:chevronright" size="x-small" onclick="{!c.Basicinforight}"/>
                    </div>
                    </h3>
                    <div aura:id="Basicinfo" class="slds-modal__content slds-p-vertical_small slds-grid slds-wrap">
                        <span class="slds-size--1-of-2 slds-p-horizontal_small slds-is-relative">
                            <lightning:input aura:id="Firstname" name="Firstname" label="Firstname" class="slds-m-bottom_small" placeholder="First name" value="{!v.cnt.FirstName}"/>
                            <lightning:input aura:id="Lastname" name="Lastname" label="Lastname" required= "true" class="slds-m-bottom_small" messageWhenValueMissing ="Last Name is manadatory!!" value="{!v.cnt.LastName}"/>
                            <lightning:helptext content="Candidate's current job title" class="slds-float_left"  />
                            <lightning:input aura:id="JobTitle" name="Job Title" label="Job Title" required= "true" class="slds-m-bottom_small" messageWhenValueMissing="Job title is manadatory!!" value="{!v.cnt.Title}" />
                            <lightning:select aura:id="Titlecategory" name="Titlecategory" label="Titlecategory" required="true" class="slds-m-bottom_small"  onchange="{! c.onChange }"  messageWhenValueMissing="Choose any one Tilecategory!" value="{!v.cnt.Title_Category__c}" >
                                <aura:iteration items="{!v.titleCategoryValues}" var="item">
                                    <option text="{!item}" value="{!item}" />
                                </aura:iteration>
                            </lightning:select>
                        </span>
                        <span class="slds-size--1-of-2 slds-p-horizontal_small">
                            <c:customLookup objectAPIName="account" IconName="standard:account" selectedRecord="{!v.selectedLookUpRecord}" label="Company Name" required="true" />
                            <lightning:input aura:id="CurrentCompany" name="Current Company (if no match)" label="Current Company (if no match)" class="slds-m-vertical_small" value="{!v.cnt.Company__c}"  messageWhenValueMissing="Please provide details about candidate's current company for our research team if placing in Unknown Company"/>
                            <lightning:input type="email" aura:id="PrimaryEmail" name="Primary Email" label="Primary Email" class="slds-m-bottom_small" value="{!v.cnt.Email}"  messageWhenValueMissing="This candidate requires GDPR Compliance; you must enter a real Primary Email address"/>
                            <lightning:input type="tel" aura:id="Phone" name="Phone" label="Phone" class="slds-m-bottom_small"  pattern="[0-9]-{10}" placeholder="" value="{!v.cnt.Phone}"/>                        
                        </span>
                        <p class="clr slds-size--1-of-2 slds-m-vertical_x-large slds-p-horizontal_x-large slds-p-vertical_xx-large">
                            **Select atleast ONE of the following options:Metro Area, State, Country.
                            Higher levels will be automatically filled based on the lowest level selection**</p>
                        
                        <span class=" slds-size--1-of-2 slds-p-horizontal_small slds-p-vertical_large" >
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="GeoLoc__c" field_API_search="metro__c" IconName="standard:location" selectedRecord="{!v.selectedLookUpGeoRecord}" label="Metro Area" /></div>
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="GeoLoc__c"  field_API_search="state__c" IconName="standard:location" selectedRecord="{!v.selectedLookUpGeoRecord2}" label="State"/></div>
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="GeoLoc__c"  field_API_search="country__c" IconName="standard:location" selectedRecord="{!v.selectedLookUpGeoRecord3}" label="Country"/></div>
                        </span>
                    </div>
                </div>
                <!-- Section 1 ends here -->
                <!-- Section 2 starts here -->
                <div class="section2 slds-p-bottom_small">
                    <h3 class="slds-section__title slds-theme--shade primaryPaletteBorder test-id__section-header-container">
                        <div class="test-id__section-header-title section-header-title slds-p-horizontal--small slds-truncate" >Source Information
                        <lightning:icon iconName="utility:chevrondown" aura:id="downarrow1" size="x-small" onclick="{!c.Sourceinfodown}"/>
                        <lightning:icon class="slds-hide" aura:id="rightarrow1" iconName="utility:chevronright" size="x-small" onclick="{!c.Sourceinforight}"/>
                        </div>
                    </h3>
                    <div aura:id="Sourceinfo" class="slds-modal__content slds-p-vertical_small slds-grid slds-wrap">   
                        <span class="slds-size--1-of-2 slds-p-horizontal_small">
                            <lightning:input aura:id="iCIMSID" name="iCIMS ID" label="iCIMS ID" class="slds-m-bottom_small" value="{!v.cnt.iCIMS_ID__c}"/>
                            <lightning:select aura:id="Source" name="Source" label="Source" required="true" class="slds-m-bottom_small"  value="{!v.cnt.Source__c}">//messageWhenValueMissing="Source is manadatory!!"
                                <aura:iteration items="{!v.sourceValues}" var="item">
                                    <option text="{!item}" value="{!item}" />
                                </aura:iteration>
                            </lightning:select>
                            <lightning:select aura:id="IdentifiableInformationSource" name="Identifiable Information Source" label="Identifiable Information Source"  class="slds-m-bottom_small" value="{!v.cnt.IDable_Info_Source__c}" >//messageWhenValueMissing="This candidate requires GDPR Compliance: Please input the source of this candidate's personal information"
                                <aura:iteration items="{!v.IdentifiableInformationSourceValues}" var="item">
                                    <option text="{!item}" value="{!item}" />
                                </aura:iteration>
                            </lightning:select>
                        </span>
                        <span class="slds-size--1-of-2 slds-p-horizontal_small slds-p-vertical_large">
                            <div class="slds-m-bottom_small mFix"><c:customLookup objectAPIName="user"  IconName="standard:user" selectedRecord="{!v.selectedLookUpuserRecord}" label="Sourcer"/></div>
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="user"  IconName="standard:user" selectedRecord="{!v.selectedLookUpuserRecord2}" label="Recruiter"/></div>
                        </span> 
                    </div>
                </div>
                <!-- Section 2 ends here -->
                <!-- Section 3 starts here -->
                <div class="section3 slds-p-bottom_small">
                    <h3 class="slds-section__title slds-theme--shade primaryPaletteBorder test-id__section-header-container" >
                        <div class="test-id__section-header-title section-header-title slds-p-horizontal--small slds-truncate" >Educational Information
                            <lightning:icon  aura:id="rightarrow2" iconName="utility:chevronright" size="x-small" onclick="{!c.Eduinforight}"/>
                            <lightning:icon class="slds-hide" iconName="utility:chevrondown" aura:id="downarrow2" size="x-small" onclick="{!c.Eduinfodown}"/>
                        </div>
                    </h3>                
                	<div aura:id="Eduinfo" class="slds-modal__content slds-p-vertical_small slds-grid slds-wrap slds-hide">   
                        <span class="slds-size--1-of-2 slds-p-horizontal_x-small">
                            <lightning:input  aura:id="CurrentStudent" name="Current Student" label="Current Student?" type="checkbox" checked="{!v.stdval}" onchange="{! c.stdntdtls}" class="slds-m-bottom_small" value="{!v.cnt.Current_Student__c}"/>
                            <div class= "slds-hide" aura:id="csrntstd"> 
                                <ui:inputDate aura:id="ExpectedGraduationDate" label="Expected Graduation Date" required="True" value="{!v.cnt.Expected_Graduation_Date__c}" displayDatePicker="true" format="MM/dd/yyyy" />
                                <ui:inputDate aura:id="ExpectedAvailabilityDate" label="Expected Availability Date"  required ="True" value="{!v.cnt.Expected_Avail_Date__c}" displayDatePicker="true" format="MM/dd/yyyy"/>
                                <lightning:helptext content="Any prior work experience" class="slds-float_left" /><lightning:input aura:id="Campus: Work Experience" name="Campus:WorkExperience" label="Campus: Work Experience" type="checkbox" Required= "true" value="{!v.cnt.campus_work__c }"/><br/>
                                <lightning:helptext content="Any internship experience"/><lightning:input  aura:id="Campus: Internship Experience" name="Campus: Internship Experience" label="Campus:InternshipExperience" type="checkbox" value="{!v.cnt.campus_internship__c}" /><br/>
                                <lightning:helptext content="Officer in any student org, university club, Greek system, etc. Student Athlete Supervisory work experience Military Officer"/><lightning:input  aura:id="Campus:Leadershi Experience" name="Campus: Leadership Experience " label="Campus: Leadership Experience" type="checkbox" value="{!v.cnt.campus_leadership__c}"/><br/>
                                <lightning:helptext content="Participant, member, or organizer of volunteer experience"/><lightning:input  aura:id="Campus:VolunteerExperience" name="Campus: Volunteer Experience" label="Campus: Volunteer Experience " type="checkbox" value="{!v.cnt.campus_volunteer__c}"/><br/>
                                <lightning:helptext content="Academic Honor Society or GPA > 3.0"/><lightning:input  aura:id="Campus:Honors/GPA" name="Campus: Honors/GPA" label="Campus: Honors/GPA" type="checkbox"   value="{!v.cnt.campus_honors__c}"/><br/>
                                <lightning:input  aura:id="FormerAmazonIntern" name="Former Amazon Intern" label="Former Amazon Intern" type="checkbox" value="{!v.cnt.Former_Intern__c}"/><br/>
                                <lightning:input  aura:id="EmployeeReferral" name="Employee Referral" label="Employee Referral?" type="checkbox" value="{v.cnt.employee_referral__c}" /><br/>
                                <lightning:input  aura:id="StudentAthlete" name="Student Athlete" label="Student Athlete" type="checkbox" value="{!v.cnt.Student_Athlete__c}" /><br/>
                                <lightning:input  aura:id="StudentVeteran" name="Student Veteran" label="Student Veteran" type="checkbox" onchange="{!c.instHide}" checked="{!v.mcheck}" value="{!v.cnt.Student_Veteran__c}"/>
                            </div>
                            <div class="slds-hide" aura:id="mId"> 
                                <lightning:helptext content="Used for University/Campus candidates to indicate experience in a military deployment" /> <lightning:input  aura:id="MilitaryDeployment" name="Military Deployment" label="Military Deployment" type="checkbox" value="{!v.cnt.campus_deployment__c}" /><br></br>
                                <lightning:input  aura:id="MilitaryInstructorExperience" name="Military Instructor Experience" label="Military Instructor Experience" type="checkbox" value="{!v.cnt.campus_instructor__c}" /></div>
                        </span>
                        <span class="slds-size--1-of-2 slds-p-horizontal_x-small">
                            <fieldset class="">
                                <legend>Undergrad/Post-Secondary</legend>
                            <c:customLookup objectAPIName="Schools__c" IconName="standard:knowledge" selectedRecord="{!v.selectedLookUpSchoolRecord}" label="Undergrad/Post-Secondary School"/>
                            <lightning:select aura:id="Undergrad/Post-SecondaryDegree" name="Undergrad/Post-Secondary Degree" label="Undergrad/Post-Secondary Degree" class="slds-m-vertical_small" value="{!v.cnt.Deg_1_Type__c}">
                                <aura:iteration items="{!v.UndergradPostSecondaryDegreeValues}" var="item">
                                    <option text="{!item}" value="{!item}" />
                                </aura:iteration>
                            </lightning:select>
                            <lightning:input type="text" aura:id="Undergrad/Post-Secondary Year" name="Undergrad/Post-Secondary Year" label="Undergrad/Post-Secondary Year" class="slds-m-bottom_small" pattern="[0-9]{4}" placeholder="Please Enter Year in YYYY format" value="{!v.cnt.Deg_1_Year__c}"/>
                            </fieldset>
                            <fieldset class="">
                                <legend>Masters</legend>
                                <c:customLookup objectAPIName="Schools__c" IconName="standard:knowledge" selectedRecord="{!v.selectedLookUpSchoolRecord2}" label="Master's/Professional School"/>
                                <lightning:select aura:id="Master's/ProfessionalDegree" name="Master's/Professional Degree" label="Master's/Professional Degree" class="slds-m-vertical_small" value="{!v.cnt.Deg_2_Type__c}">
                                    <aura:iteration items="{!v.MastersProfessionalDegreeValues}" var="item" >
                                        <option text="{!item}" value="{!item}" />
                                    </aura:iteration>
                                </lightning:select>
                                <lightning:input  type="text" aura:id="Master's/ProfessionalYear" name="Master's/Professional Year" label="Master's/Professional Year" class="slds-m-bottom_small" pattern="[0-9]{4}" placeholder="Please Enter Year in YYYY format" value="{!v.cnt.Deg_2_Year__c}"/>
                            </fieldset>
                            <fieldset class="">
                                <legend>Advanced/Doctoral</legend>
                                <c:customLookup objectAPIName="Schools__c" IconName="standard:knowledge" selectedRecord="{!v.selectedLookUpSchoolRecord3}" label="Advanced/Doctoral School"/>
                                <lightning:select aura:id="Advanced/DoctoralDegree" name="Advanced/Doctoral Degree" label="Advanced/Doctoral Degree" class="slds-m-vertical_small" value="{!v.cnt.Deg_3_Type__c}" messageWhenValueMissing="Advanced Degree Graduation Year must be in YYYY format">
                                    <aura:iteration items="{!v.AdvancedDoctoralDegreeValues}" var="item">
                                        <option text="{!item}" value="{!item}" />
                                    </aura:iteration>
                                </lightning:select>
                                <lightning:input type="text" aura:id="Advanced/DoctoralYear" name="Advanced/Doctoral Year" label="Advanced/Doctoral Year" class="slds-m-bottom_small" pattern="[0-9]{4}" placeholder="Please Enter Year in YYYY format" value="{!v.cnt.Deg_3_Year__c}" />
                            </fieldset>
                            <fieldset class="">
                                <legend>Other Education</legend>
                            	<lightning:input aura:id="OtherEducation" name="Other Education" label="Other Education" Required= "true" value="{!v.cnt.Other_Education__c}" />
                            </fieldset>
                        </span>
                </div>
                </div>
                <!-- Section 3 ends here --> 
                <!-- Section 4 starts here -->
                <div class="section4 slds-p-bottom_small">
                    <h3 class="slds-section__title slds-theme--shade primaryPaletteBorder test-id__section-header-container" >
                        <div class="test-id__section-header-title section-header-title slds-p-horizontal--small slds-truncate" >Resume
                            <lightning:icon iconName="utility:chevrondown" aura:id="downarrow3" size="x-small" onclick="{!c.Resumedown}"/>
                            <lightning:icon class="slds-hide" aura:id="rightarrow3" iconName="utility:chevronright" size="x-small" onclick="{!c.Resumeright}"/>
                        </div>
                    </h3>  
                    <div aura:id="Resume" class="slds-modal__content slds-p-around_x-small slds-grid slds-wrap">   
                        <lightning:input  aura:id="QuickNotes" name="Quick Notes" label="Quick Notes"  Required= "true" class="slds-size--1-of-2 slds-p-horizontal_x-small slds-m-bottom_small" value="{!v.cnt.Notes_quick__c}"/>
                        <lightning:input type="url" aura:id="LIRecruiterURL" name="LI Recruiter URL" label="LI Recruiter URL"  Required= "true" class="slds-size--1-of-2 slds-p-horizontal_x-small slds-m-bottom_small" value="{!v.cnt.LI_Recruiter_URL__c}" />
                        <span class="slds-p-horizontal_x-small slds-size--1-of-1 slds-m-bottom_large">
                            <div class="slds-text-align_left">Resume</div>
                            <lightning:inputRichText  value="{!v.cnt.Resume__c}" >
                                <lightning:insertImageButton/>
                               
                            </lightning:inputRichText>
                        </span>
                    </div>
                </div>
                <!-- Section 4 ends here -->
                <!-- Section 5 starts here -->
                <div class="section5">
                    <h3  class="slds-section__title slds-theme--shade primaryPaletteBorder test-id__section-header-container" >
                        <div class="test-id__section-header-title section-header-title slds-p-horizontal--small slds-truncate" >Add to Engagement
                            <lightning:icon  aura:id="rightarrow4" iconName="utility:chevronright" size="x-small" onclick="{!c.Addengright}"/>
                            <lightning:icon class="slds-hide" iconName="utility:chevrondown" aura:id="downarrow4" size="x-small" onclick="{!c.Addengdown}"/>
                        </div>
                    </h3> 
                    <div aura:id="Addeng" class="slds-modal__content slds-p-vertical_small slds-grid slds-wrap slds-hide">
                        <span class="slds-size--1-of-2 slds-p-horizontal_small ">
                            <c:customLookup objectAPIName="project__c"  IconName="custom:custom83" selectedRecord="{!v.selectedLookUpProjectRecord}" label="Add to Pipeline/Req"/>
                            <lightning:select aura:id="StartingStage" name="Starting Stage" label="Starting Stage" class="slds-m-vertical_small" value="{!v.cnt.add_stage__c}">
                                <aura:iteration items="{!v.StartingStageValues}" var="item">
                                    <option text="{!item}" value="{!item}" />
                                </aura:iteration>
                            </lightning:select>
                            <lightning:select aura:id="EngagementSource" name="Engagement Source" label="Engagement Source " class="slds-m-bottom_small" value="{!v.cnt.add_sorce__c}">
                                <aura:iteration items="{!v.EngagementSourceValues}" var="item">
                                    <option text="{!item}" value="{!item}" />
                                </aura:iteration>
                            </lightning:select>
                        </span>
                        <span class="slds-size--1-of-2 slds-p-horizontal_small">
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="user"  IconName="standard:user" selectedRecord="{!v.selectedLookUpUserRecord3}" label="Engagement Sourcer"/></div>
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="user"  IconName="standard:user" selectedRecord="{!v.selectedLookUpUserRecord4}" label="Engagement Recruiter"/></div>
                            <div class="slds-m-bottom_small"><c:customLookup objectAPIName="user"  IconName="standard:user" selectedRecord="{!v.selectedLookUpUserRecord5}" label="Engagement RC"/></div>
                        </span>
                    </div>
                </div>
                <!-- Section 5 ends here -->
            </div>
            <!-- Footer buttons starts here -->
            <footer class="slds-modal__footer">
                <lightning:button class="slds-button slds-button--neutral" label="Cancel" onclick="{!c.cancelmodal}"/>       
                <lightning:button class="slds-button slds-button_brand" variant="brand" label="Save &amp; New" onclick="{!c.validateAndcreateNew}"/> 
                <lightning:button aura:id="Save" class="slds-button slds-button--brand" label="Save" onclick="{!c.validateAndcreate}"/> 
            </footer>
            <!-- Footer buttons ends here -->
        </div>
    </div>
    <div class="slds-backdrop slds-fade-in-open" aura:id="backdropId"></div>
</aura:component>
