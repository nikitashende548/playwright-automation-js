const{defineConfig} = require('@playwright/test');
module.exports=defineConfig({
    use:{
        testIdAttribute:'data-test'
    }
});                                                                                                                                                                    