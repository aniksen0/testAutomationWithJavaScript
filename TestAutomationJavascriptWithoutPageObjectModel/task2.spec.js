const { browser,element, by, $ } = require("protractor");
const { protractor } = require("protractor/built/ptor");
// const testDataforMi=require('Mi.json');
// const testDataforHavit=require('Havit.json');
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
    });
    it("Closing advertisement img",async()=>{
     
        await $('.relative')
        .element(by.xpath('//button[@class="absolute top-0 right-0 p-2 text-white"]')).click();
    });

    it("selecting the speaker section",async()=>{
        // href="/categories/speaker-2f615cf9a"
        // https://evaly.com.bd/categories/speaker-2f615cf9a
        var EC = protractor.ExpectedConditions;
        element((by.xpath('//a[@href="/categories/speaker-2f615cf9a"]'))).click();
    });
    it("selecting the MI speaker section",async()=>{
        // href="/categories/speaker-2f615cf9a"
        // https://evaly.com.bd/categories/speaker-2f615cf9a
        var EC = protractor.ExpectedConditions;
        element((by.xpath('//a[@href="/brands/xiaomi-004a023b8?category=speaker-2f615cf9a"]'))).click();
    });
    
    it("Price evaluating MI speakers",async()=>{
        var linkarr=[];
        var price=[];
		var newprice=[];
        var productName=[];
        browser.sleep("3000")
        individualProduct= await element(by.xpath('//div[@class="slug__Grid-vcgsbx-0 hPFNJV pb-24 my-4 md:pb-4"]')).all(by.tagName("a")).getAttribute("href")
        linkarr.push(individualProduct);
        productprice=await element.all(by.xpath('//p[@class="Card___StyledP3-sc-1629dl9-2 bzqEqm"]')).getText()
        price.push(productprice);
        Name=await element.all(by.xpath('//p[@class="Card___StyledP4-sc-1629dl9-4 fWEsJX text-sm text-gray-800"]')).getText()
        productName.push(Name);
        console.log(linkarr)
        console.log(productName)
        console.log("eita replace korar agee"+price)
		console.log("eiita length")
		console.log(price.length)
		for(let i=0;i<price[0].length;i++)
		{
			var newpp=price[0][i].toString().replace("৳","0")
			newprice.push(newpp);
			console.log(newpp)
		}
		var high=0;
		index=0;
		for(let i=0;i<newprice.length;i++)
		{
			if(parseInt(newprice[i])>high)
			{
				high=parseInt(newprice[i]);
				index=i;
			}
		}
		console.log("Highprice="+high+" Link is "+linkarr[index]);
		var url=linkarr[0][index];
		browser.get(url);
   
        


    });


});