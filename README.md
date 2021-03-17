# F1 Standings App
This is an assignment that I got from Holvi before I joined the company in May 2019.
At the time, I hadn't worked on AngularJs project before.

Please find the live demo clip down below 


[![LiveDemo](http://img.youtube.com/vi/kp-Vx0qAdXk/0.jpg)](http://www.youtube.com/watch?v=kp-Vx0qAdXk "LiveDemo")


## To get started

Install python in your system.

Install virtualenv for python https://pypi.python.org/pypi/virtualenv. This
step is optional but recommended, since it won't make available globally Flask
to your system, but only for this project. If not using virtualenv you can just
run:
    py -m pip install Flask

If using virtualenv, create a virtual environment in the cloned project folder.
Call it `env`:

    virtualenv env

Activate the virtual environment you will have to do this every time you get
back to the project:

    source env/Scripts/activate

Install the dependencies for the project:

    py -m pip install -r requirements.txt

to run the app just do

    py app.py

the Flask server (in debug mode) will be running in port 5000. It loads in
its root the base HTML file to build on.

Install bower dependencies

    bower install
