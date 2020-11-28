# New Tab HTML

This is a fork of https://github.com/zach-adams/simple-new-tab-url, allowing for custom HTML to be inserted into the New tab page instead of redirecting to a webpage. It allows for absolute customization of the new tab page while still having the address bar highlighted.    

This will not be posted to online extension stores due to the potential of Javascript attacks on inexperienced users.   
You may install it manually through the following steps:
1. Clone to your machine
2. Open chrome://extensions
3. Enable developer mode
4. "Load unpacked" pointing to the "src" directory of your cloned copy
5. Enjoy!

Below is some starting code for your own custom New tab page:
```html
<style>
body {
    display: grid;
    place-items: center;
    height: 100vh;
    margin: 0 auto;
    grid-auto-flow: column;
    max-width: 1080px;
}

.topsite {
    display: grid;
    grid-template-rows: 1fr auto;
    place-items: center;
    gap: 1em;
    padding: 1em;
    border-radius: 0.5em;
    width: 75px;
}

.topsite:hover {
    background: #dddddd22;
}

a{
    text-decoration: none;
    color: inherit;
}

img {
    width: 32px;
    height: 32px;
}
</style>

<a href="https://youtube.com">
    <div class="topsite">
        <img src="chrome://favicon/size/64@0.5x/https://youtube.com"/>
        <div>YouTube</div>
    </div>
</a>

<a href="https://github.com">
    <div class="topsite">
        <img src="chrome://favicon/size/64@0.5x/https://github.com"/>
        <div>GitHub</div>
    </div>
</a>

<a href="https://twitch.tv">
    <div class="topsite">
        <img src="chrome://favicon/size/64@0.5x/https://twitch.tv"/>
        <div>Twitch</div>
    </div>
</a>

<a href="https://messenger.com">
    <div class="topsite">
        <img src="chrome://favicon/size/64@0.5x/https://messenger.com"/>
        <div>Messenger</div>
    </div>
</a>

<a href="https://arstechnica.com">
    <div class="topsite">
        <img src="chrome://favicon/size/64@0.5x/https://arstechnica.com"/>
        <div>Ars Technica</div>
    </div>
</a>

<a href="https://wired.com">
    <div class="topsite">
        <img src="chrome://favicon/size/64@0.5x/https://wired.com"/>
        <div>Wired</div>
    </div>
</a>
