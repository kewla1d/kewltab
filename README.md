# kewltab
a customizable new tab page made by kewlaid based on apple's visionos

## installation guide
1. download this as a zip <br>
2. unzip this
3. click on the puzzle icon to the right of the the chrome URL bar <br>
4. click "manage extensions" <br>
5. enable the "Developer Mode" switch in the top right  <br>
6. click "Load Unpacked" <br>
7. select the zip you just download <br>
8. open a new tab and enjoy :)

## customize
### edit the styling
    1. open the "customize.css" file
    2. read through and customize to your liking!

### add and/or edit shortcuts
    1. open the "index.html" file
    2. look at for the "<a>" tags with "<!-- Shortcut -->" labelled above them
    3. copy this code:
        > ``<a class="shortcutlink" target="_blank" 
            href="! where the shortcut leads to here">

            <!-- Shortcut Icon -->
            <img src="! link to an image here">

            <!-- Shortcut Label -->
            <p>! the label of your shortcut here</p>
        </a>``
    4. paste the code right under the lowest shortcut
    5. edit all the areas where you see an exclamation mark. for example, you would paste the link to the website where you want the shortcut to lead to at "! where the shortcut leads to here."   **make sure to keep the quotation marks.**
