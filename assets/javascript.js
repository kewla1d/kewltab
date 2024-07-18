/* time */
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
  
    // Convert to 12-hour format
    h = h % 12 || 12;
  
    var m = today.getMinutes();
    var s = today.getSeconds();
  
    // Add a zero in front of numbers < 10
    m = checkTime(m);
    s = checkTime(s);
  
    document.getElementById('time').innerHTML = h + "<span id=timecolon>:</span>" + m;
  
    t = setTimeout(function() {
      startTime();
    }, 500);
  }
  
  startTime();


/* date */
function checkDate(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startDate() {
  var today = new Date();
  var eName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var mName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var e = eName[today.getDay()];
  var m = mName[today.getMonth()];
  var d = today.getDate();

  document.getElementById('date').innerHTML = e + ", " + m + " " + d;

  t = setTimeout(function() {
    startDate();
  }, 500);
}

startDate();



document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        'bg-img': document.getElementById('bg-img'),
        'clock-color': document.getElementById('clock-color'),
        'clock-colon': document.getElementById('clock-colon'),
        'clock-size': document.getElementById('clock-size'),
        'date-color': document.getElementById('date-color'),
        'date-size': document.getElementById('date-size'),
        'base-background': document.getElementById('base-background'),
        'base-border': document.getElementById('base-border'),
        'base-roundness': document.getElementById('base-roundness'),
        'base-shadow': document.getElementById('base-shadow'),
        'show-label': document.getElementById('show-label'),
        'sc-roundness': document.getElementById('sc-roundness'),
        'sb-background': document.getElementById('sb-background'),
        saveButton: document.getElementById('save-settings')
    };

    const cssVars = [
        'bg-img', 'clock-color', 'clock-colon', 'clock-size',
        'date-color', 'date-size', 'base-background', 'base-border',
        'base-roundness', 'base-shadow', 'show-label', 'sc-roundness', 'sb-background'
    ];

    // Load saved settings
    chrome.storage.local.get(cssVars, (result) => {
        cssVars.forEach(cssVar => {
            if (result[cssVar]) {
                document.documentElement.style.setProperty(`--${cssVar}`, result[cssVar]);
                const element = elements[cssVar];
                if (element) {
                    element.value = result[cssVar];
                }
            }
        });
    });

    // Save settings
    elements.saveButton.addEventListener('click', () => {
        const newSettings = {};
        cssVars.forEach(cssVar => {
            const element = elements[cssVar];
            if (element) {
                const value = element.value;
                document.documentElement.style.setProperty(`--${cssVar}`, value);
                newSettings[cssVar] = value;
            }
        });
    });

    // Debugging logs
    console.log('Customization menu loaded.');
    cssVars.forEach(cssVar => {
        const element = elements[cssVar];
        if (element) {
            console.log(`Default ${cssVar}:`, element.value);
        } else {
            console.warn(`Element for ${cssVar} not found`);
        }
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const openMore = document.querySelector('#more-button');
  const moreMenu = document.querySelector('#more-content');
  const closeMore = document.querySelector('#more-button-close');
  
  openMore.addEventListener('click', () => {
    moreMenu.classList.toggle('open');
  });
  closeMore.addEventListener('click', () => {
    moreMenu.classList.toggle('open');
  });

  const openCust = document.querySelector('#settings-open');
  const moreCust = document.querySelector('#settings-menu');
  const closeCust = document.querySelector('#settings-close');
  
  if (openCust && moreCust && closeCust) {
    openCust.addEventListener('click', () => {
      moreCust.classList.toggle('open');
    });
    closeCust.addEventListener('click', () => {
      moreCust.classList.toggle('open');
    });
  } else {
    console.error('One or more elements not found.');
  }
});
