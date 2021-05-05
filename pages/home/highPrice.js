const { browser, element } = require("protractor");

class highPrice{
    #SelectSpeaker=element((by.xpath('//a[@href="/categories/speaker-2f615cf9a"]')));
    #SelectXiomi=element((by.xpath('//a[@href="/brands/xiaomi-004a023b8?category=speaker-2f615cf9a"]')));

    async clickSpeaker()
    {
        await browser.get(this.#SelectSpeaker).click()
    }
    async clickxiomi()
    {
        await this.#SelectXiomi.click()
    }
    async findThePrice()
    {
        var linkarr=[];
        var price=[];
		var newprice=[];
        var productName=[];
        browser.sleep("3000")
        var individualProduct= await element(by.xpath('//div[@class="slug__Grid-vcgsbx-0 hPFNJV pb-24 my-4 md:pb-4"]')).all(by.tagName("a")).getAttribute("href")
        linkarr.push(individualProduct);
        var productprice=await element.all(by.xpath('//p[@class="Card___StyledP3-sc-1629dl9-2 bzqEqm"]')).getText()
        price.push(productprice);
        var Name=await element.all(by.xpath('//p[@class="Card___StyledP4-sc-1629dl9-4 fWEsJX text-sm text-gray-800"]')).getText()
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
		var index=0;
		for(let i=0;i<newprice.length;i++)
		{
			if(parseInt(newprice[i])>high)
			{
				high=parseInt(newprice[i]);
				index=i;
			}
		}
		console.log("Highprice="+high+" Link is "+linkarr[0][index]);
		var url=linkarr[0][index];
		browser.get(url);

    }
}
exports.xiomi=highPrice;