const {db, collection, getDocs,getDoc, doc} = require("../config")

class CategoriesController{
    index(req, res, next) {
        const data = async ()  => {
            const coll = collection(db, 'Categories');
            const cateDoc = await getDocs(coll);
            const cateList = cateDoc.docs.map(doc => ({id: doc.id, ...doc.data()}));
            res.json(cateList)
          }
          data();
    }

    show(req, res, next) {
        const id = req.params.slug;
        const data = async ()  => {
            const docRef = doc(db, "Categories", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                res.json({'id': id, ...docSnap.data()});
              } else {
                next();
              }
          }
          data();
    }
}

module.exports = new CategoriesController;