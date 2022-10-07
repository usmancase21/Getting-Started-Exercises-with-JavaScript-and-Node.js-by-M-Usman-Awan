

const make_album = (artist,album,numOfSongs)=>{
   let albumObj = {
      artist : artist,
      album : album,
   }
   if(numOfSongs){
      albumObj.NumberOfSongs = numOfSongs
   }
   return albumObj

}
console.log(make_album('Coldplay','X&Y'));
console.log(make_album('Strings','Duur','8'));
console.log(make_album('Coldplay','Head full of dreams'));

