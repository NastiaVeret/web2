const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'https://localhost:7169/api/Task').then(responseData => {
        console.log(responseData);
    });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://localhost:7169/api/Task', {
            condition: "condition",
            title: "Task",
            description: "description",
            date_of_Start: "2024-05-06T12:00:00Z",
            date_of_End: "2024-05-07T12:00:00Z"
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err);
        });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
const updateBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');

const updateData = (id) => {
    sendHttpRequest('PUT', `https://localhost:7169/api/Task/${id}`, {
            condition: "updated condition",
            title: "dkjd",
            description: "sidj",
            date_of_Start: "2024-02-16T18:31:45",
            date_of_End: "2024-02-17T18:31:45"
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err);
        });
};

updateBtn.addEventListener('click', () => {
    const id = 22;
    updateData(id);
});
const deleteData = (id) => {
    sendHttpRequest('DELETE', `https://localhost:7169/api/Task/${id}`)
        .then(responseData => {
            console.log(responseData);
        })
        .catch(err => {
            console.log(err);
        });
};

deleteBtn.addEventListener('click', () => {
    const id = 18;
    deleteData(id);
});