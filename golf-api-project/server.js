const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let golfers = {
    'tiger woods': {
        'age': 46,
        'birthdate': '30 December 1975',
        'birthLocation': 'Cypress, California',
        'yearsActivePro': 26
    },
    'tommy fleetwood': {
        'age': 31,
        'birthdate': '19 January 1991',
        'birthLocation': 'Southport, Merseyside, England',
        'yearsActivePro': 12
    },
    'rory mcilroy': {
        'age': 33,
        'birthdate': '4 May 1989',
        'birthLocation': 'Holywood, County Down, Northern Ireland',
        'yearsActivePro': 15
    },
    'jordan speith': {
        'age': 28,
        'birthdate': '27 July 1993',
        'birthLocation': 'Dallas Texas',
        'yearsActivePro': 10
    },
    'ricky fowler': {
        'age': 33,
        'birthdate': '13 December 1988',
        'birthLocation': 'Murrieta California',
        'yearsActivePro': 13
    },
    'phil mickelson': {
        'age': 52,
        'birthdate': '16 June 1970',
        'birthLocation': 'San Diego',
        'yearsActivePro': 30
    },
    'philip simpson': {
        'age': 28,
        'birthdate': '29 March 1994',
        'birthLocation': 'unknown',
        'yearsActivePro': 3
    },
    'unknown': {
        'age': 'unknown',
        'birthdate': 'unknown',
        'birthLocation': 'unknown',
        'yearsActivePro': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
    const golferName = request.params.name.toLowerCase();
    if (golfers[golferName]) {
        response.json(golfers[golferName]);
    } else {
        response.json(golfers['unknown']);
    };
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});