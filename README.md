# vexy.github.io

***FEATURES 
- User authentication: system allows users to signup, sign in, and manage their accounts.
                       The dashboard in which student signs in determines whether student is a benefactor or contributor. A contributor has all priveldges of a benefactor. but a benefactor only is able to access documents, only and only after registration.
                       (The system will utilize email verification upon signup/registration)
- Document Upload: Authorized users are able to upload documents to the platform. 
                   During the upload process, contributor specifies the paper title, university, faculty, department(where applicable), date when exam was seated for, level(certificate, diploma, degree) and the course. This is for easy sorting.
- Search functionality: This is to be implemented alongside a robust sorting capability.
- Document Preview: User is able to view document online only(Download features are to be
                    disabled and watermark also to be applied to cater for copyright of vexy). Document viewer library or plugin is to be implemented to be able to embed past papers directly into the web app.
- User Feedback: This is a system for the users to be able to provide feedback on quality of
                 papers and overall user experince. This feedback can only be accessed by admin.
- Security: The system implements appropriate security mesures to protect uers' data and 
            prevent unauthorized access to resources.
- Support and Assistance: The system allows users to be able to reachout for assitance 
                          or help, and this request is only accessible by admin.


***SYSTEM STRUCTURE
-Admin
-User- |-Contributor
        -Benefactor

***PAGES
-index
-login
-sign up
-dashboard
-upload

