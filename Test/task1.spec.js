const { closeAd } = require("../pages/header/AdvertisementBtn")
const { signfunction } = require("../pages/header/signinPage");
const { car } = require("../pages/other/Career");
const { speaker } = require("../pages/other/Speaker");
const { xiomi } = require("../pages/home/highPrice");
const closingad=new closeAd()
const login=new signfunction();
const speakernew=new speaker();
const career= new car();
const xiaomi=new xiomi();

describe("SignUp and collecting The speaker data",()=>
{
    beforeAll(()=>
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://evaly.com.bd/")
        browser.manage().window().maximize();
    });
    afterEach(()=>
    {
        browser.sleep("3000")
    })
    it("Closing Advertisement",async()=>{
            await closingad.clickCloseBtn();
    })
    it("Open Login Option",async()=>{
        await login.openLoginOption();
    })
    it("Entering Login credential",async()=>{
    await login.enterPhone("01630524832")
    await login.enterPassword("zpxtLwCA6AvA@$*");
    await login.clickLoginBtn();
    })
    it("Clicking Speaker option",async()=>{
        await speakernew.spearkerClick();
    })
    it("Collecting and printing all the name",async()=>{
       console.log( await speakernew.collectingName());
    })

    //going to the xiomi brand
    it("going to the xiomipage",async()=>{
        await xiaomi.clickxiomi()
    })
    it("evaluate the price",async()=>{
        await xiaomi.findThePrice()
    })
    it("going to the career Page",async()=>{
        await career.goingTotheCareer();
     })
     it("Expanding all the section",async()=>{
       await career.expandingAlltheSection();
     })
     it("Checking all the domain",async()=>{
       await career.checkingAlltheDomain();
     })

})