const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

describe('Agregar Producto', function() {
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
   
     it('Agregar Producto', async function() {
         
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
        
       //verifica que hay un producto agregado al carrito
      let texto = await driver.findElement(By.xpath('//*[@id="app"]/div/div[1]/div/div/div/div[2]/div/aside/div[2]/div[1]/div/div[2]/div/div/div[1]/span[1]')).getText().then(function(value){
            return value;
             });
         assert.strictEqual(texto,'1 PRODUCTO');

    });

});
 

//-----COMANDO PARA INSTALAR LIBRERIAS
//npm install selenium-webdriver
//npm install mocha
//npm install mochawesome

//-----COMANDO PARA EJECUTAR
//npx mocha --no-timeouts 'test/agregarProducto.js'

//-----COMANDO PARA EJECUTAR (Todos juntos(ejecuta de a uno))
//npx mocha --no-timeouts 'test/*.js'

//-----COMANDO PARA EJECUTAR (Todos juntos(ejecuta los test en paralelo))
//npx mocha --no-timeouts --parallel 'test/*.js'

//-----COMANDO PARA EJECUTAR (Todos juntos), genera un reporte con un html para verlo en la web)
//npx mocha --no-timeouts --reporter mochawsome --requiere mochawsome/register 'test/*.js'


