# Byrd Hero Challenge

Creating sections from Byrd drone landing page in React using only HTML, CSS and JS.

![Hero Section](./assets/hero-section.JPG?raw=true "Hero Section")

Each seperate section is its own feature branch. I completed both the Hero page and Contact Form page with responsive design to match the layouts provided. (All colors are exact copies of the layouts, but the Contact Form backgroudnd is white instead of the given color to help seperate it from the Hero section which shares the same background color).

The Contact Form uses custom built validators and inputs to check and respond to user input on form submission. On form submission, the validators check the inputs and then either alert the user to errors, or alert with a successfull submission message.

## File Structure

Inside the src folder there are 4 main directories:

1. Assets - contains all images and svg
2. Components - contains App.js and any components that are reusable across sections along with styling and tests
3. Fonts - contains all custom typography
4. Sections - contains a folder for each section with section specific components and styling

All styling files are stored in the same directory as their corresponding component. I used BEM class convention to avoid naming conflicts between similar components.

## Testing

To test the components, I used Jest with Enzyme. The specific packages paired with Jest can be seen in the dev dependencies of my package.json. To reduce the relative paths for components and their test files, all test files are stored in the same directory as their components'. I utilized Jest snapshot feature to be able to check the output of my modular components with different props. All snapshots are stored in the shared directory "**snapshots**" folder.

## Instructions to Replicate

To recreate this project, create a new directory on your computer and clone this project into that directory. After that all you need to do is run "npm install" to install all the necessary dependencies and you are set.

## Next Steps

With more time, I would like to add conditional styling for form validation instead of using alerts to tell the user that they are missing or have incorrect information. I tested the modular components, but would like to write more tests for the section components, as well as for mocking the functions called on UI interactions.
