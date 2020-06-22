function search(object, value) {
  let arr = []
  for (var key in object) {
    if (object[key] == value) {
      arr = [key]
      break
    }
    if (typeof (object[key]) == "object") {
      var temp = search(object[key], value);
      if (temp) {
        arr = [key, temp].flat();
        break
      }
    }
  }
  return arr.length ? arr : null

}
let Obj = {
  a: {
    c: {
      w: 2,
      r: {
        q: 4
      }
    },
    d: 1,
    f: 2,
    e: 3
  },
  b: {
    h: 4,
    i: {
      p: {
        q: 5
      }
    }
  }
}
console.log(search(Obj, 5))