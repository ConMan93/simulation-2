module.exports = {
    getProducts(appReq, appRes)   {
        let db = appReq.app.get('db');
        db.get_products().then(dbRes => {
            appRes.status(200).send(dbRes);
        }).catch(err => console.error(err))
    },
    getProduct(appReq, appRes)   {
        let db = appReq.app.get('db');
        productID = Number(appReq.params.id);
        db.get_product(productID).then(dbRes => {
            appRes.status(200).send(dbRes);
        }).catch(err => console.error(err))

    },
    createProduct(appReq, appRes)   {
        let db = appReq.app.get('db');
        let { name, price, img } = appReq.body;
        price = Number(price);
        db.create_product({name, price, img}).then(dbRes => {
            appRes.status(200).send(dbRes);
        }).catch(err => console.error(err));
    },
    updateProduct(appReq, appRes)   {
        let db = appReq.app.get('db');
        let { name, price, img } = appReq.body;
        let id = Number(appReq.params.id);
        price = Number(price);
        db.update_product({ id, name, price, img }).then(dbRes => {
            appRes.status(200).send(dbRes);
        }).catch(err => console.error(err));
    },
    deleteProduct(appReq, appRes)   {
        let db = appReq.app.get('db');
        let id = Number(appReq.params.id);
        // console.log('hi');
        db.delete_product(id).then(dbRes => {
            appRes.status(200).send(dbRes);
        }).catch(err => console.error(err));

    }
}