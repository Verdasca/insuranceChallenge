## INDEX
- Notes
- Instructions
- Instructions to run tests
- Challenge Tasks
    - Tasks to be done
    - Tasks to be done for Sales Insurance Page
- Tasks Not Completed that were mandatory for the challenge and how to approach
- Future Work
- Final Notes

### Notes
The project base code is based on https://reactjs.org/docs/create-a-new-react-app.html by running "npx create-react-app my-app" to build the base code from a react application. From here we will develop the challenge.
Will be using React-Bootstrap to have a better UI look, UX and responsiveness since the time is limited ("yarn add react-bootstrap").
The folder "containers" will have the pages while "components" folder will have smaller and reusable components for all pages.
Will be using Recharts library to build our pie graph ()"yarn add recharts").
Since we only have access to one API to obtain the list of devices, we will have two JSON files containing some dummy data for inicial use:
- salesData.json => will have some dummy data of 4 sales in order to see data in the table
- pieChartData.json => will have dummy data for the pie chart to be filled (based on salesData.json)
This README.md file will contain all documentation on the challenge and key points.
There is a video file called "demo_challenge_video" as well to show a brief view on what was completed.


### Instructions
Since this is based on a React Application, the original instructions are available in REACT_APP_README.md file.
Before running the project be sure to:
- Have the project in your computer and using the terminal clone the project by doing "git clone https://github.com/Verdasca/insuranceChallenge.git"
- Have the correct versions of yarn, npm (yarn version 1.22.19; npm version 9.2.0)
- Do "yarn install" before doing a "yarn start"
- If having issues, please delete the node_module and reinstall modules "npm install" (might need to do a "npm audit fix --force" or "npm fund" after reinstalling) or do "yarn install"
- Run "yarn start" and open a browser with http://localhost:3000/


### Instructions to run tests
- Run "yarn test a" in the terminal to run all the tests and see the results


### Challenge Tasks 
### Tasks to be done:
- Create a React App base code `(DONE)`
- Add React-Bootstrap and Recharts `(DONE)`
- Create folders container and components, plus create SalesInsurancePage (will be our main page for the challenge for now)`(DONE)`
- Create dummy data for our base sales and pie chart values both in JSON files `(DONE)`
- Update and change the README.md file and put the original content in a new file (REACT_APP_README.md ) `(DONE)`
    - Add instructions `(DONE)`
    - Things I added and why `(DONE)`
    - Future work `(DONE)`
    - Tasks that were not completed and how I'd approach `(DONE)`
- Do a demo video named "demo_challenge_video" to show what I did and what as working so far `(DONE)`
- Submit the project in my Github account `(DONE)`
### Tasks to be done for Sales Insurance Page:
- Create a Header component `(DONE)`
- Create a Footer component `(DONE)`
- Create a SalesInsurancePage component `(DONE)`
- Obtain the list of devices from the API (https://phone-specs-api.azharimm.dev/latest) and save in a useState `(DONE)`
- Create Form `(WORK IN PROGRESS)`
    - Add fields and button: first/last name. age, email and device `(DONE)`
    - Device should display the list from the API `(DONE)`
    - Add validations `(DONE)`
    - Be able to submit the form `(DONE)`
    - Clean form after submitting `(DONE)`
    - Update the current sales data with the new values from the form `(DONE)`
    - Use Formik library for the validation of the form `(TODO)`
    - Remove the correct check for the input select Devices `(TODO)`
    - Create a new component called "SalesForm" in SalesInsurancePage to have the form and refactor `(TODO)`
- Display list of sales `(WORK IN PROGRESS)`
    - Default with dummy data `(DONE)`
    - Display information and 2 buttons for update and delete `(DONE)`
    - Show empty message when there are no sales data `(DONE)`
    - Display the new data submitted from the form `(DONE)`
    - Be able to delete a sale `(DONE)`
    - Be able to update a sale `(TODO)`
        - Use the form to update a sale `(TODO)`
    - Create a new component called "SalesTable" in SalesInsurancePage to have the list and refactor `(TODO)`
- Display a chart to see nº of sales per device `(WORK IN PROGRESS)`
    - Use dummy data as default data `(DONE)`
    - Use Recharts `(DONE)`
    - Display a pie chart with colors and values correctly `(DONE)`
    - Show empty message when there are no sales chart data `(DONE)`
    - Update chart numbers after a sale as been deleted`(DONE)`
    - Update chart numbers after a sale as been updated `(TODO)`
    - Update chart numbers after a sale as been created `(DONE)`
- Create jest tests for every component and test various scenarios `(WORK IN PROGRESS)`
    - SalesInsurancePage `(WORK IN PROGRESS)`
        - Form `(TODO)`
        - List of sales `(TODO)`
    - PiChartComponent`(WORK IN PROGRESS)`
    - Footer`(DONE)`
    - Header `(DONE)`


### Tasks Not Completed that were mandatory for the challenge and how to approach
Due to time contraints some tasks were not completed as well as some improvements needed.
- To update sales task was not completed. For this case, we would get the selected sale when clicking the button and display it in the form. The user after changing the sales values we would then validate if the changes are correct with the normal form validations. If it doens't pass the validations the sale is not updated. If everything is ok then the sale is updated. To pull this off we would need to create a new state called "toUpdate" as a boolean in order to know if we're doing an update or add a new sale. Also, after updating successfully the sale the pie chart data should also be update (if the user changed the device selected).
- The device dropdown is showing incorrect display (showing a green check for any option). The best approach would be to use Formik to do the form validations and stop using the Form Control. Currently the dropdown is show a green check when the option is not seleted. However, if the options is "Choose..." the sale is not added and the form is not cleanned. Meaning that the device should be picked. Should also add an error message for this case to avoid misleading until fixed. 
- The jest tests are not complete for SalesInsurancePage (Form, List) and PiChartComponent. Just one simple test was added to see if the components were rendering and see if the titles were there as a first test. Should add more tests testing multiple functionalities lie creating, updating and deleting sales, pie chart updating, see if empty state messages are shown when there is no data, etc...
- UI/UX improvements. There are smaller things to improve and fix and the design could be better. For this needed to redesign the page and fix the smaller mistakes on animation, colors, text font and sizes, etc... Also validate all types os screen devices since some are not working correctly.
- Reorganize and refactor. Reorganize components and folders, plus some components should have been created for a better read of each component (for example the form and list display shoul be each separated component). Refactoring some code should also been done, plus it would be best to use APIs instead using states but for this challenge there was only available 1 API.


### Future Work
- Since it's an international website we should use i18n for translations.
- Redesign and improve the current UI and UX
- Add more tests for each component and container
- Use API to store and manage data, instead using files or states and remove any json file with dummy data
- Use SCSS
- Change the colors to be used in the pie char for a better look, currently used random colors as it was faster
- Use Formik library for the validation of the form
- Refactor and reorganize the code, for example in SalesInsurancePage, we should separate the Form into it's own component and the same goes for the List Display


### Final Notes
I'd like to thank you for the challenge and opportunity. Might not have all the time I wanted to invest here, but it was a great opportunity to apply some of my knowledge I have gained during my career. I'd also appreciate any feedback on this challenge to help my personal grown.
I’ll also include a small video demo ("demo_challenge_video") showing the final results of the implementations I did. Unfortunately in terms of code, I would have liked to refactor more and create smaller components and adding tests, but the time is also limited.
Thank you for reading my notes, I hope the size is not a problem and tried to organised as best as possible.
Cristina Verdasca
