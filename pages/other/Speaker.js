const { protractor } = require("protractor/built/ptor");

class speaker
{
   #EC = protractor.ExpectedConditions;
   #speaker=element((by.xpath('//a[@href="/categories/speaker-2f615cf9a"]')));
   #name = element.all((by.xpath('//p[@class="BrandCard___StyledP-sc-1kq2v0k-1 bAWFRI text-sm font-semibold text-center cursor-pointer"]')));
async spearkerClick()
{
    var EC=protractor.ExpectedConditions;
    await this.#speaker.click();
}
async collectingName()
{
    this.#name.each(function(element, index) {
            
        element.getText().then(function (text) {
          console.log(index, text);
        });
      });
}
}
exports.speaker=speaker;