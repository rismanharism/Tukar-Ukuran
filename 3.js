let kalimat = 'IT sHOULD bE me'

function tukarBesarKecil(kalimat) {
    let result = ""
    for (let i = 0; i < kalimat.length; i++) {      // ngelooping menjadi perhuruf
        if (kalimat[i].toLowerCase() === kalimat[i]) {  // jika huruf kecil sama dengan huruf yg ada pada kalimat
            result += kalimat[i].toUpperCase();     // maka huruf kecil di rubah jadi huruf besar dan di masukan atau di tambah ke result
        } else {
            result += kalimat[i].toLowerCase(); // jika tidak ada kondisi atau selain kondisi huruf kecil di rubah jadi huruf besar maka huruf2 besar di masukan atau di tambah ke result
        }
    }
    return result;
}

// ====================================================================

// Instructor solution

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let result = '';
  
    for (let i = 0; i < kalimat.length; i++) {
      if (kalimat[i].toLowerCase() !== kalimat[i]) {
          result += kalimat[i].toLowerCase();
      } else {
          result += kalimat[i].toUpperCase();
      }
    }
  
    return result;
  }
  