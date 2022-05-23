function enviarDados(){
  texto = document.getElementsByTagName('textarea')[0].value;
  document.getElementById("teste").innerHTML = texto; 
}

//<img src onerror="alert(123)" />
//<img src onerror="alert(document.cookie)" />

// localStorage.setItem('teste','testandoValor') 

// <img src onerror="alert(localStorage.getItem('teste') )" />

// acessar como no live server 
// http://localhost:5500/poc-cookies-front/index.html

function testarCookies(){
  const promise = axios.get('http://localhost:5000/', { withCredentials: true } );
  promise.then ( res => ( alert('deu bom' ) ) );
  promise.catch( err => ( alert('deu ruim') ) );
}

//testarCookies();

function postCookies(){

  //criando novo cookie
  //document.cookie = 'novo=cookie; path=/';

  const body = { name: 'testando' } ;

  const header = { headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'    
    },
    withCredentials: true  
  };

  const promise = axios.post('http://localhost:5000/', body,  header );

  promise.then ( res => ( alert('deu bom' ) ) );
  promise.catch( err => ( alert('deu ruim') ) );

}

//postCookies();

//testarCookies();