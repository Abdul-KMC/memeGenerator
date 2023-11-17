# memeGenerator

CiC Meme Generator
Welcome to the CiC Meme Generator, a fun tool to create hilarious memes on the fly! Here's a quick guide on how it works:

Getting Started
Loading Meme Templates:

Upon visiting the website, a GET request is automatically made using the fetch() function to the "https://api.imgflip.com/get_memes" API endpoint.
This request fetches a variety of meme templates to kickstart your creativity.
Creating Your Meme:

You'll find a collection of meme templates loaded on the page, each with its unique identifier and image.
Enter your witty captions in the "Text 0" and "Text 1" input fields for your selected meme.
Click the "Create" button to unleash the humor!
Posting Your Meme:

Upon clicking "Create," a POST request is triggered using the fetch() function to the "https://api.imgflip.com/caption_image" API endpoint, with the entered text and the meme's unique identifier.
The success message is printed to the console with the URL for the users custom meme if the POST request is successful.
Any issues encountered during the process will be logged as error messages in the console.
Now you're all set to express your creativity and share laughs with your custom memes! Feel free to experiment with different templates and captions. Enjoy meme-making!
