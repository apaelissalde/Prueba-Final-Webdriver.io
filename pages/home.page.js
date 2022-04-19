import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get searchBar(){ return $('#search_query_top') }
   get submitBtn(){ return $('[type="submit"]') }
   get blouseProduct(){ return $('[title="Blouse"]') }
   get logo(){ return $('[title="My Store"]') }
   get homeText(){ return $('.homefeatured') }
   get dressesSelect(){ return $('[title="Dresses"]') }
   get casualDresses(){ return $('[title="Casual Dresses"]') }
   get signinBtn(){ return $('.login') }
   get cartBtn(){ return $('[title="View my shopping cart"]') }

   //-------------------------------------------------------------------------------------------------------//

    async searchElement(element) {
        await this.searchBar.setValue(element)
        await this.clickElement(this.submitBtn)
    }

    async clickLogo(){
        await this.clickElement(this.logo)
    }

    async hoverDresses(){
        await this.searchBar.moveTo()
    }

    async clickSigninBtn(){
        await this.clickElement(this.signinBtn);
    }

    async clickCartBtn(){
        await this.clickElement(this.cartBtn);
    }

}
export default new HomePage();