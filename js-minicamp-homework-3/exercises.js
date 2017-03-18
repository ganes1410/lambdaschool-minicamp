'use strict';

//Do not change any of the function names

function makeCat(name, age) {
  //create a new object with a name property with the value set to the name argument
  //add an age property to the object with the value set to the age argument
  var makeCat = {
    name:name,
    age:age,
    meow:function() {
      return 'Meow!';
    }
  };
  return makeCat;
  //add a method called meow that returns the string 'Meow!'
  //return the object
}

function addProperty(object, property) {
  //add the property to the object with a value of null
  object[property] = null;
  //return the object
  return object;
  //note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  //method is a string that contains the name of a method on the object
  //invoke this method
     object[method]();

  }
  //nothing needs to be returned


function multiplyMysteryNumberByFive(mysteryNumberObject) {
  //mysteryNumberObject has a property called mysteryNumber
  var mysteryNum = mysteryNumberObject['mysteryNumber'];
  return mysteryNum * 5;
  //multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
  //remove the property from the object
  delete object[property];
  return object;
  //return the object
}

function newUser(name, email, password) {
  //create a new object with properties matching the arguments passed in.
  //return the new object
  var user = {
    name:name,
    email:email,
    password:password
  };
  return user;
}

function hasEmail(user) {
  //return true if the user has a value for the property 'email'
  if ( user.hasOwnProperty('email') && user.email.length > 0) {
    return true;
  }
  return false;


  //otherwise return false
}

function hasProperty(object, property) {
  //return true if the object has the value of the property argument
  //property is a string
  return object.hasOwnProperty(property);
  //otherwise return false
}

function verifyPassword(user, password) {
  //check to see if the provided password matches the password property on the user object
  //return true if they match
  if(user.password === password) {
    return true ;
  }
return false;
  //otherwise return false
}

function updatePassword(user, newPassword) {
  //replace the existing password on the user object with the value of newPassword
  user.password = newPassword;
  return user;
  //return the object
}

function addFriend(user, newFriend) {
  //user has a property called friends that is an array
  //add newFriend to the end of the friends array
  //return the user object
  user.friends.push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  //users is an array of user objects.
  users.map(function(obj){
      obj.isPremium = true;
  });
  return users;
  //each user object has the property 'isPremium'
  //set each user's isPremium property to true
  //return the users array
}

function sumUserPostLikes(user) {
  //user has an array property called 'posts'
  //posts is an array of post objects

  var sum = 0;
  for (var i=0 ;i< user.posts.length;i++) {
    sum += user.posts[i].likes;
  }
  return sum;
  //each post object has an integer property called 'likes'
  //sum together the likes from all the post objects
  //return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
  //add a method to the storeItem object called 'calculateDiscountPrice'
  //this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  //the method then subtracts the discount from the price and returns the discounted price
  storeItem.calculateDiscountPrice = function() {
    var discount = this['price'] * this['discountPercentage'];
    var discountPrice = this.price - discount;
    return discountPrice;
  };
  return storeItem;
  //example:
  //price -> 20
  //discountPercentage -> .2
  //discountPrice = 20 - (20 * .2)
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
