Parrot generator
=========

With this node module you can generate emoji text like this:

![Alt text](Inloop.png "Optional title")

## Installation

  If you don't have node installed then download it [here](https://nodejs.org/en/).
  You can pick stable LTS version or Current with latest features.
  
  When you install node check it in terminal with **node -v**
  
  Then clone this repository with **git clone https://github.com/Exterridum/parrot-generator.git**
  You can use also SSH method if you have a SSH key.
  
  Now navigate to project folder and you can start use parrot-generator.
 
## Usage
```bash
node app.js --size --text --letter --background
node app.js -s small -t INLOOP -l :android: -b :ios:
```
Redirect output into console with optional parameter. By default is used text file.
```bash
node app.js -s small -t INLOOP -l :android: -b :ios: -o console
```
## Contributing

If you want to contribute then write me at kolimar@inloop.eu

## Release History

* 1.0.0 Initial release

## Known issues

* Text is sometimes generated in bad order.