  # Smart House Demo

The Smart House Dashboard Demo is a web-based application that showcases the potential of controlling and monitoring various aspects of a smart home from a single interface. The dashboard provides users with the ability to manage lighting, temperature, and appliances in different sections of the home in an efficient and convenient way. The user interface is designed to be intuitive and easy to use. Please note that this is a demo version of the Smart House Dashboard and does not provide full functionality or control over a real smart home.

[View the live project here](https://fazel-hosseinzadeh.github.io/smartHouse/index.html)

![Responsive Mockup](./documentation/amiresponsive.jpg)

---


##  Table of Contents

1. [Project Goals](#project-goals)

2. [User Experience](#user-experience)

3. [Design](#design)

4. [Technologies Used](#technologies-used)

5. [Features](#features)

6. [Testing](#testing)

7. [Bugs](#bugs)

8. [Deployment](#deployment)

9. [Credits](#credits)

10. [Acknowledgments](#acknowledgments)

---

##  Project Goals 


### User Goals
-   Control the lighting, temperature, and fan in various rooms of a smart house.
-   Access an intuitive interface to manage household utilities effectively.
-   Monitor the current temperature and set the desired temperature easily.

### Site Owner Goals
-   Showcase the functionality of a smart home system.
-   Demonstrate the integration of various controls in different rooms.
-   Provide a seamless user experience through a well-designed interface.


[Go Back to Table of Contents](#table-of-contents)

---

##   User Experience
### Target Audience
-   Homeowners interested in smart home technology.
-   Technology enthusiasts looking to explore smart home features.
-   Developers seeking to understand smart home integration.
### User Requirements and Expectations
-   A simple and intuitive navigation system.
-   Quick and easy access to control lights, temperature, and fans.
-   Real-time updates and responses from control interactions.
-   A visually appealing design that works well on all screen sizes.
-   An easy way to leave feedback and report issues.
-   Accessibility features to accommodate various users.
### User Stories
1.  As a user, I want to be able to turn the lights on and off in any room easily.
2.  As a user, I want to view the current temperature and set my desired temperature.
3.  As a user, I want to control the fan speed in the living room.
4.  As a user, I want the interface to be responsive and functional on my smartphone.
5.  As a user, I want feedback confirming that my control actions (like turning on a light) have been executed.
6.  As a user, I want to navigate between different rooms smoothly to control various devices.
### Site Owner Stories
7.  As a site owner, I want users to be able to contact us with suggestions or issues they encounter.
8.  As a site owner, I want users to find information about our smart home solutions on social media platforms.
9.  As a site owner, I want to showcase the seamless integration and functionality of smart home controls.

[Go Back to Table of Contents](#table-of-contents)

---
##   Design

### Design Choices
-   Clean and intuitive interface to ensure ease of use.
-   Consistent layout across different sections for uniformity.
-   Responsive design to support various screen sizes.

### Colour
-   The background color is a dark, muted blue (rgb(16, 51, 62)) to ensure readability and focus on functionality.
-   Text color is whitesmoke, ensuring high contrast and readability against the dark background.
-   Highlight interactive elements with contrasting colors like red, blue, and blueviolet for sliders.

### Fonts

-   Google fonts 'Monofett' and 'Roboto Mono' for a modern and clear look.
-   Sans-serif fonts for clarity and readability.
-   Font sizes are adjusted for different devices to ensure readability across all screen sizes.

### Structure
-   **Whole House:** Controls for light, temperature, and fan.
-   **Kitchen:** Controls for light and fan.
-   **Living Room:** Controls for two lights, temperature, and a fan with speed settings.
-   **Bedroom:** Controls for light and temperature.
-   **Garage:** Control for light.

[Go Back to Table of Contents](#table-of-contents)

---
##   Technologies Used
### Languages
-   HTML
-   CSS
-   JavaScript
### Frameworks & Tools
-   Git
-   GitHub
-   Gitpod
-   Font Awesome
-   JSHint
-   W3C Markup validation service
-   W3C Jigsaw CSS validation service
-   EmailJS

[Go Back to Table of Contents](#table-of-contents)

---
##   Features

The site consists of a single-page application with multiple interactive sections, offering ten key features for smart home control.

### Header
-   Featured on all sections:
    +   Displays the smart house logo and the project title.
-   User Story Covered: Ensures users can easily identify the project and navigate back to the main interface.

<details><summary>Header</summary>
<img src="./documentation/features-header.jpg">
</details>

### Footer
-   Featured on all sections:
    +   Provides links to social media and a contact form.
-   User Story Covered: 7, 8

<details><summary>Footer</summary>
<img src="./documentation/features-footer.jpg">
</details>

### Whole House Control
**Features:**
-   Controls for light, temperature, and fan.
-   User Stories Covered: 1, 2, 4, 5

<details><summary>Whole House Control</summary>
<img src="./documentation/features-whole-house.jpg">
</details>

### Kitchen Control
**Features:**
-   Controls for light and fan.
-   User Stories Covered: 1, 4, 5

<details><summary>Kitchen Control</summary>
<img src="./documentation/features-kitchen.jpg">
</details>

### Living Room Control
**Features:**
-   Two separate light controls.
-   Temperature display and slider to set the desired temperature.
-   Fan control with a three-speed slider.
-   User Stories Covered: 1, 2, 3, 4, 5

<details><summary>Living Room Control</summary>
<img src="./documentation/features-living-room.jpg">
</details>

### Bedroom Control
**Features:**
-   Controls for light and temperature.
-   User Stories Covered: 1, 2, 4, 5

<details><summary>Bedroom Control</summary>
<img src="./documentation/features-bed-room.jpg">
</details>

### Garage Control
**Features:**
-   Control for light.
-   User Stories Covered: 1, 4, 5

<details><summary>Garage Control</summary>
<img src="./documentation/features-garage.jpg">
</details>

### Contact Form
**Features:**
-   Allows users to provide feedback and report issues.
-   User Story Covered: 7

<details><summary>Contact Form</summary>
<img src="./documentation/features-contact.jpg">
</details>

### Form Confirmation
**Features:**
-   Provides feedback to users after form submission with a button -    to return to the main interface.
-   User Story Covered: 6

<details><summary>Form Confirmation</summary>
<img src="./documentation/features-contact-confirmation.jpg">
</details>

### 404 Message
**Features:**
-   Provides a way for users to return to the main interface after encountering a broken link.
-   User Story Covered: Ensures smooth navigation and user experience even when errors occur.

<details><summary>404 Message</summary>
<img src="./documentation/features-404.jpg">
</details>


Each feature is designed to provide a seamless and intuitive experience, ensuring that users can efficiently control various aspects of their smart home environment.

[Go Back to Table of Contents](#table-of-contents)

---
##   Testing
**Validation**
**HTML:** For validating our HTML codes, the W3C Markup Validation Service has been used. In the all pages there is no error.
   <details><summary>HTML Validation Home</summary>
<img src="./documentation/html-val-home.jpg">
</details>

<details><summary>HTML Validation Contact</summary>
<img src="./documentation/html-val-contact.jpg">
</details>

<details><summary>HTML Validation 404</summary>
<img src="./documentation/html-val-404.jpg">
</details>

**CSS:** For validating our CSS codes, the W3C CSS Validation Service - Jigsaw has been used. It passed the test without any error.

<details><summary>CSS Validation</summary>
<img src="./documentation/css-val.jpg">
</details>

**JavaScript:** JSHint Static Code Analysis Tool for JavaScript has been used to validate the Javascript codes. No significant issues were found.

<details><summary>JS Validation</summary>
<img src="./documentation/js-val.jpg">
</details>

**Accessibility:** The WAVE WebAIM web accessibility evaluation tool has been used to ensure the website met high accessibility standards. All pages pass without errors.

<details><summary>Home</summary>
<img src="./documentation/access-val-home.jpg">
</details>

<details><summary>Contact</summary>
<img src="./documentation/access-val-contact.jpg">
</details>

<details><summary>404</summary>
<img src="./documentation/access-val-404.jpg">
</details>





[Go Back to Table of Contents](#table-of-contents)

---
##   Bugs

[Go Back to Table of Contents](#table-of-contents)

---
##   Deployment

[Go Back to Table of Contents](#table-of-contents)

---
##   Credits 

[Go Back to Table of Contents](#table-of-contents)

---
##  Acknowledgments

[Go Back to Table of Contents](#table-of-contents)

---

