The project consists of two parts
1- backend 
   Built with nodejs to provide backend functions to interact with database and depends on the following modules which will be installed using npm
     - express will provide routing function for backend
     - Bcrypt to provide password hash
     - Json web token to provide token secrets
2- Frontend
   will provide user interface to interact with backend server using HTTp requests

CircleCI pipeline
  circleci will be watching the project fo=iles stored in githup repository and any change happen in the files stored in the repository circleci will perform all steps configured in config.yml file to deploy the updated  files on AWS services as follow
     - The developer will commit the files and push them to github reposatory
     - Circleci is configured to watch any changes in the project repository on github 
     - whenever the updated files pushed to github repository the Circleci will perform all steps mintioned in config.yml to test,build and deploy project to AWS
         some steps will be performed by cirleci
            - Project dependencies installed for backend server
            - backend test
            - backend build
            - backend deploy to elastic beanstalk
            - frontend test
            - frontend deploy to s3 
   


Thanks a lot
    


