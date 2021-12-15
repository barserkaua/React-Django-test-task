# React-Django-test-task

This is simple React-Django application which show us all created users and groups, 
which we can edit and delete, and of course we can create new users & groups, just presed the button.

## Installation Backend (Django) side

First of all we need to install all package which we use in our backend (Django) side.
In the terminal we write the following command:

This command downloads all the packages what we need to the server side 
(all versions of packages are placed in a file `requirements.txt`)

  `pip install -r requirements.txt`
 
Then we write command responsible for creating new migrations based on the changes we have made to ours models:

  `python manage.py makemigrations`
  
Then we apply ours migrations:

  `python manage.py migrate`
  
To check if everything is working properly, we start our Django server:
  
  `python manage.py runserver`
  
## Installation Frontend (React) side

If we in main project folder, we needs to enter  in a `frontend` folder.
Write this command in terminal to enter in `frontend` folder:

  `cd frontend`

Then, we install all packages what we use in our frontend (React) side: 

  `npm install`

All data about the versions of packages that are install are in the `package.json` file.

To check if everything is working properly, we start our React server:
  
  `npm start`

## Connect to Docker localhost

We are assembling our project with `docker-compose build` command. This command takes all the changes that are in the `docker-compose.yml` file.

   `docker-compose build`
   
   
Now that the project is built, it's time to launch it.

   `docker-compose up`
   
To check if everything works correctly, follow this link:
  
  http://localhost/
