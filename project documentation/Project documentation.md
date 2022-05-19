The project consists of two parts
1- backend 
   Built with nodejs to provide backend functions to interact with database and depends on the following modules which will be installed using npm
     - express will provide routing function for backend
     - Bcrypt to provide password hash
     - Json web token to provide token secrets
2- Frontend
   will provide user interface to interact with backend server using HTTp requests

Infrastructure
  The project will be hosted in AWS platform as follow
    1- Using S3 service will provide hosting for frontend files and URL to access the index.html file which will be the entry point for users to use the project from any where

    2- Using Elastic beanstalk will provide hosting of nodejs backend server to process any HTTP request from frontend files and manipulate database to provide data back to the frontend files 

    3- RDS will be used to provide database service for the project

App dependinces
   This app built with nodejs and depend on the following major modules
   - express will provide routing function for backend
   - Bcrypt to provide password hash
   - Json web token to provide token secrets

CircleCI pipeline
  circleci will be watching the project fo=iles stored in githup repository and any change happen in the files stored in the repository circleci will perform all steps configured in config.yml file to deploy the updated  files on AWS services as follow
     - The developer will commit the files and push them to github reposatory
     - Circleci is configured to watch any changes in the project repository on github 
     - whenever the updated files pushed to github repository the Circleci will perform all steps mintioned in config.yml to test,build and deploy project to AWS


Thanks a lot
    


