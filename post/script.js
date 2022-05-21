postData("https://jsonplaceholder.typicode.com/posts", 'POST', {name: 'Shafa Heydarova', age:22, job:'Front-end developer'});


function postData(url, type, data){

    fetch(url, {
        method: type,
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify({data}),
      })
      .then((res) =>  {
        if(res.ok){
          console.log('HTTP request successful');
        }else{
          console.log('HTTP request unsuccessful');
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    }

  
  