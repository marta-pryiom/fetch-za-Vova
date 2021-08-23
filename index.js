const refs={
    form:document.querySelector('#form'),
    input:document.querySelector('#input'),
    container:document.querySelector('.container'),
    btnMore:document.querySelector('#more')
}
//пошук коктейлів за назвою//
// const handlerSubmit=(e)=>{
//     e.preventDefault();
//     const value = refs.input.value;
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
//     .then(response=>response.json())
//     .then(el=>createGallary(el.drinks))
//     .catch(err=>console.log(err))
// }
// refs.form.addEventListener('submit',handlerSubmit)



// function createItem({strDrinkThumb,strDrink}){
//     const article = `<article>
//     <img src='${strDrinkThumb}' alt='${strDrink}'/>
//     <p>${strDrink}</p>
//     </article>`
//     refs.container.insertAdjacentHTML('beforeend',article)
// }
// function createGallary(arr){
//     arr.forEach(element =>createItem(element));
//     }

    //пошук користувачів на гіт.//
    let currentPage=1;
    const gitHandlerSubmit=(e) =>{
        e.preventDefault();
    const value=refs.input.value;
    fetch(`https://api.github.com/search/users?q=${value}&client_id=89fa120ce7a91bc78914&client_secret=cf19d80777ff5b551ed9d446b49f426adfb1ca08&page=${currentPage}`)
    .then(response=>response.json()) 
    .then(user=>createGallaryOfUsers(user.items))
    .then(()=>currentPage++)
    .catch((err)=>console.log(err))
    }
    refs.form.addEventListener('submit',gitHandlerSubmit)
    refs.btnMore.addEventListener('click',gitHandlerSubmit)

    function createUser({avatar_url,login}){
        const article = `<article>
        <img src='${avatar_url}' alt='${login}'/>
        <p>${login}</p>
        </article>`
        refs.container.insertAdjacentHTML('beforeend',article)
    }
    

    function createGallaryOfUsers(arr){
    arr.forEach(el=>createUser(el));
    };
    