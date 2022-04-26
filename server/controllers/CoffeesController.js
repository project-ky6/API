const {db, collection, getDocs,getDoc, doc} = require("../config")
const { getStorage, ref, getDownloadURL } = require("firebase/storage");

class CoffeesController{
    index(req, res, next) {
        const data = async ()  => {
            const coll = collection(db, 'Coffees');
            const cofDoc = await getDocs(coll);
            const cofList = cofDoc.docs.map(doc => doc.data());
            res.send(cofList);
          }
          data();
    }
}

module.exports = new CoffeesController;