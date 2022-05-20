Infrastructure
  The project will be hosted in AWS platform as follow
    1- Using S3 service will provide hosting for frontend files and URL to access the index.html file which will be the entry point for users to use the project from any where

    2- Using Elastic beanstalk will provide hosting of nodejs backend server to process any HTTP request from frontend files and manipulate database to provide data back to the frontend files 

    3- RDS will be used to provide database service for the project

also circleci will be used to update the project files hosted on AWS whenever the new  version of project files uploaded to github