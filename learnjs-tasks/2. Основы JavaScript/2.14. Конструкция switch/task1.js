'use strict';

let browser = 'Edge'; 

if (browser === 'Edge') {
    console.log(`You've got the Edge!`)
} else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
    console.log('Okay we support these browsers too')
} else {
    console.log('We hope that this page looks ok!')
}