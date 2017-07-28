var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function getAttribute (obj, key, att){
    return obj[key][att]
}
function getFollowsAttribute (obj, arr, att){
  var output = []
  for (var i in arr){
    output.push(getAttribute(obj, arr[i], att))
  }
  return output
}

function whoFollowsMe (obj, myId, att){
  var output = []
  for (var key in obj){
    for (var i in obj[key].follows){
      if (obj[key].follows[i] === myId){
        output.push(obj[key][att])
      }
    }
  }
  return output
}
// first 'problem'
function listEveryone(obj){
  var output = {}
  for (var key in obj){
    output[getAttribute(data, key, 'name')] = {
      follows: getFollowsAttribute(data, getAttribute(data, key, 'follows'), 'name'),
      followers: whoFollowsMe(data, key, 'name')
    }
  }
  return output
}

function mostFollows (obj, arr) {
  var counter = 0
  var output = []
  for (var key in obj){
    if (obj[key][arr].length === counter){
      output.push(obj[key].name);
      counter = obj[key][arr].length;
    }
    else if (obj[key][arr].length > counter) {
      output = [obj[key].name]
      counter = obj[key][arr].length
    }
  }
  return output;
}

console.log(mostFollows(data, 'follows'));