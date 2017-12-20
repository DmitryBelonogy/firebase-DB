let database = firebase.database();

//data - данные передаваемые для записи в БД

function addData(data) {
  let key = database.ref().child('users').push().key;
  data = {
    id: key,
    ...data
  }
  database.ref('items/' + key).set(data);
  console.log('add');
}

function getData() {
  database.ref('items/').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

      let childData = childSnapshot.val();

      console.log(childData);    
    });
  });
}

function deliteData(id) {
  database.ref().child('items/' + id).remove();
  console.log('delite');
}