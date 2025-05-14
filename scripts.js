const users = [                    
{
    username:'admin',
    password:'admin123',
    role:'manage'
},
{
    username:'student',
    password:'student123',
    role:'study'
},
{
    username:'viewer',
    password:'viewer123',
    role:'viewer'
}
]






const loginForm = document.querySelector('#loginForm');


loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.querySelector('#userName').value.trim() ;
    const password = document.querySelector('#password').value.trim();
    const errorContainer = document.querySelector('#errorMessage');






    // if (!username || !password){
    // errorContainer.textContent = "Please fill in all fields" ;

    // } else{
    //     errorContainer.textContent = '';
    // }

    
})