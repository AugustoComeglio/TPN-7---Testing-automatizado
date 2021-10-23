const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

describe('Eliminar Producto', function() {
    let driver
    beforeEach(async function() {
        //Abre el navegador
        driver = await new Builder().forBrowser('firefox').build();
        //Maximiza la ventana del navegador
        await driver.manage().window().maximize();
    });
    afterEach(async function() {
        //Cierra el navegador
        await driver.quit();
    });
   
   it('Eliminar Producto', async function() {
        //Va a esa direccion
        await driver.get("https://www.adidas.com.ar//camiseta-home-oficial-argentina/FS6568.html?pr=still_interested&slot=1");

        //Da un tiempo para que cargue la pagina
        await delay(3);

        //Click boton agregagar al carrito
        await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div/div/div[2]/div[2]/div[2]/section/div[3]/button')).click();

        //Da un tiempo para que cargue la pagina
        await delay(3);

        //click para ir a ver el carrito
        await driver.findElement(By.xpath('//*[@id="modal-root"]/div/div/div/div[2]/div/section/div[3]/a[1]')).click();

        //Da un tiempo para que cargue la pagina
        await delay(3);
   
        //Click boton eliminar producto
        await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div/div/div[2]/div/div/main/div[2]/div/div/div/div/div/div[2]/div[1]/div[2]/div/button')).click();

        //Da un tiempo para que cargue la pagina
        await delay(3);

        //verifica que se elimino el producto
        let texto = await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div/div/div[2]/div/main/h3')).getText().then(function(value){
             return value;
            });
        assert.strictEqual(texto,'EL CARRITO ESTÁ VACÍO');
    });

  });