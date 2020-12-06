# responsive-portfolio-hw

For this assignment we were asked to create a replica of a portfolio website using HTML, CSS and CSS Bootsrap. Thanks to a combination of skills learned from week 1, I was able to get very close to the photos shown.

I utilized Bootstrap for most of the styling, but also created an additional CSS style sheet to over-write Boostrap code for different effects/layout, as well as added my personal styling. 

I had difficulties with the navbar, especially when displayed on mobile. Originally (as copied from Boostrap), the collapse feature would trigger the items to display in a column when seen on 400px or smaller, and were not fully accessible to select. Using dev tools in Chrome, I was able to identify where this element lived in the page and the corresponding class to use in CSS. I changed the display from column to row, which made it accessbile on mobile however, spacing of the actual words is too close together and no matter what I tried with display-flex options, margin, padding or position, I couldn't get it to change.

Also, mobile view works but is not optimal. Some spacing is skewed and footer on contact page appears higher then bio or portfolio, even though styling is the same.

Resources Used:
    * Materials from class repo
    * Tutor sessions
    * Information from https://stackoverflow.com/ and https://www.w3schools.com/
    * Styling components from https://getbootstrap.com/ and https://fonts.google.com/