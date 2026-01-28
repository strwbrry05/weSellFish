# we sell fish
[2025] Web app mock-up created in order to emulate a wholesale company website, whos main product includes a variety of fish. A simple yet effective design, this site demonstrates understanding of web development principles, design aesthetics, and React coding essentials.

![Home](weSellFish_files/projectGIF.gif)

## About the Project
First project created after learning the basics of React development. I decided on a company website because of its intuitive and straightforward design. Through the course of this project, I was able to become familiar with both React tools and Tailwind for css. While I agree that the page itself is faily simple and unimagnative, I find it difficult to frown upon this one as it was my first React project. I remember how accomplished I felt after finishing coding this one, and it allowed me to gain enough confidence to keep going and create even crazier/more creative ideas.

### Nav + Footer
Nav is straightforward, contains the website title on the left corner and the nav components on the right. When each nav component is hovered over a quick animation plays that makes the component appear to be underlined/selected.

<img src="weSellFish_files/nav.png" width="650"/>
<img src="weSellFish_files/footer.png" width="650"/>

### Home Page
Home page is made up of four main sections. The hero, company cards, recent images, and the location map. The hero contains an automatic slideshow that moves between three distinct images. The company cards contain basic company information such as mission, purpose, promise, email, and phone number. The recent images display any new fish products that the company has recently put up for sale. The map section contains the location of the company as well as a google map embed.

<img src="weSellFish_files/about_hero.png" width="650"/>
<img src="weSellFish_files/about_info.png" width="650"/>
<img src="weSellFish_files/about_recent.png" width="650"/>
<img src="weSellFish_files/about_map.png" width="650"/>


### Frozen / Fresh Page
Both of these pages are similar. They contain the appropriate fish products for that page followed by a contact button that would lead the user to the 'Contact' page.

<img src="weSellFish_files/product1.png" width="650"/>
<img src="weSellFish_files/product2.png" width="650"/>


### Contact
Contact page contains a form to submit any orders or send any messages to the company employees. Following the contact page, the map section is placed again in order to ensure the user/customer knows exactly which company this is.

<img src="weSellFish_files/contact1.png" width="650"/>
<img src="weSellFish_files/contact2.png" width="650"/>


## Responsive View
Developed using mobile first development, website is responsive in that it offers both mobile to desktop views. The key difference between mobile and desktop view is that the Navigation menu is now a hamburger menu rather than a horizontal one. Other components on the page have been altered slightly in order to make them fit each new dimensions.

<span>
<img src="weSellFish_files/mobile_home.png" width="250"/>
<img src="weSellFish_files/mobile_nav.png" width="250"/>
<img src="weSellFish_files/mobile_info.png" width="250"/>
<img src="weSellFish_files/mobile_product.png" width="250"/>
<img src="weSellFish_files/mobile_contact.png" width="250"/>
</span>

## Potential Improvements
- NAV: All major NAV components are in working order, the only change I would make here is to make sure the cursor is a pointer and not its default cursor shape.
- FOOTER: No functional design change, only aesthetic. The color of the footer is too light for my liking, I would prefer a darker color in order to convey a more professional and mature look for the company website.


- HERO: While the automatic slideshow techinically works, I will be the first to admit that it is rather laggy and slow to move. In order to fix this, I would use a npm slideshow library that would streamline the process, in turn resulting in a better, and more intuitive, slideshow overall.
- RECENT_PICTURES: I would make it so if a customer/user wishes to view the information of a specific product, clicking on that pictrue redirects you to that product on its respective forzen/fresh page. Alternatively, if a customer/user hovers over any image, information on that product would appear overlayed such as price, name, and whether the item was currently in stock.


- MAP: I would go back to the google map API and learn how to add a pin to the embedded map. At the time, I wasn't able to figure it out, and the google API cost money to use. I'd find a different npm library and attempt to do the same.


- FROZEN/FRESH: I'd make each product component slightly smaller to allow more than three per row; perhaps four or five per row.


- CONTACT: Since there would be multiple salesmen at the company, I would like to allow the customer to choose from which salesman they would like to order from. Customers enjoy human to human connection, so providing these options would allow customers to know who exactly is in charge of their order.


- RESPONSIVE: I'd make the nav components smaller and would add a shadow to anything outside of the open burger menu. Perhaps change the placement of the nav title to the center rather than have it stick to the left corner.

## Built Using
- HTML
- CSS
- VSCode
- React + Vite
- NodeJS

## Contact
Any comments, questions, or concerns?\
Contact Jacqueline Molina: molina.jq19@gmail.com
