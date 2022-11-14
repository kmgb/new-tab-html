# New Tab HTML

This add-on overrides the default new tab page, allowing for custom HTML to be used. It enables absolute customization of the new tab page while still having the address bar highlighted.    

I recommend using this with Brave, as it will not complain about developer extensions like Chrome/Edge do. (as of 2021-01-27)  

Thanks to [Zach Adams](https://github.com/zach-adams) for the data storage synchronization code (options.js) – derived from their extension [Simple New Tab URL](https://github.com/zach-adams/simple-new-tab-url).

# Installation
## Chrome / Brave / Edge
This will not be posted to online extension stores due to the potential of Javascript attacks on inexperienced users.   
You may install it manually through the following steps:
1. Clone to your machine
2. Open chrome://extensions
3. Enable developer mode
4. "Load unpacked" pointing to the "src" directory of your cloned copy
5. Enjoy!

## Firefox
1. Clone to your machine
2. Open about:debugging#/runtime/this-firefox
3. Click "Load temporary add-on"
4. Locate and open the manifest.json file to load the extension
5. Enjoy :)

**NOTE**: Firefox doesn't support chrome://favicon images, you'll need to add base64-encoded images instead in the following code example.  
ie. `<img src="data:image/png;base64,iVBORw0K...">`

# HTML Example
Below is some starting code for your own custom New tab page:
```html
<style>
body {
    display: flex;
    place-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;
    max-width: 1080px;

    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
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

a {
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
        <img src="chrome://favicon/size/32@1x/https://youtube.com"/>
        <div>YouTube</div>
    </div>
</a>

<a href="https://github.com">
    <div class="topsite">
        <img src="chrome://favicon/size/32@1x/https://github.com"/>
        <div>GitHub</div>
    </div>
</a>

<a href="https://twitch.tv">
    <div class="topsite">
        <img src="chrome://favicon/size/32@1x/https://twitch.tv"/>
        <div>Twitch</div>
    </div>
</a>

<a href="https://messenger.com">
    <div class="topsite">
        <img src="chrome://favicon/size/32@1x/https://messenger.com"/>
        <div>Messenger</div>
    </div>
</a>

<a href="https://arstechnica.com">
    <div class="topsite">
        <img src="chrome://favicon/size/32@1x/https://arstechnica.com"/>
        <div>Ars Technica</div>
    </div>
</a>

<a href="https://wired.com">
    <div class="topsite">
        <img src="chrome://favicon/size/32@1x/https://wired.com"/>
        <div>Wired</div>
    </div>
</a>
```

# Known issues
## Chrome/Edge will request you to "disable developer extensions" on restart
**Brave does not have this annoying popup (as of 2021-01-27)**  
There isn't really a way to fix this without messing with group policies, and is there for security reasons. Although annoying, this warns users of a potential malware extension installed on their system.
