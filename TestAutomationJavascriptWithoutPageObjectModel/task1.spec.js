const { browser,element, by, $ } = require("protractor");
const { protractor } = require("protractor/built/ptor");
const fs=require("fs");
describe("interac with inputs",()=>
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
    
    it("Closing advertisement img",async()=>{
     
        await $('.relative')
        .element(by.xpath('//button[@class="absolute top-0 right-0 p-2 text-white"]')).click();
    });
    it("Clicking the login svg icon",async()=>{
     
        await element(by.xpath('//div[@class="flex items-center justify-end md:justify-between md:mx-0 md:mb-0 lg:ml-8"]'))
        .element(by.xpath('//button[@class="flex items-center"]')).click();
        // await element(by.className(".p-2.bg-white.rounded-full.shadow")).click();
        // $('button[type="submit"]')

    });

    
    it("entering login credential",async()=>{
        
        await element(by.name('phone')).sendKeys("01630524832");
        await element(by.name('password')).sendKeys("zpxtLwCA6AvA@$*");
        await element(by.buttonText("LOGIN")).click();
        // await element(by.className(".p-2.bg-white.rounded-full.shadow")).click();
    });
    it("selecting the speaker section",async()=>{
        // href="/categories/speaker-2f615cf9a"
        // https://evaly.com.bd/categories/speaker-2f615cf9a
        var EC = protractor.ExpectedConditions;
        element((by.xpath('//a[@href="/categories/speaker-2f615cf9a"]'))).click();
    });
    // BrandCard___StyledP-sc-1kq2v0k-1 bAWFRI text-sm font-semibold text-center cursor-pointer
    it("Collecting all the speakers name and saving in a JSON file",async()=>{
        // href="/categories/speaker-2f615cf9a"
        // https://evaly.com.bd/categories/speaker-2f615cf9a
        let namearray=[];
        let name= await element.all((by.xpath('//p[@class="BrandCard___StyledP-sc-1kq2v0k-1 bAWFRI text-sm font-semibold text-center cursor-pointer"]'))).getText();
        var position= await element.all((by.xpath('//p[@class="BrandCard___StyledP-sc-1kq2v0k-1 bAWFRI text-sm font-semibold text-center cursor-pointer"]'))).getLocation();
        namearray.push(name);
        element.all(by.xpath('//p[@class="BrandCard___StyledP-sc-1kq2v0k-1 bAWFRI text-sm font-semibold text-center cursor-pointer"]')).each(function(element, index) {
            
            element.getText().then(function (text) {
              console.log(index, text);
            });
          });
        console.log("*******Location**********")
        console.log(position[0].x); //undefined keno bolteche :(
        
        let data=
        {
            "brand Name":name,
            "Position":position[0].x,
            
        }
        fs.writeFileSync("brandData.json",JSON.stringify(data),(err)=>{
            if(err)
            {
                console.log(err);
            }
        })
    });
})