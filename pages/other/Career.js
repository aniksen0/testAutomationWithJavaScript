const { browser } = require("protractor");

class Career{
    #url="https://evaly.com.bd/career/";
    #allSection=element.all(by.xpath('//div[@class="flex items-center justify-between px-4 py-3 mb-4 bg-gray-200 cursor-pointer"]'));

    async goingTotheCareer()
    {
        await browser.get(this.#url);
    }
    async expandingAlltheSection()
    {
        await this.#allSection.click();
    }

    async checkingAlltheDomain() {
        var namearr=[];
        var email=[];
        let name= await element.all(by.xpath('//h3[@class="mb-0 font-semibold"]')).getText();
        
        let hasdomain= await  element(by.xpath('//div[@class="flex-1 my-8 mr-10"]')).all(by.tagName("a")).getText();
        namearr.push(name);
        email.push(hasdomain);
        let namearrLength=namearr[0].length;
        let emailLength=email[0].length;
       console.log(namearrLength);
       console.log(emailLength);
       console.log(email[0]);
       console.log(namearr[0]);
        //uporer gula kaj korteche
        if(namearrLength==emailLength)
        {
            for(let i=0;i<namearrLength;i++)
            {
                if(email[0][i].search("evaly.com.bd"))
                {
                    console.log(`Position Name: ${namearr[0][i]} has email: ${email[0][i]}`);

                }
                else
                {
                    console.log(`this email ${email[0][i]} doesn't has required domain`);
                }
                        }
            
        }
        else
        {
            console.log("Some position missing email");
        }
    }
}
exports.car=Career;