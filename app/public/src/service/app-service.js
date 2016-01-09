angular.module('appService', [])
.service('nilai_angka', function(){
  this.set_nil = function(data){
    var nilai = 0;
    if(data == 'A'){
      nilai = 4;
    } else if (data == 'B'){
      nilai = 3;
    } else if(data == 'C'){
      nilai = 2;
    } else if(data == 'D'){
      nilai = 1;
    } else if(data == 'E'){
      nilai = 0;
    }
    return nilai;
  };
});
