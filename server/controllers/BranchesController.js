const {db, collection, getDocs, getDoc, doc} = require("../config")

class BranchesController{

     // [api/branches]
    index(req, res, next) {
        const data = async ()  => {
            const branCol = collection(db, 'Branches');
            const branSnapshot = await getDocs(branCol);
            const branches = branSnapshot.docs.map(doc =>({id: doc.id, ... doc.data()}));
            res.json({branches})
          }
          data();
    }


    // [api/branches/:slug]
    show(req, res, next) {

        const id = req.params.slug;

        const data = async ()  => {
            const docRef = doc(db, "Branches",id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                res.json({"id": id, ...docSnap.data()})
              } else {
                next();
              }
          }
          data();
    }
}

module.exports = new BranchesController;