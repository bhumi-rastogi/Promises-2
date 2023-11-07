const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let ans = '';
    cookies.forEach((cookie) => {
      ans += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = ans;
  }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.
function create_cookies(newCookie) {
  return new Promise((resolve, reject) => {
    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter
    setTimeout(() => {
      // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie);

      const wrong = false;

      if (!wrong) {
        resolve();
      } else {
        reject('There are no cookies like that');
      }
    }, 2000);
  });
}

// Progression 7: creating a new async function
async function t() {
  await create_cookies(newCookie);
  getAllCookies();
}
// calling the new async function
t();
