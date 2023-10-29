const inputTitle = document.querySelector('#inputTitle');  // Доступ к инпут с "Заголовок поста"
const inputText = document.querySelector('#inputText');//Доступ к инпут с "Текст поста"
const btnPost = document.querySelector('#btnPost');//доступ к кнопке Создать пост

function textPost() {
    //доступ к тому что пишум в полях ввода
const resTitle=inputTitle.value;
const resText= inputText.value;

//отправляем POST запрос на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: resTitle,
      body: resText
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(text => renderText(text))
  .catch(error => console.log('Ошибка:',error))
}

function renderText(text) {

    //доступ к диву под инпутами
    const textResulte = document.querySelector('#text-result');

    //создаем новый див, чтобы там расположить данные с запроса
        const newDiv = document.createElement('div')
        const template =
        `
        <h1>${text.title}</h1>
        <p>${text.body}</p>
        `;

        //отображение и расположение в HTML данных с запроса
       newDiv.innerHTML = template;
       textResulte.append(newDiv);
}

//при клике на кнопку вызывается функция с запросом, отображается текст на странице и очищуются поля ввода
document.querySelector('#btnPost').addEventListener("click",()=>{
    //доступ к тому что пишум в полях ввода- без повтора код не работал
    const resTitle=inputTitle.value;
    const resText= inputText.value;

    if(resTitle=='' && resText==''){
        alert('введите тест')
    }
    else{
        textPost()
    }

    //очищение полей воода после клика
    inputTitle.value =''
    inputText.value=''


})

