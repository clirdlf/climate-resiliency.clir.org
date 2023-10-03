const wcID = (selector) => document.getElementById(selector);

// const wcU = encodeURIComponent(window.location.href)
const wcU = encodeURIComponent('https://climate-resiliency.clir.org/');

const newRequest = function (render = true) {
    // Run the API request because there is no cached result available
    fetch('https://api.websitecarbon.com/site?url=' + wcU, { mode: 'no-cors'})
    fetch(url)
        .then(function (r) {
            if (!r.ok) {
                throw Error(r);
            }
        
            return r.json();
        })

        .then(function (r) {
            if (render) {
                renderResult(r)
                console.log('render', r);
            }

            // Save the result into localStorage with a timestamp
            r.t = new Date().getTime()
            localStorage.setItem('wcb_'+wcU, JSON.stringify(r))
        })

        // Handle error responses
        .catch(function (e) {
            wcID('wcb_g').innerHTML = 'No Result';
            console.log(e);
            localStorage.removeItem('wcb_'+wcU)
        })
}

const renderResult = function (r) {
    wcID('wcb_g').innerHTML = r.c + 'g of CO<sub>2</sub>/view'
    wcID('wcb_2').insertAdjacentHTML('beforeEnd', 'Cleaner than ' + r.p + '% of pages tested')
}

// Get the CSS and add it to the DOM. The placeholder will be filled by gulp build
const wcC = '{{css}}';
const wcB = wcID('wcb');

if (('fetch' in window)) { // If the fetch API is not available, don't do anything.
    wcB.insertAdjacentHTML('beforeEnd',wcC)

    // Add the badge markup
    wcB.insertAdjacentHTML('beforeEnd', '<div id="wcb_p"><span id="wcb_g">Measuring CO<sub>2</sub>&hellip;</span><a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</a></div><span id="wcb_2">&nbsp;</span>');

    // Get result if it's saved
    let cachedResponse = localStorage.getItem('wcb_' + wcU)
    const t = new Date().getTime()

    // If there is a cached response, use it
    if (cachedResponse) {
        const r = JSON.parse(cachedResponse)
        renderResult(r)

        // If time since response was cached is over a day, then make a new request and update the cached result in the background
        if ((t - r.t) > (86400000)) {
            newRequest(false)
        }

    // If no cached response, then fetch from API
    } else {
        newRequest()
    }
}
