# Senior Frontend Interview Challenge

Install the react-hook-form library using **npm install react-hook-form**.

Then cd into **barstool-form** and **npm start** to run. 


**Details:**

As per the description of the assignment I separated my components in the form to be modular. The **submission-form** folder under **src** contains the **SubmissionForm.tsx** file which has the completed form that is being imported into **App.tsx**.

One layer deeper in the **form-elements** folder are the individual different types of field components I used (Text, Select, Date, Checkbox). Each one of these developers to specify a **field** **name**, **label**, and **validationRules** for the fields. **Register** and **Errors** are passed from **react-hook-form**'s **useForm** Hook. This acts as a central state for all the form information and errors. 

Styling in both the **index.css** file and primarily in the **SubmissionForm.css** file using regular CSS.
