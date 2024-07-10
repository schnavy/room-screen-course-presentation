This is a HTML Boilerplate Structure, provided for the course "Is it a room in a screen or a screen in a room?" at Burg Giebichtenstein Halle

In the following you will find an expanding Cheatsheet for the HTML and CSS Basics, covered in this course.

## HTML / CSS Cheatsheet

### 1\. **Setup**

#### VS Code Installation

*   Download Visual Studio Code (VS Code) from the [official website](https://code.visualstudio.com/).
*   Follow the installation instructions for your operating system.
*   Recommended extensions for web development: Live Server, Prettier, ESLint.

#### Repository Structure

*   **`/index.html`**: The main HTML file.
*   **`/css`**: Folder for CSS files.
    *   **`/css/style.css`**: Main stylesheet.
*   **`/assets`**: Folder for images, fonts and other media.

### 2\. **HTML Elements and Structure**

The `<html>` Elements contains two main sections:
Inside the `<header>` you define metadata (`<meta>`), page title (`<title>`), links to stylesheets or favicons (`<link>`) . The Content of the `<header>` is not visible in the actual browser window.
Inside the `<body>` you will define all elements visible to the client inside the browser window.

It is important to use specific Elements for their purpose in order to make the website accessible by Screen Readers.

*   **Structuring Elements**: Use semantic elements to define different parts of your webpage.
    	* `<header>`: Defines the header of a page.
    	* `<nav>`: Defines navigation area.
    	* `<main>`: Specifies the main content of a webpage.
    	* `<section>`: Defines a section in a document.
   	* `<footer>`: Defines the footer for a document or section.

*  The most important **Content Elements** to know:
	* `<div></div>` General Purpose Container – by far most used one
	* `<p>...</p>`: paragraph for text
 	* `<span>`: A container for snippets inside a text body.
	* `<h1>...</h1> → <h5>…</h5>`: Headings
	* `<a href="">...</a>`: Links to subpages or external URLS
	* `<img src="" />`: Images

	* Tables
	```
	<table>
   		<tr>
    			<th>...</th>
    			<th>...</th>
  		</tr>
		<tr>
			<td>...</td>
			<td>...</td>
		</tr>
	</table>
	```
	* Forms:
	```
	<form>
		<imput type="" />
		<label>...</label>
	</form>
	```

### 3\. **Basic CSS**

*   **Selectors**: Target HTML elements to style them.
    *   `element`: Target by element name.
    *   `.class`: Target by class name.
    *   `#id`: Target by ID.
      
*   **Properties**: Define the appearance and layout of an element.
    *   `color`: Text color.
    *   `background-color`: Background color.
    *   `font-size`: Size of the text.
    *   `margin`: Space around elements.
    *   `padding`: Space inside elements.
    *   [All CSS Properties](https://www.w3schools.com/cssref/index.php).

### 4\. **Intermediate CSS: Colors, Typography and assets**

*   **Colors**: Can be specified by name, HEX, RGB, RGBA, HSL, HSLA.
    *   `color: red;` or `color: #FF0000;` or `color: rgb(255, 0, 0);`
      
*   **Typography**: Control the font and text properties.
    *   `font-family`: Typeface.
    *   `font-weight`: Boldness of the text.
    *   `line-height`: Distance between lines of text.
    *   `text-align`: Horizontal alignment of text.
      
*   **Assets**: Using images and fonts.
    *   `background-image: url('/path/to/image.jpg');`
    *   `@font-face { font-family: 'MyFont'; src: url('/path/to/font.woff'); }`

### 5\. **Intermediate CSS: Layout and Positioning**

*   **The Box Model**: Content, Padding, Border, Margin.
*   **Positioning**: Control the positioning of elements.
    *   `position: static | relative | absolute | fixed | sticky;`
        
    *   `relative`: The Element stays in the flow of the documents, but enables `top`, `right`, `bottom` and `left` to move the element relative to itself.
    *   `absolute`: The Element escapes the document flow. Using `top`, `right`, `bottom` and `left` you can position the element in relation to the next parent element.
      
    *   `fixed`: The Element escapes the document flow. Using `top`, `right`, `bottom` and `left` you can position the element in relation to the browser window. It stays in place ehile scrolling
    *   `sticky`: Like `absolute` but keeps sticking in relation to the window edge if `top`, `right`, `bottom` or `left` are defined
      
*   **Display Property**: Defines how an element is displayed.
    *   `display: block | inline | inline-block | flex | grid;`
      
*   **Flexbox**: A layout model for arranging elements in one-dimensional space.
    *   `display: flex;`
    *   `justify-content: center;`
    *   `align-items: center;`
      
*   **CSS Transitions**: Smoothly transition between CSS property changes.
    *   `transition: property duration easing-function delay;`

### 6\. **Responsive Design and Accessibility**

*   **Media Queries**: Adapt your site to different screen sizes.
    *   `@media (max-width: 600px) { ... }`
      
*   **Accessibility**: Make your site accessible to everyone.
    *   Use semantic HTML.
    *   Ensure sufficient contrast ratios.
    *   Use `alt` tags for images.
