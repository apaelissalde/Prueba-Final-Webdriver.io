import CartPage from '../pages/cart.page';
import HomePage from '../pages/home.page'
import SigninPage from '../pages/signin.page';
import {products} from '../datos/products'

describe('My store', () => {
  beforeEach(async () => {
    await HomePage.open('/');})

  products.forEach((product) => {
  it(`should search a ${product.name}`, async () => {
    await HomePage.searchElement(product.name);
    await expect.toHaveTitleContaining(product.name);})
  })

  it('should redirect to the home page', async () => {
    await HomePage.clickLogo();
    await expect(HomePage.homeText).toExist();})

  it('should open options when we hover dresses', async () => {
    await HomePage.hoverDresses()
    await expect(HomePage.casualDresses).toExist();})

  it('should redirect to the login page', async () => {
    await HomePage.clickSigninBtn()
    await expect(SigninPage.createAnAccountText).toExist();})

  it('should redirect to cart page', async () => {
    await HomePage.clickCartBtn()
    await expect(CartPage.cartTitle).toExist();})
});
