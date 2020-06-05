function getFileName (path){
  let arrTemp = path.split('/')
  return arrTemp[arrTemp.length-1]
}

module.exports = getFileName