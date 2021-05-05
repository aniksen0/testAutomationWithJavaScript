const { browser,element, by, $ } = require("protractor");
const { protractor } = require("protractor/built/ptor");
describe("interac with inputs",()=>
{
    beforeAll(()=>
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://evaly.com.bd/career/")
        browser.manage().window().maximize();
    });
    afterEach(()=>
    {
        browser.sleep("300")
    });
    it("Closing advertisement img",async()=>{
     
        await $('.relative')
        .element(by.xpath('//button[@class="absolute top-0 right-0 p-2 text-white"]')).click();
    });
    it("Expanding all the Career",async()=>{
        
        let section = await element.all(by.xpath('//div[@class="flex items-center justify-between px-4 py-3 mb-4 bg-gray-200 cursor-pointer"]')).click();
        
    });
    
        
    it("Checking domain",async()=>{
    
        var namearr=[];
        var email=[];
        let name= await element.all(by.xpath('//h3[@class="mb-0 font-semibold"]')).getText();
        
        let hasdomain= await  element(by.xpath('//div[@class="flex-1 my-8 mr-10"]')).all(by.tagName("a")).getText();
        namearr.push(name);
        email.push(hasdomain);
        namearrLength=namearr[0].length;
        emailLength=email[0].length;
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
              
     //   console.log(hasdomain);
        // if(hasdomain.search(evaly.com.bd))
        // {
        //     console.log(`section {$section} has this domain`)
        // }
        // else
        // {
        //     console.log("section"+section+"doesn't have the domain");
        // }

        // var name= await element(by.xpath('//div[@class="flex items-center justify-between px-4 py-3 mb-4 bg-gray-200 cursor-pointer"]')).all(by.tagName("h3")).getText();
        // let hasdomain=await  element(by.xpath('//div[@class="p-6 mb-6"]')).all(by.tagName("a")).getText();
        //     console.log(name);
        //     console.log(hasdomain);
        
    });
    

})