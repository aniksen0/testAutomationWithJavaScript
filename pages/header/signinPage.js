const { element, by } = require("protractor");

class signinPage{

    #loginBtn=element(by.xpath('//div[@class="flex items-center justify-end md:justify-between md:mx-0 md:mb-0 lg:ml-8"]')).element(by.xpath('//button[@class="flex items-center"]'))
    #phone=element(by.name('phone'))
    #pass=element(by.name('password'))
    #signinBtn=element(by.buttonText("LOGIN"));
   // #phoneCredential="01630524832";
    //#passcCredential="zpxtLwCA6AvA";
    async openLoginOption()
    {
        await this.#loginBtn.click();

    }
    async enterPhone(phone)
    {
        await this.#phone.sendKeys(phone);
        
    }
    async enterPassword(pass)
    {
        await this.#pass.sendKeys(pass);
    }
    async clickLoginBtn()
    {
        await this.#signinBtn.click();
    }

}
exports.signfunction=signinPage;