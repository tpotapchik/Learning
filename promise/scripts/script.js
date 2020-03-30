document.getElementById('promise1').addEventListener('click', () => {
    //promise
    function sum(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) && isNaN(b)) {
                reject(new Error('One of params is not a number'));
                // throw new Error('One of params is not a number') //alternative way
            }
            else {
                setTimeout(() => {
                    resolve(a + b)
                }, 10000)
            }
        })
    }

    let tmp = sum(1, 'dd');
    tmp.then(sum => console.log(sum))
        .catch(ex => console.error(ex));
});

document.getElementById('promise2').addEventListener('click', () => {
    let value = prompt('Please insert number of squatting');
    let qty = Number(value);
    let qtyResult = checkQty(qty);

    function checkQty(qty) {
        return new Promise((resolve, reject) => {
            if (typeof qty !== 'number' || isNaN(qty) || qty <= 0) {
                reject(new Error('do it yourself'));
            }
            else if (qty > 100) {
                reject(new Error('I am tired'));
            }
            else {
                setTimeout(() => {
                    resolve(`you did ${qty}!`)
                }, 1000 * qty)
            }
        })
    }

    qtyResult.then(checkQty => console.log(checkQty))
        .catch(ex => console.error(ex));
});

document.getElementById('promise3').addEventListener('click', () => {
    (async function () {
        let value = prompt('Please insert number of squatting');
        let qty = Number(value);

        function checkQty(qty) {
            return new Promise((resolve, reject) => {
                if (typeof qty !== 'number' || isNaN(qty) || qty <= 0) {
                    reject(new Error('do it yourself'));
                }
                else if (qty > 100) {
                    reject(new Error('I am tired'));
                }
                else {
                    setTimeout(() => {
                        resolve(`you did ${qty}!`)
                    }, 1000)
                }
            });
        }

        try {
            let message = await checkQty(qty);
            console.log(message);
        } catch (ex) {
            console.error(ex);
        }
    })();
});

// (function () {
//     setTimeout(() => console.log(2), 0);
//     new Promise((resolve) => resolve.then(console.log(3)))
//     console.log(4);
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(Math.random()), 1000);
//
// });
//
// promise
//     .then(x => console.log(x))
//     .catch(err => console.log(err));

const btnGetPosts = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.container');

function getPosts(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send();
}
function createPost(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;
    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    return card;
}

function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

function myHttpRequest({method, url} = {}, cb) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener('load', () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb(`Error. Status code: ${xhr.status}`, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
            cb(null, response);
        });

        xhr.addEventListener('error', () => {
            cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();

    } catch (error) {
        cb(error);
    }
}

// myHttpRequest(
//     {
//         method: 'GET',
//         url: 'http://jsonplaceholder.typicodegg.com/posts',
//     },
//     (err, res) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(res);
//
//     }
// );

function http() {
    return {
        get(url, cb){
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                xhr.send();

            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb){
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });

                xhr.addEventListener('error', () => {
                    cb(`Error. Status code: ${xhr.status}`, xhr);
                });

                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => {
                        xhr.setRequestHeader(key, value);
                    });
                }

                xhr.send(JSON.stringify(body));

            } catch (error) {
                cb(error);
            }
        }
    }
}

const myHttp = http();

myHttp.post(
    'http://jsonplaceholder.typicode.com/posts',
    {
        title: 'foo',
        body: 'bar',
        userId: 1,
    },
    {
        'Content-type': 'application/json',
        'x-auth': 'x8xxjx',
    },
    (err, res) => {
        console.log(err, res);
    }
);

function getPost(id) {
    return new Promise((resolve, reject) => {
        myHttp.get(`http://jsonplaceholder.typicode.com/posts/${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
}

function getPostComments(post) {
    const {id} = post;
    return new Promise((resolve, reject) => {
        myHttp.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({post, comments: res});
        });
    });
}

function getUserCreatedPost(data) {
    const {post: {userId}} = data;
    return new Promise((resolve, reject) => {
        myHttp.get(`http://jsonplaceholder.typicyode.com/users/${userId}`, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve({...data, user: res});
        });
    });
}

getPost(5).then(post => getPostComments(post))
    .then(data => getUserCreatedPost(data))
    .then(fullData => console.log(fullData))
    .catch(err => console.log(err));