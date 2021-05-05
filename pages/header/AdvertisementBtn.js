const { element, by } = require("protractor");

class AdvertisementBtn
{
    closeBtn=$('.relative')
    .element(by.xpath('//button[@class="absolute top-0 right-0 p-2 text-white"]'))
async clickCloseBtn()
{
    await this.closeBtn.click();
}
}
exports.closeAd=AdvertisementBtn;