# New Tab HTML

This add-on overrides the default new tab page, allowing for custom HTML to be used. It enables absolute customization of the new tab page while still having the address bar highlighted.  


Thanks to [Zach Adams](https://github.com/zach-adams) for the data storage synchronization code (options.js) – derived from their extension [Simple New Tab URL](https://github.com/zach-adams/simple-new-tab-url).

---
<a href="https://addons.mozilla.org/addon/new-tab-html/" rel="nofollow"><img src="https://user-images.githubusercontent.com/25809479/201961388-d7e0310f-23c5-4cd1-bc90-db1262712632.svg" width="172" alt="Get New Tab HTML extension for Firefox"></a>

---

# Installation
## Firefox
1. Install the add-on from the [Firefox AMO](https://addons.mozilla.org/addon/new-tab-html/)
2. Enjoy :)

**NOTE**: See example-firefox.html for a good starting point for this browser. Firefox doesn't support chrome://favicon images, so you'll need to add base64-encoded images instead.
ie. `<img src="data:image/png;base64,iVBORw0K...">`

## Chrome / Brave / Edge
Of these three, I recommend using this with Brave, as it will not complain about developer extensions like Chrome/Edge do. (as of 2021-01-27)  
You may install it manually through the following steps:
1. Clone to your machine
2. Open chrome://extensions
3. Enable developer mode
4. "Load unpacked" pointing to the "src" directory of your cloned copy
5. Enjoy!

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
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSUlEQVRYhe2WTUtUURjHf+fOnTvTGzGMQ9BYTjVIlBDVxl4oatHGlYJfwL5BCOp3cNNWXLhwkwStCyEwImlQQ03mBbN8m2hKbIxmOnfGp4UkWnSZM2PTQn9wduf//P/33uee88AB+x1lsllEFGB5bVFKbVYd4H5T0+VWpVqjImfPKRXxQSgAR6MQVBAEbMAB5C+1yoAG3AL8yEIR+PYd1hdFPmcta3EGph8uLLzYVeMEHHkCQ5tQFpB/vSbh+QU4vZ38GQzVw3jnSsIY4HAPrgqU6h1AQNrhrnUDbgI+k8bZK27BNasZzv8Pc4A4NFtNEDVSRSLQ1wehUM0BwnCSDLw0+naRiIjrimQyIh0dNfXAB5gkCTNGwoYGkVxOthkZEYnHqwqwCimLrYOlejo7IZGA7m5wzEoJHCYFyZrewE6mpkTa2iqulYVVy294H3gSi0G08p62AEvvlfngILS0wMBAxZISiC1Qqsl4YgJ6e2F01FgqUCQN48Y9oLVIPi/S0yMSCFT9G67AtL0Ba0axfT4YHob+fpibM37qnWRh3Z6H1SsmqlwOurpqMv7FV/hovYO0kWrTaODxJA3z1msY37OKhryBBIB/Gp7WexbIwtsGOAbAJYjOwli9zFdg9g5chN2noP3AcdqvK3W7Ec6cEgkrpY47cCi8dV/42RpKvYcXpUqIlAH3C2gNBZTKL4msfYKlhFKvHhWLj1Ow8XuAPxAR3/LystOotUMgYKO1jW17B9C6RDBYplBw39u2jsVirlKq7Kk5YF/zE0TQuB5oNz7XAAAAAElFTkSuQmCC'/>
        <div>YouTube</div>
    </div>
</a>

<a href="https://music.youtube.com">
    <div class="topsite">
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsElEQVRYhc1X7XVCIQy9doG+DdQJZAScQEZwBEdgBEdwBDdQN8AJxA3oBOmPPOyTPgI9VTHn5Bch9+aDAEClEKAIsAQcCaCMHnsbVeu3BnhNgBNAc+oIWP8HeFaItlaPBMz+Cm4ICA8AjxoIMLXg6wcCpyqXpI/8WeBR7zIxGdYcgAPwWUyTMYBKGt05YL+vSfIXADUBfBq93HBdR2QtUQh0E+dYo4TANl1XbMwUXK67UkTeM8huR2TMbxtjeI2IbZWq7weSzrlSHFkIRFqXa6z1j71MwkVwJabd+xpn46S9L5VDgXh0jhtYyykdRq410XZbrrPWvNdayc7KzRcC13XMcQhEm41MYrdjO6kZs4vGMFDacJFAFO/zvZHzMdCP7GmN57x0tqdT4HBgu1ky8uPedGYMJE8AAM5nGXwoqxVwuQDWAl1X7UMm8AKRCSwW9Z5OJ2A+5wyEUO0jT8DxnIAp3KLXK7BcAloD/n683/ZGX2PyDsew+SBqO4r7MrS7jHoCba/jYjPGcjzhQfI+T7KexMsfpWMk2j3Lk0y0+ZgMSLT7miVE2nxOR4g85Xv+DTyym+5sY/4gAAAAAElFTkSuQmCC'/>
        <div>YTMusic</div>
    </div>
</a>

<a href="https://github.com">
    <div class="topsite">
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDUlEQVRYhbVW7VXDMAw8ZwGyAWECsgHZgGwAG8AGhAnoBpQNYALKBC0T0E6QdILjh51Xo0r55t7LHynSyZYsyWEESJYAbgFkAFIAeVDtADQA9gDenXMfY/z2kWYkX0nWHI462KRzyauRxFogT1OIU5LbGcQSWw69DZI5553aQk0yl3xOnhzAD3yB/QcaAFfOuaYVJIL8U5B/A3gDcJhAdgi2X5Gs5TgHfcFJ3Ef6e5L7SLcRXxPkjbArFb+VJM+o570Q/6VaHoWfVMhyox7S+Ke1UTjFGctIhKA0rIFTDZSGfTY3AJy6pcRtG6GWozaXs19DSNve4CgT2Kd/jJ/LVAQflaEuQF/BGhbtBQbHJoHedI5LnF7gS5FdJACuFUW9MLmFPDEUS1T/IJ8JjDa7dA0AuFRkhwR+i9FgvY7RoN+kNOwT+HVKw91SAQB4NOS7rkZEkpbhYNAPMQtl26majp/Gr1Qncm3Ctjh1Wv4dRlW4lV0k+yH5QvJmAGlB8iHYdGEVG8UTq6YfoakIooVVMyD53kMaI5PG8XXVIaiM5+kxXwf12a9Bnw3ixOsgS0NwFaNNpyOIPpg3qBWkuf1MDOBsxDvFQQ5gA+AiiNaImpVz7rkvAEN1BFA45+wbiJxYBWg5/xOAdu3y5INA5R1PCMBaRgYHkZFchfz17gjtf/S9ZbmpGtLS65DKat6FX3k/Lk/amtkQAAAAAElFTkSuQmCC'/>
        <div>GitHub</div>
    </div>
</a>

<a href="https://twitch.tv">
    <div class="topsite">
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABGUlEQVRYhe2XOxKCMBRF73PcmA1swxWoWYG6AgdsbBnpbRUax46OJbAEa4rEwhnlE0ggQBpuxSfDOXmBl4HQkrMj9hw4tI3pm21EBAALG/BilrrwzWMYoO+Wz2sVmGrmUoGp4SUBG/CSQF+479bXte16o4CtzAKzgHUBaSvukqYWrdu6rVdgUoHXxaJAEgLp7XvMgeOkAkkIJNc/nEX0a/vGL2EnuIDHYirtOaNWoDLzgMW0q47RrkB1Zyt+ZkWQLBwIWERr2T3jCqjgAFLkqM18EAEdOM+xYk96Dy6gAc9UcDMBFXyhhhsJKOF3ynQGk+5TPUcIU5gsJhVITeFA/06ofLtHE2hrKn3SaQm4gDckvFNOjhjlr+kDgCN7fLtYAaQAAAAASUVORK5CYII='/>
        <div>Twitch</div>
    </div>
</a>

<a href="https://arstechnica.com">
    <div class="topsite">
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEf0lEQVRYhb2WaWxUVRTHf+fNm+m0U6jQIYUBAwoqRCiWqEEgSGVrDK5hESObC5JAUBENKiRGP/BBgyaCCaZCad2wEtBo1ETEhCCLooJBbUFBqdChC907y5t3/PCmi/TRTgjtSV7ecs69v/89997zrpCi6cJQEG98GmpPBRkDDAX8SXcUqAT+QNhPjO/ko+pzqfQrPYIXZY8BVoA8CAxLUW8VsAeDrbKj+ugVCdClI/wkmteCPgMMTBF8qbUAm/FYG6Wori5lAfpwzvV4EoVA/hWCL+mQo3jsJbKj9kSPAnRp9mgS8ilw41WBd1gFYs+X4tqDlxWgywZeS8LYi3LDVYa30c4h9qzOmTDa4fPwYRnbeg0OoISwjRKdNyCriwDSgquBGb0G77A80j3r214Ekqm3jJ+AYB8IAIjgkTukqOoXJwOWLO9DOICfhK4CEH002I84PwMju22iCtJj3WoLTt67i5ca4pprErMnIoY7XBUizaAJMEywE2B6IS0DEnGItYI3HaIt4PWB1w+tTR1c2wZ/wGnbLqq982y8Ot3EMCZ38bXBDQMmz4W8AjRrEFJfBV9vhZM/wPCxaO50ZF8x3LcGGmvhy7chfzF6+73OGE8fg2+2QcvFpIguWZhioDrWdfS2BYFr0Aeeh8wBSEUZjJwAz+2EjP6QlQPzN8ALe2DOalQEpixAn3gLLoaRhmp00lzIDoEVd58FZbSJymDXqfJ4obkeWZ8P9TXg80H+Elj5DuRcB5EmxB9wMvXsrUjFKXiqEGlpgJ2vwvl/kH4ZkJ4JvnR3AUKOidDP3QtEm9GxdyJ3r0KHjEL8mc46EMO5EhYUrYXwGQgEYF8x5M2GLSeg/DB8WwRHPnMG476AMw23r+3w8TNh3W5oqEY2LYOtKzt2g4izyKwo+PyQFoCyQ/DiVCheB5YFT5fAzMch0nQ5ihpAvavLisNtc6AuDG8shl8POKn3mI6IZA4xPM5jIo6OyAUrBru2wEsFThZumZWMd1vpNJkI5119homUHYIZj8GGz500hpK/CcPjXF6vMxUoRJth9pNoXgFSdtDJyojxsH2Ns5vca0Kl5+XcwE3AXV1cphfOnoDKv2BgCE4fhw82oOdOImeOQWsjWhdGyo9APAKmD/n7ONJQBQOGQKwFPtkIh3c7tcJ1DcgXoo8EpyHsc52GzoUIcUYVjzqFCByfP7PTNMQg2gpqOwM2TKcQXa4iqiwQnTcsHX/kKDDGParX7AJ4xhlSWtGKynt9DAd0p5SELzjbMCHvAv/2Ib0Rkc2QPJDIhxfCKK/0oYDXpbi6vF0AAKOqC0F39QF8PxH/a20vlxxKBw/Csr4CJvQS/E885gwpqjzT9uF/pVi2V1Zh2vcDP/YCvBz0ns7wLgIcEbVnsYw5QOlVQwt7wVMgJTW/d3V1Y7oouAJYBwy/QnQY9E0iNZuklJi7th5MHwqGMGUpwkLQm1NpA5xC9GPULJSS8OnuAlM9ZaLLQxm0RieCMQnRcdgMRbR/0t0IRiXYv6HGATTxvbxf25BKv/8BvX6UDc2E7H0AAAAASUVORK5CYII='/>
        <div>Ars Technica</div>
    </div>
</a>

<a href="https://wired.com">
    <div class="topsite">
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB70lEQVRYhe3Xz05TURDH8Q//7KYtENiQspew4R2IewkrhbX6RhJ1TZS3kATfAKNdSkIkaEtL/9Dbf7g456YxsUDUpJeE2Zzk3Lm5v/nOnDNzp3BtgjY9yY8/CIDZcQ9yuRwoFoqgVq+BXq/3XwVkl8D6+jrYefYcHH8+Bh8ODkA+nwfNZhMkSfJXArJLYG5uDiwuLoJSqQRWVlbAqxcvQb1eB2/evQXD4RCjWmm32zcKyC6BXjdEUKuFCC8vG2BmOmieL4bTsbS0hBGp3Z1dsLwc9l/v7YFyufzH72SYQL8Pmq1Q5Wku+/0BqF5cgOlIJM39fKEA1h6vYURmnGWXwGAQCLRi5J1OJ+wPA4FGo/mbf78X/CuVCjg9PQ3vXV3dKCDDBGJOO0k3ruGmGw7CfqvdAtdxmhgMApl6I5yWys9AIul2bxSQXQJJJ0ScdMM6Mxtc87HKOzGyQTwtaW20WoHMxR27Z3YJnJx8A+/398HTrS2wvb0NrmPyv5+dgUI+kEm7YiN2yX4kNM6ySyCNsNkMVV2tVsFqaRUcHn4ExdgTUkK5R2GSOv9xjtvnhIkTmHLH/4J0RizEiOu1UOUbGxtgc/MJKH/9Ao4+HQW/OC+Mq4X7Q2CcpZPTwsICRj2jEW/E2+z+E/hXmziBBwG/AEFw0G8fjrBfAAAAAElFTkSuQmCC'/>
        <div>Wired</div>
    </div>
</a>

```

# Known issues
## Chrome/Edge will request you to "disable developer extensions" on restart
**Brave does not have this annoying popup (as of 2021-01-27)**  
There isn't really a way to fix this without messing with group policies, and is there for security reasons. Although annoying, this warns users of a potential malware extension installed on their system.
