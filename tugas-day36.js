const { setTimeout } = require("timers/promises");
const puppeteer = require("puppeteer");

const BASE_URL = 'https://maxy.academy';

const maxy = {
    browser: null,
    page: null,

    initialize: async () => {
        maxy.browser = await puppeteer.launch({ headless: false });
        maxy.page = await maxy.browser.newPage();
        await maxy.page.goto(BASE_URL);
        await maxy.page.setViewport({ width: 1200, height: 650 });
    },

    login: async () => {
        
        // click login navbar
        const loginButton1 = '.button-primary-c.mx-2';
        await maxy.page.waitForSelector(loginButton1, { visible: true }); 
        await maxy.page.click(loginButton1);

        await setTimeout(2000);

        // input email & password
        // email dan pasword di isi manual pada di dalam ''
        await maxy.page.type('input[name="email"]', '',{delay:100});
        await maxy.page.type('input[name="password"]', '',{delay:100});

        await setTimeout(1000);

        // click masuk
        const loginButton2 = '.btn.btn-primary.w-100.mt-3';
        await maxy.page.waitForSelector(loginButton2, { visible: true });
        await maxy.page.click(loginButton2);

        await setTimeout(1000);

    },

    moveTo: async() => {
        // masuk ke course backend
        await maxy.page.goto('https://maxy.academy/lms/bootcamp/backend/1042');
        
        // lanjut course belajar
        const Course = '.btn.btn-primary.border-0.mt-4';
        await maxy.page.waitForSelector(Course, { visible: true });
        await maxy.page.click(Course);
    },


};

module.exports = maxy;  // Export the maxy object
