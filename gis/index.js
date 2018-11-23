/**
 * lat & lng in degree, NOT RADIUS
 * @param {*} lat 
 * @param {*} lng 
 * @param {*} zoom 
 */
const latlngToTileXY = (lat, lng, zoom = 0)=> {
  const x = ((lng + 180) / 360) * (2**zoom);
  const y = (1 - Math.log(Math.tan(Math.PI/ 4 + (lat * Math.PI/180)/2))/Math.PI) * (2**(zoom -1));

  return {x, y}
}
