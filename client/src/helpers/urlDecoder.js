export default function url(str) {
  let decodedURL = "";
  for( let i = 0; i < str.length; i++ ) {
    str[i] === " " ? decodedURL += "-" : decodedURL += str[i]
  }
  return decodedURL;
};
