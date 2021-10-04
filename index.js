const axios = require('axios')

// Receiving webhook events from eventbrite
// example usage available here https://www.eventbrite.com/account-settings/webhooks/9069369
exports.helloWorld = (req, res) => {
    console.log('REQ.BODY:', req.body)
    res.status(200).send('Success');
};

// Sending event creation to eventbrite
// This might actually be able to be put straight inside airtable, and use a CURL request
exports.postToEventbrite = (req, res) => {
    const headers = {
        'Authorization': 'Bearer 7D3AAKAYJTMQ3PPYR75Y',
        'Content-Type': 'application/json'
    };

    const default_event = {
        'name': {
            'html': '<p>cloud func - name</p>'
        },
        'description': {
            'html': '<p>cloud func - description</p>'
        },
        'start': {
            'timezone': 'Australia/Perth',
            'utc': '2022-05-12T02:00:00Z'
        },
        'end': {
            'timezone': 'Australia/Perth',
            'utc': '2022-05-12T02:00:00Z'
        },
        'currency': 'AUD',
        'online_event': false,
        'organizer_id': '',
        'listed': false,
        'shareable': true,
        'invite_only': false,
        'show_remaining': true,
        'capacity': 100,
        'is_reserved_seating': false,
        'is_series': false,
        'show_pick_a_seat': false,
        'show_seatmap_thumbnail': false,
        'show_colors_in_seatmap_thumbnail': false,
        'locale': 'de_AT' // not sure what locale expects for an input
    }

    // spread the inputs in to this
    const body = {
        'event': default_event
      }

    const organization_id = "572364588209"

    try {
        axios({
            method: 'post',
            url: `https://www.eventbriteapi.com/v3/organizations/${organization_id}/events/`,
            headers: headers,
            data: JSON.stringify(body)
        })
    } catch (error) {
        console.log('Something went wrong!', error)
    }


};