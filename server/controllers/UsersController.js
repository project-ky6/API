const {db, collection, getDocs,getDoc,addDoc,doc, where,query, Timestamp} = require("../config")

class UsersController{
    index(req, res, next) {
        const data = async ()  => {
            const citiesCol = collection(db, 'Users');
            const citySnapshot = await getDocs(citiesCol);
            const cityList = citySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            res.send(cityList)
          }
          data();
    }

    show(req, res, next) {
        const uid = req.params.slug;
        const data = async ()  => {
            const q = query(collection(db, "Users"), where("Uid" , "==", uid));
            const querySnapshot = await getDocs(q);
            const cityList = querySnapshot.docs.map(doc => doc.data());
            if(cityList[0])
                res.json(cityList[0])
            else 
                res.json({});
          }
          data();
    }

    login(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;

        const data = async ()  => {
            const q = query(collection(db, "Users"), where("Username" , "==", username), where("Password" , "==", password));
            const querySnapshot = await getDoc(q);
            const cityList = querySnapshot.docs.map(doc => doc.data());
            res.send(cityList)
          }
          data();
    }
    
    sigin(req, res, next) {
        const data = async ()  => {
        const docData = {
            Uid: req.body.Uid,
            Name: req.body.Name,
            IsMember: false,
            PhoneNumber: req.body.PhoneNumber,
            Email:req.body.Email,
            Address:req.body.Address,
            CreatedAt: Timestamp.fromDate(new Date()),
        };
        await addDoc(collection(db, "Users"), docData);
        res.json({"message":"Thêm thành công"})
    }
    data();
    }
}

module.exports = new UsersController;