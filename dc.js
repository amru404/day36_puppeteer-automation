const { setTimeout } = require("timers/promises");
const puppeteer = require("puppeteer");

const BASE_URL = 'https://discord.com';

const discord = {
    browser: null,
    page: null,

    initialize: async () => {
        discord.browser = await puppeteer.launch({ headless: false });
        discord.page = await discord.browser.newPage();
        await discord.page.goto(BASE_URL);
        await discord.page.setViewport({ width: 1200, height: 650 });
    },

    login: async () => {
        
        // click login
        const loginButton = '.button-white.login-button-js.w-button.hide-on-mobile';
        await discord.page.waitForSelector(loginButton, { visible: true }); 
        await discord.page.click(loginButton);
        // await discord.page.waitForNavigation();
        await discord.page.setViewport({ width: 1100, height: 650 });


        await setTimeout(10000);

        // input login
        // email dan password di sesuaikan akun kalian
        await discord.page.type('input[name="email"]', '',{delay:100});
        await discord.page.type('input[name="password"]', '',{delay:100});

        await setTimeout(1000);

        // click login lagi
        const loginButtonSelector = '.marginBottom8_f7730b.button_b83a05.button_dd4f85.lookFilled_dd4f85.colorBrand_dd4f85.sizeLarge_dd4f85.fullWidth_dd4f85.grow_dd4f85';
        await discord.page.waitForSelector(loginButtonSelector, { visible: true });
        await discord.page.click(loginButtonSelector);

        await setTimeout(1000);

    },


    // serverID dan ChannelID bisa di sesuaikan
    // https://discord.com/channels/ServerID/ChannelID
    moveTo: async() => {
        await discord.page.goto('https://discord.com/channels/1300848697298518038/1300848697298518041');
        await setTimeout(3000);
        await discord.page.type('div[data-slate-node="element"]','welcome gaess',{delay:100});
        await discord.page.keyboard.press('Enter');
    },


};

module.exports = discord;  // Export the discord object
